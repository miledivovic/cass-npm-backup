var fs = require('fs');

require("node-jquery-xhr");
var forge = require("node-forge");
var FormData = require('form-data');
var antlr4 = require('antlr4/index');
var pemJwk = require('pem-jwk');

var window = null;
var document = {};
var view = {};
var localStorage = {};

function load(lib){
	if (fs.existsSync(lib))
	{
		return fs.readFileSync(lib);
	}
	else if (fs.existsSync(module.filename.replace("index.js","")+lib))
	{
		return fs.readFileSync(module.filename.replace("index.js","")+lib);
	}
	else if (fs.existsSync("./node_modules/cassproject/"+lib))
	{
		return fs.readFileSync("./node_modules/cassproject/"+lib);
	}
	else if (fs.existsSync("/usr/lib/node_modules/"+lib))
	{
		return fs.readFileSync("/usr/lib/node_modules/"+lib);
	}
}

eval(load.call(this,"lib/random.js")+"");
eval(load.call(this,"lib/blobHelper.js")+"");
eval(load.call(this,"lib/base64toArrayBuffer.js")+"");
eval(load.call(this,"lib/stjs.js")+"");
eval(load.call(this,"lib/ec.base.js")+"");
eval(load.call(this,"lib/ec.crypto.js")+"");
eval(load.call(this,"lib/org.json-ld.js")+"");
eval(load.call(this,"lib/org.cassproject.schema.general.js")+"");
eval(load.call(this,"lib/org.schema.js")+"");
eval(load.call(this,"lib/org.w3.skos.js")+"");
eval(load.call(this,"lib/org.cassproject.schema.ebac.js")+"");
eval(load.call(this,"lib/org.cassproject.schema.cass.js")+"");
eval(load.call(this,"lib/ebac.identity.js")+"");
eval(load.call(this,"lib/ebac.repository.js")+"");
eval(load.call(this,"lib/cass.competency.js")+"");
eval(load.call(this,"lib/RollupListener.js")+"");
eval(load.call(this,"lib/RollupLexer.js")+"");
eval(load.call(this,"lib/RollupParser.js")+"");
eval(load.call(this,"lib/cass.rollup.js")+"");

global.EcRemote = EcRemote;
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
