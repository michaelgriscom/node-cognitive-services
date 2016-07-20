const {
    verifyAndMakeRequest
} = require('../../lib/api');

const models = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/models";

    self.getModelInfos = ({
        appId
    }) => {

        operation = {
            "name": "Get model infos",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + intentId,
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

module.exports = models;