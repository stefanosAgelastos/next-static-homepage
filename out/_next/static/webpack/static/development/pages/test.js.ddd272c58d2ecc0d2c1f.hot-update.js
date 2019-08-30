webpackHotUpdate("static/development/pages/test.js",{

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<MainGrid>\n\n<HeaderTitle>\n  \n# My Portfolio Website\n<TitleAction href=\"https://github.com/stefanosAgelastos/stefanosAgelastos.github.io\" label=\"Go to github repo\" />\n  \n<TitleAction href=\"https://www.stefworks.ml\" disabled label=\"This is the demo\" />\n</HeaderTitle>\n\n<InfoGrid>\n\n<InfoPaper>\n\n## About the project\nI coded this website in order to have a personal portfolio. My goal was to have a website that loads fast and feels fluid. I also had a specific requirement, to have a link for each of my projects that I could share e.g. in my CV. At the moment this is possible with server-side-rendering\n\nI chose Next.js as a framework, because I wanted to combine traits typical to Single Page Applications, like automatic code-splitting, dynamic imports, and page prefetching, and also to be able to export to static files so that I can host it cheap and serve it fast at the same time.\n\n\n creates static sites \nThis is a product development project, purposed to assist Tour guides with Augmented Reality.\nThe system was developed in two phases. It started in October 2019 as an internship project for [KøbenhavnerTure](https://www.koebenhavnerture.dk/), and in a second phase (November-December 2019) it was further developed as a final exam project for [KEA's Datamatiker AP](https://kea.dk/en/programmes/academy-profession-degree/computer-science). \n\n</InfoPaper>\n\n<InfoPaper>\n<MyChip label=\"Typescript\"/>\n<MyChip label=\"Next.js\"/>\n<MyChip label=\"React 16.9\"/>\n<MyChip label=\"Material-UI\"/>\n<MyChip label=\"CSS-in-JS\"/>\n<MyChip label=\"Markdown-to-jsx\"/>\n<MyChip label=\"SSR\"/>\n<MyChip label=\"Github Pages\"/>\n<MyChip label=\"Design Thinking\"/>\n</InfoPaper>\n\n</InfoGrid>\n\n<PanelGrid>\n<Panel id=\"1\" heading=\"Why?\" secondaryHeading=\"About the choice of technologies\" >\n\n### The Stack:\n- Next.js\n- React 16.9\n- Webpack\n- Css-in-JS\n- Material-UI\n### The Stack:\n\n\n</Panel>\n\n<Panel id=\"2\" heading=\"Phase 2\" secondaryHeading=\"System Development\" >\n### Goal: MVP Development\nTogether with two colleagues we developed an augmented reality android tourist guide and a supporting administration system. \nThe user harvests GPS and AR technologies through their phone and consumes content relevant to their location. \nThe system administrator can add new locations and feed the application with new content.  \n  \n![overview](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/overview.png) \n  \n### About the process:\nWe combined Scrum and Design thinking. Both methodologies are iterative and incremental by nature, so they combine well:  \n  \n![overview](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/process.png) \n  \nExam evaluation: excellent. Team: Alexander Kellberg, Kristian Skovlund Rasmussen, Stefanos Agelastos.\n \n</Panel>\n\n<Panel id=\"3\" heading=\"How does it work?\" secondaryHeading=\"An overview of the technologies\" >\n\n## Built With\n\n- Android APK by Unity3D and Vuforia\n- React isomorphic front end application\n- Node.js express API and server side rendering\n- MongoDB for semi-structured data model persistence\n- Heroku PaaS staging environment \n  \n\nThe admin webapp allows you to add Locations to a database, and provide them as a REST resource to the android APK. The admin webapp is based on [MERN](http://mern.io), a scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS. Read the [Documentation](http://mern.io/documentation.html).\nThe android app was made on the [Unity](https://unity.com/) real-time 3d development platform and [Vuforia](https://www.vuforia.com/) library, which provided web, gps and augmented reality capabilitities.\nCurrently the solution has the following architecture:  \n  \n![solution](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/solution.png) \n</Panel>\n\n<Panel id=\"4\" heading=\"For Devs\" secondaryHeading=\"Clone and install, the usual\" >\n\n## Getting Started\n\nThese instructions will get you a copy of the administration and running on your local machine for development and testing purposes.\n\n### Prerequisites\n\n**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also **npm6** is required to install dependencies properly.\n\n## Available Commands\n\n1. `npm run start` - starts the development server with hot reloading enabled\n\n2. `npm run bs` - bundles the code and starts the production server\n\n3. `npm run test` - start the test runner\n\n4. `npm run watch:test` - start the test runner with watch mode\n\n5. `npm run cover` - generates test coverage report\n\n6. `npm run lint` - runs linter to check for lint errors\n\n</Panel>\n<Panel id=\"5\" heading=\"For Devs\" secondaryHeading=\"Model, Webpack, Server, Client\" >\n\n## File Structure\n\n### Model\nThis is the data structure of the location objects.\n```\nlocation: {\n        author,\n        title,\n        lon,\n        lat,\n        images: [\n          { id, image_title, image_url }\n        ]\n      },\n```\n\n### Webpack Configs\n\nMERN uses Webpack for bundling modules. There are four types of Webpack configs provided `webpack.config.dev.js` (for development), `webpack.config.prod.js` (for production), `webpack.config.server.js` (for bundling server in production) and `webpack.config.babel.js` (for [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) for server rendering of assets included through webpack).\n\nThe Webpack configuration is minimal and beginner-friendly. You can customise and add more features to it for production build.\n\n### Server\n\nMERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.\n\nIf NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.\n\n#### Server Side Rendering\n\nWe use React Router's match function for handling all page requests so that browser history works.\n\nAll the routes are defined in `client/routes.js`. React Router renders components according to route requested.\n\n### Client\n\nClient directory contains all the shared components, routes, modules.\n\n#### components\nThis folder contains all the common components which are used throughout the project.\n\n#### index.js\nIndex.js simply does client side rendering using the data provided from `window.__INITIAL_STATE__`.\n\n#### modules\nModules are the way of organising different domain-specific modules in the project. A typical module contains the following\n```\n.\n└── Location\n    ├── __tests__                    // all the tests for this module goes here\n    |   ├── components               // Sub components of this module\n    |   |   ├── Location.spec.js\n    |   |   ├── LocationList.spec.js\n    |   |   ├── LocationItem.spec.js\n    |   |   └── LocationImage.spec.js\n    |   ├── pages\n    |   |   ├── LocationPage.spec.js\n    |   |   └── LocationViewPage.spec.js\n    |   ├── LocationReducer.spec.js\n    |   └── LocationActions.spec.js\n    ├── components                   // Sub components of this module\n    |   ├── Location.js\n    |   ├── LocationList.js\n    |   ├── LocationItem.js\n    |   └── LocationImage.js\n    ├── pages                        // React Router Pages from this module\n    |   ├── LocationPage\n    |   |   ├── LocationPage.js\n    |   |   └── LocationPage.css\n    |   └── LocationViewPage\n    |       ├── LocationViewPage.js\n    |       └── LocationViewPage.css\n    ├── LocationReducer.js\n    └── LocationActions.js\n```\n\n \n</Panel>\n<Panel id=\"6\" heading=\"For Devs\" secondaryHeading=\"You are ready to go\" >\n\n## Misc\n\n### Importing Assets\nAssets can be kept where you want and can be imported into your js files or css files. Those fill be served by webpack in development mode and copied to the dist folder during production.\n\n### ES6 support\nWe use babel to transpile code in both server and client with `stage-0` plugin. So, you can use both ES6 and experimental ES7 features.\n\n### Docker\nThere are docker configurations for both development and production.\n\nTo run docker for development:\n```sh\ndocker-compose build # re-run after changing dependencies\ndocker-compose up\n```\nor, if you want to override the web port:\n```sh\nWEB_PORT=<your_custom_port> docker-compose up\n```\n\nTo run docker for production:\n```sh\ndocker-compose -f docker-compose-production.yml up --build\n```\n\nTo reset the database:\n```sh\ndocker-compose down --volumes\n```\n\n## License\nMERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).\n</Panel>\n\n</PanelGrid>\n\n\n</MainGrid>"

/***/ })

})
//# sourceMappingURL=test.js.ddd272c58d2ecc0d2c1f.hot-update.js.map