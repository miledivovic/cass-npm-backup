cass-npm

CaSS NPM is the CaSS Library, published and available on NPM.

# Getting Started as a user of the library
We're assuming you're coming from the NPM / GitHub space. To see a developer guide, go to https://devs.cassproject.org/

* `npm install --save cassproject`

# Getting Started as a contributor

The CaSS Library is a library, and as such can only be run self-contained against unit tests.

# Dependencies

 * `git clone --recurse-submodules -b <branch> https://github.com/cassproject/cass-npm` - Get the code.
 * `npm i` - Install dependencies.

# Tests
Running `npm test` requires Docker.

## Release testing

 * `npm test` - Runs unit tests in docker images against the CaSS 1.5, 1.2, 1.3, and 1.4 repositories using Node versions 12-16 and Cypress against Edge, Chrome, Firefox and Electron. Takes some time.

## Development unit testing
Development unit tests presume you have a CaSS Repository running on `localhost:80`. You may get one by running `docker run -d --name cass-test -p80:80 cassproject/cass:1.5.0`

 * `npm automocha` - Runs mocha unit tests against current Node environment. Will rerun unit tests on-save.
 * `npm mocha` - Runs mocha unit tests.
 * `npm webpack:cypress` - Runs unit tests in Cypress against Chrome (headless)
 * `npm webpack:cypressEdge` - Runs unit tests in Cypress against Edge (headless)
 * `npm webpack:cypress:open` - Runs unit tests in Cypress in development mode using webpack packaging. Will rerun unit tests on-save.
 * `npm browserify:cypress:open` - Runs unit tests in Cypress in development mode using browserify packaging. Will rerun unit tests on-save.

## Publish checklist

 * Review dependencies, autocomplete version numbers
 * Increment version number in package.json and yuidoc.json
 * Update documentation, `npm run docs`
 * Delete yuidocs from package.json, delete package-lock.json
 * `npm install`
 * `npm test` - Must not fail any tests.
 * Commit changes to GitHub.
 * Tag release with semantic version from package.json, push tag.
 * `npm publish` (must be `npm login`ed) 

# Changelog

## 1.5.0
* Version increment

## 0.5.31
* Optimized performance of EcFrameworkGraph

## 0.5.30
* Optimized performance of EcFrameworkGraph
* Library Updates

## 0.5.28
* Bug fixes and library updates.

## 0.5.26
* Revised method of SSO based decryption.

## 0.5.23
* Securing Proxy data structures and repository.
* Negative assertion handling in graphs was corrected.

## 0.5.20
* Bug fixes
* No longer depends on yuidoc, as yuidoc is included as part of the documentation script.

## 0.5.15 to 0.5.19
* Bug fixes
* Wide variety of Unit tests on multiple versions of CaSS and in browsers
* Updated CTDLASN CSV import
* Added support for proxy servers, separating where data goes from where data belongs. `repo.selectedServerProxy`

## 0.5.8 to 0.5.15
* Bug fixes.
* Can now POST unlimited amounts of data.
* Added unit tests in node (mocha), cypress

## 0.5.4 to 0.5.8
* Bug fixes.
* Performance improvements. Runs ~10x faster than 4.x.x.
* Added mocha test suite. `npm run mocha` or `npm run automocha` to execute.

## 0.5.4 to 0.5.5
* Now testing against Node 12-16
* Fixed node async worker based cryptography.

## 0.5.3 to 0.5.4
* Bug fixes. Dependency updates.

## 0.5.2 to 0.5.3
EcIdentityManager is now instantiatable and may be passed into many library functions. Many method signatures have changed.

### BREAKING:
* All static EcIdentityManager methods are now instance methods.

### UPDATES:
* All functions with web interactions will optionally allow `repo` to be specified.
* All functions with web or decryption interactions will optionally allow `eim` to be specified.
* If `repo` is not specified, the library will employ several methods for operating on that data (in the case of get, delete). If it is specified, the library will strictly only operate on data in that repository. If that is not the case, that is now a defect.
* If `eim` is not specified, the library will use a default EcIdentityManager found at `EcIdentityManager.default` to perform any necessary operations. In an enforced multitenancy situation, we recommend setting EcIdentityManager.default to null, in order to force errors.
* If you are using `eim`, we strongly recommend disabling caching to prevent any tenancy leaks.

### Migration Guide

#### 1. Replace all: `EcIdentityManager.` -> `EcIdentityManager.default.`
As the new EcIdentityManager is instanceable and the static methods and properties are gone, use the default EcIdentityManager.

## 0.5.1 to 0.5.2

