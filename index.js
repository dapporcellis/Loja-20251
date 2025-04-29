import express from 'express';
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 