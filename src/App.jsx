// src/App.jsx

import React from 'react';
import DownloadAPKButton from './components/DownloadAPKButton';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        APK Download Page
      </h1>
      <DownloadAPKButton />
    </div>
  );
}

export default App;