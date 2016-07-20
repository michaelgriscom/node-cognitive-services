const {
    verifyAndMakeRequest
} = require('../../lib/api');

const publish = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/publish";

    self.publishApplication = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Publish Application",
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
            body,
            API_KEY
        });
    };

    return self;
};

module.exports = publish;