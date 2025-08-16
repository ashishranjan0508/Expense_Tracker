const BudgetsModel = require("../models/budegtsModel");

// Create a new budget
const createBudget = async (req,res) => {
	try {
	const {amount, category} = req.body;

	if(!amount || !category) {
		return res.status(400).json({ success: false, message: "All fields are required" });
	}

	const userId = req.user.id;

	
    const budget = await BudgetsModel.create({ userId, amount, category });
	if(!budget) {
		return res.status(500).json({ success: false, message: "Failed to create budget" });
	}
      return res.status(201).json({ success: true, budget });

	} catch(error) {
		console.error("Error creating budget:", error);
		return res.status(500).json({success: false, message: "Internal server error"})
	}
}

// Get all budgets for the logged-in user
const getBudget = async (req, res) => {
	try{

      const userId = req.user.id;
	  const budgets = await BudgetsModel.findAll({ where: { userId } });
	  return res.status(200).json({ success: true, budgets });

	} catch (error) {

	  console.error("Error fetching budgets:", error);
	  return res.status(500).json({ success: false, message: "Internal server error" });

	}
}

module.exports = { createBudget, getBudget };
