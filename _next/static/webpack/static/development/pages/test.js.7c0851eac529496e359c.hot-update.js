webpackHotUpdate("static/development/pages/test.js",{

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<MainGrid>\n\n<HeaderTitle>\n  \n# AR Tourist Guide Prototype\n<TitleAction href=\"https://github.com/stefanosAgelastos/mern-admin-app-for-android-AR-app\" label=\"Go to github repo\" />\n  \n<TitleAction href=\"https://ar.stefworks.ml\" disabled label=\"Go to demo\" />\n</HeaderTitle>\n\n<InfoGrid>\n\n<InfoPaper>\n\n## About the project\nThis is a product development project, purposed to assist Tour guides with Augmented Reality.\nThe system was developed in two phases. It started in October 2019 as an internship project for [KøbenhavnerTure](https://www.koebenhavnerture.dk/), and in a second phase (November-December 2019) it was further developed as a final exam project for [KEA's Datamatiker AP](https://kea.dk/en/programmes/academy-profession-degree/computer-science). \n\n</InfoPaper>\n\n<InfoPaper>\n<MyChip label=\"Product Development\"/>\n<MyChip label=\"Design Thinking\"/>\n<MyChip label=\"Augmented Reality\"/>\n<MyChip label=\"Unity 3D\"/>\n<MyChip label=\"\"/>\n<MyChip label=\"HTML\"/>\n<MyChip label=\"Sockets.io\"/>\n<MyChip label=\"Authentication & Authorization\"/>\n</InfoPaper>\n\n</InfoGrid>\n\n<PanelGrid>\n<Panel id=\"1\" heading=\"About\" secondaryHeading=\"What can this app do?\" >\n\n### Features\n- Chat room, where users post messages on a common wall.\n- System allows users to signup and login.\n- Persists encrypted password.\n- It makes use of JWT and expiring tokens for user sessions.\n- Persists message history.\n- Real-time messages using web-sockets.\n![Login-SignUp screen](https://raw.githubusercontent.com/stefanosAgelastos/chatNodejs/master/screenshots/login.png)\n![Chat screen](https://raw.githubusercontent.com/stefanosAgelastos/chatNodejs/master/screenshots/chat.png)\n\n</Panel>\n\n<Panel id=\"2\" heading=\"How?\" secondaryHeading=\"What technologies does it use?\" >\n\n### Built With  \n- [Node.js](https://nodejs.org/en/) javascript Runtime.  \n- [Express](https://expressjs.com/) web framework.  \n- [socket.io](https://socket.io) real-time bidirectional event-based communication.  \n- [Knex.js](http://knexjs.org/) SQL query builder.   \n- [objection.js](https://vincit.github.io/objection.js/) object relational mapping for Node.js.  \n \n</Panel>\n\n<Panel id=\"3\" heading=\"For Devs\" secondaryHeading=\"Before you start\" >\n\n## Getting Started\n \nThese instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.\n\n### Prerequisites:\n\nYou need to have Node.js and NPM installed on your system. To check if you have them installed run these commands in your terminal:\n\n```\nnode -v\nnode -v\n```\nYou also need to a local or remote SQL server up and running. To set up one (XAMPP) on your local machine click [here](https://www.apachefriends.org/download.html). Create a database and a user.\n\n</Panel>\n\n<Panel id=\"4\" heading=\"For Devs\" secondaryHeading=\"Clone and install, the usual\" >\n\n### Installing:\n\nClone the repository\n \n```\ngit clone https://github.com/stefanosAgelastos/chatNodejs.git\ncd .\\chatNodejs\\\n ```\n\nInstall dependencies\n\n```\nnpm i \n``` \n</Panel>\n<Panel id=\"5\" heading=\"For Devs\" secondaryHeading=\"Details about the database setup\" >\n\n### Setting up the local database\nNow you need to provide the endpoint of your database, database name, and user before starting the app. Go to `database_credentials\\local_credentials.js` and copy paste the following lines of code:\n\n```\nexports.host = \"localhost\";\nexports.database = \"YOUR_DATABASE_NAME\";\nexports.user = \"YOUR_USER_NAME\";\n\n/* exports.host = process.env.DB_HOST;\nexports.database = process.env.DB_NAME;\nexports.user = process.env.DB_USER;\nexports.password = process.env.DB_PASSWORD; */\n```\n\nThe app is now ready to connect to the databse, but before running the app, you need run a few commands on your terminal. These commands will create and run a migration that will set up the tables of your database. The last command will seed the database with some data.\n\n```\nnpm run create-migration\nnpm run migrate\nnpm run seed\n```\n \n</Panel>\n<Panel id=\"6\" heading=\"For Devs\" secondaryHeading=\"You are ready to go\" >\n\n### Run: \n\nYou are ready to start the app, run\n```\nnpm start\n```\nor run \n```\nnpm run start-dev\n```\nfor development and hot reloading. The port is printed on the console.\n</Panel>\n\n</PanelGrid>\n\n\n</MainGrid>"

/***/ })

})
//# sourceMappingURL=test.js.7c0851eac529496e359c.hot-update.js.map