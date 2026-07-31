'use client';

import React from 'react';

interface RecordingIndicatorProps {
  label?: string;
}

export function RecordingIndicator({
  label = 'REC',
}: RecordingIndicatorProps) {
  return (
    <div className="camera-rec-indicator" aria-label="Recording indicator">
      <span className="camera-rec-indicator__dot" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
