const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



//Controller for user registration.............
const registerUser = async (req, res) => {
    try {
        const { name, userName, email, password } = req.body;

        if (!name || !userName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check for existing email
        const existingUser = await userModel.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            userName,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: newUser.id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            token
        });

    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Controller for user login..............

const loginUser = async (req, res) => {
 try{
      const {email, password} = req.body;
      if(!email || !password) {
        return res.status(400).json({success: false, message: "Email and password are required"});
      }

      const existingUser = await userModel.findOne({where: {email}});
      if(!existingUser) {
        return res.status(400).json({success: false, message : "User not found"});
      }

      const isMatch = await bcrypt.compare(password,existingUser.password);
      if(isMatch) {
          const token = jwt.sign(
          {id: existingUser.id},
          process.env.JWT_SECRET,
          {expiresIn : "1h"}
        );
        return res.status(200).json({success: true, message: "Login successful", token});
      } else {
        return res.status(400).json({success: false, message: "Invalid credentials"});
      }
 } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { registerUser, loginUser };


