'use client';
import { Typewriter } from 'react-simple-typewriter';

export default function SliderHero() {
  return (
    <div className="text-center py-20">
      <Typewriter
        words={['My name is Ben', "I'm web dev"]}
        loop={true}      // pour répéter en boucle
        cursor           // afficher le curseur
        cursorStyle="|"  // style du curseur
        typeSpeed={100}  // vitesse de frappe
        deleteSpeed={50} // vitesse de suppression
        delaySpeed={2000} // pause entre les mots
      />
    </div>
  );
}