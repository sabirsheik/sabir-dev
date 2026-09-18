# Sabir Ali Portfolio

Personal portfolio for Sabir Ali, a full-stack developer. The site presents experience, technical skills, selected projects, and a contact form in a responsive single-page layout.

## Tech Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion for animations
- Lenis for smooth scrolling
- Lucide React for icons
- EmailJS for contact form delivery

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
├── components/
│   ├── AboutSection/
│   ├── Common/
│   ├── ContactSection/
│   ├── ExperienceSection/
│   ├── Footer/
│   ├── HeroSection/
│   ├── ProjectsSection/
│   └── SkillsSection/
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

Content for experience, projects, and skills is maintained in [`data.ts`](data.ts). Shared TypeScript models are defined in [`types.ts`](types.ts).

## Contact Form

The contact form sends messages through EmailJS. The EmailJS service, template, and public key are configured in [`ContactSection.tsx`](src/components/ContactSection/ContactSection.tsx). Update those values when connecting the form to a different EmailJS account or template.

## Production Build

Run the following before deployment:

```bash
npm run lint
npm run build
```

The generated static files are written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider. Configure the host to serve `index.html` for the root path.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
