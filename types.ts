@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Cormorant Garamond", serif;
  
  --color-gold: #C5A059;
  --color-dark: #0F0F0F;
  --color-steel: #1A1A1A;
}

@layer base {
  body {
    @apply bg-dark text-[#E0E0E0] font-sans antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}

.clip-diagonal {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.text-stroke-gold {
  -webkit-text-stroke: 1px var(--color-gold);
  color: transparent;
}

.bg-pattern {
  background-image: radial-gradient(circle at 2px 2px, rgba(197, 160, 89, 0.05) 1px, transparent 0);
  background-size: 40px 40px;
}

