const {
    verifyAndMakeRequest
} = require('../../lib/api');

const publishConfigurations = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/publishConfigurations";

    self.getPublishConfigurations = ({
        appId
    }) => {

        operation = {
            "name": "Get publish configurations",
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

module.exports = publishConfigurations;