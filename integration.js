const BaseClass = require('./baseclass');

class BaseRest extends BaseClass {
    constructor() {
        super();
    }
}

class Integration extends BaseRest {
    constructor() {
        super();
    }

    work() {
        console.log('Entrou na integration =>', JSON.stringify(this.scope));
        
        this.addScope({ outraCoisa: 2 });
        this.addScope({ maisOutraCoisa: 3 });

        console.log('Integration incluiu =>', JSON.stringify(this.scope));
        
        this.removeScope('maisOutraCoisa');

        console.log('Integration removeu =>', JSON.stringify(this.scope));

        console.log('Saiu da integration =>', JSON.stringify(this.scope));
    }
}

module.exports = Integration;