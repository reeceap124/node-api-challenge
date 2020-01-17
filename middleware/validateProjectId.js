const Projects = require('../data/helpers/projectModel')
function validateProjectId(req, res, next) {
    Projects.get(req.params.id)
        .then(project=>{
            if(!project){
                res.status(404).json({error: 'Sorry could not find that project'})
            } else {
                console.log('validated project id')
                next();
            }
        })
}

module.exports = validateProjectId