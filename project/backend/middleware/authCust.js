const jwt = require('jsonwebtoken')
const Cust = require('../models/cust')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token,"aakashshreyaskunal")
        const cust = await Cust.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!cust) {
            throw new Error()
        }

        req.token = token
        req.cust = cust
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth