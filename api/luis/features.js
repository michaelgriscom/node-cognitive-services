const {
    verifyAndMakeRequest
} = require('../../lib/api');

const features = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/features";

    self.getAppFeatures = ({
        appId
    }) => {

        operation = {
            "name": "Get app features",
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

module.exports = features;