### CAUTION:
* Caching has been altered. Results that are not found are now stored in the cache and used to speed up (failed) retreival of data.

## 4.x.x to 0.5.1

Please migrate your code in a separate branch, as you may need to wait for bug fixes and the like.

### BREAKING:
* All blocking calls are now asynchronous, and the blocking calls have been removed, except for fallback EcCrypto methods.
* All callback based methods now primarily support promise / async / await methods.
* Removed all assertion processing methods except for EcFrameworkGraph.
* Removed rollup rule parsed language.
* Removed /bin/. It was a neat idea.
* Removed dependencies on most JS files in /lib/, except one to facilitate worker based asynchronous cryptography.
* All schema.org objects are now in a schema object. As an example, `Thing` is now `schema.Thing`, `Person` is now `schema.Person`. Schema.org objects have been updated to the most recent version.
* All CTDL objects are now in a `ce` object. As an example, CE’s version of `Competency` is now available under `ce.Competency`. CTDL objects have been updated to the most recent version.
* All objects have been moved from using a st-js shim to do class definitions to the ECMAScript 6 class object.
* Removed dependencies on antlr4, browser-or-node, pure-uuid, request, text-encoding, xmlhttprequest, and added dependencies to axios, web-worker, promise-worker.
### Migration Guide
#### 1. `let out = Ec<something>.getBlocking(id)` -> `let out = await Ec<something>.get(id)`  
`.getBlocking` is gone. This pattern must be migrated throughout. `null` is the default return value if the method fails.
#### 2. `Ec<something>.<function>(<parameters>, success, failure)`  
This pattern will continue to function as expected. If failure is omitted, a `new Error(error)` will be thrown instead. The following patterns are available to augment use:  
##### 2.1 `await Ec<something>.<function>(<parameters>,success,failure)`  
All such functions will now return a promise and function with await. If you find one that does not, that is a bug.
##### 2.2 `Ec<something>.<function>(<parameters>,success,failure) .then((output)=>console.log(output)) .catch((error)=>console.error(output))`
* You may use promise chaining in conjunction with callbacks. 
* The callbacks will operate first, and the promise chains will operate second. 
* The callbacks are wired into the promises, so you may `return something` from the callbacks and they will be passed into the promises `.then((something)=>{})`
* The return value from `success` or `failure` will also be available as the result of an `await`ed promise.
* The return value from `success` or `failure` may also be a promise.
* `success` or `failure` methods may be async... that seems obvious, but you never know.
##### 2.3 `Ec<something>.<function>(<parameters>) .then( (output)=>console.log(output)) .catch((error)=>console.error(output))`
You may also omit the callbacks. No callbacks are required. If failure is omitted, a `new Error(error)` will be thrown if an error occurs.
##### 2.4 `await Ec<something>.<function>(<parameters>) .then( (output)=>console.log(output)) .catch((error)=>console.error(output))`
Await on promise based functions also work. This includes search and save and delete!
##### 2.5 `let out = await Ec<something>.<function>(<parameters>)`
Anything that had a `success(output)` can now retreive that `output` using assignment.
* `.search`, `EcEncryptedValue`, `EcFrameworkGraph` and any other methods will either use the `failure` callback or, if it doesn't exist, will `throw new Error(error)` and need `try/catch` blocks or `.catch((error)=>console.error(error))` to catch the errors. 
* `.get` and `Ec<RsaOaep/AesCtr>Async` will `return null` if the operations fail, though you may use a `failure` method if desired, as the callbacks are still supported. These are a special case to mirror the blockable methods.
#### 3. `EcAssertion.get<encryptedField> / EcAssertion.set<encryptedField>`
These methods now use awaitable promises to perform their cryptography.
#### 4. `else`
If any of these patterns do not work, please ask before working around, as there are expected to be edge cases that have not yet been found.
#### 5. Webpack configuration
If you're using the CaSS libraries with Webpack in the browser, you may need to add a rule to the Webpack configuration so that the application can understand the modern syntax used in the libraries. In the CaSS Editor application, this was accomplished by adding the following to the `configureWebpack` section of `vue.config.js`.
```
module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: {test: /node_modules/, // Exclude libraries in node_modules ...
                not: [
                    // Except for a few of them that needs to be transpiled because they use modern syntax
                    /cassproject/
                ]},
            use: {
                loader: 'babel-loader'
            }
        }
    ]
}
```

## 3.x to 4.x

* The cassproject library is no longer created in the eduworks/ec library, and resides entirely within the cass-npm repository. 
* All functions work in an equivalent manner. 
* You must combine cass-npm with a browserify type method to make it usable on the web.
