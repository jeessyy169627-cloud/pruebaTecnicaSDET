const faker = require('faker');
const express = require('express');
//const { default: App } = require('./src/app/components/app.vue');
const app = express();

// Asigna el servidor 3000 por defult o lo asigna el servidor de entorno
app.set('port', process.env.PORT || 3000);

// Middleware - parse el cuerpo a json
app.use(express.json());

//Static files
app.use(express.static(__dirname + '/src/public'));



app.get('/', (req, res)=> {
res.send('Hola Mundo');
});

app.get('/Productos', (req, res) => {
    res.json({
        name:'Oscar',
        lastName: 'Espinoza',
        age: '20',
        address: 'New York 36',
    })
})


app.get('/Productos/:id', (req, res) => {
    const id = req.params.id
    res.json({
        "name":'Oscar',
        "lastName": 'Espinoza',
        "age": '20',
        "address": 'New York 36',
        "id": id
    })
})

app.get('/Products/fake', (req, res) =>{
    const products = [];
    const {size} = req.query;
    const limit = size || 5;
  for ( let i = 0; i < limit; i++) {
        products.push({
            "id": faker.datatype.uuid(),
            "name": faker.commerce.productName(),
            "price": faker.commerce.price(),
            "description": faker.commerce.productDescription()
        })
    }
    res.json(products);
})

app.use('/api/tasks', require('./src/routes/tasks'));


app.listen(app.get('port'),(req, res) => {   
    console.log(`Escuchando en el puerto: http://localhost:${app.get('port')}`)
})


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'usuario' && password === 'password123') {
    return res.status(200).json({ message: 'Login exitoso', token: 'fake-token' });
  }
  return res.status(401).json({ message: 'Credenciales inválidas' });

});


app.get('/users', async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Time out' });
  }
});

module.exports = app;
  