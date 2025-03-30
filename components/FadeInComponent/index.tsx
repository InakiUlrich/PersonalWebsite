'use client';
import React, { useEffect, useState } from 'react';

export default function FadeInComponent(props: FadeInComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`animate-slide-in ${isVisible ? 'visible' : ''}`}>
      {props.component}
    </div>
  );
};