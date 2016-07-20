const {
    verifyAndMakeRequest
} = require('../../lib/api');

const prebuilts = ({
    API_KEY
}) => {
    let self = this;
    let endpoint = "/prebuilts";

    self.addPrebuiltEntityExtractor = ({
        body,
        appId
    }) => {

        operation = {
            "name": "Add prebuilt entity Extractor",
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

    self.deletePrebuiltModel = ({
        appId,
        prebuiltId
    }) => {

        operation = {
            "name": "Delete prebuilt Model",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + prebuiltId,
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

    self.getPrebuiltInfo = ({
        appId,
        prebuiltId
    }) => {

        operation = {
            "name": "Get prebuilt info",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + prebuiltId,
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

    self.getPrebuiltInfos = ({
        appId
    }) => {

        operation = {
            "name": "Get prebuilt infos",
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

    self.renamePrebuiltEntityModel = ({
        body,
        appId,
        prebuiltId
    }) => {

        operation = {
            "name": "Rename prebuilt entity model",
            "path": "luis/v1.0/prog/apps/" + appId + endpoint + "/" + prebuiltId,
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

module.exports = prebuilts;