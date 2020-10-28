const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        tasks: { type: [Number]},
        members: { type: [Number]},
    },
    { timestamps: true },
)

module.exports = mongoose.model('teams', Team)