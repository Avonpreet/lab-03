const Person = require('../models/person');

exports.index = async (_, res, next) => {
    try{
        const people = await Person.find();
        res.status(200).json(people);
    }catch(error){
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try{
        const people = await Person.findById(req.params.id);
        res.status(200).json(people);
    }catch(error){
        next(error);
    }
};
