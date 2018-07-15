var express = require('express');
var api = express.Router();
var database = require('../Database/database');
var cors = require('cors')
var jwt = require('jsonwebtoken');
var token;
const app = express();

api.post('/empstoreLeaveData', (req, res) => {
    var employeeId = req.body.employeeId;
    var reason = req.body.reason;
    var startdate = req.body.startdate;
    var enddate = req.body.enddate;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var employeeData = { id: employeeId, reason: reason, startdate: startdate, enddate: enddate, firstname: firstname,lastname: lastname };
    var appData = {
        "error": 1,
        "data": ""
    };
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            //console.log(employeeData);
            connection.query('INSERT INTO employeeleaves VALUES(?,?,?,?,?,?,"")', [employeeData.id, employeeData.firstname, employeeData.lastname,employeeData.reason, employeeData.startdate, employeeData.enddate], function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "data entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                    //console.log(err);
                }
            });
            connection.release();
        }
    });

});

api.post('/prmanagerstoreLeaveData', (req, res) => {
    var prmanagerId = req.body.prmanagerId;
    var reason = req.body.reason;
    var startdate = req.body.startdate;
    var enddate = req.body.enddate;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var prmanagerData = { id: prmanagerId, reason: reason, startdate: startdate, enddate: enddate, firstname: firstname, lastname: lastname };
    var appData = {
        "error": 1,
        "data": ""
    };
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            //console.log(prmanagerData);
            connection.query('INSERT INTO projectmanagerleaves VALUES(?,?,?,?,?,?,"")', [prmanagerData.id, prmanagerData.firstname, prmanagerData.lastname, prmanagerData.reason, prmanagerData.startdate, prmanagerData.enddate], function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "data entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                    //console.log(err);
                }
            });
            connection.release();
        }
    });

});

api.post('/rsmanagerstoreLeaveData', (req, res) => {
    var rsmanagerId = req.body.rsmanagerId;
    var reason = req.body.reason;
    var startdate = req.body.startdate;
    var enddate = req.body.enddate;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var rsmanagerData = { id: rsmanagerId, reason: reason, startdate: startdate, enddate: enddate, firstname: firstname, lastname: lastname };
    var appData = {
        "error": 1,
        "data": ""
    };
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            console.log(rsmanagerData);
            connection.query('INSERT INTO resourcemanagerleaves VALUES(?,?,?,?,?,?,"")', [rsmanagerData.id, rsmanagerData.firstname, rsmanagerData.lastname, rsmanagerData.reason, rsmanagerData.startdate, rsmanagerData.enddate], function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "data entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                    //console.log(err);
                }
            });
            connection.release();
        }
    });

});

api.post('/storeEmployee', (req, res) => {
    //console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var address = req.body.address;
    var city = req.body.city;
    var sdate = req.body.sdate;
    var birthday = req.body.birthday;
    var phnnum = req.body.phnnum;
    var email = req.body.email;
    var java = req.body.java;
    var angular = req.body.angular;
    var nodejs = req.body.nodejs;
    var employeeData = { firstname: firstname, lastname: lastname, address: address, city: city, sdate: sdate, birthday: birthday, phnnum: phnnum, email: email, java: java, angular: angular, nodejs: nodejs };
    console.log(employeeData);
    var appData = {
        "error": 1,
        "data": ""
    };
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            //console.log(prmanagerData);
            connection.query('INSERT INTO employees VALUES("",?,?,?,?,?,?,?,?,?,?,?); INSERT INTO users VALUES("",?,?,?,?,AES_ENCRYPT("123","rahul123"),"employee")', [employeeData.firstname, employeeData.lastname, employeeData.address, employeeData.city, employeeData.sdate, employeeData.birthday, employeeData.phnnum, employeeData.email, employeeData.java, employeeData.angular, employeeData.nodejs, employeeData.firstname, employeeData.lastname, employeeData.address, employeeData.email ], function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "data entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                    //console.log(err);
                }
            });
            connection.release();
        }
    });

});

module.exports = api;