var main = require('./lib/');

var jira = require('jira');

var options = {
    config: {
        "username": "sotorn",
        "password": "PongZung_678",
        "host": "avenger.atlassian.net"
    },
    issueIdOrKey: "VPATIENT-20"
};

// console.log([main.issue.get], [main.epic]);

main.issue.get(options, function(response) {
    console.log(response);
});