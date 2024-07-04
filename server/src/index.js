import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {UserModel} from "./models/Users.js"
import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth" , userRouter)

// DB connection
mongoose.connect("mongodb+srv://food_user:fooduser@cluster0.ptydilp.mongodb.net/" , {
} ,  console.log("DB connected"))

app.listen(3001, () => {
console.log("server started !")
})