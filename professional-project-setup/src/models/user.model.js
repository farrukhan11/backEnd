import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index, //to make any field searchable in mongodb, to search in database
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index, //to make any field searchable in mongodb, to search in database
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    avatar: {
      type: String, //cloudinary URL
      require: true,
    },
    coverImage: {
      type: String, //cloudinary URL
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

userSchema.method.isPasswordMatch = async function (password) {
  const user = this
  return await bcrypt.compare(password, user.password)
}

export const User = mongoose.model('User', userSchema)
