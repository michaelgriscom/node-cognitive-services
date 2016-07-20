const {
    verifyAndMakeRequest
} = require('../../lib/api');

const actions = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/actions";

    self.addActionToIntent = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Add Action To Intent",
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

    self.deleteAction = ({
        appId,
        actionId
    }) => {

        operation = {
            "name": "Delete Action",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + actionId,
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

    self.getApplicationAction = ({
        appId,
        actionId
    }) => {

        operation = {
            "name": "Get Application Action",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + actionId,
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

    self.getApplicationActions = ({
        appId
    }) => {

        operation = {
            "name": "Get Application Action",
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

    self.updateAction = ({
        body,
        appId,
        actionId
    }) => {

        operation = {
            "name": "Update Action",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + actionId,
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

module.exports = actions;