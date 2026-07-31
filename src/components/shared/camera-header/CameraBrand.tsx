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
            <linearGradient id="tripodCameraBody" x1="7%" y1="10%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="34%" stopColor="#181818" />
              <stop offset="76%" stopColor="#090909" />
              <stop offset="100%" stopColor="#141414" />
            </linearGradient>
            <linearGradient id="tripodCameraTop" x1="4%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4d4d4d" />
              <stop offset="100%" stopColor="#161616" />
            </linearGradient>
            <linearGradient id="tripodCameraGrip" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#414141" />
              <stop offset="100%" stopColor="#0b0b0b" />
            </linearGradient>
            <linearGradient id="tripodCameraEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#080808" />
            </linearGradient>
            <radialGradient id="tripodCameraGlow" cx="88%" cy="46%" r="58%">
              <stop offset="0%" stopColor="#ff6a2b" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#ff6a2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="tripodCameraHighlight" cx="24%" cy="18%" r="62%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <path
            d="M40 104c0-21 17-38 38-38h114l38-40h104l33 33h25c21 0 38 17 38 38v104c0 19-16 35-35 35H76c-20 0-36-16-36-36z"
            fill="url(#tripodCameraBody)"
          />
          <path
            d="M40 104c0-21 17-38 38-38h114l38-40h104l33 33h25c21 0 38 17 38 38v104c0 19-16 35-35 35H76c-20 0-36-16-36-36z"
            fill="url(#tripodCameraGlow)"
          />
          <path
            d="M40 104c0-21 17-38 38-38h114l38-40h104l33 33h25c21 0 38 17 38 38"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M27 121c0-29 20-52 49-57l35-6v178H74c-26 0-47-21-47-47z"
            fill="url(#tripodCameraGrip)"
          />
          <path
            d="M47 116c0-16 13-29 29-29h29v128H76c-16 0-29-13-29-29z"
            fill="rgba(255,255,255,0.06)"
          />
          <path d="M213 59l31-35h111l26 32v15H213z" fill="url(#tripodCameraTop)" />
          <path
            d="M213 59l31-35h111l26 32"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="270" y="20" width="51" height="15" rx="7.5" fill="#131313" />
          <circle cx="291" cy="27.5" r="11" fill="#2c2c2c" stroke="rgba(245,241,233,0.15)" />
          <circle cx="344" cy="33" r="15" fill="#1a1a1a" stroke="rgba(245,241,233,0.12)" />
          <circle cx="344" cy="33" r="8.5" fill="#0f0f0f" />
          <path
            d="M381 72h11c8 0 14 6 14 14v108c0 8-6 14-14 14h-11z"
            fill="url(#tripodCameraEdge)"
          />
          <path
            d="M396 110h16c8 0 14 6 14 14v35c0 8-6 14-14 14h-16z"
            fill="#0a0a0a"
          />
          <path
            d="M396 110h16c8 0 14 6 14 14"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M42 112c8-20 28-32 51-32h65"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M207 84c23-14 66-18 96-8"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <ellipse
            cx="248"
            cy="101"
            rx="34"
            ry="13"
            fill="rgba(255,255,255,0.11)"
            transform="rotate(-22 248 101)"
          />
          <path
            d="M40 104c0-21 17-38 38-38h114l38-40h104l33 33h25c21 0 38 17 38 38v104c0 19-16 35-35 35H76c-20 0-36-16-36-36z"
            fill="url(#tripodCameraHighlight)"
          />
        </svg>

        <div className="camera-brand__labels">
          <RecordingIndicator />
        </div>

        <div className="camera-brand__lens-assembly">
          <div className="camera-brand__lens-rim" aria-hidden="true" />
          <div className="camera-brand__lens-rim camera-brand__lens-rim--inner" aria-hidden="true" />

          <div className="camera-brand__lens-cap">
            <div className="camera-brand__lens-reflection" aria-hidden="true" />
            <div className="camera-brand__lens-shadow" aria-hidden="true" />

            <div className="camera-brand__lens-logo">
              <Image
                src="/branding/tripod-creative-logo.png"
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
