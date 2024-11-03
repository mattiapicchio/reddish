# Reddish

#### Table of Contents

- [Setup](#setup)
- [Development server](#development-server)
- [Production server](#production-server)
- [Folder Structure](#folder-structure)
- [Linting/Formatting](#linting-formatting)
- [Documentation](#documentation)

### Setup

Install the Node version listed in [`.nvmrc`](.nvmrc).

```sh
nvm use
```

### Development server

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

### Production server

Build the application for production:

```sh
npm run build
```

Locally preview production build:

```sh
npm run start
```

### Folder Structure

```
../src
      |..
      |
      |-components : place components here according to atomic web design principles.
      |
      |-connectivity: this is where you define network/api requests.
      |
      |-helpers: hooks, helper methods that are not utils, restrict functions, etc
      |
      |-pages: place all the pages here.
      |
      |-features: all the code for features in one single place. E.g., all the code for authentication can be in its own subfolder. Can be seen as a mini version of the /src folder for each feature.
      |
      |-shared/
              |
              |-data: Place shared data like constants, strings, json, etc
              |
              |-lib: folder for third party libraries (facade pattern)
      |
      |-utils: only utility functions, small and simple pure functions.
      |
      |..
```

### Linting/Formatting

Make sure you have Prettier and ESLint working in your editor and enable format on save.

Run all linting/formatting:

```sh
npx next lint
```

### Documentation

[Next.js](https://nextjs.org/docs)

[React](https://react.dev/)

[React 19](https://react.dev/blog/2024/04/25/react-19)

[Tailwind](https://v2.tailwindcss.com/docs)

[Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)
