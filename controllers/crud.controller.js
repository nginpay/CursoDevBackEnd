const Users = require('../models/user')

exports.create = async (req, res) => {
    try {

        const newData = req.body
        
        if(!newData){
            return res.status(500).json({msg: 'algo deu errado. Dados vazios'})
        }

        const newUser = await Users.create(newData)
        return res.status(200).json(newUser)

    } catch(error){    
        res.send({    
             error: 'Error',
             message: error.message    
        })    
     }  

    res.status(200).json({msg});
};

exports.getAll = async (req, res) => {
    const ListUsers = await Users.findAll();
    res.status(200).json(ListUsers);
};

exports.getOne = async (req, res) => {
    const Id = req.params.id;
    const UserDetails = await Users.findOne({where: {id:Id}})
    res.status(200).json({UserDetails});
};

exports.update = async (req, res) => {
    const Id = req.params.id;
    const UpdateDataUser = await Users.update(req.body, {where: {id: Id}})
    res.status(200).json({UpdateDataUser});
};

exports.detele = async (req, res) => {
    const Id = req.params.id;
    const UserForDelete = await Users.destroy({where: {id: Id}})
    res.status(200).json({msg: `User ${Id} is deleted`});
};