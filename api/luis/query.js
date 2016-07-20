const {
    verifyAndMakeRequest
} = require('../../lib/api');

const query = ({
    API_KEY
}) => ({
    parameters
}) => {
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
                    "required": false,
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

        return verifyAndMakeRequest({
            operation,
            parameters,
            API_KEY
        });
    };

module.exports = query;