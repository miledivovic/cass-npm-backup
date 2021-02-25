 var antlr4 = require('antlr4');
   var RollupLexer = require('./lib/antlr4/RollupLexer').RollupLexer;
   var RollupParser = require('./lib/antlr4/RollupParser').RollupParser;
   var RollupListener = require('./lib/antlr4/RollupListener').RollupListener;

   var input = "[competency:http://localhost/api/data/schema.cassproject.org.0.4.Competency/1e851981-5fb3-4baf-8405-9d749e684eac AND confidence:>0.6] AND [competency:http://localhost/api/data/schema.cassproject.org.0.4.Competency/86328acf-808e-4959-9236-e1dbb1199d63 AND confidence:>0.6] AND [competency:http://localhost/api/data/schema.cassproject.org.0.4.Competency/7a749a6e-1ba2-4a55-a250-cbc8a8201ea5 AND confidence:>0.6] AND [competency:http://localhost/api/data/schema.cassproject.org.0.4.Competency/76a3ad63-07dc-4c2a-88ec-049f78d461dc AND confidence:>0.6]"
   var chars = new antlr4.InputStream(input);
   var lexer = new RollupLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new RollupParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.s();