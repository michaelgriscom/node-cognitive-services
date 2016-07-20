const {
    verifyAndMakeRequest
} = require('../../lib/api');

const listprebuilts = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/listprebuilts";

    self.getPrebuiltEntityList = ({
        appId
    }) => {

        operation = {
            "name": "Get Available Prebuilt Entity Extractors List",
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

module.exports = listprebuilts;