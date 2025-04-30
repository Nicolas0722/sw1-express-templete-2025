const express = require('express')

const app = express ()
app.set('view engine', 'hbs');
app.set('views', './views');
app.get('/', (request, response) => {
    response.send('Testado!!!!');
    response.render('home');
})

app.listen(3000, () => {
    console.log('servidor na porta 3000')

}); 
 

