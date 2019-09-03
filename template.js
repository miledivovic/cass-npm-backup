if (global.XMLHttpRequest === undefined)
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
else
	var XMLHttpRequest = global.XMLHttpRequest;

require("text-encoding");
if (global.forge === undefined)
	if (typeof __webpack_require__ === 'function')
		var forge = require("forge");
	else
		var forge = require("node-forge");
else
	var forge = global.forge;
var FormData = require('form-data');
var antlr4 = require('antlr4/index');
var pemJwk = require('pem-jwk');

if (global.window === undefined)
	var window = {
		crypto: null
	};
else
	var window = global.window;
if (global.Worker === undefined)
	var Worker = null;
else
	var Worker = global.Worker;
if (global.document === undefined)
	var document = {};
else
	var document = global.document;
if (global.view === undefined)
	var view = {};
else
	var view = global.view;
if (global.localStorage === undefined)
	var localStorage = {};
else
	var localStorage = global.localStorage;

var esprima = require('esprima');
var results = [];

//CODE GENERATED HERE

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