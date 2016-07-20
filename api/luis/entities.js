const {
    verifyAndMakeRequest
} = require('../../lib/api');

const entities = ({
    API_KEY
}) => {
    let self = this;

    self.createEntityExtractor = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Create Entity Extractor",
            "path": "luis/v1.0/prog/apps/" + appId + "/entities",
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

    self.deleteEntityModel = ({
        appId,
        entityId
    }) => {

        operation = {
            "name": "Delete Entity Model",
            "path": "luis/v1.0/prog/apps/" + appId + "/entities/" + entityId,
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

    self.getEntityInfo = ({
        appId,
        entityId
    }) => {

        operation = {
            "name": "Get entity info",
            "path": "luis/v1.0/prog/apps/" + appId + "/entities/" + entityId,
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

    self.getEntityInfos = ({
        appId
    }) => {

        operation = {
            "name": "Get entity infos",
            "path": "luis/v1.0/prog/apps/" + appId + "/entities",
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

    self.renameEntityModel = ({
        body,
        appId,
        entityId
    }) => {

        operation = {
            "name": "Rename entity model",
            "path": "luis/v1.0/prog/apps/" + appId + "/entities/" + entityId,
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
            body,
            API_KEY
        });
    };

    return self;
};

module.exports = entities;