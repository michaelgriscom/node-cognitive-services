const {
    verifyAndMakeRequest
} = require('../../lib/api');

const queryLogs = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/queryLogs";

    self.downloadApplicationQueryLogs = ({
        appId
    }) => {

        operation = {
            "name": "Download Application Query Logs",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
            ]
        };

        return verifyAndMakeRequest({
            operation,
            API_KEY
        });
    };
    return self;
};

module.exports = queryLogs;