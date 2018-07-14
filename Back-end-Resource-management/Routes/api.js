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
            console.log(employeeData);
            connection.query('INSERT INTO employeeleaves VALUES("?","?","?","?","?","?"," ")', [employeeData.id, employeeData.firstname, employeeData.lastname,employeeData.reason, employeeData.startdate, employeeData.enddate], function (err, rows, fields) {
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
            connection.query('INSERT INTO projectmanagerleaves VALUES("?","?","?","?","?","?"," ")', [prmanagerData.id, prmanagerData.firstname, prmanagerData.lastname, prmanagerData.reason, prmanagerData.startdate, prmanagerData.enddate], function (err, rows, fields) {
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
            //console.log(prmanagerData);
            connection.query('INSERT INTO resourcemanagerleaves VALUES("?","?","?","?","?","?"," ")', [rsmanagerData.id, rsmanagerData.firstname, rsmanagerData.lastname, rsmanagerData.reason, rsmanagerData.startdate, rsmanagerData.enddate], function (err, rows, fields) {
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