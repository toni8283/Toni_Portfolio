# Toni Blair Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.  
It showcases projects, experience, achievements, contact details, and a responsive UI designed with a warm premium visual style.

## Features

- Responsive layout for desktop and mobile
- Smooth scrolling navigation
- Mobile hamburger menu with blurred backdrop
- Project cards with image support from the `public/` folder
- Experience, achievements, and contact sections
- Clean modern styling with custom theme colors

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run lint checks

```bash
npm run lint
```

## Project Structure

```text
app/
├── public/            Static assets like project images
├── src/
│   ├── components/    Reusable UI components
│   ├── hooks/         Custom hooks
│   ├── lib/           Utility helpers
│   ├── App.tsx        Main portfolio page
│   ├── App.css        App-specific styles
│   ├── index.css      Global styles and theme setup
│   └── main.tsx       App entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Adding Project Images

Place your project images inside `public/` and reference them in `src/App.tsx` like this:

```ts
image: "/project-name.jpg"
```

Example:

```ts
{
  id: 7,
  title: "New Project",
  image: "/new-project.jpg"
}
```

## Notes

- Files listed in `.gitignore` such as `node_modules/` and `dist/` should not be pushed.
- `package-lock.json` should usually be committed so installs stay consistent.

## License

This project is for personal portfolio use.
