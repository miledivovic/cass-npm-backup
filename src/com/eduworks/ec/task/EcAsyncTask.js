module.exports = class EcAsyncTask {
	constructor(job, param1, param2, param3, param4) {
		this.creationTime = new Date();
		this.job = job;
		this.args = [];
		this.timeoutSec = 20;
		if (param1 != null && param1 != undefined) this.args.push(param1);
		if (param2 != null && param2 != undefined) this.args.push(param2);
		if (param3 != null && param2 != undefined) this.args.push(param3);
		if (param4 != null && param4 != undefined) this.args.push(param4);
	}
	job = null;
	args = null;
	timeoutSec = 0;
	creationTime = null;
	isComplete = false;
	isStarted = false;
	start = null;
	stop = null;
	error = null;
	setJob(job) {
		this.job = job;
	}
	getArguments() {
		return this.args;
	}
	setArguments(_arguments) {
		this.args = [];
		for (var i = 0; i < arguments.length; i++) {
			this.args[i] = arguments[i];
		}
	}
	getTimeout() {
		return this.timeoutSec;
	}
	setTimeout(timeout) {
		this.timeoutSec = timeout;
	}
	getCreationTime() {
		return this.creationTime;
	}
	getIsComplete() {
		return this.isComplete;
	}
	setComplete() {
		this.stop = new Date();
		this.isComplete = true;
	}
	getIsStarted() {
		return this.isStarted;
	}
	getStart() {
		return this.start;
	}
	doTask(_arguments) {
		var ret = undefined;
		if (!this.isStarted) {
			this.start = new Date();
			this.isStarted = true;
			try {
				if (arguments.length == 0) {
					ret = this.invoke0();
				} else if (arguments.length == 1) {
					ret = this.invoke1(arguments[0]);
				} else if (arguments.length == 2) {
					ret = this.invoke2(arguments[0], arguments[1]);
				} else if (arguments.length == 3) {
					ret = this.invoke3(
						arguments[0],
						arguments[1],
						arguments[2]
					);
				} else if (arguments.length == 4) {
					ret = this.invoke4(
						arguments[0],
						arguments[1],
						arguments[2],
						arguments[3]
					);
				} else {
					ret = undefined;
				}
			} catch (e) {
				this.stop = new Date();
				this.isComplete = true;
				this.error = e.getMessage();
				throw e;
			}
		}
		return ret;
	}
	invoke0 = function() {
		var that = this;
		var ret = this.job.call(this, function() {
			that.setComplete();
		});
		return ret;
	};
	invoke1 = function(arg1) {
		var that = this;
		var ret = this.job.call(this, arg1, function() {
			that.setComplete();
		});
		return ret;
	};
	invoke2 = function(arg1, arg2) {
		var that = this;
		var ret = this.job.call(this, arg1, arg2, function() {
			that.setComplete();
		});
		return ret;
	};
	invoke3 = function(arg1, arg2, arg3) {
		var that = this;
		var ret = this.job.call(this, arg1, arg2, arg3, function() {
			that.setComplete();
		});
		return ret;
	};
	invoke4 = function(arg1, arg2, arg3, arg4) {
		var that = this;
		var ret = this.job.call(this, arg1, arg2, arg3, arg4, function() {
			that.setComplete();
		});
		return ret;
	};
};
