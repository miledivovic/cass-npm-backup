
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

var fs = require('fs');
var theOutput = "";

function output(str) {
	theOutput += str + "\n";
}

var prettier = require('prettier');

function decomment(jsCodeStr) {
  const options = { printWidth: 160, singleQuote: true, trailingComma: 'none' };

  // actually strip comments:
  options.parser = (text, { babel }) => {
    const ast = babel(text);
    delete ast.comments;
    return ast;
  };

  return prettier.format(jsCodeStr, options);
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

var glob = require( 'glob' )
  , path = require( 'path' );

var files = glob.sync( './src/*/**/*.js' );
var orderedFiles = [];
var dependencyChain = {};
var fileData = {};
for (var file of files)
{
	var sa = file.split("/").pop().replace(".js","");
	dependencyChain[file] = [];
	var filea = fileData[file] = decomment(fs.readFileSync(path.resolve(file))+"");
	//console.log(filea);
	for (var ofile of orderedFiles)
	{
		var sb = ofile.split("/").pop().replace(".js","");
		if (sa == sb) continue;
		var fileb = fileData[ofile];
		//if (filea.indexOf(", "+sb+", ") != -1)
		if (filea.search("[^\\w\\\"\\']"+sb+"[^\\w\\\"\\']") != -1)
		{
			dependencyChain[file].push(ofile);
		}
		//if (fileb.indexOf(", "+sa+", ") != -1)
		if (fileb.search("[^\\w\\\"\\']"+sa+"[^\\w\\\"\\']") != -1)
		{
			dependencyChain[ofile].push(file);
		}
	}
	orderedFiles.push(file);
}
var removeItemOnce = function(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
orderedFiles = [];
var lastDependencyCount = Object.keys(dependencyChain).length;
while (Object.keys(dependencyChain).length > 0)
{	
	for (var key in dependencyChain)
	{
		if (dependencyChain[key].length == 0)
		{
			orderedFiles.push(key);
			for (var key2 in dependencyChain)
			{
				dependencyChain[key2] = removeItemOnce(dependencyChain[key2],key);
			}
			delete dependencyChain[key];
		}
	}
	if (lastDependencyCount == Object.keys(dependencyChain).length)
	{
		console.log("Dependency loop in here somewhere. Check dependencies.json for more detail.");
		fs.writeFileSync("dependencies.json",JSON.stringify(dependencyChain,null,2));
	}
}
orderedFiles.forEach( function( file ) {
  output(load.call(this, path.resolve( file )) + "");
  results.push(esprima.parse(load.call(this, path.resolve( file )) + ""));
});

var decls = "";

for (var j = 0; j < results.length; j++)
	for (var i = 0; i < results[j].body.length; i++)
		if (results[j].body[i].declarations != null)
			decls += "\nif (global." + results[j].body[i].declarations[0].id.name + " === undefined) global." + results[j].body[i].declarations[0].id.name + " = " + results[j].body[i].declarations[0].id.name;

output(decls);

fs.writeFileSync("index.js", (load.call(this, "template.js") + "").replace("//CODE GENERATED HERE", theOutput));