import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';

/**
 * ============================================================
 * COMPOSANT PRINCIPAL DE L'APPLICATION
 * ============================================================
 * 
 * Ce composant gère la disparition de l'écran de chargement
 * une fois que le site est complètement chargé.
 * 
 * L'écran de chargement est défini dans _document.tsx et
 * disparaît avec une animation smooth (opacity transition).
 * ============================================================
 */
const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {

  useEffect(() => {
    /**
     * FONCTION DE MASQUAGE DU LOADER
     * 
     * Cette fonction est appelée quand la page est complètement chargée.
     * Elle fait disparaître l'écran de chargement avec une animation.
     * 
     * Modifiez le délai (setTimeout) pour ajuster le temps minimum
     * d'affichage du loader si vous le souhaitez.
     */
    const hideLoader = () => {
      const loadingScreen = document.getElementById('loading-screen');
      
      if (loadingScreen) {
        /* 
         * Délai minimum d'affichage du loader (en millisecondes)
         * Modifiez cette valeur pour un affichage plus long/court
         * 0 = disparition immédiate après le chargement
         * 500 = attente de 0.5 secondes après le chargement
         */
        const minimumLoadingTime = 300; // 300ms minimum

        setTimeout(() => {
          /* Animation de disparition (fade out) */
          loadingScreen.style.opacity = '0';
          
          /* 
           * Suppression complète du loader après la transition
           * Le délai (500ms) doit correspondre à la durée de transition
           * définie dans _document.tsx (transition: opacity 0.5s)
           */
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 500); // 500ms = durée de la transition CSS
        }, minimumLoadingTime);
      }
    };

    /* 
     * Vérification que le document est complètement chargé
     * - Si déjà chargé: on masque immédiatement le loader
     * - Sinon: on attend l'événement 'load' de la fenêtre
     */
    if (document.readyState === 'complete') {
      hideLoader();
      return;
    }
    
    window.addEventListener('load', hideLoader);
    /* Nettoyage: suppression de l'écouteur d'événement */
    return () => window.removeEventListener('load', hideLoader);
  }, []);

  return <Component {...pageProps} />;
});

export default MyApp;
