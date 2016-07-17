const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const languageUnderstanding = ({
    API_KEY
}) => {

    let self = this;

    /**
     * Name: Language Understanding: Query
     * Description: Queries for an intent
     * Example parameters: {
     *
     * }
     */
    self.query = ({
        parameters,
        body
    }) => {

        constructor
        operation = {
            "name": "Query",
            "path": "luis/v1/application",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "id",
                    "description": "Id for the application\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                },
                {
                    "name": "subscription-key",
                    "description": "Key for the subscription\n",
                    "value": API_KEY,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                },
                {
                    "name": "q",
                    "description": "Text to query\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                }
            ]
        };

        return new Promise((resolve, reject) => {
            verifyParameters(operation, parameters)
                .then(makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }));
        });
    };

    self.addApp = ({
        parameters,
        body
    }) => {

        constructor
        operation = {
            "name": "AddApp",
            "path": "luis/v1.0/prog/apps",
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

        return new Promise((resolve, reject) => {
            verifyParameters(operation, parameters)
                .then(makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                    }));
        });
    };

    self.deleteApp = ({
        parameters,
        body,
        appId
    }) => {

        constructor
        operation = {
            "name": "DeleteApp",
            "path": "luis/v1.0/prog/apps/" + appId,
            "host": "api.projectoxford.ai",
            "method": "DELETE",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "appId",
                    "description": "Id for the application\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                }
            ]
        };

        return new Promise((resolve, reject) => {
            verifyParameters(operation, parameters)
                .then(makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }));
        });
    };

    return self;
};

module.exports = languageUnderstanding;