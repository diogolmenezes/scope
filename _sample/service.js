const Scope = require('../scope');
const Integration = require('./integration');

class Service extends Scope {
    constructor() {
        super();
        this.integration = new Integration();        
    }

    work() {        
        console.log('Coming in on service class =>', JSON.stringify(this.scope));

        this.addScope({ firstName: 'Jhon' });

        // doing some integration stuff...
        this.integration.work();

        console.log('Coming out off service class =>', JSON.stringify(this.scope));
    }
}

module.exports = Service;