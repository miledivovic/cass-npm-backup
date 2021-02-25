var RollupRuleInterface = function(input, processor) {
    var chars = new antlr4.InputStream(input);
    var lexer = new RollupLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    this.parser = new RollupParser(tokens);
    this.parser.buildParseTrees = true;
    this.listener = new RollupListener();
    this.processor = processor;
    var me = this;
    this.listener.enterS = function(ctx) {
        me.processor.enterS(ctx);
    };
    this.listener.exitS = function(ctx) {
        me.processor.exitS(ctx);
        me.success(true);
    };
    this.listener.exitToken = function(ctx) {
        me.processor.exitToken(ctx);
    };
    this.listener.enterQuery = function(ctx) {
        me.processor.enterQuery(ctx);
    };
    this.listener.exitQuery = function(ctx) {
        me.processor.exitQuery(ctx);
    };
    this.listener.exitInnerquery = function(ctx) {
        me.processor.exitInnerquery(ctx);
    };
    this.listener.exitLogical_or_math_operator = function(ctx) {
        me.processor.exitLogical_or_math_operator(ctx);
    };
    this.parser.addParseListener(this.listener);
};
RollupRuleInterface = stjs.extend(RollupRuleInterface, null, [], function(constructor, prototype) {
    prototype.logFunction = null;
    prototype.success = null;
    prototype.failure = null;
    prototype.listener = null;
    prototype.parser = null;
    prototype.processor = null;
    prototype.go = function() {
        this.processor.logFunction = this.logFunction;
        this.processor.success = this.success;
        this.processor.failure = this.failure;
        this.parser.s();
    };
}, {logFunction: {name: "Callback1", arguments: ["Object"]}, success: {name: "Callback1", arguments: [null]}, failure: {name: "Callback1", arguments: [null]}, listener: "RollupListener.RollupListener", parser: "RollupParser.RollupParser", processor: "RollupRuleProcessor"}, {});
