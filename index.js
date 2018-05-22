
const http       = require('http');
const express    = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'handlebars');

const router = express.Router();

router.route('/Book')
    .get((request, response) => {
        let responseJSON = { hello: "This is my API" };

        return response.json(responseJSON);
    })
    .post()
;

app.use('/api', router);

app.get('/', (request, response) => {
    response.send('Welcome to my API!');
});

app.get('/api/toppings', (request, response) => {
    response.status(200);
    response.set('Content-Type', 'application/json');
    response.set([ 'pepperoni', 'sausage', 'spinach', 'mushrooms', 'ham', 'pineapple' ]);
});

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
