const {
    verifyAndMakeRequest
} = require('../../lib/api');

const train = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/train";

    self.train = ({
        appId
    }) => {

        operation = {
            "name": "Train",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "POST",
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

    self.trainingStatus = ({
        appId
    }) => {

        operation = {
            "name": "Training status",
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

module.exports = train;