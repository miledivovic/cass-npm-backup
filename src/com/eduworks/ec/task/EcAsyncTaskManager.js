const EcCrypto = require("../crypto/EcCrypto");

module.exports = class EcAsyncTaskManager {
	constructor(workerCount) {
		this.workerList = [];
		for (let i = 0; i < workerCount; i++) {
			this.workerList.push(new EcAsyncTaskWorker());
		}
		let that = this;
		setInterval(function() {
			that.cleanupTasks();
		}, this.taskCleanupInterval);
	}

	taskMap = null;
	workerList = null;
	taskCleanupInterval = 2500;
	addTasks(tasks) {
		let retMap = {};
		if (tasks != undefined) {
			for (let i = 0; i < tasks.length; i++) {
				let task = tasks[i];
				let key = this.addTask(task);
				retMap[key] = task;
			}
		}
		return retMap;
	}
	addTask(task) {
		if (this.taskMap == undefined || this.taskMap == null) {
			this.taskMap = {};
		}
		let key = "";
		while (
			key == "" ||
			this.taskMap[key] != undefined && this.taskMap[key] != null
		) {
			key = EcCrypto.generateUUID();
		}
		this.taskMap[key] = task;
		this.assignNewTask(task);
		this.cleanupTasks();
		return key;
	}
	cleanupTasks() {
		for (let key in this.taskMap) {
			let task = this.taskMap[key];
			if (task.getIsStarted()) {
				let timeoutSec = task.getTimeout();
				if (
					task.getStart().getTime() <
					new Date().getTime() - timeoutSec * 1000
				) {
					task.setComplete();
				}
			}
			if (task.getIsComplete()) {
				delete this.taskMap[key];
			}
		}
	}
	assignNewTask(task) {
		let min = 10000;
		let theGuy = null;
		for (let i = 0; i < this.workerList.length; i++) {
			if (this.workerList[i].getAssignedCount() < min) {
				theGuy = this.workerList[i];
				min = theGuy.getAssignedCount();
			}
		}
		if (theGuy != null) theGuy.assign(task);
	}
};
