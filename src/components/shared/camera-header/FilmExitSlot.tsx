'use client';

import React from 'react';

export function FilmExitSlot() {
  return (
    <div className="film-exit-slot" aria-hidden="true">
      <span className="film-exit-slot__housing" />
      <span className="film-exit-slot__roller film-exit-slot__roller--top" />
      <span className="film-exit-slot__roller film-exit-slot__roller--bottom" />
      <span className="film-exit-slot__inner" />
      <span className="film-exit-slot__leader" />
      <span className="film-exit-slot__glow" />
    </div>
  );
}
