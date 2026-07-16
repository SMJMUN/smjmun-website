"use client";

import dynamic from 'next/dynamic';

const SplashCursor = dynamic(() => import('./SplashCursor'), { ssr: false });

export default function SplashCursorWrapper(props: any) {
  return <SplashCursor {...props} />;
}
