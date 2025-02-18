const User = require('../Modals/userModal.js');

exports.home = (req, res) => {
    res.send("Home World");
};
exports.createUser = async (req, res) => {
    try {
        const { Name, email } = req.body;
        if (!Name || !email) {
            throw new Error("Name and email are required");
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("User already exists");
        }
        const user = await User.create({
            Name,
            email
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            users
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            throw new Error("User not found");
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            throw new Error("User not found");
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


//// This Is called the curd operation in Express Js .