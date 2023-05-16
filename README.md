#Micro CMS System

## Description

## Atomic Design

Using the Atomic Design methodology, we have:

- **Atoms**: These are the basic components like buttons, inputs, labels. In this project, we have:

  - Button
  - Input field
  - Image
  - Text block
  - Link
  - Label
  - Title

- **Molecules**: These are groups of atoms that form larger components:

  - Search bar (includes an input field and a button)
  - Blog post preview (an image, title, and short description)
  - Form field (includes a label and an input field)
  - Main menu (list of links)

- **Organisms**: These are more complex components that form distinct sections of the page.

  - Header (includes the blog's logo and main menu)
  - Blog post (includes the blog post preview and a button to read more)
  - Post creation/edition form (includes multiple form fields and a submit button)
  - Blog's main content area (includes the image hero component and a list of blog posts)
  - Footer (includes contact information)

- **Templates**: At this stage, we combine organisms to form page-level objects. In this case, we have four templates:

  - Home page
  - About page
  - Blog page (includes a list of blog posts and a search bar)
  - Contact page

- **Pages**: These are instances of templates filled with actual content

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
