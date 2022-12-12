import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    mongoose.set('strictQuery', true)
    console.log(
      `Connected to mongo database`
    );
  } catch (err) {
    console.log(`Error connecting to mongo database : ${err}`)
  }
}

export default connectDB