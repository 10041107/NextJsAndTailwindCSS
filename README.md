# Next.js + TailwindCSS app 기초 설정 템플릿

TailwindCSS와 Next.js를 사용하여 구성된 `app` 프로젝트 기초 설정 템플릿

## 의존성

- Tailwind CSS: `@tailwindcss/postcss@4.0.0-alpha.13`
- Next.js: `next@canary`
- React: `react@18.2.0`, `react-dom@18.2.0`
- TypeScript: `typescript@5.3.3`

## 개발 의존성

- Tailwind CSS: `tailwindcss@^3.4.3`
- PostCSS: `autoprefixer@^10.4.19`, `postcss@^8.4.38`
- ESLint: `eslint@^8`, `eslint-config-next@14.2.2`

## 패키지 매니저

`yarn@4.1.1`을 사용하여 의존성을 관리합니다.

---

## nextjs tailwind 기본 설정 하는 법

```
https://v2.tailwindcss.com/docs/guides/nextjs
```

Install Tailwind via npm

```
# If you're on Next.js v10 or newer
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create your configuration files

```
npx tailwindcss init -p
```

This will create a minimal tailwind.config.js file at the root of your project:

```
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```

Learn more about configuring Tailwind in the configuration documentation.

It will also create a postcss.config.js file that includes tailwindcss and autoprefixer already configured:

```
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

If you’re planning to use any other PostCSS plugins, you should read our documentation on using PostCSS as your preprocessor for more details about the best way to order them alongside Tailwind.

Configure Tailwind to remove unused styles in production
In your tailwind.config.js file, configure the purge option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds:

```
  // tailwind.config.js
  module.exports = {
   purge: [],
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

Read our separate guide on optimizing for production to learn more about tree-shaking unused styles for best performance.

Include Tailwind in your CSS
When including Tailwind in your CSS in a Next.js project, there are two approaches you can take.

Import Tailwind directly in your JS
If you aren’t planning to write any custom CSS in your project, the fastest way to include Tailwind is to import it directly in pages/\_app.js:

```
  // pages/_app.js
 import '../styles/globals.css'
 import 'tailwindcss/tailwind.css'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
```

export default MyApp
If you aren’t planning to use them, you can safely delete any CSS files Next.js creates for you by default like globals.css and Home.module.css. Make sure you delete any references to them within your components as well.

Include Tailwind in your CSS
Open the ./styles/globals.css file that Next.js generates for you by default and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:

```
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system.

Read our documentation on adding base styles, extracting components, and adding new utilities for best practices on extending Tailwind with your own custom CSS.

Finally, ensure your CSS file is being imported in your pages/\_app.js component:

```
// pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

export default MyApp
If you’ve chosen to use a different file than the default globals.css file, you’ll want to update the import accordingly.
