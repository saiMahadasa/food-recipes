import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth" , userRouter)

// DB connection
mongoose.connect("mongodb+srv://fooduser:fooduser@foodapp.55nsfjy.mongodb.net/?retryWrites=true&w=majority&appName=foodapp" , {
} ,  console.log("DB connected"))

app.listen(3001, () => {
console.log("server started !")

})