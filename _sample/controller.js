const Service = require('./service');
const Scope = require('../scope');

class Controller extends Scope {

    constructor() {
        super();
    }

    work(req, res, next) {
        console.log('Coming in of controller  =>', JSON.stringify(this.scope));

        this.service = new Service();
        this.addScope({ id: req.id });

        // doing some stuff...
        this.service.work();

        console.log('Coming out of controller =>', JSON.stringify(this.scope));

        res.send('done!');

        next();
    }
}



module.exports = new Controller();