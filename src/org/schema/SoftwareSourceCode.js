const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/SoftwareSourceCode
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 * @author schema.org
 * @class SoftwareSourceCode
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class SoftwareSourceCode extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SoftwareSourceCode");
	}

	/**
	 * Schema.org/runtimePlatform
	 * Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
	 *
	 * @property runtimePlatform
	 * @type Text
	 */
	runtimePlatform;

	/**
	 * Schema.org/programmingLanguage
	 * The computer programming language.
	 *
	 * @property programmingLanguage
	 * @type Text
	 */
	programmingLanguage;

	/**
	 * Schema.org/codeSampleType
	 * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
	 *
	 * @property codeSampleType
	 * @type Text
	 */
	codeSampleType;

	/**
	 * Schema.org/codeRepository
	 * Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).
	 *
	 * @property codeRepository
	 * @type URL
	 */
	codeRepository;

	/**
	 * Schema.org/runtime
	 * Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
	 *
	 * @property runtime
	 * @type Text
	 */
	runtime;

	/**
	 * Schema.org/targetProduct
	 * Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.
	 *
	 * @property targetProduct
	 * @type SoftwareApplication
	 */
	targetProduct;

	/**
	 * Schema.org/sampleType
	 * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
	 *
	 * @property sampleType
	 * @type Text
	 */
	sampleType;

}