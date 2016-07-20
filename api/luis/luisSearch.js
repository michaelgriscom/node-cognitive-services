const {
    verifyAndMakeRequest
} = require('../../lib/api');

const luisSearch = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/search";

    self.searchEndpointQueries = ({
        appId
    }) => {

        operation = {
            "name": "Search Endpoint Queries",
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
                    "name": "searchKeywords",
                    "description": "searchKeywords\n",
                    "value": null,
                    "options": [],
                    "required": false,
                    "kind": 2,
                    "typeName": "string"
                },
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
            API_KEY
        });
    };
    return self;
};

module.exports = luisSearch;