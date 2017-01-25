var fs = require('fs');

require("node-jquery-xhr");
var forge = require("node-forge");
var FormData = require('form-data');
var antlr4 = require('antlr4/index');

var window = null;
var document = {};
var view = {};
var localStorage = {};

eval(fs.readFileSync("./node_modules/cassproject/lib/random.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/blobHelper.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/stjs.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/ec.base.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/ec.crypto.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/org.json-ld.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/org.cassproject.schema.general.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/org.schema.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/org.cassproject.schema.ebac.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/org.cassproject.schema.cass.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/ebac.identity.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/ebac.repository.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/cass.competency.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/RollupListener.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/RollupLexer.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/RollupParser.js")+"");
eval(fs.readFileSync("./node_modules/cassproject/lib/cass.rollup.js")+"");

global.EcRepository = EcRepository;
global.EcRemoteIdentityManager = EcRemoteIdentityManager;
global.EcIdentityManager = EcIdentityManager;
global.EcFramework = EcFramework;
global.EcCompetency = EcCompetency;
global.EcAlignment = EcAlignment;
global.EcLevel = EcLevel;
global.EcPk = EcPk;
global.EcPpk = EcPpk;
global.EcAssertion = EcAssertion;
