# Reddish

#### Table of Contents

- [Project](#project)
- [Setup](#setup)
- [Development server](#development-server)
- [Production server](#production-server)
- [Folder Structure](#folder-structure)
- [Linting/Formatting](#linting-formatting)
- [Documentation](#documentation)

### Project

Reddit like messaging board with infinite nested comments [Frontend only]. \

Tech stack: Next.js 15, React 19 RC, Tailwind, Typescript, mockApi.

### Setup

Install the Node version listed in [`.nvmrc`](.nvmrc).

```sh
nvm use
```

Create an `.env` file in the root of the project and add the following:

```sh
NEXT_PUBLIC_API_URL=https://67869291f80b78923aa7695a.mockapi.io/api/v1/
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

Alongside Next.js file based routing system, the project follows a feature based folder structure. Each feature has its own folder with all the code related to that feature in one place. This defines determined data flows within the architecture for increased maintainability and scalability (which can also be enforced via eslint rules if preferred).

```
../src
      |..
      |
      |-components/ : place components here. Use subfolders for different components types, e.g. icons, form, etc.
                  |
                  |-ui: for UI components from external ui libraries. If needed, use the facade pattern to create a single point of entanglement with the external library.
      |
      |-connectivity: this is where you define network/api requests and helper functions for fetching strategy.
      |
      |-helpers: hooks, helper methods that are not utils, restrict functions, etc
      |
      |-features: all the code for features in one single place. E.g., all the code for authentication can be in its own subfolder. Can be seen as a mini version of the /src folder for each feature.
      |
      |-shared/
              |
              |-data: Place shared data like constants, strings, json, etc
              |
              |-lib: folder for third party libraries (use facade pattern)
      |
      |-assets: css files, vector images, fonts, etc.
      |
      |-utils: only utility functions, small and simple pure functions.
      |
      |..
```

### Linting/Formatting

Make sure you have Prettier and ESLint working in your editor and enable format on save.

Run all linting/formatting:

```sh
npm run lint
```

or

```sh
npx next lint
```

### Documentation

[Next.js](https://nextjs.org/docs)

[React](https://react.dev/)

[React 19](https://react.dev/blog/2024/04/25/react-19)

[Tailwind](https://v2.tailwindcss.com/docs)
