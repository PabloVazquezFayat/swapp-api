const Planet = require("../../models/Planet");

module.exports = async (req, res, next) => {
	try {
		const { limit, sort, skip } = req.pagination;
		const count = await Planet.countDocuments();

		const planets = await Planet.find().skip(skip).sort(sort).limit(limit);

		const data = {
			count: count,
			data: planets,
		};

		if (!planets || planets.length === 0) {
			res.status(200).json({ message: "No planets found" });
			return;
		}

		if (planets) {
			res.status(200).json(data);
			return;
		}
	} catch (error) {
		next(error);
	}
};
