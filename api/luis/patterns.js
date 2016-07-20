const {
    verifyAndMakeRequest
} = require('../../lib/api');

const patterns = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/patterns";

    self.createNewRegexFeature = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Create new regex feature",
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

    self.deleteRegexFeature = ({
        appId,
        patternId
    }) => {

        operation = {
            "name": "Delete regex feature",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + patternId,
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

    self.getPatterns = ({
        appId
    }) => {

        operation = {
            "name": "Get patterns",
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

    self.updateRegex = ({
        body,
        appId,
        patternId
    }) => {

        operation = {
            "name": "Update regex",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + patternId,
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

module.exports = patterns;