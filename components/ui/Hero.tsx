'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-transparent">
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js" 
        strategy="beforeInteractive"
      />
      <spline-viewer 
        url="https://prod.spline.design/apg6W49ngWfoJnYP/scene.splinecode"
        className="w-full h-full bg-transparent"
      />
      <div className="absolute inset-0 pointer-events-none bg-transparent" />
    </div>
  );
} 