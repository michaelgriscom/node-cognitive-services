const {
    verifyAndMakeRequest
} = require('../../lib/api');

const personalAssistantApps = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/PersonalAssistantApps";

    self.getPersonalAssistantApps = ({
        appId
    }) => {

        operation = {
            "name": "Get Personal Assistant Apps",
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

module.exports = personalAssistantApps;