const {
    makeRequest,
    verifyParameters
} = require('../../lib/api');

const apps = ({
    API_KEY
}) => {

    let self = this;

    /*
   Sample body
   {
 "ID": "string",
 "Name": "string",
 "Description": "string",
 "Culture": "string",
 "Active": true,
 "CreatedDate": "string",
 "ModifiedDate": "string",
 "PublishDate": "string",
 "URL": "string",
 "AuthKey": "string",
 "NumberOfIntents": 0,
 "NumberOfEntities": 0,
 "IsTrained": true
}
   */

    self.add = ({
        parameters,
        body
    }) => {

        constructor
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
    self.deleteApp = ({
        parameters,
        body,
        appId
    }) => {

        constructor
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

    self.getApp = ({
        parameters,
        body,
        appId
    }) => {

        constructor
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

    self.getApps = ({
        parameters,
        body
    }) => {

        constructor
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

    /*
    Sample body

    {
  "ID": "string",
  "Name": "string",
  "Description": "string",
  "Culture": "string",
  "Active": true,
  "CreatedDate": "string",
  "ModifiedDate": "string",
  "PublishDate": "string",
  "URL": "string",
  "AuthKey": "string",
  "NumberOfIntents": 0,
  "NumberOfEntities": 0,
  "IsTrained": true
}
    */
    self.updateApp = ({
        parameters,
        body,
        appId
    }) => {

        constructor
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

    return self;
};

module.exports = apps;