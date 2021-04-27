# 4.x.x to 0.5.1

Please migrate your code in a separate branch, as you may need to wait for bug fixes and the like.

## BREAKING:
* All blocking calls are now asynchronous, and the blocking calls have been removed, except for fallback EcCrypto methods.
* All callback based methods now primarily support promise / async / await methods.
* Removed all assertion processing methods except for EcFrameworkGraph.
* Removed rollup rule parsed language.
* Removed /bin/. It was a neat idea.
* Removed dependencies on most JS files in /lib/, except one to facilitate worker based asynchronous cryptography.
* All schema.org objects are now in a schema object. As an example, Thing is now schema.Thing, Person is now schema.Person. Schema.org objects have been updated to the most recent version.
* All CTDL objects are now in a ce object. As an example, CE’s version of Competency is now available under ce.Competency. CTDL objects have been updated to the most recent version.
* All objects have been moved from using a st-js shim to do class definitions to the ECMAScript 6 class object.
* Removed dependencies on antlr4, browser-or-node, pure-uuid, request, text-encoding, xmlhttprequest, and added dependencies to axios, web-worker, promise-worker.
## Migration Guide
### 1. `let out = Ec<something>.getBlocking(id)` -> `let out = await Ec<something>.get(id)`  
`.getBlocking` is gone. This pattern must be migrated throughout. `null` is the default return value if the method fails.
### 2. `Ec<something>.<function>(<parameters>, success, failure)`  
This pattern will continue to function as expected. If failure is omitted, a `new Error(error)` will be thrown instead. The following patterns are available to augment use:  
#### 2.1 `await Ec<something>.<function>(<parameters>,success,failure)`  
All such functions will now return a promise and function with await. If you find one that does not, that is a bug.
#### 2.2 `Ec<something>.<function>(<parameters>,success,failure) .then((output)=>console.log(output)) .catch((error)=>console.error(output))`
* You may use promise chaining in conjunction with callbacks. 
* The callbacks will operate first, and the promise chains will operate second. 
* The callbacks are wired into the promises, so you may `return something` from the callbacks and they will be passed into the promises `.then((something)=>{})`
* The return value from `success` or `failure` will also be available as the result of an `await`ed promise.
* The return value from `success` or `failure` may also be a promise.
* `success` or `failure` methods may be async... that seems obvious, but you never know.
#### 2.3 `Ec<something>.<function>(<parameters>) .then( (output)=>console.log(output)) .catch((error)=>console.error(output))`
You may also omit the callbacks. No callbacks are required. If failure is omitted, a `new Error(error)` will be thrown if an error occurs.
#### 2.4 `await Ec<something>.<function>(<parameters>) .then( (output)=>console.log(output)) .catch((error)=>console.error(output))`
Await on promise based functions also work. This includes search and save and delete!
#### 2.5 `let out = await Ec<something>.<function>(<parameters>)`
Anything that had a `success(output)` can now retreive that `output` using assignment.
* `.search`, `EcEncryptedValue`, `EcFrameworkGraph` and any other methods will either use the `failure` callback or, if it doesn't exist, will `throw new Error(error)` and need `try/catch` blocks or `.catch((error)=>console.error(error))` to catch the errors. 
* `.get` and `Ec<RsaOaep/AesCtr>Async` will `return null` if the operations fail, though you may use a `failure` method if desired, as the callbacks are still supported. These are a special case to mirror the blockable methods.
### 3. `EcAssertion.get<encryptedField> / EcAssertion.set<encryptedField>`
These methods now use awaitable promises to perform their cryptography.
### 4. `else`
If any of these patterns do not work, please ask before working around, as there are expected to be edge cases that have not yet been found.

# 3.x to 4.x

* The cassproject library is no longer created in the eduworks/ec library, and resides entirely within the cass-npm repository. 
* All functions work in an equivalent manner. 
* You must combine cass-npm with a browserify type method to make it usable on the web.
