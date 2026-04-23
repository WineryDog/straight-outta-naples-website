# ⚡ Performance Audit Report: Straight Outta Naples

## 🎯 Executive Summary
Il sito presenta un'estetica moderna e curata, ma soffre di gravi problemi di performance che compromettono l'esperienza utente, specialmente su dispositivi mobile. La criticità principale è legata alla **dimensione smisurata degli asset grafici** (oltre 30MB totali di immagini in homepage), alla mancanza di un corretto **ridimensionamento (Resize)** e all'assenza di **Code Splitting**.

---

## 🚨 Criticità (Alta Priorità)

### 1. Dimensioni e Risoluzione Immagini
La maggior parte delle immagini `.jpg` superano i 2MB, con picchi di **7.7MB** (`menu-6.jpg`). 
*   **Problema del Peso:** Tempi di caricamento eccessivi e consumo dati elevato.
*   **Problema del Resize:** Molte immagini hanno risoluzioni native enormi (es. 5000px+). Anche se compresse, costringono il browser a un uso intensivo di RAM (VRAM) per scalare l'immagine durante il rendering, causando lag nello scrolling.
*   **Soluzione:** Ridimensionare fisicamente i pixel prima del caricamento e convertire in **WebP/AVIF**.

### 2. Assenza di Code Splitting
Tutte le rotte e i componenti vengono caricati in un unico bundle JavaScript iniziale.
- **File:** `src/routes/index.tsx`.
- **Impatto:** Ritardo nel "Time to Interactive" (TTI).

### 3. Font Render-Blocking
I font sono caricati via CSS esterno senza precaricamento dei file binari.
- **Impatto:** Flash of Invisible Text (FOIT).

---

## ⚡ Quick Wins & Strategia Immagini

### Target di Ridimensionamento (Resize)
Non caricare mai immagini più grandi dello stretto necessario:
1.  **Hero/Background:** Max **1920px** di larghezza.
2.  **Slideshow/Gallery:** Max **1200px**.
3.  **Card/Griglie:** Max **800px** (o anche meno per le miniature).

### Ottimizzazioni Immediate
1.  **Squoosh.app:** Usa questo tool per ridimensionare e convertire i JPG attuali in WebP.
2.  **Vite Plugin:** Installa `vite-plugin-image-optimizer`.
3.  **Lazy Loading:** Implementa `React.lazy` per le rotte.

---

## 🛠️ Esempi di Refactoring

### 1. Immagini Responsive con `srcset` (Resize Intelligente)
Invece di servire la stessa immagine a tutti, serviamo dimensioni diverse in base al dispositivo:

```tsx
// Esempio per EventsCta.tsx o MenuSlideshow.tsx
export function OptimizedImage({ src, alt }) {
  return (
    <picture>
      {/* WebP per browser moderni, versioni ridimensionate */}
      <source 
        srcSet={`${src}-400.webp 400w, ${src}-800.webp 800w, ${src}-1200.webp 1200w`} 
        sizes="(max-width: 640px) 100vw, 50vw"
        type="image/webp" 
      />
      <img
        src={`${src}-800.jpg`}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        width="800"
        height="600"
      />
    </picture>
  );
}
```

### 2. Code Splitting delle Rotte
```tsx
// src/routes/index.tsx
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));

// ... nel router
{ 
  path: '/', 
  element: (
    <Suspense fallback={<div className="h-screen bg-crema" />}>
      <HomePage />
    </Suspense>
  ) 
}
```

### 3. Prevenzione Re-render (MenuSlideshow)
Memoizzare i componenti dei controlli per evitare cali di frame durante l'animazione dello slider:

```tsx
const SliderDot = React.memo(({ active, onClick }) => (
  <button 
    onClick={onClick}
    className={`block rounded-full transition-all duration-300 ${active ? 'w-8 h-2 bg-amber-600' : 'w-2 h-2 bg-stone-300'}`}
  />
));
```
