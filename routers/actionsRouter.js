const router = require('express').Router();

//imported helpers
const Actions = require('../data/helpers/actionModel');

//imported middleware
const validateActionId = require('../middleware/validateActionId');
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

router.get('/:id', validateActionId, (req, res) => {
    Actions.get(req.params.id)
    .then(action=>{
        res.status(200).json({action})
    })
    .catch(()=>{
        res.status(500).json({errorMessage: 'Failed to get that action.'})
    })
})

router.post('/', validateAction, (req, res)=>{
    Actions.insert(req.body)
        .then(newAction=>{
            res.status(201).json({newAction})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to post that new action'})
        })
})

router.put('/:id', validateAction, validateActionId, (req, res) => {
    Actions.update(req.params.id, req.body)
        .then(updatedAction=>{
            res.status(201).json({updatedAction})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to update that action'})
        })
})

router.delete('/:id', (req, res)=>{

    Actions.remove(req.params.id)
        .then((removed)=>{
            res.status(200).json({removed})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'failed to delete'})
        })
})


module.exports = router