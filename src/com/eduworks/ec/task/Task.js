/**
 *  Class with static methods to prevent unnecessary overhead with small operations that don't prevent drawing,
 *  but to setTimeout on methods that slow down the browser sufficiently to interfere with drawing.
 *  Uses a framerate timer to determine between the two.
 *
 *  @class Task
 */
let Task = null;
module.exports = Task = class Task {
	static constructor() {
		Task.updateFrame();
	}
	static desiredFps = 2;
	static lastFrame = null;
	static tasks = [];
	static delayedFunctions = 0;
	static immediateFunctions = 0;
	static calledFunctions = 0;
	static asyncImmediateFunctions = 0;
	static runningAsyncFunctions = 0;
	static updateFrameHandle = null;
	/**
	 *  Updates the framerate timer/counter.
	 *  @method updateFrame
	 *  @static
	 */
	static updateFrame() {
		Task.updateFrameHandle = setTimeout(function() {
			Task.lastFrame = Date.now();
			if (
				Task.calledFunctions -
					Task.delayedFunctions -
					Task.immediateFunctions ==
				0
			) {
				Task.updateFrameHandle = null;
			} else Task.updateFrame();
		}, 100);
	}
	/**
	 *  Invoke a method now or later based on whether some time has passed since we last drew the screen.
	 *  @param {function()} c Method to invoke
	 *  @return Timeout Handler, can use clearTimeout on it if needed.
	 */
	static immediate(c) {
		var currentMs = Date.now();
		var nextFrameMs = Math.trunc(1000 / Task.desiredFps);
		Task.calledFunctions++;
		if (
			Task.lastFrame == null ||
			currentMs > Task.lastFrame + nextFrameMs
		) {
			if (Task.updateFrameHandle == null) Task.updateFrame();
			return setTimeout(function() {
				Task.delayedFunctions++;
				c();
			}, 0);
		} else {
			Task.immediateFunctions++;
			c();
		}
		return null;
	}
	/**
	 *  Invoke a method at some point in the future, allowing draw methods to occur periodically.
	 *  @param {function()} c Method to invoke
	 *  @return Timeout Handler, can use clearTimeout on it if needed.
	 */
	static asyncImmediate(c) {
		Task.tasks.push(c);
		Task.asyncImmediateFunctions++;
		if (Task.runningAsyncFunctions < 20) {
			Task.runningAsyncFunctions++;
			return setTimeout(function() {
				Task.asyncContinue();
			}, 0);
		}
		return null;
	}
	static asyncContinue() {
		var keepGoing = function() {
			Task.asyncContinue();
		};
		if (Task.tasks.length > 0) {
			var c = Task.tasks.pop();
			c(keepGoing);
		} else Task.runningAsyncFunctions--;
	}
};
