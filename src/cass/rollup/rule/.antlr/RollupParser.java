// Generated from c:\workspace\cass-npm\src\cass\rollup\rule\Rollup.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RollupParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NUMBER=1, BOOLEAN=2, LOGICAL_OPERATOR=3, MATH_OPERATOR=4, QUANTATIVE_OPERATOR=5, 
		WS=6, KEY=7, LEFT_BRACE=8, RIGHT_BRACE=9, VALUE=10;
	public static final int
		RULE_s = 0, RULE_token = 1, RULE_query = 2, RULE_innerquery = 3, RULE_logical_or_math_operator = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"s", "token", "query", "innerquery", "logical_or_math_operator"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "BOOLEAN", "LOGICAL_OPERATOR", "MATH_OPERATOR", "QUANTATIVE_OPERATOR", 
			"WS", "KEY", "LEFT_BRACE", "RIGHT_BRACE", "VALUE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Rollup.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RollupParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class SContext extends ParserRuleContext {
		public Logical_or_math_operatorContext cLogic;
		public List<TokenContext> token() {
			return getRuleContexts(TokenContext.class);
		}
		public TokenContext token(int i) {
			return getRuleContext(TokenContext.class,i);
		}
		public List<TerminalNode> WS() { return getTokens(RollupParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(RollupParser.WS, i);
		}
		public List<Logical_or_math_operatorContext> logical_or_math_operator() {
			return getRuleContexts(Logical_or_math_operatorContext.class);
		}
		public Logical_or_math_operatorContext logical_or_math_operator(int i) {
			return getRuleContext(Logical_or_math_operatorContext.class,i);
		}
		public SContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_s; }
	}

	public final SContext s() throws RecognitionException {
		SContext _localctx = new SContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_s);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			token();
			setState(12);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(11);
				match(WS);
				}
				break;
			}
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LOGICAL_OPERATOR) | (1L << MATH_OPERATOR) | (1L << WS))) != 0)) {
				{
				{
				setState(15);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(14);
					match(WS);
					}
				}

				setState(17);
				((SContext)_localctx).cLogic = logical_or_math_operator();
				setState(19);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WS) {
					{
					setState(18);
					match(WS);
					}
				}

				setState(21);
				token();
				setState(23);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(22);
					match(WS);
					}
					break;
				}
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TokenContext extends ParserRuleContext {
		public Token cNumber;
		public Token cBoolean;
		public TerminalNode NUMBER() { return getToken(RollupParser.NUMBER, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TerminalNode BOOLEAN() { return getToken(RollupParser.BOOLEAN, 0); }
		public TokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_token; }
	}

	public final TokenContext token() throws RecognitionException {
		TokenContext _localctx = new TokenContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_token);
		try {
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				((TokenContext)_localctx).cNumber = match(NUMBER);
				}
				break;
			case LEFT_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				query();
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				((TokenContext)_localctx).cBoolean = match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryContext extends ParserRuleContext {
		public InnerqueryContext cQuery;
		public TerminalNode LEFT_BRACE() { return getToken(RollupParser.LEFT_BRACE, 0); }
		public TerminalNode RIGHT_BRACE() { return getToken(RollupParser.RIGHT_BRACE, 0); }
		public InnerqueryContext innerquery() {
			return getRuleContext(InnerqueryContext.class,0);
		}
		public List<TerminalNode> WS() { return getTokens(RollupParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(RollupParser.WS, i);
		}
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(LEFT_BRACE);
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(36);
				match(WS);
				}
			}

			setState(39);
			((QueryContext)_localctx).cQuery = innerquery();
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(40);
				match(WS);
				}
			}

			setState(43);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InnerqueryContext extends ParserRuleContext {
		public Token cKey;
		public Token cOperator;
		public Token cValue;
		public Token cNumber;
		public Token cLogic;
		public TerminalNode KEY() { return getToken(RollupParser.KEY, 0); }
		public TerminalNode QUANTATIVE_OPERATOR() { return getToken(RollupParser.QUANTATIVE_OPERATOR, 0); }
		public List<TerminalNode> WS() { return getTokens(RollupParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(RollupParser.WS, i);
		}
		public TerminalNode VALUE() { return getToken(RollupParser.VALUE, 0); }
		public TerminalNode NUMBER() { return getToken(RollupParser.NUMBER, 0); }
		public List<InnerqueryContext> innerquery() {
			return getRuleContexts(InnerqueryContext.class);
		}
		public InnerqueryContext innerquery(int i) {
			return getRuleContext(InnerqueryContext.class,i);
		}
		public List<TerminalNode> LOGICAL_OPERATOR() { return getTokens(RollupParser.LOGICAL_OPERATOR); }
		public TerminalNode LOGICAL_OPERATOR(int i) {
			return getToken(RollupParser.LOGICAL_OPERATOR, i);
		}
		public InnerqueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_innerquery; }
	}

	public final InnerqueryContext innerquery() throws RecognitionException {
		InnerqueryContext _localctx = new InnerqueryContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_innerquery);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			((InnerqueryContext)_localctx).cKey = match(KEY);
			setState(46);
			((InnerqueryContext)_localctx).cOperator = match(QUANTATIVE_OPERATOR);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(47);
				match(WS);
				}
			}

			setState(52);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VALUE:
				{
				setState(50);
				((InnerqueryContext)_localctx).cValue = match(VALUE);
				}
				break;
			case NUMBER:
				{
				setState(51);
				((InnerqueryContext)_localctx).cNumber = match(NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(54);
				match(WS);
				}
				break;
			}
			setState(64);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(57);
					((InnerqueryContext)_localctx).cLogic = match(LOGICAL_OPERATOR);
					setState(59);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==WS) {
						{
						setState(58);
						match(WS);
						}
					}

					setState(61);
					innerquery();
					}
					} 
				}
				setState(66);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logical_or_math_operatorContext extends ParserRuleContext {
		public Token cLogic;
		public Token cMath;
		public TerminalNode LOGICAL_OPERATOR() { return getToken(RollupParser.LOGICAL_OPERATOR, 0); }
		public TerminalNode MATH_OPERATOR() { return getToken(RollupParser.MATH_OPERATOR, 0); }
		public Logical_or_math_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical_or_math_operator; }
	}

	public final Logical_or_math_operatorContext logical_or_math_operator() throws RecognitionException {
		Logical_or_math_operatorContext _localctx = new Logical_or_math_operatorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_logical_or_math_operator);
		try {
			setState(69);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LOGICAL_OPERATOR:
				enterOuterAlt(_localctx, 1);
				{
				setState(67);
				((Logical_or_math_operatorContext)_localctx).cLogic = match(LOGICAL_OPERATOR);
				}
				break;
			case MATH_OPERATOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				((Logical_or_math_operatorContext)_localctx).cMath = match(MATH_OPERATOR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\fJ\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\5\2\17\n\2\3\2\5\2\22\n\2\3\2\3\2\5"+
		"\2\26\n\2\3\2\3\2\5\2\32\n\2\7\2\34\n\2\f\2\16\2\37\13\2\3\3\3\3\3\3\5"+
		"\3$\n\3\3\4\3\4\5\4(\n\4\3\4\3\4\5\4,\n\4\3\4\3\4\3\5\3\5\3\5\5\5\63\n"+
		"\5\3\5\3\5\5\5\67\n\5\3\5\5\5:\n\5\3\5\3\5\5\5>\n\5\3\5\7\5A\n\5\f\5\16"+
		"\5D\13\5\3\6\3\6\5\6H\n\6\3\6\2\2\7\2\4\6\b\n\2\2\2S\2\f\3\2\2\2\4#\3"+
		"\2\2\2\6%\3\2\2\2\b/\3\2\2\2\nG\3\2\2\2\f\16\5\4\3\2\r\17\7\b\2\2\16\r"+
		"\3\2\2\2\16\17\3\2\2\2\17\35\3\2\2\2\20\22\7\b\2\2\21\20\3\2\2\2\21\22"+
		"\3\2\2\2\22\23\3\2\2\2\23\25\5\n\6\2\24\26\7\b\2\2\25\24\3\2\2\2\25\26"+
		"\3\2\2\2\26\27\3\2\2\2\27\31\5\4\3\2\30\32\7\b\2\2\31\30\3\2\2\2\31\32"+
		"\3\2\2\2\32\34\3\2\2\2\33\21\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36"+
		"\3\2\2\2\36\3\3\2\2\2\37\35\3\2\2\2 $\7\3\2\2!$\5\6\4\2\"$\7\4\2\2# \3"+
		"\2\2\2#!\3\2\2\2#\"\3\2\2\2$\5\3\2\2\2%\'\7\n\2\2&(\7\b\2\2\'&\3\2\2\2"+
		"\'(\3\2\2\2()\3\2\2\2)+\5\b\5\2*,\7\b\2\2+*\3\2\2\2+,\3\2\2\2,-\3\2\2"+
		"\2-.\7\13\2\2.\7\3\2\2\2/\60\7\t\2\2\60\62\7\7\2\2\61\63\7\b\2\2\62\61"+
		"\3\2\2\2\62\63\3\2\2\2\63\66\3\2\2\2\64\67\7\f\2\2\65\67\7\3\2\2\66\64"+
		"\3\2\2\2\66\65\3\2\2\2\679\3\2\2\28:\7\b\2\298\3\2\2\29:\3\2\2\2:B\3\2"+
		"\2\2;=\7\5\2\2<>\7\b\2\2=<\3\2\2\2=>\3\2\2\2>?\3\2\2\2?A\5\b\5\2@;\3\2"+
		"\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C\t\3\2\2\2DB\3\2\2\2EH\7\5\2\2FH\7"+
		"\6\2\2GE\3\2\2\2GF\3\2\2\2H\13\3\2\2\2\20\16\21\25\31\35#\'+\62\669=B"+
		"G";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}