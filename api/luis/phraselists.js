const {
    verifyAndMakeRequest
} = require('../../lib/api');

const phraselists = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/phraselists";

    self.createNewDictionary = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Create new dictionary",
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

    self.deleteDictionaryFeature = ({
        appId,
        phraselistId
    }) => {

        operation = {
            "name": "Delete regex feature",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + phraselistId,
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

    self.getPhraselists = ({
        appId
    }) => {

        operation = {
            "name": "Get phraselists",
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

    self.updateDictionary = ({
        body,
        appId,
        phraselistId
    }) => {

        operation = {
            "name": "Update dictionary",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + phraselistId,
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

module.exports = phraselists;