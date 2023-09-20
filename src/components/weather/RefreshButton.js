// src/components/RefreshButton.js
import React from 'react';

const RefreshButton = ({ onClick }) => {
  return (
    <button id="refresh-button" onClick={onClick}>
      Refresh
    </button>
  );
};

export default RefreshButton;
