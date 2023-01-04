const Cass = require("../Cass.js");

const schema = {
	"CreativeWork": require("../../../../schema/CreativeWork.js")
};
/**
 *  A Directory is a collection of frameworks and resources.
 *
 *  @author kristin.wood@eduworks.com
 *  @class Directory
 *  @module org.cassproject
 *  @extends CreativeWork
 */
module.exports = class Directory extends schema.CreativeWork {
	constructor() {
		super();
		this.setContextAndType(Cass.context, Directory.myType);
	}
	static TYPE_0_6 = "https://schema.cassproject.org/0.4/Directory";
	static myType = this.TYPE_0_6;
	parentDirectory = null;
	upgrade() {
		super.upgrade();
	}
	getTypes() {
		let a = [];
		a.push(Directory.TYPE_0_6);
		return a;
	}
};
