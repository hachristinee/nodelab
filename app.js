const express = require('express');

const app = express();
const myRouter = express.Router();

myRouter.route('/book')
    .get((req,res) => {
        const response = {
            msg: 'You just attempted to /get BOOKs'};
        res.json(response);
    });
app.use('/api', myRouter);


app.get('/', (req, res)=> {
    res.sendFile('/www/index.html',{root: '.'})
})

app.get('/books', (req, res)=> {
    res.send('You tried to access /books')
})

app.listen(4242, ()=> {
    console.log('Express Server is running...')
})