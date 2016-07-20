const {
    verifyAndMakeRequest
} = require('../../lib/api');

const predict = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/predict";

    self.getTrainModelPredictions = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Get Train Model Predictions",
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

    self.getTrainedModelPredictions = ({
        appId,
        parameters,
    }) => {

        operation = {
            "name": "Get Trained Model Predictions",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "example",
                    "description": "example\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                }
            ]
        };

        return verifyAndMakeRequest({
            operation,
            parameters,
            API_KEY
        });
    };

    return self;
};

module.exports = predict;