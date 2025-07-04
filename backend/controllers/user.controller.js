import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import admin from "../utils/firebaseAdmin.js";

export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, email, phoneNumber, password, role } = req.body;
    
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    let profilePhotoUrl = "";
    const file = req.file;
    if (file) {
        // Save local file path relative to /uploads
        profilePhotoUrl = `/uploads/${file.filename}`;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: profilePhotoUrl,
      },
    });

    console.log("Account created");
    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect Email or Password",
                success: false
            });
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect Email or Password",
                success: false
            });
        };
        if (role != user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with Current Role",
                success: false
            });
        };
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httppsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })
    }
    catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        expires: new Date(0),
      })
      .json({
        message: "Logout Successfully",
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error during logout",
      success: false,
    });
  }
};
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        if (!fullname || !email || !phoneNumber || !bio || !skills) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        
        let skillsArray;
        if(skills){
            skillsArray=skills.split(",");
        }
        const userId=req.id;
        let user= await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message: "User not Found",
                success: false
            });
        };

        //updating data
        if(fullname)  user.fullname=fullname
        if(email)      user.email=email
        if(phoneNumber)  user.phoneNumber=phoneNumber
        if(bio)  user.profile.bio=bio
        if(skills)  user.profile.skills=skillsArray

        // If a file is uploaded, treat as resume (or profile photo as needed)
        if(file){
            user.profile.resume = `/uploads/${file.filename}`;
            user.profile.resumeOriginalName = file.originalname;
        }

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message:"Profile Updated",
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email, picture, uid } = decodedToken;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        fullname: name,
        email,
        profile: { profilePhoto: picture }
      });
    }
    // Create JWT token and set cookie
    const tokenData = { userId: user._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      // secure: true, // use in production with HTTPS
    });
    res.status(200).json({ user, success: true });
  } catch (error) {
    res.status(401).json({ message: "Invalid Google token", success: false });
  }
};

export const me = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }
    res.status(200).json({ user, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};