const getListGraphics = () => {

}


const getAll = (req, res) => {
	res.status(200).json({database: 1});
};

const getGraphs = (req, res) => {
	console.log('getGraphs', req.body)
	res.status(200).json({database: 1});
};

export {
	getAll, getGraphs
}
