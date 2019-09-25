const express = require('express');
const app = express();


//Middleware
app.set('view engine', 'ejs');

//serving static files
app.use(express.static(__dirname + '/public'));


//Home page
app.get('/', (req, res) => {
    res.render('index.ejs')
});



const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`The restaurant server is runing on port ${PORT}`)
})