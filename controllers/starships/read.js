const Starship = require("../../models/Starship");

module.exports = async (req, res, next) => {
	try {
		const { limit, sort, skip } = req.pagination;
		const count = await Starship.countDocuments();

		const starships = await Starship.find().skip(skip).sort(sort).limit(limit);

		const data = {
			count: count,
			data: starships,
		};

		if (!starships || starships.length === 0) {
			res.status(200).json({ message: "No starships found" });
			return;
		}

		if (starships) {
			res.status(200).json(data);
			return;
		}
	} catch (error) {
		next(error);
	}
};
