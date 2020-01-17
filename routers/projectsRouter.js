const router = require('express').Router();

//imported helpers
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

//imported middleware
const validateProject = require('../middleware/validateProject');
const validateProjectId = require('../middleware/validateProjectId');
const validateAction = require('../middleware/validateAction');


router.get('/', (req, res)=>{
    Projects.get()
        .then(projectList=>{
            res.status(200).json({projectList})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to retrieve list of projects'})
        })
})

router.get('/:id', validateProjectId, (req, res)=>{
    Projects.get(req.params.id)
        .then(project=>{
            res.status(200).json({project})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to retrieve that project'})
        })
})

router.get('/:id/actions', validateProjectId, (req, res)=>{
    Projects.getProjectActions(req.params.id)
        .then(actions=>{
            res.status(200).json({actions})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to get project actions'})
        })
})

router.post('/', validateProject, (req, res)=>{
    Projects.insert(req.body)
        .then(project=>{
            res.status(201).json({project})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to make that project'})
        })
})

router.post('/:id/actions', validateAction, validateProjectId, (req, res)=>{
    Actions.insert(req.body)
        .then(action=>{
            res.status(201).json({action})
        })
        .catch(()=>{
            res.status(500).json({errorMessage: 'Failed to create that action'})
        })
})

router.put('/:id', validateProject, validateProjectId, (req, res)=>{
    Projects.update(req.params.id, req.body)
        .then(updated=>{
            res.status(201).json({updated})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to update that project'})
        })
})

router.delete('/:id', validateProjectId, (req, res)=>{
    Projects.remove(req.params.id)
        .then(deleted=>{
            res.status(200).json({deleted})
        })
        .catch(err=>{
            res.status(500).json({errorMessage: 'Failed to delete that project'})
        })
})



module.exports = router