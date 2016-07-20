const {
    verifyAndMakeRequest
} = require('../lib/api');

const languageUnderstanding = ({
    API_KEY
}) => {
    let self = this;

    /**
     * Name: Language Understanding: Query
     * Description: Queries for an intent
     * Example parameters: {
     *
     * }
     */
    self.query = ({
        parameters,
        body
    }) => {

        constructor
        operation = {
            "name": "Query",
            "path": "luis/v1/application",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceName": "Language Understanding",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [
                {
                    "name": "id",
                    "description": "Id for the application\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                },
                {
                    "name": "subscription-key",
                    "description": "Key for the subscription\n",
                    "value": API_KEY,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                },
                {
                    "name": "q",
                    "description": "Text to query\n",
                    "value": null,
                    "options": [],
                    "required": true,
                    "kind": 2,
                    "typeName": "string"
                }
            ]
        };

        return new Promise((resolve, reject) => {
            verifyParameters(operation, parameters)
                .then(makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY
                }).then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                }));
        });
    };

    self.apps = require("./luis/apps.js")({
        API_KEY: API_KEY
    }); 

    self.actionChannels = require("./luis/actionChannels.js")({ API_KEY: API_KEY });
    self.actions = require("./luis/actions.js")({ API_KEY: API_KEY });
    self.entities = require("./luis/entities.js")({ API_KEY: API_KEY });
    self.example = require("./luis/example.js")({ API_KEY: API_KEY });
    self.examples = require("./luis/examples.js")({ API_KEY: API_KEY });
    self.feaures = require("./luis/features.js")({ API_KEY: API_KEY });
    self.intents = require("./luis/intents.js")({ API_KEY: API_KEY });
    self.listprebuilts = require("./luis/listprebuilts.js")({ API_KEY: API_KEY });
    self.luisExport = require("./luis/luisExport.js")({ API_KEY: API_KEY });
    self.luisImport = require("./luis/luisImport.js")({ API_KEY: API_KEY });
    self.models = require("./luis/models.js")({ API_KEY: API_KEY });
    self.patterns = require("./luis/patterns.js")({ API_KEY: API_KEY });
    self.personalAssistantApps = require("./luis/personalAssistantApps.js")({ API_KEY: API_KEY });
    self.phraselists = require("./luis/phraselists.js")({ API_KEY: API_KEY });
    self.prebuilts = require("./luis/prebuilts.js")({ API_KEY: API_KEY });
    self.predict = require("./luis/predict.js")({ API_KEY: API_KEY });
    self.publish = require("./luis/publish.js")({ API_KEY: API_KEY });
    self.publishConfigurations = require("./luis/publishConfigurations.js")({
        API_KEY: API_KEY
    });
    self.queryLogs = require("./luis/queryLogs.js")({
        API_KEY: API_KEY
    });
    self.sample = require("./luis/sample.js")({
        API_KEY: API_KEY
    });
    self.search = require("./luis/search.js")({
        API_KEY: API_KEY
    });
    self.subscriptions = require("./luis/subscriptions.js")({
        API_KEY: API_KEY
    });
    self.train = require("./luis/train.js")({
        API_KEY: API_KEY
    }); 

    /*
     Action Channel APIs
    */

    self.actionChannels = ({
        parameters,
        body,
        appId
    }) => {

        constructor
        operation = {
            "name": "ActionChannels",
            "path": "luis/v1.0/prog/apps/" + appId + "/actionChannels",
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

    /*
    Action APIs
    */

    /**
    Sample body

    {
  "ActionId": "string",
  "ActionName": {},
  "IntentName": {},
  "Dialog": {
    "DialogId": {},
    "CustomerId": "string",
    "AccessKey": {}
  },
  "ActionParameters": {},
  "Channel": {
    "Name": {},
    "Method": {},
    "Settings": {}
  }
}

    */
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

    /*
    Sample body

    {
  "ActionId": "string",
  "ActionName": {},
  "IntentName": {},
  "Dialog": {
    "DialogId": {},
    "CustomerId": "string",
    "AccessKey": {}
  },
  "ActionParameters": {},
  "Channel": {
    "Name": {},
    "Method": {},
    "Settings": {}
  }
}
    */
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

    /*
    entity APIs
    */

    /*
    Sample body
    {
  "Name": "string",
  "Children": {}
}
    */
    self.createEntityExtractor = ({
        parameters,
        body,
        appId
    }) => {

        constructor
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
            parameters,
            body,
            API_KEY
        });
    };

    self.deleteEntityModel = ({
        parameters,
        body,
        appId,
        entityId
    }) => {

        constructor
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
            parameters,
            body,
            API_KEY
        });
    };

    self.getEntityInfo = ({
        parameters,
        body,
        appId,
        entityId
    }) => {

        constructor
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
            parameters,
            body,
            API_KEY
        });
    };

    self.getEntityInfos = ({
        parameters,
        body,
        appId
    }) => {

        constructor
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
            parameters,
            body,
            API_KEY
        });
    };

    self.renameEntityModel = ({
        parameters,
        body,
        appId,
        entityId
    }) => {

        constructor
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
            parameters,
            body,
            API_KEY
        });
    };

    return self;
};

module.exports = languageUnderstanding;