const Team = require('../mongodb/models/team-model')

createTask = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Team details incomplete',
        })
    }

    const team = new Team(body)

    if (!team) {
        return res.status(400).json({ success: false, error: err })
    }

    team
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: team._id,
                message: 'Team created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Team not created!',
            })
        })
}

updateTeam = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Update details incomplete',
        })
    }

    Team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Team not found!',
            })
        }
        team.name = body.name;
        team.designation = body.designation;
        team.team = body.team;
        team
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: team._id,
                    message: 'Team updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Team not updated!',
                })
            })
    })
}

deleteTeam = async (req, res) => {
    await Team.findOneAndDelete({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }

        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

getTeam = async (req, res) => {
    await Team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }
        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    getTeam,
}