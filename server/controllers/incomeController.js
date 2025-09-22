const incomeModel = require("../models/incomeModel");


// Create a new income record for the logged-in user
const createIncome = async (req,res) => {
    try {
        const {amount, source,note, date} = req.body;

        if(!amount || !source) {
            return res.status(400).json({success:false, message:"Amount and source are required"});
        }
        const userId = req.user.id;

        const income = await incomeModel.create({userId, amount, source,note, date});

        if(!income) {
            return res.status(400).json({success: false, message: "Failed to create income record"});
        }

        return res.status(200).json({success: true, income});

    } catch (error) {
        console.error("Error in income controller:", error);
        return res.status(500).json({success: false, message: "Internal server error at create income controller"});
    }
}

//get income from table for logged in user

const getIncome = async (req, res) => {
    try {
        const userId = req.user.id;
        const income = await incomeModel.findAll({ where: { userId } });
        return res.status(200).json({success:true, income});

    } catch (error) {
        console.error("Error in getting income:", error);
        return res.status(500).json({success: false, message: "Internal server at get income controller"});
    }
}

module.exports = {createIncome, getIncome};

