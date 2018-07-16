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
    //console.log(employeeData);
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
            connection.query('INSERT INTO employees VALUES("",?,?,?,?,?,?,?,?,?,?,?,""); INSERT INTO users VALUES("",?,?,?,?,AES_ENCRYPT("123","rahul123"),"employee")', [employeeData.firstname, employeeData.lastname, employeeData.address, employeeData.city, employeeData.sdate, employeeData.birthday, employeeData.phnnum, employeeData.email, employeeData.java, employeeData.angular, employeeData.nodejs, employeeData.firstname, employeeData.lastname, employeeData.address, employeeData.email ], function (err, rows, fields) {
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

api.post('/storeProject', (req, res) => {
    //console.log(req.body);
    var projectid = req.body.projectid;
    var projectname = req.body.projectname;
    var numofemployees = req.body.numofemployees;
    var budget = req.body.budget;
    var sdate = req.body.sdate;
    var edate = req.body.edate;
    var java = req.body.java;
    var angular = req.body.angular;
    var nodejs = req.body.nodejs;
    var projectData = { projectid: projectid, projectname: projectname, numofemployees: numofemployees, budget: budget, sdate: sdate, edate: edate, java: java, angular: angular, nodejs: nodejs };
    //console.log(projectData);
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
            connection.query('INSERT INTO projects VALUES(?,?,?,?,?,?,?,?,?,"","No")', [projectData.projectid, projectData.projectname, projectData.numofemployees, projectData.budget, projectData.sdate, projectData.edate, projectData.java, projectData.angular, projectData.nodejs], function (err, rows, fields) {
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

api.get('/prmanagergetNotices', function (req, res) {

    var appData = {};
    database.connection.getConnection(function (err, connection) {

        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM prmanagernotices', function (err, rows, fields) {
                if (!err) {
                    appData["error"] = 0;
                    appData["data"] = rows;
                    //console.log(appData);
                    res.status(200).json(appData);
                } else {
                    appData["data"] = "No data found";
                    res.status(204).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.get('/rsmanagergetNotices', function (req, res) {

    var appData = {};
    database.connection.getConnection(function (err, connection) {

        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM rsmanagernotices', function (err, rows, fields) {
                if (!err) {
                    appData["error"] = 0;
                    appData["data"] = rows;
                    //console.log(appData);
                    res.status(200).json(appData);
                } else {
                    appData["data"] = "No data found";
                    res.status(204).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.get('/getNoticesAll', function (req, res) {

    var appData = {};
    database.connection.getConnection(function (err, connection) {

        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM prmanagernotices UNION SELECT * FROM rsmanagernotices', function (err, rows, fields) {
                if (!err) {
                    appData["error"] = 0;
                    appData["data"] = rows;
                    console.log(appData);
                    res.status(200).json(appData);
                } else {
                    appData["data"] = "No data found";
                    res.status(204).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.post('/rsmanageraddNotice', function (req, res) {

    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);
    var notice = {
        "title": req.body.title,
        "description": req.body.description,
        "expiredate": today
    }

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO rsmanagernotices SET ?', notice, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "notice entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.delete('/rsmanagerremoveNotice', function (req, res) {
    //console.log('chaaa');
    var today = new Date();
    var notice = {
        "title": req.body.title,
        "description": req.body.description,
        "expiredate": today
    };
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);
    
    console.log(notice.title);
    //console.log('chamoda');
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            //console.log(prmanagerData);
            connection.query('DELETE FROM rsmanagernotices WHERE title=? ',notice.title, function (err, rows, fields) {
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

api.post('/prmanageraddNotice', function (req, res) {

    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);
    var notice = {
        "title": req.body.title,
        "description": req.body.description,
        "expiredate": today
    }

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO prmanagernotices SET ?', notice, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "notice entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.delete('/prmanagerremoveNotice', function (req, res) {
    //console.log('chaaa');
    var today = new Date();
    var notice = {
        "title": req.body.title,
        "description": req.body.description,
        "expiredate": today
    };
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);

    console.log(notice.title);
    //console.log('chamoda');
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
            //console.log('here we have erroe');
        } else {
            //console.log(prmanagerData);
            connection.query('DELETE FROM prmanagernotices WHERE title=?',notice.title, function (err, rows, fields) {
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

api.post('/newinquirytopr', function (req, res) {

    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);
    var inquiry = {
        "subject": req.body.subject,
        "inquiry": req.body.inquiry,
        "created": today
    }

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO rsmanagerinquiries SET ?', inquiry, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "notice entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.post('/newinquirytoadmin', function (req, res) {

    var today = new Date();
    var appData = {
        "error": 1,
        "data": ""
    };
    //console.log(today);
    var inquiry = {
        "subject": req.body.subject,
        "inquiry": req.body.inquiry,
        "created": today
    }

    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('INSERT INTO prmanagerinquiries SET ?', inquiry, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData["data"] = "notice entered successfully!";
                    res.status(201).json(appData);
                } else {
                    appData["data"] = err;
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.get('/prmanagergetinquiries', function (req, res) {

    var appData = {};
    database.connection.getConnection(function (err, connection) {

        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM rsmanagerinquiries', function (err, rows, fields) {
                if (!err) {
                    appData["error"] = 0;
                    appData["data"] = rows;
                    console.log(appData);
                    res.status(200).json(appData);
                } else {
                    appData["data"] = "No data found";
                    res.status(204).json(appData);
                }
            });
            connection.release();
        }
    });
});

api.get('/admingetinquiries', function (req, res) {

    var appData = {};
    database.connection.getConnection(function (err, connection) {

        if (err) {
            appData["error"] = 1;
            appData["data"] = "Internal Server Error";
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM prmanagerinquiries', function (err, rows, fields) {
                if (!err) {
                    appData["error"] = 0;
                    appData["data"] = rows;
                    console.log(appData);
                    res.status(200).json(appData);
                } else {
                    appData["data"] = "No data found";
                    res.status(204).json(appData);
                }
            });
            connection.release();
        }
    });
});


module.exports = api;