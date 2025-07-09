import httpStatus from "http-status";
import bcrypt, {hash} from "bcrypt";
import crypto from "crypto";
import {User} from "../models/users.model.js";
import {Meeting} from "../models/meeting.model.js"


const login = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: "Username and password are required"
        });
    }

    try {
        const user = await User.findOne({username});
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "Invalid username or password"
            });
        }

        if (bcrypt.compare(password, user.password)) {
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            // return user;
            await user.save();
            return res.status(httpStatus.OK).json({
                token: token
            })
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "An error occurred while logging in",
            error: error.message
        });
    }
}

const register = async (req, res) => {
    const {name, username, password} = req.body;

    try {
        if (!name || !username || !password) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: "Name, username, and password are required."
            })
        }

        const existingUser = await User.findOne({username})
        if (existingUser) {
            return res.status(httpStatus.CONFLICT).json({
                message: "Username already exists."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            username,
            password: hashedPassword
        })
        await newUser.save();
        return res.status(httpStatus.CREATED).json({
            message: "User registered successfully."
        })
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "An error occurred while registering the user.",
            error: error.message
        })
    }
}

const getUserHistory = async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ token: token });
        const meetings = await Meeting.find({ user_id: user.username })
        res.json(meetings)
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

const addToHistory = async (req, res) => {
    const { token, meeting_code } = req.body;

    try {
        const user = await User.findOne({ token: token });

        const newMeeting = new Meeting({
            user_id: user.username,
            meetingCode: meeting_code
        })

        await newMeeting.save();

        res.status(httpStatus.CREATED).json({ message: "Added code to history" })
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}

export {login, register, getUserHistory, addToHistory};