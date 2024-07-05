import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/user.model.js";

// Create a new user

export const registerUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    res.status(201).json({
      success: true,
      message: "User registered Successfully",
      data: user,
    });
  } catch (error) {
    return next(new Errorhandler("Failed to register user", 500));
  }
});

// Login the user

export const loginUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("User not registered", 401));
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return next(new ErrorHandler("Incorrect Email or Password", 401));
    }

    const token = user.generateToken();
    res.json({
      success: true,
      message: "User logged in Successfully",
      token,
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to login user", 500));
  }
});
