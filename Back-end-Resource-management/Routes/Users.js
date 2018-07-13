var express = require('express');
var users = express.Router();
var database = require('../Database/database');
var cors = require('cors')
var jwt = require('jsonwebtoken');
var token;

users.use(cors());

process.env.SECRET_KEY = "resource";



users.post('/login', function(req, res) {

    var appData = {};
    var input = { 'email' : req.body.email, 'password' : req.body.password}

    console.log(input);

    database.connection.getConnection(function(err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            console.log(err);
            res.status(200).json(appData);
        } else {
            connection.query("SELECT firstname, lastname, address, type, CAST(AES_DECRYPT(password,'rahul123') AS CHAR(50)) password FROM users WHERE email = ?", input.email, function(err, rows, fields) {
                if (err) {
                    appData.error = 1;
                    appData["data"] = "Error Occured!";
                    res.status(400).json(appData);
                } else {
                    
                    if (rows.length = 1) {
                        if (rows[0]){
                            console.log(rows);
                            if (rows[0].password == input.password) {
                                var data = JSON.stringify(rows[0]);
                                let token = jwt.sign({payload :{'firstname':rows[0].firstname,'lastname' : rows[0].lastname, 'address': rows[0].Address,'email': rows[0].email,'type':rows[0].type}}, process.env.SECRET_KEY, {
                                    expiresIn: 1440
                                });
                                appData.error = 0;
                                appData["token"] = token;
                                res.status(200).json(appData);
                            } else {
                                appData.error = 1;
                                appData["data"] = "Email and Password does not match";
                                res.status(200).json(appData);
                            }
                        }
                        else {
                            appData.error = 1;
                            appData["data"] = "Email and Password does not match";
                            res.status(200).json(appData);
                        }
                        
                    } else {
                        appData.error = 1;
                        appData["data"] = "Email does not exists!";
                        res.status(204).json(appData);
                    }
                }
            });
            connection.release();
        }
    });
});
users.use(function (req, res, next) {
    var token = req.body.token || req.headers['token'];
    var appData = {};
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, function (err) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Token is invalid";
                res.status(500).json(appData);
            } else {
                next();
            }
        });
    } else {
        appData["error"] = 1;
        appData["data"] = "Please send a token";
        res.status(403).json(appData);
    }
});

module.exports = users;