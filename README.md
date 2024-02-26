# react-coding-challenge

App is availabe for preview at https://react-coding-challenge-seven.vercel.app/

This project was made with as little dependencies as possible.
No prettier, linting, css frameworks & scss/sass.

Please note:
Since we don't have photoshop source files, font sizes, colors and spacing were approximated for mobile, tablet and desktop. Tool used was https://www.photopea.com/

Mobile first approach was used for css and media queries used are listed below:
Mobile / Tablet 0 - 768px
Desktop 769px and beyond

## How did you decide on the technical and architectural choices used as part of your solution?

- Mobile first for css, I find it a lot easier to maintain.
- The folder structure is pretty basic, all components inside their own folder so they're grouped.
- I also added a layout just to factor our the header and footer from the rest, that'll make them reusable for other pages for scaling.
- CSS was as plain as it can/should be

## Are there any improvements you could make to your submission?

- The images are huge, I had no control of it.
- Add code quality helpers - prettier & eslint
- Some animation when cards are hovered
- The appstore buttons doesn't look too pretty in mobile
- I wasn't sure if scss is allowed so it's all css, but i think it'll be an improvment

## What would you do differently if you were allocated more time?

- I couldve made the mobile menu/hambuer work
- The cards for shows could be more responsive, instead of just bumping the cards down to the next line
- TDD
- Refactor constants
- Refactor css, use BEM

## Scripts

To run the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

No tests were made

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
