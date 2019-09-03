var fs = require('fs');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require("text-encoding");
var forge = require("forge");
var FormData = require('form-data');
var antlr4 = require('antlr4/index');
var pemJwk = require('pem-jwk');

var window = {
	crypto: null
};
var Worker = null;
var document = {};
var view = {};
var localStorage = {};

function load(lib) {
	if (fs.existsSync(lib)) {
		return fs.readFileSync(lib);
	} else if (fs.existsSync(module.filename.replace("index.js", "") + lib)) {
		return fs.readFileSync(module.filename.replace("index.js", "") + lib);
	} else if (fs.existsSync("./node_modules/cassproject/" + lib)) {
		return fs.readFileSync("./node_modules/cassproject/" + lib);
	} else if (fs.existsSync("/usr/lib/node_modules/" + lib)) {
		return fs.readFileSync("/usr/lib/node_modules/" + lib);
	}
}

var esprima = require('esprima');
var results = [];
eval(load.call(this, "lib/random.js") + "");
eval(load.call(this, "lib/blobHelper.js") + "");
eval(load.call(this, "lib/base64toArrayBuffer.js") + "");
eval(load.call(this, "lib/stjs.js") + "");
eval(load.call(this, "lib/ec.base.js") + "");
results.push(esprima.parse(load.call(this, "lib/ec.base.js") + ""));
eval(load.call(this, "lib/ec.crypto.js") + "");
results.push(esprima.parse(load.call(this, "lib/ec.crypto.js") + ""));
eval(load.call(this, "lib/org.json-ld.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.json-ld.js") + ""));
eval(load.call(this, "lib/org.cassproject.schema.general.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.general.js") + ""));
eval(load.call(this, "lib/org.schema.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.schema.js") + ""));
eval(load.call(this, "lib/org.w3.skos.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.w3.skos.js") + ""));
eval(load.call(this, "lib/org.cassproject.schema.ebac.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.ebac.js") + ""));
eval(load.call(this, "lib/org.cassproject.schema.cass.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.cass.js") + ""));
eval(load.call(this, "lib/com.eduworks.schema.js") + "");
results.push(esprima.parse(load.call(this, "lib/com.eduworks.schema.js") + ""));
eval(load.call(this, "lib/ebac.identity.js") + "");
results.push(esprima.parse(load.call(this, "lib/ebac.identity.js") + ""));
eval(load.call(this, "lib/ebac.repository.js") + "");
results.push(esprima.parse(load.call(this, "lib/ebac.repository.js") + ""));
eval(load.call(this, "lib/cass.competency.js") + "");
results.push(esprima.parse(load.call(this, "lib/cass.competency.js") + ""));
eval(load.call(this, "lib/RollupListener.js") + "");
eval(load.call(this, "lib/RollupLexer.js") + "");
eval(load.call(this, "lib/RollupParser.js") + "");
eval(load.call(this, "lib/cass.rollup.js") + "");
results.push(esprima.parse(load.call(this, "lib/cass.rollup.js") + ""));

var decls = "";

for (var j = 0; j < results.length; j++)
	for (var i = 0; i < results[j].body.length; i++)
		if (results[j].body[i].declarations != null)
			decls += "\nglobal." + results[j].body[i].declarations[0].id.name + " = " + results[j].body[i].declarations[0].id.name;

eval(decls);

global.forge = forge;
global.FormData = FormData;
global.antlr4 = antlr4;
global.pemJwk = pemJwk;
global.stjs = stjs;