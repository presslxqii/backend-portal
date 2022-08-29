import  express from 'express';

const app = express();

app.listen(3000, (err, res) => {
	console.log("Server listening on port " + res.port);
});
