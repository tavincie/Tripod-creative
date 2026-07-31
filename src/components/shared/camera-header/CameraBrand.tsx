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
          viewBox="0 0 470 260"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cameraBodyGradient" x1="8%" y1="6%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#343434" />
              <stop offset="30%" stopColor="#151515" />
              <stop offset="74%" stopColor="#090909" />
              <stop offset="100%" stopColor="#171717" />
            </linearGradient>
            <linearGradient id="cameraTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5b5b5b" />
              <stop offset="100%" stopColor="#191919" />
            </linearGradient>
            <linearGradient id="cameraSideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#343434" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <radialGradient id="cameraOrangeGlow" cx="88%" cy="42%" r="52%">
              <stop offset="0%" stopColor="#ff6b2a" stopOpacity="0.26" />
              <stop offset="1" stopColor="#ff6624" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cameraGripGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#383838" />
              <stop offset="100%" stopColor="#0b0b0b" />
            </linearGradient>
            <radialGradient id="cameraLensShadow" cx="50%" cy="50%" r="64%">
              <stop offset="0%" stopColor="#161616" />
              <stop offset="75%" stopColor="#070707" />
              <stop offset="100%" stopColor="#020202" />
            </radialGradient>
            <radialGradient id="cameraHighlight" cx="26%" cy="18%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <path
            d="M38 78c0-14 11-25 25-25h158l28-29h84l23 29h21c15 0 27 12 27 27v112c0 15-12 27-27 27H63c-14 0-25-11-25-25z"
            fill="url(#cameraBodyGradient)"
          />
          <path
            d="M38 78c0-14 11-25 25-25h158l28-29h84l23 29h21c15 0 27 12 27 27v112c0 15-12 27-27 27H63c-14 0-25-11-25-25z"
            fill="url(#cameraOrangeGlow)"
          />
          <path
            d="M38 78c0-14 11-25 25-25h158l28-29h84l23 29h21c15 0 27 12 27 27"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M26 100c0-20 16-36 36-36h54v146H62c-20 0-36-16-36-36z"
            fill="url(#cameraGripGradient)"
          />
          <rect x="54" y="95" width="30" height="84" rx="12" fill="rgba(255,255,255,0.07)" />
          <path d="M220 53l24-28h92l19 28z" fill="url(#cameraTopGradient)" />
          <path d="M220 53l24-28h92l19 28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
          <rect x="285" y="18" width="44" height="18" rx="9" fill="#161616" />
          <circle cx="303" cy="28" r="10" fill="#2d2d2d" stroke="rgba(245,241,233,0.14)" />
          <circle cx="338" cy="34" r="14" fill="#1c1c1c" stroke="rgba(245,241,233,0.12)" />
          <circle cx="338" cy="34" r="9" fill="#111" />
          <rect x="102" y="90" width="40" height="22" rx="6" fill="#101010" stroke="rgba(245,241,233,0.08)" />
          <circle cx="150" cy="101" r="5" fill="#ff5a14" />
          <rect x="359" y="63" width="14" height="152" rx="7" fill="url(#cameraSideGradient)" />
          <rect x="371" y="99" width="28" height="52" rx="8" fill="#0a0a0a" />
          <rect x="381" y="118" width="31" height="14" rx="7" fill="#111" />
          <rect x="381" y="119" width="41" height="4" rx="2" fill="rgba(245,241,233,0.1)" />
          <circle cx="265" cy="136" r="88" fill="url(#cameraLensShadow)" stroke="rgba(245,241,233,0.2)" strokeWidth="3" />
          <circle cx="265" cy="136" r="75" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
          <circle cx="265" cy="136" r="67" fill="none" stroke="rgba(255,122,57,0.22)" strokeWidth="2.4" />
          <circle cx="265" cy="136" r="59" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.2" />
          <ellipse cx="228" cy="94" rx="28" ry="12" fill="rgba(255,255,255,0.1)" transform="rotate(-24 228 94)" />
          <path d="M202 81c18-17 79-21 108 2" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" strokeLinecap="round" />
          <path
            d="M38 78c0-14 11-25 25-25h158l28-29h84l23 29h21c15 0 27 12 27 27v112c0 15-12 27-27 27H63c-14 0-25-11-25-25z"
            fill="url(#cameraHighlight)"
          />
        </svg>

        <div className="camera-brand__labels">
          <RecordingIndicator />
        </div>

        <div className="camera-brand__lens">
          <div className="camera-brand__lens-barrel">
            <div className="camera-brand__lens-outer-ring" />
            <div className="camera-brand__lens-inner-ring" />
          </div>
          <div className="camera-brand__lens-front-cover">
            <div className="camera-brand__lens-cover-highlight" />
            <div className="camera-brand__lens-logo">
              <Image
                src="/tripod-lens-logo.svg"
                alt="Tripod Creatives logo"
                fill
                priority
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
