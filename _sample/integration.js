const Scope = require('../scope');

class Integration extends Scope {
    constructor() {
        super();
    }

    work() {
        console.log('Coming in on integration class =>', JSON.stringify(this.scope));
        
        this.addScope({ lastName: 'Doe' });
        this.addScope({ age: 33 });

        console.log('Integration class added some scope =>', JSON.stringify(this.scope));
        
        this.removeScope('age');

        console.log('Integration class removed some scope =>', JSON.stringify(this.scope));

        console.log('Coming out off integration class =>', JSON.stringify(this.scope));
    }
}

module.exports = Integration;