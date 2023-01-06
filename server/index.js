import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from 'mongoose';
import { auth, user, group, expense } from "./routes/index.js"

// ;async () => await startDB()()
const app = express()
app.use(express.json())
app.use(cors())

if (!process.env.JWT_PRIVATE_KEY) {
  console.error("FATAL ERROR: JWT_PRIVATE_KEY is not defined.")
  process.exit(1)
}

app.use("/api/auth", auth)
app.use("/api/user", user)
app.use("/api/group", group)
app.use("/api/expense", expense)

const PORT = process.env.PORT || 3001
// const server = app.listen(PORT, () => {
//   console.log(`Listening on PORT ${PORT}...`)
// })

// Connecting to Mongo DB Atlas
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3001, () => console.log(`Server Running on Port: http://localhost:${3001}`)))
  .catch((error) => console.log(`${error} did not connect`));

// export default server
