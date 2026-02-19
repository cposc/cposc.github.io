# cposc

This is the CPOSC website for the event being held April 26th, 2026. Use the instructions below to pull down the codebase and start making changes.

-----

### Project Setup

Pull down the project and run:
```sh
npm install
```

### Compile and Hot-Reload for Development

The following command runs the project locally [here](http://127.0.0.1:5173/).
```sh
npm run dev
```

### Deploy

The site deploys automatically when code is pushed to the `master` branch. A GitHub Actions workflow builds the site and publishes it to GitHub Pages.

To get your changes live:
1. Create a feature branch and make your changes
2. Open a PR to `master`
3. Once merged, the site deploys automatically

To test a production build locally:
```sh
npm run build
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
