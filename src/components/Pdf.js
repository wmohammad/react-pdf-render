import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../files/terraform.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="pdf-container" style={{ width: '50%' ,height: '800px', overflow: 'scroll', border: '2px solid blue' }}>
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={{ workerSrc: '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js' }}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
        </div>
    );
};

export default PdfViewer;
