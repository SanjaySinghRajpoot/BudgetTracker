import Joi from "joi"
;("joi")
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
})

// type UserType1 = {
//   _id: string;
//   name: string;
//   email: string;
// };

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email
    },
    process.env.JWT_PRIVATE_KEY
  )
  return token
}

const User = mongoose.model("User", userSchema)

const validateUser = user => {
  const schema = {
    name: Joi.string()
      .min(1)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  }
  return Joi.object(schema).validate(user)
}

export default User
export { validateUser as validate }
