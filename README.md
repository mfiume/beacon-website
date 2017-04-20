# DNAStack - Public Website

The corporate web for the DNAstack company.

## Installation guide

To be able to build the project you have to set-up your own environment. The build system used in the project is 
[gulp](http://gulpjs.com/) which is a npm module. These dependencies must be installed in your system:

* [Node.JS](https://nodejs.org/) - you can get it [here](https://nodejs.org/download/).
* [Npm](https://www.npmjs.com/) - this usually comes and is installed together with Node.js.
* [Gulp](http://gulpjs.com/) - [installation guide](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Developer guide

To build the project do:

1. `$ npm install` - to install all npm dependencies.
2. `$ bower install` - to install all bower dependencies.
3. Get your own `keycloak.json` file and put it into the [src/config/dnairis](src/config/dnairis) directory. 
4. `$ gulp` - to actually build the project.

To use the web page at your local machine, run the appropriate gulp target `$ gulp serve`. This will build the 
project, start a [webserver](http://www.browsersync.io/docs/gulp/) (on localhost:3000), deploy the DNAstack web and 
open a browser window with the client. While the gulp target is running, the source files are 
[watched](https://www.npmjs.com/package/gulp-watch) and after each change in any of the source files, the project is 
rebuilt and the changes are propagated into the browser. No manual refresh of browser is needed.

## Production build

The production build has all the files minified.
To build the project simply execute the default target with `$ gulp`. The application is built into the 
`dist/` folder which can be copied to your web server and accessed right away. To quickly test the dist
build with built-in gulp web server, execute:

```$ gulp serve:dist``` 

Be aware the watch and live-reload features are not available in this mode. 
