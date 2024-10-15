const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const passwordComplexity = require("joi-password-complexity");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    url: {
      type: String,
      default: "",
    },
    publicId: {
      type: String,
      default: null,
    },
  },
  bio: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
});
const validateRegistration = (obj) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().trim().min(6).max(100).required().email(),
    bio: Joi.string().trim().min(6).max(100).required(),
    password: passwordComplexity().required(),
  });
  schema.validate(obj);
};
const validateLogin = (obj) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: passwordComplexity().required(),
  });
  schema.validate(obj);
};
const User = mongoose.model("User", userSchema);
MediaSourceHandle.exports = {
  User,
  validateRegistration,
  validateLogin,
};
