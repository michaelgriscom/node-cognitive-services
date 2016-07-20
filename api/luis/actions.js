const {
    verifyAndMakeRequest
} = require('../../lib/api');

const actions = ({
    API_KEY
}) => {
    let self = this;

    self.addActionToIntent = ({
        parameters,
        body,
        appId
    }) => {

        constructor
        operation = {
            "name": "Add Action To Intent",
            "path": "luis/v1.0/prog/apps/" + appId + "/actions",
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
            parameters,
            body,
            API_KEY
        });
    };

    self.deleteAction = ({
        parameters,
        body,
        appId,
        actionId
    }) => {

        constructor
        operation = {
            "name": "Delete Action",
            "path": "luis/v1.0/prog/apps/" + appId + "/actions/" + actionId,
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
            parameters,
            body,
            API_KEY
        });
    };

    self.getApplicationAction = ({
        parameters,
        body,
        appId,
        actionId
    }) => {

        constructor
        operation = {
            "name": "Get Application Action",
            "path": "luis/v1.0/prog/apps/" + appId + "/actions/" + actionId,
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
            parameters,
            body,
            API_KEY
        });
    };

    self.getApplicationActions = ({
        parameters,
        body,
        appId
    }) => {

        constructor
        operation = {
            "name": "Get Application Action",
            "path": "luis/v1.0/prog/apps/" + appId + "/actions",
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
            parameters,
            body,
            API_KEY
        });
    };

    self.updateAction = ({
        parameters,
        body,
        appId,
        actionId
    }) => {

        constructor
        operation = {
            "name": "Update Action",
            "path": "luis/v1.0/prog/apps/" + appId + "/actions/" + actionId,
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
            parameters,
            body,
            API_KEY
        });
    };

    return self;
};

module.exports = actions;