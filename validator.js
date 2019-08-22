export default (req,res,next)=>{
    const {body} = req;
    let errors = {};

    const rules = ['type', 'crux', 'color', 'title'];
    rules.forEach((key)=>{
        if (!body[key]) {
            errors[key] = `${key} is required!`
        }else if(!isString(body[key])){
            errors[key] = `${key} must be a string!`
        }
    });

    if ( Object.keys(errors).length > 0 ) {
        return res.status(422).json({
            errors
        });
    }else {
        next();
    }


};

function isString(input){
    return typeof input === 'string' || input instanceof String
}

