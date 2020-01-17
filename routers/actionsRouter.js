const router = require('express').Router();

//imported helpers
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

//imported middleware
const validateProjectId = require('../middleware/validateProjectId');
const validateAction = require('../middleware/validateAction');


router.get('/', (req, res)=>{
    Actions.get()
        .then(allActions => {
            res.status(200).json({allActions})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to get actions list'})
        })
})

router.delete('/:id', (req, res)=>{

    Actions.remove(req.params.id)
        .then((remove)=>{
            res.status(200).json({removed})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to delete'})
        })
})


module.exports = router