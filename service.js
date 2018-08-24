const BaseClass = require('./baseclass');
const Integration = require('./integration');

class BaseService extends BaseClass {
    constructor() {
        super();
    }
}

class Service extends BaseService {
    constructor() {
        super();

        // Aqui podemos continuar instanciando no construtor, sem problema...
        this.integration = new Integration();        
    }

    work() {        
        console.log('Entrou na service =>', JSON.stringify(this.scope));

        // Podemos adicionar mais coisas ao escopo a qualquer momento.
        // Só precisamos ter cuidado com o tamanho do dado, pois o escopo é propagado para todas as classes seguintes
        // 
        this.addScope({ umaCoisa: 1 });

        this.integration.work();

        console.log('Saiu da service =>', JSON.stringify(this.scope));
    }
}

module.exports = Service;