const Vehicle = require("../../models/Vehicle");

module.exports = async (req, res, next) => {
	try {
		const { limit, sort, skip } = req.pagination;
		const count = await Vehicle.countDocuments();

		const vehicles = await Vehicle.find().skip(skip).sort(sort).limit(limit);

		const data = {
			count: count,
			data: vehicles,
		};

		if (!vehicles || vehicles.length === 0) {
			res.status(200).json({ message: "No vehicles found" });
			return;
		}

		if (vehicles) {
			res.status(200).json(data);
			return;
		}
	} catch (error) {
		next(error);
	}
};
