'use client';

import { useEffect, useState } from 'react';
import { IntroLogo } from "@/components/navigation/IntroLogo";

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem('smjmun-intro');

    if (!introShown) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('smjmun-intro', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return <IntroLogo show={showIntro} />;
}
