# ScopeJs

ScopeJs is a js lib that creates an scope to share information between objects.

One of best uses of scope is to share information on request lifecicle.

# Get started

Install scope js

`npm i scope-js --save`

All classes that extends Scope class will share all the scope information.

Extend Scope class and add some scope information. 

```javascript
    // controller.js
    const Service = require('./service');
    const Scope = require('../scope');
    const uuidv4 = require('uuid/v4');

    class Controller extends Scope {
        constructor() {
            super();
        }

        work(req, res, next) {
            this.service = new Service();

            // creating the scope and adding the request id information
            this.addScope({ id: uuidv4() });
            
            // doing some stuff...
            this.service.work();

            console.log('UAU, we have the Id, the Name and the Age information =>', JSON.stringify(this.scope));
            
            res.send('done!');

            next();
        }
    }

    module.exports = new Controller();
```

Add some scope information and retreive all the data:

```javascript
    // service.js
    const Scope = require('../scope');
    const Integration = require('./integration');

    class Service extends Scope {
        constructor() {
            super();
        }

        work() {        
            // add more scope information
            this.addScope({ name: 'Jhon' });

            // doing some integration stuff...
            this.integration.work();

            console.log('UAU, we have the ID and the Name information =>', JSON.stringify(this.scope));
        }
    }

    module.exports = Service;
```

```javascript
    // Integration.js
    const Scope = require('../scope');

    class Integration extends Scope {
        constructor() {
            super();
        }

        work() {           
            this.addScope({ age: 33 });
            console.log('UAU, we have the Id, the Name and the Age information =>', JSON.stringify(this.scope));
        }
    }

    module.exports = Integration;
```

# Sample

You can find our working sample at [_sample](https://github.com/diogolmenezes/scope/blob/master/_sample).

Steps:

- Clone
- cd _sample
- npm i 
- node app.js

Go to http://localhost:3000

![Scope](https://github.com/diogolmenezes/scope/blob/master/_sample/sample.png)