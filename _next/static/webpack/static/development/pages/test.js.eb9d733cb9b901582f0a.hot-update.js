webpackHotUpdate("static/development/pages/test.js",{

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<MainGrid>\n\n<HeaderTitle>\n  \n# AR Tourist Guide Prototype\n<TitleAction href=\"https://github.com/stefanosAgelastos/mern-admin-app-for-android-AR-app\" label=\"Go to github repo\" />\n  \n<TitleAction href=\"https://ar.stefworks.ml\" disabled label=\"Go to demo\" />\n</HeaderTitle>\n\n<InfoGrid>\n\n<InfoPaper>\n\n## About the project\nThis is a product development project, purposed to assist Tour guides with Augmented Reality.\nThe system was developed in two phases. It started in October 2019 as an internship project for [KøbenhavnerTure](https://www.koebenhavnerture.dk/), and in a second phase (November-December 2019) it was further developed as a final exam project for [KEA's Datamatiker AP](https://kea.dk/en/programmes/academy-profession-degree/computer-science). \n\n</InfoPaper>\n\n<InfoPaper>\n<MyChip label=\"Product Development\"/>\n<MyChip label=\"Design Thinking\"/>\n<MyChip label=\"Augmented Reality\"/>\n<MyChip label=\"Unity 3D\"/>\n<MyChip label=\"Vuforia\"/>\n<MyChip label=\"Node.js\"/>\n<MyChip label=\"Mongo DB\"/>\n<MyChip label=\"React\"/>\n<MyChip label=\"SSR\"/>\n</InfoPaper>\n\n</InfoGrid>\n\n<PanelGrid>\n<Panel id=\"1\" heading=\"Phase 1\" secondaryHeading=\"Prototype development\" >\n\n### Initial concept:\nIn a multidisciplinary team of 2 multimedia designers and 2 developers. We developed an AR solution for this local guided-tours company.\nOur goal was to \"Bring Stories Alive\" as well as to add a competitive advantage to the company's SoMe presence. \n \n### About the Process\nWe went through a 4-day course on Unity 3D and 1 day on Ideation. We worked with Scrum. An experienced tutor guided us while practising design methods from the [Amsterdam MediaLab's Toolkit](https://toolkits.dss.cloud/design/).   \nWe researched about the target group of the company, and through ideation tecniques we developed a series of prototypes. \nAfter iterative user testing we ended up with a working AR mobile application that we pitched to the client during an open event. \n  \n[![Watch the video](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/youtube.png)](https://youtu.be/Lbq94Ef9qJY?t=5).\n  \nRecomendation letter available. Team: Charlène Marteyn, Modestas Šekštela, Stefanos Agelastos.\n</Panel>\n\n<Panel id=\"2\" heading=\"How?\" secondaryHeading=\"What technologies does it use?\" >\n\n### Built With  \n- [Node.js](https://nodejs.org/en/) javascript Runtime.  \n- [Express](https://expressjs.com/) web framework.  \n- [socket.io](https://socket.io) real-time bidirectional event-based communication.  \n- [Knex.js](http://knexjs.org/) SQL query builder.   \n- [objection.js](https://vincit.github.io/objection.js/) object relational mapping for Node.js.  \n \n</Panel>\n\n<Panel id=\"3\" heading=\"For Devs\" secondaryHeading=\"Before you start\" >\n\n## Getting Started\n \nThese instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.\n\n### Prerequisites:\n\nYou need to have Node.js and NPM installed on your system. To check if you have them installed run these commands in your terminal:\n\n```\nnode -v\nnode -v\n```\nYou also need to a local or remote SQL server up and running. To set up one (XAMPP) on your local machine click [here](https://www.apachefriends.org/download.html). Create a database and a user.\n\n</Panel>\n\n<Panel id=\"4\" heading=\"For Devs\" secondaryHeading=\"Clone and install, the usual\" >\n\n### Installing:\n\nClone the repository\n \n```\ngit clone https://github.com/stefanosAgelastos/chatNodejs.git\ncd .\\chatNodejs\\\n ```\n\nInstall dependencies\n\n```\nnpm i \n``` \n</Panel>\n<Panel id=\"5\" heading=\"For Devs\" secondaryHeading=\"Details about the database setup\" >\n\n### Setting up the local database\nNow you need to provide the endpoint of your database, database name, and user before starting the app. Go to `database_credentials\\local_credentials.js` and copy paste the following lines of code:\n\n```\nexports.host = \"localhost\";\nexports.database = \"YOUR_DATABASE_NAME\";\nexports.user = \"YOUR_USER_NAME\";\n\n/* exports.host = process.env.DB_HOST;\nexports.database = process.env.DB_NAME;\nexports.user = process.env.DB_USER;\nexports.password = process.env.DB_PASSWORD; */\n```\n\nThe app is now ready to connect to the databse, but before running the app, you need run a few commands on your terminal. These commands will create and run a migration that will set up the tables of your database. The last command will seed the database with some data.\n\n```\nnpm run create-migration\nnpm run migrate\nnpm run seed\n```\n \n</Panel>\n<Panel id=\"6\" heading=\"For Devs\" secondaryHeading=\"You are ready to go\" >\n\n### Run: \n\nYou are ready to start the app, run\n```\nnpm start\n```\nor run \n```\nnpm run start-dev\n```\nfor development and hot reloading. The port is printed on the console.\n</Panel>\n\n</PanelGrid>\n\n\n</MainGrid>"

/***/ })

})
//# sourceMappingURL=test.js.eb9d733cb9b901582f0a.hot-update.js.map