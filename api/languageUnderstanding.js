const {
    verifyAndMakeRequest
} = require("../lib/api");

const languageUnderstanding = ({
    API_KEY
}) =>
{
    let self = this;

    self.apps = require("./luis/apps.js")({ API_KEY: API_KEY });
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
    self.luisSearch = require("./luis/luisSearch.js")({ API_KEY: API_KEY });
    self.models = require("./luis/models.js")({ API_KEY: API_KEY });
    self.patterns = require("./luis/patterns.js")({ API_KEY: API_KEY });
    self.personalAssistantApps = require("./luis/personalAssistantApps.js")({ API_KEY: API_KEY });
    self.phraselists = require("./luis/phraselists.js")({ API_KEY: API_KEY });
    self.prebuilts = require("./luis/prebuilts.js")({ API_KEY: API_KEY });
    self.predict = require("./luis/predict.js")({ API_KEY: API_KEY });
    self.publish = require("./luis/publish.js")({ API_KEY: API_KEY });
    self.publishConfigurations = require("./luis/publishConfigurations.js")({ API_KEY: API_KEY });
    self.query = require("./luis/query.js")({ API_KEY: API_KEY });
    self.queryLogs = require("./luis/queryLogs.js")({ API_KEY: API_KEY });
    self.sample = require("./luis/sample.js")({ API_KEY: API_KEY });
    self.subscriptions = require("./luis/subscriptions.js")({ API_KEY: API_KEY });
    self.train = require("./luis/train.js")({ API_KEY: API_KEY });

    return self;
};

module.exports = languageUnderstanding;