import dotenv from 'dotenv'
import express from 'express'

const app = express()
import connectDB from './src/db/index.js'

dotenv.config({
  path: './.env',
})
connectDB()
// Connect to MongoDB
// async function connectDB() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // Use MONGODB_URI directly
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.log(error.message)
//   }
// }
