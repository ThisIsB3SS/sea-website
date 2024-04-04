'use client';
import Image from 'next/image';
import surf from '../../../public/assets/surf.svg';
import { useEffect, useState } from 'react';

export function SurfGirl() {
  // Utilisez l'état pour contrôler si l'animation doit être appliquée
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const flip = () => {
      setIsFlipping(true); // Démarre l'animation
      setTimeout(() => setIsFlipping(false), 2000); // Arrête l'animation après 1 seconde
    };

    // Démarrer la première animation après un délai aléatoire initial
    const initialDelay = Math.random() * 5000 + 2000;
    setTimeout(flip, initialDelay);

    // Configurer un intervalle pour répéter l'animation
    const interval = setInterval(flip, Math.random() * 5000 + 10000); // Attendre au moins 2 secondes après la fin de l'animation précédente

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);
  return (
    <div className="image-wrapper animate-slideAndWave ">
      <div className="image-inner-wrapper animate-float">
        <Image
          src={surf}
          alt={'surfing icon'}
          className={`surfeuse ${isFlipping ? 'animate-flip' : ''}`}
        />
      </div>
    </div>
  );
}
