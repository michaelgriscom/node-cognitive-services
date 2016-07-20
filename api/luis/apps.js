const {
    verifyAndMakeRequest
} = require('../../lib/api');

const apps = ({
    API_KEY
}) => {

    let self = this;

    self.addApp = ({
        body
    }) => {

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

        return verifyAndMakeRequest({
            operation,
            body,
            API_KEY
        });
    };

    self.deleteApp = ({
        appId
    }) => {

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
            ]
        };

        return verifyAndMakeRequest({
            operation,
            API_KEY
        });
    };

    self.getApp = ({
        appId
    }) => {

        operation = {
            "name": "GetApp",
            "path": "luis/v1.0/prog/apps/" + appId,
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

    self.getApps = ({
    }) => {

        operation = {
            "name": "GetApps",
            "path": "luis/v1.0/prog/apps",
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

    self.updateApp = ({
        body,
        appId
    }) => {

        operation = {
            "name": "GetApp",
            "path": "luis/v1.0/prog/apps/" + appId,
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

module.exports = apps;