const Character = require("../../models/Character");

module.exports = async (req, res, next) => {
	try {
		const { limit, sort, skip } = req.pagination;
		const count = await Character.countDocuments();

		const characters = await Character.find()
			.skip(skip)
			.limit(limit)
			.sort(sort)
			.select(`-__v`)
			.populate({ path: "homeWorld" })
			.populate({ path: "vehicles" })
			.populate({ path: "starship" })
			.populate({ path: "species" });

		const data = {
			count: count,
			data: characters,
		};

		if (!characters || characters.length === 0) {
			res.status(200).json({ message: "No characters found" });
			return;
		}

		if (characters) {
			res.status(200).json(data);
			return;
		}
	} catch (error) {
		next(error);
	}
};
