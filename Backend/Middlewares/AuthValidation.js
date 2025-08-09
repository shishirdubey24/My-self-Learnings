import Joi from "joi";
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(100).required(),
  });
  const { error } = schema.validation(req.body);
  if (error) {
    return res.status(404).json({ message: "Bad request", error });
  }
  next();
};
