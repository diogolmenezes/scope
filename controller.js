const Service = require('./service');
const BaseClass = require('./baseclass');



class Controller extends BaseClass {

    constructor() {
        super();

    }
   
    work(req, res, next) {                

        console.log('Entrou no controller  =>', JSON.stringify(this.scope));

        // Mudança 1 - a criação das services tem que ficar dentro do método do controller,
        // pois isso garante que cada request terá suas proprias classes.
        this.service = new Service();
        
        // Mudança 2 - Basta chamar o método addScope sempre que quisermos colocar algo no escopo.
        // Todas as classes que extendem direta ou indiretamente de BaseClass receberão esse escopo.
        this.addScope({ id: req.id });        
        
        // A partir daqui é tudo igual...
        this.service.work();

        console.log('Saiu do controller =>', JSON.stringify(this.scope));
        
        res.send('ok');
        
        next();
    }
}



module.exports = new Controller();