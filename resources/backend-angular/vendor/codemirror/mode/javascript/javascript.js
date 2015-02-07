!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("javascript",function(t,r){function n(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function a(e,t,r){return vt=e,mt=r,t}function i(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=o(r),t.tokenize(e,t);if("."==r&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return a("number","number");if("."==r&&e.match(".."))return a("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return a(r);if("="==r&&e.eat(">"))return a("=>","operator");if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),a("number","number");if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),a("number","number");if("/"==r)return e.eat("*")?(t.tokenize=c,c(e,t)):e.eat("/")?(e.skipToEnd(),a("comment","comment")):"operator"==t.lastType||"keyword c"==t.lastType||"sof"==t.lastType||/^[\[{}\(,;:]$/.test(t.lastType)?(n(e),e.eatWhile(/[gimy]/),a("regexp","string-2")):(e.eatWhile(jt),a("operator","operator",e.current()));if("`"==r)return t.tokenize=l,l(e,t);if("#"==r)return e.skipToEnd(),a("error","error");if(jt.test(r))return e.eatWhile(jt),a("operator","operator",e.current());if(gt.test(r)){e.eatWhile(gt);var i=e.current(),u=wt.propertyIsEnumerable(i)&&wt[i];return u&&"."!=t.lastType?a(u.type,u.style,i):a("variable","variable",i)}}function o(e){return function(t,r){var n,o=!1;if(kt&&"@"==t.peek()&&t.match(Mt))return r.tokenize=i,a("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||o);)o=!o&&"\\"==n;return o||(r.tokenize=i),a("string","string")}}function c(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=i;break}n="*"==r}return a("comment","comment")}function l(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=i;break}n=!n&&"\\"==r}return a("quasi","string-2",e.current())}function u(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(0>r)){for(var n=0,a=!1,i=r-1;i>=0;--i){var o=e.string.charAt(i),c=Vt.indexOf(o);if(c>=0&&3>c){if(!n){++i;break}if(0==--n)break}else if(c>=3&&6>c)++n;else if(gt.test(o))a=!0;else if(a&&!n){++i;break}}a&&!n&&(t.fatArrowAt=i)}}function s(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function f(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}function d(e,t,r,n,a){var i=e.cc;for(It.state=e,It.stream=a,It.marked=null,It.cc=i,It.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var o=i.length?i.pop():xt?w:g;if(o(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return It.marked?It.marked:"variable"==r&&f(e,n)?"variable-2":t}}}function p(){for(var e=arguments.length-1;e>=0;e--)It.cc.push(arguments[e])}function v(){return p.apply(null,arguments),!0}function m(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var n=It.state;if(n.context){if(It.marked="def",t(n.localVars))return;n.localVars={name:e,next:n.localVars}}else{if(t(n.globalVars))return;r.globalVars&&(n.globalVars={name:e,next:n.globalVars})}}function y(){It.state.context={prev:It.state.context,vars:It.state.localVars},It.state.localVars=zt}function b(){It.state.localVars=It.state.context.vars,It.state.context=It.state.context.prev}function k(e,t){var r=function(){var r=It.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new s(n,It.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function x(){var e=It.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function h(e){function t(r){return r==e?v():";"==e?p():v(t)}return t}function g(e,t){return"var"==e?v(k("vardef",t.length),F,h(";"),x):"keyword a"==e?v(k("form"),w,g,x):"keyword b"==e?v(k("form"),g,x):"{"==e?v(k("}"),U,x):";"==e?v():"if"==e?("else"==It.state.lexical.info&&It.state.cc[It.state.cc.length-1]==x&&It.state.cc.pop()(),v(k("form"),w,g,x,Q)):"function"==e?v(et):"for"==e?v(k("form"),R,g,x):"variable"==e?v(k("stat"),q):"switch"==e?v(k("form"),w,k("}","switch"),h("{"),U,x,x):"case"==e?v(w,h(":")):"default"==e?v(h(":")):"catch"==e?v(k("form"),y,h("("),tt,h(")"),g,x,b):"module"==e?v(k("form"),y,ot,b,x):"class"==e?v(k("form"),rt,x):"export"==e?v(k("form"),ct,x):"import"==e?v(k("form"),lt,x):p(k("stat"),w,h(";"),x)}function w(e){return M(e,!1)}function j(e){return M(e,!0)}function M(e,t){if(It.state.fatArrowAt==It.stream.start){var r=t?$:C;if("("==e)return v(y,k(")"),N(G,")"),x,h("=>"),r,b);if("variable"==e)return p(y,G,h("=>"),r,b)}var n=t?z:I;return Et.hasOwnProperty(e)?v(n):"function"==e?v(et,n):"keyword c"==e?v(t?E:V):"("==e?v(k(")"),V,pt,h(")"),x,n):"operator"==e||"spread"==e?v(t?j:w):"["==e?v(k("]"),ft,x,n):"{"==e?H(W,"}",null,n):"quasi"==e?p(T,n):v()}function V(e){return e.match(/[;\}\)\],]/)?p():p(w)}function E(e){return e.match(/[;\}\)\],]/)?p():p(j)}function I(e,t){return","==e?v(w):z(e,t,!1)}function z(e,t,r){var n=0==r?I:z,a=0==r?w:j;return"=>"==e?v(y,r?$:C,b):"operator"==e?/\+\+|--/.test(t)?v(n):"?"==t?v(w,h(":"),a):v(a):"quasi"==e?p(T,n):";"!=e?"("==e?H(j,")","call",n):"."==e?v(O,n):"["==e?v(k("]"),V,h("]"),x,n):void 0:void 0}function T(e,t){return"quasi"!=e?p():"${"!=t.slice(t.length-2)?v(T):v(w,A)}function A(e){return"}"==e?(It.marked="string-2",It.state.tokenize=l,v(T)):void 0}function C(e){return u(It.stream,It.state),p("{"==e?g:w)}function $(e){return u(It.stream,It.state),p("{"==e?g:j)}function q(e){return":"==e?v(x,g):p(I,h(";"),x)}function O(e){return"variable"==e?(It.marked="property",v()):void 0}function W(e,t){return"variable"==e||"keyword"==It.style?(It.marked="property",v("get"==t||"set"==t?P:S)):"number"==e||"string"==e?(It.marked=kt?"property":It.style+" property",v(S)):"jsonld-keyword"==e?v(S):"["==e?v(w,h("]"),S):void 0}function P(e){return"variable"!=e?p(S):(It.marked="property",v(et))}function S(e){return":"==e?v(j):"("==e?p(et):void 0}function N(e,t){function r(n){if(","==n){var a=It.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),v(e,r)}return n==t?v():v(h(t))}return function(n){return n==t?v():p(e,r)}}function H(e,t,r){for(var n=3;n<arguments.length;n++)It.cc.push(arguments[n]);return v(k(t,r),N(e,t),x)}function U(e){return"}"==e?v():p(g,U)}function B(e){return ht&&":"==e?v(D):void 0}function D(e){return"variable"==e?(It.marked="variable-3",v()):void 0}function F(){return p(G,B,K,L)}function G(e,t){return"variable"==e?(m(t),v()):"["==e?H(G,"]"):"{"==e?H(J,"}"):void 0}function J(e,t){return"variable"!=e||It.stream.match(/^\s*:/,!1)?("variable"==e&&(It.marked="property"),v(h(":"),G,K)):(m(t),v(K))}function K(e,t){return"="==t?v(j):void 0}function L(e){return","==e?v(F):void 0}function Q(e,t){return"keyword b"==e&&"else"==t?v(k("form","else"),g,x):void 0}function R(e){return"("==e?v(k(")"),X,h(")"),x):void 0}function X(e){return"var"==e?v(F,h(";"),Z):";"==e?v(Z):"variable"==e?v(Y):p(w,h(";"),Z)}function Y(e,t){return"in"==t||"of"==t?(It.marked="keyword",v(w)):v(I,Z)}function Z(e,t){return";"==e?v(_):"in"==t||"of"==t?(It.marked="keyword",v(w)):p(w,h(";"),_)}function _(e){")"!=e&&v(w)}function et(e,t){return"*"==t?(It.marked="keyword",v(et)):"variable"==e?(m(t),v(et)):"("==e?v(y,k(")"),N(tt,")"),x,g,b):void 0}function tt(e){return"spread"==e?v(tt):p(G,B)}function rt(e,t){return"variable"==e?(m(t),v(nt)):void 0}function nt(e,t){return"extends"==t?v(w,nt):"{"==e?v(k("}"),at,x):void 0}function at(e,t){return"variable"==e||"keyword"==It.style?(It.marked="property","get"==t||"set"==t?v(it,et,at):v(et,at)):"*"==t?(It.marked="keyword",v(at)):";"==e?v(at):"}"==e?v():void 0}function it(e){return"variable"!=e?p():(It.marked="property",v())}function ot(e,t){return"string"==e?v(g):"variable"==e?(m(t),v(st)):void 0}function ct(e,t){return"*"==t?(It.marked="keyword",v(st,h(";"))):"default"==t?(It.marked="keyword",v(w,h(";"))):p(g)}function lt(e){return"string"==e?v():p(ut,st)}function ut(e,t){return"{"==e?H(ut,"}"):("variable"==e&&m(t),v())}function st(e,t){return"from"==t?(It.marked="keyword",v(w)):void 0}function ft(e){return"]"==e?v():p(j,dt)}function dt(e){return"for"==e?p(pt,h("]")):","==e?v(N(E,"]")):p(N(j,"]"))}function pt(e){return"for"==e?v(R,pt):"if"==e?v(w,pt):void 0}var vt,mt,yt=t.indentUnit,bt=r.statementIndent,kt=r.jsonld,xt=r.json||kt,ht=r.typescript,gt=r.wordCharacters||/[\w$\xa1-\uffff]/,wt=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={"if":e("if"),"while":t,"with":t,"else":r,"do":r,"try":r,"finally":r,"return":n,"break":n,"continue":n,"new":n,"delete":n,"throw":n,"debugger":n,"var":e("var"),"const":e("var"),let:e("var"),"function":e("function"),"catch":e("catch"),"for":e("for"),"switch":e("switch"),"case":e("case"),"default":e("default"),"in":a,"typeof":a,"instanceof":a,"true":i,"false":i,"null":i,undefined:i,NaN:i,Infinity:i,"this":e("this"),module:e("module"),"class":e("class"),"super":e("atom"),"yield":n,"export":e("export"),"import":e("import"),"extends":n};if(ht){var c={type:"variable",style:"variable-3"},l={"interface":e("interface"),"extends":e("extends"),constructor:e("constructor"),"public":e("public"),"private":e("private"),"protected":e("protected"),"static":e("static"),string:c,number:c,bool:c,any:c};for(var u in l)o[u]=l[u]}return o}(),jt=/[+\-*&%=<>!?|~^]/,Mt=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Vt="([{}])",Et={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},It={state:null,column:null,marked:null,cc:null},zt={name:"this",next:{name:"arguments"}};return x.lex=!0,{startState:function(e){var t={tokenize:i,lastType:"sof",cc:[],lexical:new s((e||0)-yt,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),u(e,t)),t.tokenize!=c&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==vt?r:(t.lastType="operator"!=vt||"++"!=mt&&"--"!=mt?vt:"incdec",d(t,r,vt,mt,e))},indent:function(t,n){if(t.tokenize==c)return e.Pass;if(t.tokenize!=i)return 0;var a=n&&n.charAt(0),o=t.lexical;if(!/^\s*else\b/.test(n))for(var l=t.cc.length-1;l>=0;--l){var u=t.cc[l];if(u==x)o=o.prev;else if(u!=Q)break}"stat"==o.type&&"}"==a&&(o=o.prev),bt&&")"==o.type&&"stat"==o.prev.type&&(o=o.prev);var s=o.type,f=a==s;return"vardef"==s?o.indented+("operator"==t.lastType||","==t.lastType?o.info+1:0):"form"==s&&"{"==a?o.indented:"form"==s?o.indented+yt:"stat"==s?o.indented+("operator"==t.lastType||","==t.lastType?bt||yt:0):"switch"!=o.info||f||0==r.doubleIndentSwitch?o.align?o.column+(f?0:1):o.indented+(f?0:yt):o.indented+(/^(?:case|default)\b/.test(n)?yt:2*yt)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:xt?null:"/*",blockCommentEnd:xt?null:"*/",lineComment:xt?null:"//",fold:"brace",helperType:xt?"json":"javascript",jsonldMode:kt,jsonMode:xt}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})});