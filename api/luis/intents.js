const {
    verifyAndMakeRequest
} = require('../../lib/api');

const intents = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/intents";

    self.createIntentClassifier = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Create intent classifier",
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

    self.deleteIntentModel = ({
        appId,
        intentId
    }) => {

        operation = {
            "name": "Delete intent model",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + intentId,
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

    self.getIntentInfo = ({
        appId,
        intentId
    }) => {

        operation = {
            "name": "Get intent info",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + intentId,
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

    self.getIntentInfos = ({
        appId
    }) => {

        operation = {
            "name": "Get intent infos",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + intentId,
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

    self.renameIntentModel = ({
        body,
        appId,
        intentId
    }) => {

        operation = {
            "name": "Rename intent model",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + intentId,
            "host": "api.projectoxford.ai",
            "method": "PUT",
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

module.exports = intents;