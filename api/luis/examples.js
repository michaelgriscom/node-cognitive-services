const {
    verifyAndMakeRequest
} = require('../../lib/api');

const examples = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/examples";
     
    self.addBatchLabels = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Add Batch Labels",
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

    self.deleteExampleLabels = ({
        appId,
        exampleId
    }) => {

        operation = {
            "name": "Delete example labels",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + exampleId,
            "host": "api.projectoxford.ai",
            "method": "DELETE",
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

    self.reviewLabeledUtterances = ({
        parameters,
        appId
    }) => {

        operation = {
            "name": "Review labeled utterances",
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
                    "name": "skip",
                    "description": "skip\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "integer"
                },
                {
                    "name": "count",
                    "description": "count\n",
                    "value": API_KEY,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "integer"
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

module.exports = examples;