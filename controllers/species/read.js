const Species = require("../../models/Species");

module.exports = async (req, res, next) => {
	try {
		const { limit, sort, skip } = req.pagination;
		const count = await Species.countDocuments();

		const species = await Species.find().skip(skip).sort(sort).limit(limit);

		const data = {
			count: count,
			data: species,
		};

		if (!species || species.length === 0) {
			res.status(200).json({ message: "No species found" });
			return;
		}

		if (species) {
			res.status(200).json(data);
			return;
		}
	} catch (error) {
		next(error);
	}
};
