"use client";

import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    console.error(error); // Remplace l'utilisation de Sentry par un simple log d'erreur.
  }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong.</h1>
      </body>
    </html>
  );
}
