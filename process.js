var fs = require('fs');
var theOutput = "";

function output(str) {
	theOutput += str + "\n";
}

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
output(load.call(this, "lib/random.js") + "");
output(load.call(this, "lib/blobHelper.js") + "");
output(load.call(this, "lib/stjs.js") + "");
output(load.call(this, "lib/ec.base.js") + "");
results.push(esprima.parse(load.call(this, "lib/ec.base.js") + ""));
output(load.call(this, "lib/ec.crypto.js") + "");
results.push(esprima.parse(load.call(this, "lib/ec.crypto.js") + ""));
output(load.call(this, "lib/org.json-ld.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.json-ld.js") + ""));
output(load.call(this, "lib/org.cassproject.schema.general.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.general.js") + ""));
output(load.call(this, "lib/org.schema.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.schema.js") + ""));
output(load.call(this, "lib/org.w3.skos.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.w3.skos.js") + ""));
output(load.call(this, "lib/org.cassproject.schema.ebac.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.ebac.js") + ""));
output(load.call(this, "lib/org.cassproject.schema.cass.js") + "");
results.push(esprima.parse(load.call(this, "lib/org.cassproject.schema.cass.js") + ""));
output(load.call(this, "lib/com.eduworks.schema.js") + "");
results.push(esprima.parse(load.call(this, "lib/com.eduworks.schema.js") + ""));
output(load.call(this, "lib/ebac.identity.js") + "");
results.push(esprima.parse(load.call(this, "lib/ebac.identity.js") + ""));
output(load.call(this, "lib/ebac.repository.js") + "");
results.push(esprima.parse(load.call(this, "lib/ebac.repository.js") + ""));
output(load.call(this, "lib/cass.competency.js") + "");
results.push(esprima.parse(load.call(this, "lib/cass.competency.js") + ""));
output(load.call(this, "lib/RollupListener.js") + "");
output(load.call(this, "lib/RollupLexer.js") + "");
output(load.call(this, "lib/RollupParser.js") + "");
output(load.call(this, "lib/cass.rollup.js") + "");
results.push(esprima.parse(load.call(this, "lib/cass.rollup.js") + ""));

var decls = "";

for (var j = 0; j < results.length; j++)
	for (var i = 0; i < results[j].body.length; i++)
		if (results[j].body[i].declarations != null)
			decls += "\nglobal." + results[j].body[i].declarations[0].id.name + " = " + results[j].body[i].declarations[0].id.name;

output(decls);

fs.writeFileSync("output.js", (load.call(this, "template.js") + "").replace("//CODE GENERATED HERE", theOutput));