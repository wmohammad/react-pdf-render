import React from 'react';

const GoogleDocViewer = ({ docUrl }) => (
  <iframe
    src={docUrl}
    style={{ width: '100%', height: '500px', border: 'none' }}
  />
);

export default GoogleDocViewer;