module.exports = app => {
    const HelloMsg = require('../controllers/hello.controller')
    const CrudController = require('../controllers/crud.controller')

    var router = require("express").Router();
    router.get('/',  HelloMsg.hello);
    router.post('/create', CrudController.create);
    router.get('/getAll', CrudController.getAll);
    router.get('/getOneById/:id', CrudController.getOne);
    router.put('/update/:id', CrudController.update);
    router.delete('/delete/:id', CrudController.detele)
   
    app.use('/api', router);
};