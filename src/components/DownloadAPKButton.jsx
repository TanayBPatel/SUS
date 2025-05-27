// src/components/DownloadAPKButton.jsx

import React from 'react';

const DownloadAPKButton = () => {
  const handleDownload = () => {
    const apkFilename = 'Android.apk'; // Must be in /public
    const apkUrl = `/${apkFilename}`;

    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = apkFilename; // Forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button
        onClick={handleDownload}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Download APK
      </button>
      <p style={{ marginTop: '10px' }}>Click to download your APK file.</p>
    </div>
  );
};

export default DownloadAPKButton;