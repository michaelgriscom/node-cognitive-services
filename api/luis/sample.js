const {
    verifyAndMakeRequest
} = require('../../lib/api');

const sample = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/sample";

    self.sampleEndpointQueriesForEntities = ({
        appId,
        entityId,
        parameters,
    }) => {

        operation = {
            "name": "Sample Endpoint Queries For Entities",
            "path": "luis/v1.0/prog/apps/" + appId + "entities/" + entityId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "maxQueriesCount",
                    "description": "maxQueriesCount\n",
                    "value": null,
                    "options": [],
                    "required": false,
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

    self.sampleEndpointQueriesForIntents = ({
        appId,
        intentId,
        parameters,
    }) => {

        operation = {
            "name": "Sample Endpoint Queries For Intents",
            "path": "luis/v1.0/prog/apps/" + appId + "intents/" + intentId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "maxQueriesCount",
                    "description": "maxQueriesCount\n",
                    "value": null,
                    "options": [],
                    "required": false,
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

module.exports = sample;