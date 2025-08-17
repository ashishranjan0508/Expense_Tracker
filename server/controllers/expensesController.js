const expensesModel = require("../models/expensesModel");

// Create a new expense
const createExpenses = async (req, res) => {
	try {
		const { category, amount, description, date } = req.body;

		if (!category || !amount) {
			return res.status(400).json({ success: false, message: "All fields are required except description" });
		}


const userId = req.user.id;

const expenses =  await expensesModel.create({userId, category, amount, description, date});

if(!expenses){
  return res.status(400).json({success: false, message: "Failed to create expenses"});
}

return res.status(200).json({success: true, expenses});


} catch(error) {
  console.error("Error in creating expenses:", error);
return res.status(500).json({success: false, message: "Internal server error"});
}
}


// Get all expenses for the logged-in user

const getExpenses = async (req, res) => {

    try {

      const userId = req.user.id;
      const expenses = await expensesModel.findAll({ where: { userId } });
      return res.status(200).json({ success: true, expenses });

    } catch (error) {
        
        console.error("Error in getting expenses:", error);
        return res.status(500).json({success: false, message: " Internal server error"});

    }
}


module.exports = { createExpenses, getExpenses };