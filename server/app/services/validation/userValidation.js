const Joi = require("joi");

const userValidationSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(), 
    email: Joi.string() 
    .regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
    .required(),
    password: Joi.string() 
    .max(64)
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/)
    .required()
}); 

const userValidation = (req, res, next) => {
    delete req.body.confirmpassword;
    const {error} = userValidationSchema.validate(req.body, {abortEarly : false }); 

        if(error == null){
            next();
        } else {
            res.json({ validationErrors : error.details})
        }
}; 

module.exports = userValidation