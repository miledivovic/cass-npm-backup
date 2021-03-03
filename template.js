if (global.XMLHttpRequest === undefined)
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
else
	var XMLHttpRequest = global.XMLHttpRequest;

var bon = require('browser-or-node');

if (bon.isBrowser) {
  	// do browser only stuff
}

if (bon.isNode) {
	// do node.js only stuff
	var isNodeJs = {};
	var request = require("request");
}
require("text-encoding");

if (global.forge === undefined)
	if (typeof __webpack_require__ === 'function')
	{
		var forge = require("forge");
	}
	else
	{
		isNodeJs.forgeType = "node";
		var forge = require("node-forge");
	}
else
	var forge = global.forge;

var FormData = require('form-data');
var antlr4 = require('antlr4');
var RollupLexer = require('./lib/antlr4/RollupLexer').RollupLexer;
var RollupParser = require('./lib/antlr4/RollupParser').RollupParser;
var RollupListener = require('./lib/antlr4/RollupListener').RollupListener;
var pemJwk = require('pem-jwk');
var base64 = require('base64-arraybuffer');

var crypto = null;
if (crypto === undefined)
try {
  crypto = {subtle:require('crypto').webcrypto};
  console.log(crypto);
} catch (err) {
  crypto = {subtle:null};
}

if (global.window === undefined)
	var window = {
		crypto: crypto
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

//CODE GENERATED HERE

global.forge = forge;
global.FormData = FormData;
global.antlr4 = antlr4;
global.pemJwk = pemJwk;
global.stjs = stjs;
global.generateUUID = generateUUID;
global.RollupLexer = RollupLexer;
global.RollupListener = RollupListener;
global.RollupParser = RollupParser;
global.base64 = base64;
global.jsonld = require('jsonld');
global.UUID = require('pure-uuid');
