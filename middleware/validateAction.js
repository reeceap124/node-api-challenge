function validateAction(req, res, next){
    if(!req.body.project_id || !req.body.description || !req.body.notes){
        res.status(400).json({error: 'Sorry, but we need an id, description, and notes to create a project action'})
    } else {
        console.log('Validated action')
        next()
    }
}

module.exports = validateAction