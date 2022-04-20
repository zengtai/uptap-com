## 1. Automatic Setup with `create-next-app`

https://nextjs.org/docs/getting-started

```bash
npx create-next-app@latest uptap-com
cd uptap-com
npm run dev
```

## 2. Install and Configure Taiwind CSS for Next.js

https://tailwindcss.com/docs/guides/nextjs

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2.1 Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2.2 Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Automatic Class Sorting with Prettier

https://tailwindcss.com/blog/automatic-class-sorting-with-prettier

```bash
npm install -D prettier prettier-plugin-tailwindcss
```
