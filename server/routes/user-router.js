const express = require('express');
const jwt = require('jsonwebtoken');

const UserController = require('../controllers/user-controller')

const router = express.Router()
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    const accessTokenSecret = 'somerandomsecret';

    if (token) {

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.post('/user', UserController.createUser)
router.put('/user/:id', authenticateJWT, UserController.updateUser)
router.delete('/user/:id', authenticateJWT, UserController.deleteUser)
router.get('/user', UserController.getUser)

module.exports = router