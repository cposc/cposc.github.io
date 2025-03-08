# cposc

This is the CPOSC website for the event being held April 26th, 2025. Use the instructions below to pull down the codebase and start making changes.

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

### DEPLOY

This codebase is set up with Github Pages - meaning, anything on a pre-determined branch is in "production" and is visible as a website.

*Code STILL needs to be pushed to the `master` branch in this repo.*

When ready to deploy, run the following commands.
```sh
npm run build
// copy and paste the CNAME file from the root directory, to inside the /dist folder
git add .
git commit -m "message describing my changes"
git push origin master
npm run push-live
```
The command `npm run build` is set to push your built `dist` files to the `gh-pages` branch. Github will then display the contents of `gh-pages` as a website.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
