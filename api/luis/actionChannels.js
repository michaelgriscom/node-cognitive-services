const {
    verifyAndMakeRequest
} = require('../../lib/api');

const actionChannels = ({
    API_KEY
}) => {
    let self = this;

    self.actionChannels = ({
        appId
    }) => {

        operation = {
            "name": "ActionChannels",
            "path": "luis/v1.0/prog/apps/" + appId + "/actionChannels",
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

module.exports = actionChannels;