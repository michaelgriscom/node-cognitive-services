const {
    verifyAndMakeRequest
} = require('../../lib/api');

const luisImport = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/import";

    self.importApplication = ({
        body,
        parameters,
        appId
    }) => {

        operation = {
            "name": "Import Application",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint,
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "appName",
                    "description": "Imported application name\n",
                    "value": null,
                    "options": [],
                    "required": false,
                    "kind": 2,
                    "typeName": "string"
                }
            ]
        };

        return verifyAndMakeRequest({
            operation,
            body,
            parameters,
            API_KEY
        });
    };
    return self;
};

module.exports = luisImport;