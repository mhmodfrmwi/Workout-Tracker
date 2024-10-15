const { default: mongoose } = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const createExercise = (obj) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    description: Joi.string().trim().min(6).max(100).required(),
    category: Joi.string().trim().min(6).max(100).required(),
  });
  schema.validate(obj);
};
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = {
  Exercise,
  createExercise,
};
