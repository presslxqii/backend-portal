import express from 'express';
import dashboard from './src/routes/dashboard.js';

const app = express();

app.use('/dashboard', dashboard);
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(3000, (err, res) => {
	console.log('Server listening on port ');
});
