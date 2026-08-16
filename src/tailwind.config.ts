import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
} satisfies Config;
