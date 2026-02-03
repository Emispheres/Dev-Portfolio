import {Head, Html, Main, NextScript} from 'next/document';

// next/document <Head /> vs next/head <Head />
//
// next/document Head is rendered once on the server. This is different from next/head which will
// rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="fr">
      <Head>
        <link as="image" href="/images/blue.webp" rel="preload" />
        <meta charSet="utf-8" />
        {/* google translate breaks react:
          - https://github.com/facebook/react/issues/11538
          - https://bugs.chromium.org/p/chromium/issues/detail?id=872770 */}
        <meta content="notranslate" name="google" />
      </Head>
      {/* 
        ============================================================
        ÉCRAN DE CHARGEMENT - LOADING SCREEN
        ============================================================
        Couleur de fond: #1f2937 (équivalent à bg-gray-800 de Tailwind)
        Logo: cercle animé jaune avec animation de rotation
        Texte: "Chargement ..." en blanc
        
        L'écran est affiché immédiatement dans le HTML pour éviter
        l'écran blanc au rafraîchissement de la page.
        
        La disparition est gérée par _app.tsx via JavaScript.
        ============================================================
      */}
      <body className="scroll-smooth bg-gray-800">
        {/* LOADING SCREEN - Écran de chargement */}
        <div 
          id="loading-screen"
          style={{
            /* Position fixe pour couvrir toute la page */
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            /* Couleur de fond identique à la section Portfolio (bg-gray-800) */
            backgroundColor: '#1f2937',
            /* z-index élevé pour être au-dessus de tout le contenu */
            zIndex: 9999,
            /* Centrage du contenu */
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            /* Transition pour l'animation de disparition (gérée par _app.tsx) */
            transition: 'opacity 0.5s ease-out',
            opacity: 1,
          }}
        >
          {/* 
            LOGO ANIMÉ - Cercle avec animation de rotation
            Modifiez les propriétés ci-dessous pour personnaliser:
            - width/height: taille du cercle
            - borderTopColor: couleur du loader (jaune #facc15)
            - animation: vitesse de rotation (1s = 1 seconde)
          */}
          <div
            style={{
              width: '60px',
              height: '60px',
              /* Cercle avec bordure partielle pour effet de spinner */
              border: '4px solid rgba(255, 255, 255, 0.2)',
              borderTopColor: '#facc15', /* Couleur jaune (yellow-400) */
              borderRadius: '50%',
              /* Animation de rotation infinie */
              animation: 'spin 1s linear infinite',
            }}
          />
          {/* 
            TEXTE "Chargement ..."
            Modifiez le texte ci-dessous pour le personnaliser
          */}
          <p className='font-semibold ml-6' 
            style={{
              marginTop: '20px',
              color: '#ffffff',
              fontSize: '1.6rem',
              fontFamily: 'Noto SD 500, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.14em',
            }}
          >
            Chargement ...
          </p>
        </div>

        {/* 
          CSS pour l'animation de rotation du loader
          @keyframes spin: fait tourner le cercle de 0 à 360 degrés
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `,
          }}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
