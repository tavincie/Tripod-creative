'use client';

import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`glass-card relative overflow-hidden ${className}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, rgba(255, 182, 136, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
