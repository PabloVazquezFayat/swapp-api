module.exports = (req, res, next) => {
	try {
		const { page = 1, limit = 10, sort } = req.query;
		req.pagination = { limit, sort, skip: (page - 1) * limit };
		next();
	} catch (error) {
		next(error);
	}
};
