const express = require('express');
const config = require('../config.js');
const UserRouter = require('./components/user/network.js');
const JSDocPack = require('express-jsdoc-swagger');
const JSDocOptions = require('./swagger.config.json');
class App{
    constructor(){
        this.port = config.API.PORT;
        this.app = express();
        this.settings();
        this.setRoutes();
    }
    settings(){
        JSDocPack(this.app)({
            baseDir: __dirname,
            ...JSDocOptions,
        })
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
    setRoutes(){
        this.app.use('/api/user', UserRouter);
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}.`);
        });
    }
}
module.exports = App;