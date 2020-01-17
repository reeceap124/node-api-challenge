function validateProject(req, res, next) {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({error: 'Sorry but we need a name and description to create a project.'})
    } else {
        console.log('Project validated')
        next()
    }
}

module.exports = validateProject