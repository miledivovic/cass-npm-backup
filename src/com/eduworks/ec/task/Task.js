/**
 *  Class with static methods to prevent unnecessary overhead with small operations that don't prevent drawing,
 *  but to setTimeout on methods that slow down the browser sufficiently to interfere with drawing.
 *  Uses a framerate timer to determine between the two.
 * 
 *  @class Task
 */
module.exports = class Task{
    constructor.desiredFps = 2;
    constructor.lastFrame = null;
    constructor.tasks = new Array();
    constructor.delayedFunctions = 0;
    constructor.immediateFunctions = 0;
    constructor.calledFunctions = 0;
    constructor.asyncImmediateFunctions = 0;
    constructor.runningAsyncFunctions = 0;
    constructor.updateFrameHandle = null;
    /**
     *  Updates the framerate timer/counter.
     *  @method updateFrame
     *  @static
     */
    constructor.updateFrame = function() {
        Task.updateFrameHandle = setTimeout(function() {
            Task.lastFrame = Date.now();
            if (Task.calledFunctions - Task.delayedFunctions - Task.immediateFunctions == 0) {
                Task.updateFrameHandle = null;
            } else 
                Task.updateFrame();
        }, 100);
    };
    /**
     *  Invoke a method now or later based on whether some time has passed since we last drew the screen.
     *  @param {function()} c Method to invoke
     *  @return Timeout Handler, can use clearTimeout on it if needed.
     */
    constructor.immediate = function(c) {
        var currentMs = Date.now();
        var nextFrameMs = stjs.trunc(1000 / Task.desiredFps);
        Task.calledFunctions++;
        if (EcRemote.async == true && (Task.lastFrame == null || currentMs > Task.lastFrame + nextFrameMs)) {
            if (Task.updateFrameHandle == null) 
                Task.updateFrame();
            return setTimeout(function() {
                Task.delayedFunctions++;
                c();
            }, 0);
        } else {
            Task.immediateFunctions++;
            c();
        }
        return null;
    };
    /**
     *  Invoke a method at some point in the future, allowing draw methods to occur periodically.
     *  @param {function()} c Method to invoke
     *  @return Timeout Handler, can use clearTimeout on it if needed.
     */
    constructor.asyncImmediate = function(c) {
        Task.tasks.push(c);
        Task.asyncImmediateFunctions++;
        if (Task.runningAsyncFunctions < 20) {
            Task.runningAsyncFunctions++;
            return setTimeout(function() {
                Task.asyncContinue();
            }, 0);
        }
        return null;
    };
    constructor.asyncContinue = function() {
        var keepGoing = function() {
            Task.asyncContinue();
        };
        if (Task.tasks.length > 0) {
            var c = Task.tasks.pop();
            c(keepGoing);
        } else 
            Task.runningAsyncFunctions--;
    };
}, {tasks: {name: "Array", arguments: ["CallbackOrFunction"]}, updateFrameHandle: "Object"}, {});
(function() {
    Task.updateFrame();
})();
