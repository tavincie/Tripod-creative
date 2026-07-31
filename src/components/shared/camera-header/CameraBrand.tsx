'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { RecordingIndicator } from './RecordingIndicator';

export function CameraBrand() {
  return (
    <Link href="/" className="camera-brand focus-ring" aria-label="Tripod Creatives home">
      <div className="camera-brand__shell">
        <svg
          className="camera-brand__svg"
          viewBox="0 0 310 178"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cameraBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1b1b1b" />
              <stop offset="34%" stopColor="#0a0a0a" />
              <stop offset="72%" stopColor="#101010" />
              <stop offset="100%" stopColor="#181818" />
            </linearGradient>
            <linearGradient id="cameraTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d3d3d" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <radialGradient id="cameraOrangeGlow" cx="77%" cy="20%" r="42%">
              <stop offset="0%" stopColor="#ff6624" stopOpacity="0.28" />
              <stop offset="1" stopColor="#ff6624" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cameraGripGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#202020" />
              <stop offset="100%" stopColor="#080808" />
            </linearGradient>
            <radialGradient id="lensGlassGradient" cx="42%" cy="36%" r="68%">
              <stop offset="0%" stopColor="#171717" />
              <stop offset="42%" stopColor="#050505" />
              <stop offset="80%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#191919" />
            </radialGradient>
          </defs>

          <rect x="18" y="20" width="168" height="126" rx="22" fill="url(#cameraBodyGradient)" />
          <rect x="18" y="20" width="168" height="126" rx="22" fill="url(#cameraOrangeGlow)" />
          <rect x="8" y="38" width="76" height="104" rx="19" fill="url(#cameraGripGradient)" />
          <rect x="26" y="54" width="34" height="58" rx="10" fill="rgba(255,255,255,0.025)" />
          <path d="M112 18 L134 3 H177 L193 18 Z" fill="url(#cameraTopGradient)" />
          <rect x="154" y="16" width="34" height="15" rx="5" fill="url(#cameraTopGradient)" />
          <rect x="30" y="22" width="24" height="24" rx="12" fill="#161616" stroke="rgba(245,241,233,0.16)" />
          <rect x="136" y="19" width="22" height="22" rx="11" fill="#1A1A1A" stroke="rgba(245,241,233,0.16)" />
          <rect x="72" y="64" width="28" height="17" rx="4" fill="#0d0d0d" stroke="rgba(245,241,233,0.08)" />
          <circle cx="102" cy="65" r="4" fill="#ff5a14" />
          <rect x="178" y="16" width="10" height="126" rx="5" fill="rgba(255,255,255,0.02)" />
          <circle cx="204" cy="85" r="65" fill="#090909" stroke="rgba(245,241,233,0.18)" strokeWidth="2" />
          <circle cx="204" cy="85" r="58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
          <circle cx="204" cy="85" r="52" fill="url(#lensGlassGradient)" />
          <circle cx="204" cy="85" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.8" />
          <circle cx="204" cy="85" r="40" fill="none" stroke="rgba(255,92,31,0.28)" strokeWidth="1.6" />
          <circle cx="204" cy="85" r="33" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.2" />
          <ellipse cx="188" cy="62" rx="16" ry="8" fill="rgba(255,255,255,0.1)" transform="rotate(-22 188 62)" />
          <path d="M175 52 C188 39, 220 36, 238 49" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3.2" strokeLinecap="round" />
        </svg>

        <div className="camera-brand__labels">
          <RecordingIndicator />
        </div>

        <div className="camera-brand__lens">
          <div className="camera-brand__lens-logo">
            <Image
              src="/tripod-lens-logo.svg"
              alt="Tripod Creatives logo"
              fill
              priority
              sizes="120px"
            />
          </div>
          <span className="camera-brand__lens-spec camera-brand__lens-spec--top">24-70MM T2.8</span>
          <span className="camera-brand__lens-spec camera-brand__lens-spec--bottom">82MM</span>
        </div>
      </div>
    </Link>
  );
}
