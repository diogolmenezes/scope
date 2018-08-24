const uuidv4 = require('uuid/v4');
const controller = require('./controller');
const restify = require('restify');
const app = restify.createServer();

app.use((req, res, next) => {
    req.id = uuidv4();
    next();
});

app.get('/', controller.work.bind(controller));

app.listen(3000, () => {
});