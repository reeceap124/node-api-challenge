const Actions = require('../data/helpers/actionModel')
function validateProjectId(req, res, next) {
    Actions.get(req.params.id)
        .then(project=>{
            if(!project){
                res.status(404).json({error: 'Sorry could not find that action'})
            } else {
                console.log('validated action id')
                next();
            }
        })
}

module.exports = validateProjectId