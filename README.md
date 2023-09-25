# Web Development Project 1 - *Community Board*

Submitted by: **Kelly Bonilla Guzmán**

This web app: **serves as a community board for those who eat at Stanford University's Dining Halls.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **There is a unique theme for events or resources relevant to a specific community**
- [X] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [X] Buttons or links to related resources are on each card component
- [ ] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [X] The site supports light and dark mode

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

This is the first web application I've developed from scratch in React Javascript. I learned how to:
- Initialize a new React application with Vite
- Create a functional, responsive React component
- Define and pass props to components
- Apply CSS styling to React components
  
The most challenging aspects of this application were:
- Making the code more concise and readable by...
  - Importing all of the dining hall images in a separate `index.js` file
  - Defining an array of dining hall objects and mapping them over to render the `Card` component as opposed to individually hardcoding them
- Ensuring the `Card` component also supported light and dark mode

## License

    Copyright 2023 Kelly Bonilla Guzmán

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
