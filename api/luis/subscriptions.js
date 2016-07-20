const {
    verifyAndMakeRequest
} = require('../../lib/api');

const subscriptions = ({
    API_KEY
}) => {
    let self = this;

    self.addSubscriptionKey = ({
        body
    }) => {

        operation = {
            "name": "addSubscriptionKey",
            "path": "luis/v1.0/prog/subscriptions",
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

    self.deleteSubscriptionByKey = ({
        subscriptionKey
    }) => {

        operation = {
            "name": "deleteSubscriptionByKey",
            "path": "luis/v1.0/prog/subscriptions/" + subscriptionKey,
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

    self.getSubscriptions = ({
    }) => {

        operation = {
            "name": "GetApp",
            "path": "luis/v1.0/prog/subscriptions/",
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

    return self;
};

module.exports = subscriptions;