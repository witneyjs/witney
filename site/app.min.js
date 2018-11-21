/**
 * @license
 * mallery 0.0.2 /blob/master/LICENSE
 */

var mallery = (function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var highlight_min = createCommonjsModule(function (module, exports) {
/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;e(exports);}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function a(e,t){var r=e&&e.exec(t);return r&&0===r.index}function n(e){return E.test(e)}function i(e){var t,r,a,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",r=M.exec(s)){ return w(r[1])?r[1]:"no-highlight"; }for(s=s.split(/\s+/),t=0,a=s.length;a>t;t++){ if(i=s[t],n(i)||w(i)){ return i } }}function s(e){var t,r={},a=Array.prototype.slice.call(arguments,1);for(t in e){ r[t]=e[t]; }return a.forEach(function(e){for(t in e){ r[t]=e[t]; }}),r}function c(e){var t=[];return function a(e,n){for(var i=e.firstChild;i;i=i.nextSibling){ 3===i.nodeType?n+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:n,node:i}),n=a(i,n),r(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:i})); }return n}(e,0),t}function o(e,a,n){function i(){return e.length&&a.length?e[0].offset!==a[0].offset?e[0].offset<a[0].offset?e:a:"start"===a[0].event?e:a:e.length?e:a}function s(e){function a(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}u+="<"+r(e)+N.map.call(e.attributes,a).join("")+">";}function c(e){u+="</"+r(e)+">";}function o(e){("start"===e.event?s:c)(e.node);}for(var l=0,u="",d=[];e.length||a.length;){var b=i();if(u+=t(n.substring(l,b[0].offset)),l=b[0].offset,b===e){d.reverse().forEach(c);do { o(b.splice(0,1)[0]),b=i(); }while(b===e&&b.length&&b[0].offset===l);d.reverse().forEach(s);}else{ "start"===b[0].event?d.push(b[0].node):d.pop(),o(b.splice(0,1)[0]); }}return u+t(n.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(t){return s(e,{v:null},t)})),e.cached_variants||e.eW&&[s(e)]||[e]}function u(e){function t(e){return e&&e.source||e}function r(r,a){return new RegExp(t(r),"m"+(e.cI?"i":"")+(a?"g":""))}function a(n,i){if(!n.compiled){if(n.compiled=!0,n.k=n.k||n.bK,n.k){var s={},c=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1];});};"string"==typeof n.k?c("keyword",n.k):k(n.k).forEach(function(e){c(e,n.k[e]);}),n.k=s;}n.lR=r(n.l||/\w+/,!0),i&&(n.bK&&(n.b="\\b("+n.bK.split(" ").join("|")+")\\b"),n.b||(n.b=/\B|\b/),n.bR=r(n.b),n.e||n.eW||(n.e=/\B|\b/),n.e&&(n.eR=r(n.e)),n.tE=t(n.e)||"",n.eW&&i.tE&&(n.tE+=(n.e?"|":"")+i.tE)),n.i&&(n.iR=r(n.i)),null==n.r&&(n.r=1),n.c||(n.c=[]),n.c=Array.prototype.concat.apply([],n.c.map(function(e){return l("self"===e?n:e)})),n.c.forEach(function(e){a(e,n);}),n.starts&&a(n.starts,i);var o=n.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([n.tE,n.i]).map(t).filter(Boolean);n.t=o.length?r(o.join("|"),!0):{exec:function(){return null}};}}a(e);}function d(e,r,n,i){function s(e,t){var r,n;for(r=0,n=t.c.length;n>r;r++){ if(a(t.c[r].bR,e)){ return t.c[r] } }}function c(e,t){if(a(e.eR,t)){for(;e.endsParent&&e.parent;){ e=e.parent; }return e}return e.eW?c(e.parent,t):void 0}function o(e,t){return!n&&a(t.iR,e)}function l(e,t){var r=v.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,a){var n=a?"":L.classPrefix,i='<span class="'+n,s=r?"":R;return i+=e+'">',i+t+s}function m(){var e,r,a,n;if(!N.k){ return t(E); }for(n="",r=0,N.lR.lastIndex=0,a=N.lR.exec(E);a;){ n+=t(E.substring(r,a.index)),e=l(N,a),e?(M+=e[1],n+=p(e[0],t(a[0]))):n+=t(a[0]),r=N.lR.lastIndex,a=N.lR.exec(E); }return n+t(E.substr(r))}function f(){var e="string"==typeof N.sL;if(e&&!x[N.sL]){ return t(E); }var r=e?d(N.sL,E,!0,k[N.sL]):b(E,N.sL.length?N.sL:void 0);return N.r>0&&(M+=r.r),e&&(k[N.sL]=r.top),p(r.language,r.value,!1,!0)}function g(){C+=null!=N.sL?f():m(),E="";}function _(e){C+=e.cN?p(e.cN,"",!0):"",N=Object.create(e,{parent:{value:N}});}function h(e,t){if(E+=e,null==t){ return g(),0; }var r=s(t,N);if(r){ return r.skip?E+=t:(r.eB&&(E+=t),g(),r.rB||r.eB||(E=t)),_(r,t),r.rB?0:t.length; }var a=c(N,t);if(a){var n=N;n.skip?E+=t:(n.rE||n.eE||(E+=t),g(),n.eE&&(E=t));do { N.cN&&(C+=R),N.skip||(M+=N.r),N=N.parent; }while(N!==a.parent);return a.starts&&_(a.starts,""),n.rE?0:t.length}if(o(t,N)){ throw new Error('Illegal lexeme "'+t+'" for mode "'+(N.cN||"<unnamed>")+'"'); }return E+=t,t.length||1}var v=w(e);if(!v){ throw new Error('Unknown language: "'+e+'"'); }u(v);var y,N=i||v,k={},C="";for(y=N;y!==v;y=y.parent){ y.cN&&(C=p(y.cN,"",!0)+C); }var E="",M=0;try{for(var B,S,$=0;;){if(N.t.lastIndex=$,B=N.t.exec(r),!B){ break; }S=h(r.substring($,B.index),B[0]),$=B.index+S;}for(h(r.substr($)),y=N;y.parent;y=y.parent){ y.cN&&(C+=R); }return{r:M,value:C,language:e,top:N}}catch(A){if(A.message&&-1!==A.message.indexOf("Illegal")){ return{r:0,value:t(r)}; }throw A}}function b(e,r){r=r||L.languages||k(x);var a={r:0,value:t(e)},n=a;return r.filter(w).forEach(function(t){var r=d(t,e,!1);r.language=t,r.r>n.r&&(n=r),r.r>a.r&&(n=a,a=r);}),n.language&&(a.second_best=n),a}function p(e){return L.tabReplace||L.useBR?e.replace(B,function(e,t){return L.useBR&&"\n"===e?"<br>":L.tabReplace?t.replace(/\t/g,L.tabReplace):""}):e}function m(e,t,r){var a=t?C[t]:r,n=[e.trim()];return e.match(/\bhljs\b/)||n.push("hljs"),-1===e.indexOf(a)&&n.push(a),n.join(" ").trim()}function f(e){var t,r,a,s,l,u=i(e);n(u)||(L.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,l=t.textContent,a=u?d(u,l,!0):b(l),r=c(t),r.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=a.value,a.value=o(r,c(s),l)),a.value=p(a.value),e.innerHTML=a.value,e.className=m(e.className,u,a.language),e.result={language:a.language,re:a.r},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.r}));}function g(e){L=s(L,e);}function _(){if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");N.forEach.call(e,f);}}function h(){addEventListener("DOMContentLoaded",_,!1),addEventListener("load",_,!1);}function v(t,r){var a=x[t]=r(e);a.aliases&&a.aliases.forEach(function(e){C[e]=t;});}function y(){return k(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[C[e]]}var N=[],k=Object.keys,x={},C={},E=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,B=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,R="</span>",L={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=d,e.highlightAuto=b,e.fixMarkup=p,e.highlightBlock=f,e.configure=g,e.initHighlighting=_,e.initHighlightingOnLoad=h,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=w,e.inherit=s,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(t,r,a){var n=e.inherit({cN:"comment",b:t,e:r,c:[]},a||{});return n.c.push(e.PWM),n.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),n},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"section",b:"</?",e:">"},{cN:"attribute",b:/\w+/,r:0,k:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"meta",b:"\\s\\[",e:"\\]$"},{cN:"variable",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),e.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,r,a,t]}}),e.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",a={cN:"subst",b:/#\{/,e:/}/,k:t},n=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,a]},{b:/"/,e:/"/,c:[e.BE,a]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[a,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+r},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];a.c=n;var i=e.inherit(e.TM,{b:r}),s="(\\(.*\\))?\\s*\\B[-=]>",c={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(n)}]};return{aliases:["coffee","cson","iced"],k:t,i:/\/\*/,c:n.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+r+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,c]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[c]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{b:r+":",e:":",rB:!0,rE:!0,r:0}])}}),e.registerLanguage("cpp",function(e){var t={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U)?L?"',e:'"',i:"\\n",c:[e.BE]},{b:'(u8?|U)?R"',e:'"',c:[e.BE]},{b:"'\\\\?.",e:"'",i:"."}]},a={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},n={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},e.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:/<[^\n>]*>/,e:/$/,i:"\\n"},e.CLCM,e.CBCM]},i=e.IR+"\\s*\\(",s={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},c=[t,e.CLCM,e.CBCM,a,r];return{aliases:["c","cc","h","c++","h++","hpp"],k:s,i:"</",c:c.concat([n,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:s,c:["self",t]},{b:e.IR+"::",k:s},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:s,c:c.concat([{b:/\(/,e:/\)/,k:s,c:c.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+e.IR+"[\\*&\\s]+)+"+i,rB:!0,e:/[{;=]/,eE:!0,k:s,i:/[^\w\s\*&]/,c:[{b:i,rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:s,r:0,c:[e.CLCM,e.CBCM,r,a,t]},e.CLCM,e.CBCM,n]},{cN:"class",bK:"class struct",e:/[{;:]/,c:[{b:/</,e:/>/,c:["self"]},e.TM]}]),exports:{preprocessor:n,strings:r,k:s}}}),e.registerLanguage("cs",function(e){var t={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a=e.inherit(r,{i:/\n/}),n={cN:"subst",b:"{",e:"}",k:t},i=e.inherit(n,{i:/\n/}),s={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,i]},c={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},n]},o=e.inherit(c,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},i]});n.c=[c,s,r,e.ASM,e.QSM,e.CNM,e.CBCM],i.c=[o,s,a,e.ASM,e.QSM,e.CNM,e.inherit(e.CBCM,{i:/\n/})];var l={v:[c,s,r,e.ASM,e.QSM]},u=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp"],k:t,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},l,e.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{cN:"meta",b:"^\\s*\\[",eB:!0,e:"\\]",eE:!0,c:[{cN:"meta-string",b:/"/,e:/"/}]},{bK:"new return throw await else",r:0},{cN:"function",b:"("+u+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,r:0,c:[l,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}}),e.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:t,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}}),e.registerLanguage("diff",function(e){return{aliases:["patch"],c:[{cN:"meta",r:10,v:[{b:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"comment",v:[{b:/Index: /,e:/$/},{b:/={3,}/,e:/$/},{b:/^\-{3}/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+{3}/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"addition",b:"^\\!",e:"$"}]}}),e.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}}),e.registerLanguage("ini",function(e){var t={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_-]+/},{b:/=/,eW:!0,r:0,c:[{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},t,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM]}]}]}}),e.registerLanguage("java",function(e){var t="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",r=t+"(<"+t+"(\\s*,\\s*"+t+")*>)?",a="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",n="\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",i={cN:"number",b:n,r:0};return{aliases:["jsp"],k:a,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{b:/\w+@/,r:0},{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"("+r+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:a,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:a,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},i,{cN:"meta",b:"@[A-Za-z]+"}]}}),e.registerLanguage("javascript",function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:r,c:[]},i={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,i,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:r,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,i,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:t+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:t,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+t+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:t},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:t}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),e.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],a={e:",",eW:!0,eE:!0,c:r,k:t},n={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(a,{b:/:/})],i:"\\S"},i={b:"\\[",e:"\\]",c:[e.inherit(a)],i:"\\S"};return r.splice(r.length,0,n,i),{c:r,k:t,i:"\\S"}}),e.registerLanguage("makefile",function(e){var t={cN:"variable",v:[{b:"\\$\\("+e.UIR+"\\)",c:[e.BE]},{b:/\$[@%<?\^\+\*]/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t]},a={cN:"variable",b:/\$\([\w-]+\s/,e:/\)/,k:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},c:[t]},n={b:"^"+e.UIR+"\\s*[:+?]?=",i:"\\n",rB:!0,c:[{b:"^"+e.UIR,e:"[:+?]?=",eE:!0}]},i={cN:"meta",b:/^\.PHONY:/,e:/$/,k:{"meta-keyword":".PHONY"},l:/[\.\w]+/},s={cN:"section",b:/^[^\s]+:/,e:/$/,c:[t]};return{aliases:["mk","mak"],k:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",l:/[\w-]+/,c:[e.HCM,t,r,a,n,i,s]}}),e.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={eW:!0,i:/</,r:0,c:[{cN:"attr",b:t,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},r]}]}}),e.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}}),e.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},r={eW:!0,l:"[a-z/_]+",k:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s+{",rB:!0,e:"{",c:[{cN:"section",b:e.UIR}],r:0},{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"attribute",b:e.UIR,starts:r}],r:0}],i:"[^\\s\\}]"}}),e.registerLanguage("objectivec",function(e){var t={cN:"built_in",b:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},a=/[a-zA-Z@][a-zA-Z0-9_]*/,n="@interface @class @protocol @implementation";return{aliases:["mm","objc","obj-c"],k:r,l:a,i:"</",c:[t,e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"meta",b:"#",e:"$",c:[{cN:"meta-string",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+n.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:n,l:a,c:[e.UTM]},{b:"\\."+e.UIR,r:0}]}}),e.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},a={b:"->{",e:"}"},n={v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],s=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),a,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"function",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",eE:!0,r:5,c:[e.TM]},{b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=s,a.c=s,{aliases:["pl","pm"],l:/[\w\.]+/,k:t,c:s}}),e.registerLanguage("php",function(e){var t={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"meta",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[r]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},r,{cN:"keyword",b:/\$this\b/},t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}}),e.registerLanguage("python",function(e){var t={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},r={cN:"meta",b:/^(>>>|\.\.\.) /},a={cN:"subst",b:/\{/,e:/\}/,k:t,i:/#/},n={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[r,a]},{b:/(fr|rf|f)"""/,e:/"""/,c:[r,a]},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[a]},{b:/(fr|rf|f)"/,e:/"/,c:[a]},e.ASM,e.QSM]},i={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},s={cN:"params",b:/\(/,e:/\)/,c:["self",r,i,n]};return a.c=[n,i,r],{aliases:["py","gyp"],k:t,i:/(<\/|->|\?)|=>/,c:[r,i,n,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,s,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}}),e.registerLanguage("ruby",function(e){
var t="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},a={cN:"doctag",b:"@[A-Za-z]+"},n={b:"#<",e:">"},i=[e.C("#","$",{c:[a]}),e.C("^\\=begin","^\\=end",{c:[a],r:10}),e.C("^__END__","\\n$")],s={cN:"subst",b:"#\\{",e:"}",k:r},c={cN:"string",c:[e.BE,s],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},o={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},l=[c,n,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(i)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:t}),o].concat(i)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[c,{b:t}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[n,{cN:"regexp",c:[e.BE,s],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(i),r:0}].concat(i);s.c=l,o.c=l;var u="[>?]>",d="[\\w#]+\\(\\w+\\):\\d+:\\d+>",b="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",p=[{b:/^\s*=>/,starts:{e:"$",c:l}},{cN:"meta",b:"^("+u+"|"+d+"|"+b+")",starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:i.concat(p).concat(l)}}),e.registerLanguage("shell",function(e){return{aliases:["console"],c:[{cN:"meta",b:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{e:"$",sL:"bash"}}]}}),e.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*#]/,c:[{bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",e:/;/,eW:!0,l:/[\w\.]+/,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}}),e});
});

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-overflowscrolling-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in C){ if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length)){ for(t=0;t<n.options.aliases.length;t++){ e.push(n.options.aliases[t].toLowerCase()); } }for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++){ i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),S.push((o?"":"no-")+l.join("-")); }} }}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2");}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n);}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,i,f,u,c="modernizr",d=l("div"),p=a();if(parseInt(r,10)){ for(;r--;){ f=l("div"),f.id=o?o[r]:c+(r+1),d.appendChild(f); } }return s=l("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!i}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o){ r&&(o=o.getPropertyValue(r)); }else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate");}}else { o=!t&&n.currentStyle&&n.currentStyle[r]; }return o}function d(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;){ if(e.CSS.supports(u(n[o]),r)){ return!0; } }return!1}if("CSSSupportsRule"in e){for(var s=[];o--;){ s.push("("+u(n[o])+":"+r+")"); }return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function m(e,n,o,s){function a(){u&&(delete E.style,delete E.modElem);}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=d(e,o);if(!r(f,"undefined")){ return f }}for(var u,c,m,v,y,g=["modernizr","tspan","samp"];!E.style&&g.length;){ u=!0,E.modElem=l(g.shift()),E.style=E.modElem.style; }for(m=e.length,c=0;m>c;c++){ if(v=e[c],y=E.style[v],i(v,"-")&&(v=p(v)),E.style[v]!==t){if(s||r(o,"undefined")){ return a(),"pfx"==n?v:!0; }try{E.style[v]=o;}catch(h){}if(E.style[v]!=y){ return a(),"pfx"==n?v:!0 }} }return a(),!1}function v(e,n){return function(){return e.apply(n,arguments)}}function y(e,n,t){var o;for(var s in e){ if(e[s]in n){ return t===!1?e[s]:(o=n[e[s]],r(o,"function")?v(o,t||n):o); } }return!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,s):(l=(e+" "+N.join(i+" ")+i).split(" "),y(l,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e]);},0);},addTest:function(e,n,t){C.push({name:e,fn:n,options:t});},addAsyncTest:function(e){C.push({name:null,fn:e});}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=[],_=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=P;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem;});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style;});var N=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=N,w.testAllProps=g,w.testAllProps=h,Modernizr.addTest("overflowscrolling",h("overflowScrolling","touch",!0)),o(),s(S),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++){ Modernizr._q[T](); }e.Modernizr=Modernizr;}(window,document);

var HASH = '#'.charCodeAt(0);
var DOT = '.'.charCodeAt(0);

function createElement (query, ns) {
  var tag;
  var id;
  var className;

  var mode = 0;
  var start = 0;

  for (var i = 0; i <= query.length; i++) {
    var char = query.charCodeAt(i);

    if (char === HASH || char === DOT || !char) {
      if (mode === 0) {
        if (i === 0) {
          tag = 'div';
        } else if (!char) {
          tag = query;
        } else {
          tag = query.substring(start, i);
        }
      } else {
        var slice = query.substring(start, i);

        if (mode === 1) {
          id = slice;
        } else if (className) {
          className += ' ' + slice;
        } else {
          className = slice;
        }
      }

      start = i + 1;

      if (char === HASH) {
        mode = 1;
      } else {
        mode = 2;
      }
    }
  }

  var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
}

var hookNames = ['onmount', 'onunmount'];

function mount (parent, child, before) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (child !== childEl) {
    childEl.__redom_view = child;
  }

  var wasMounted = childEl.__redom_mounted;
  var oldParent = childEl.parentNode;

  if (wasMounted && (oldParent !== parentEl)) {
    doUnmount(child, childEl, oldParent);
  }

  if (before != null) {
    parentEl.insertBefore(childEl, getEl(before));
  } else {
    parentEl.appendChild(childEl);
  }

  doMount(child, childEl, parentEl, oldParent);

  return child;
}

function unmount (parent, child) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  doUnmount(child, childEl, parentEl);

  parentEl.removeChild(childEl);

  return child;
}

function doMount (child, childEl, parentEl, oldParent) {
  var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
  var remount = (parentEl === oldParent);
  var hooksFound = false;

  for (var i = 0; i < hookNames.length; i++) {
    var hookName = hookNames[i];

    if (!remount && (child !== childEl) && (hookName in child)) {
      hooks[hookName] = (hooks[hookName] || 0) + 1;
    }
    if (hooks[hookName]) {
      hooksFound = true;
    }
  }

  if (!hooksFound) {
    childEl.__redom_mounted = true;
    return;
  }

  var traverse = parentEl;
  var triggered = false;

  if (remount || (!triggered && (traverse && traverse.__redom_mounted))) {
    trigger(childEl, remount ? 'onremount' : 'onmount');
    triggered = true;
  }

  if (remount) {
    return;
  }

  while (traverse) {
    var parent = traverse.parentNode;
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});

    for (var hook in hooks) {
      parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
    }

    if (!triggered && (traverse === document || (parent && parent.__redom_mounted))) {
      trigger(traverse, remount ? 'onremount' : 'onmount');
      triggered = true;
    }

    traverse = parent;
  }
}

function doUnmount (child, childEl, parentEl) {
  var hooks = childEl.__redom_lifecycle;

  if (!hooks) {
    childEl.__redom_mounted = false;
    return;
  }

  var traverse = parentEl;

  if (childEl.__redom_mounted) {
    trigger(childEl, 'onunmount');
  }

  while (traverse) {
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
    var hooksFound = false;

    for (var hook in hooks) {
      if (parentHooks[hook]) {
        parentHooks[hook] -= hooks[hook];
      }
      if (parentHooks[hook]) {
        hooksFound = true;
      }
    }

    if (!hooksFound) {
      traverse.__redom_lifecycle = null;
    }

    traverse = traverse.parentNode;
  }
}

function trigger (el, eventName) {
  if (eventName === 'onmount') {
    el.__redom_mounted = true;
  } else if (eventName === 'onunmount') {
    el.__redom_mounted = false;
  }

  var hooks = el.__redom_lifecycle;

  if (!hooks) {
    return;
  }

  var view = el.__redom_view;
  var hookCount = 0;

  view && view[eventName] && view[eventName]();

  for (var hook in hooks) {
    if (hook) {
      hookCount++;
    }
  }

  if (hookCount) {
    var traverse = el.firstChild;

    while (traverse) {
      var next = traverse.nextSibling;

      trigger(traverse, eventName);

      traverse = next;
    }
  }
}

function setStyle (view, arg1, arg2) {
  var el = getEl(view);

  if (arg2 !== undefined) {
    el.style[arg1] = arg2;
  } else if (isString(arg1)) {
    el.setAttribute('style', arg1);
  } else {
    for (var key in arg1) {
      setStyle(el, key, arg1[key]);
    }
  }
}

function setAttr (view, arg1, arg2) {
  var el = getEl(view);
  var isSVG = el instanceof window.SVGElement;

  if (arg2 !== undefined) {
    if (arg1 === 'style') {
      setStyle(el, arg2);
    } else if (isSVG && isFunction(arg2)) {
      el[arg1] = arg2;
    } else if (!isSVG && (arg1 in el || isFunction(arg2))) {
      el[arg1] = arg2;
    } else {
      el.setAttribute(arg1, arg2);
    }
  } else {
    for (var key in arg1) {
      setAttr(el, key, arg1[key]);
    }
  }
}

var text = function (str) { return document.createTextNode(str); };

function parseArguments (element, args) {
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (arg !== 0 && !arg) {
      continue;
    }

    // support middleware
    if (typeof arg === 'function') {
      arg(element);
    } else if (isString(arg) || isNumber(arg)) {
      element.appendChild(text(arg));
    } else if (isNode(getEl(arg))) {
      mount(element, arg);
    } else if (arg.length) {
      parseArguments(element, arg);
    } else if (typeof arg === 'object') {
      setAttr(element, arg);
    }
  }
}

var ensureEl = function (parent) { return isString(parent) ? html(parent) : getEl(parent); };
var getEl = function (parent) { return (parent.nodeType && parent) || (!parent.el && parent) || getEl(parent.el); };

var isString = function (a) { return typeof a === 'string'; };
var isNumber = function (a) { return typeof a === 'number'; };
var isFunction = function (a) { return typeof a === 'function'; };

var isNode = function (a) { return a && a.nodeType; };

var htmlCache = {};

var memoizeHTML = function (query) { return htmlCache[query] || (htmlCache[query] = createElement(query)); };

function html (query) {
  var arguments$1 = arguments;

  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) { args[ len ] = arguments$1[ len + 1 ]; }

  var element;

  if (isString(query)) {
    element = memoizeHTML(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(element, args);

  return element;
}

html.extend = function (query) {
  var clone = memoizeHTML(query);

  return html.bind(this, clone);
};

var el = html;

function setChildren (parent, children) {
  if (children.length === undefined) {
    return setChildren(parent, [children]);
  }

  var parentEl = getEl(parent);
  var traverse = parentEl.firstChild;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (!child) {
      continue;
    }

    var childEl = getEl(child);

    if (childEl === traverse) {
      traverse = traverse.nextSibling;
      continue;
    }

    mount(parent, child, traverse);
  }

  while (traverse) {
    var next = traverse.nextSibling;

    unmount(parent, traverse);

    traverse = next;
  }
}

var propKey = function (key) { return function (item) { return item[key]; }; };

function list (parent, View, key, initData) {
  return new List(parent, View, key, initData);
}

function List (parent, View, key, initData) {
  this.__redom_list = true;
  this.View = View;
  this.initData = initData;
  this.views = [];
  this.el = ensureEl(parent);

  if (key != null) {
    this.lookup = {};
    this.key = isFunction(key) ? key : propKey(key);
  }
}

List.extend = function (parent, View, key, initData) {
  return List.bind(List, parent, View, key, initData);
};

list.extend = List.extend;

List.prototype.update = function (data) {
  var this$1 = this;
  if ( data === void 0 ) { data = []; }

  var View = this.View;
  var key = this.key;
  var keySet = key != null;
  var initData = this.initData;
  var newViews = new Array(data.length);
  var oldViews = this.views;
  var newLookup = key && {};
  var oldLookup = key && this.lookup;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var view = (void 0);

    if (keySet) {
      var id = key(item);
      view = newViews[i] = oldLookup[id] || new View(initData, item, i, data);
      newLookup[id] = view;
      view.__id = id;
    } else {
      view = newViews[i] = oldViews[i] || new View(initData, item, i, data);
    }
    var el = getEl(view.el);
    el.__redom_view = view;
    view.update && view.update(item, i, data);
  }

  if (keySet) {
    for (var i$1 = 0; i$1 < oldViews.length; i$1++) {
      var id$1 = oldViews[i$1].__id;

      if (!(id$1 in newLookup)) {
        unmount(this$1, oldLookup[id$1]);
      }
    }
  }

  setChildren(this, newViews);

  if (keySet) {
    this.lookup = newLookup;
  }
  this.views = newViews;
};

var Router = function Router (parent, Views, initData) {
  this.el = ensureEl(parent);
  this.Views = Views;
  this.initData = initData;
};
Router.prototype.update = function update (route, data) {
  if (route !== this.route) {
    var Views = this.Views;
    var View = Views[route];

    this.view = View && new View(this.initData, data);
    this.route = route;

    setChildren(this.el, [ this.view ]);
  }
  this.view && this.view.update && this.view.update(data, route);
};

var SVG = 'http://www.w3.org/2000/svg';

var svgCache = {};

var memoizeSVG = function (query) { return svgCache[query] || (svgCache[query] = createElement(query, SVG)); };

function svg (query) {
  var arguments$1 = arguments;

  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) { args[ len ] = arguments$1[ len + 1 ]; }

  var element;

  if (isString(query)) {
    element = memoizeSVG(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(element, args);

  return element;
}

svg.extend = function (query) {
  var clone = memoizeSVG(query);

  return svg.bind(this, clone);
};

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    var this$1 = this;

    for (var name in this$1.map) {
      if (this$1.map.hasOwnProperty(name)) {
        callback.call(thisArg, this$1.map[name], name, this$1);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

var alo_full$1 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$1;

var assocIndexOf = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$3 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$3(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf$4 = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$4(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear;
var listCacheDelete = _listCacheDelete;
var listCacheGet = _listCacheGet;
var listCacheHas = _listCacheHas;
var listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var commonjsGlobal$$1 = typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};





function createCommonjsModule$$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal$$1 == 'object' && commonjsGlobal$$1 && commonjsGlobal$$1.Object === Object && commonjsGlobal$$1;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

var _root = root$2;

var root$1 = _root;

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var _Symbol = Symbol$1;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;

var Symbol = _Symbol;
var getRawTag = _getRawTag;
var objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

var baseGetTag = _baseGetTag;
var isObject$2 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$3 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$3['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1;
var isMasked = _isMasked;
var isObject$1 = isObject_1;
var toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative;
var getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$1;

var getNative = _getNative;
var root = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

var _Map = Map$1;

var getNative$2 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative$2(Object, 'create');

var _nativeCreate = nativeCreate$1;

var nativeCreate = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$3 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$3 ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate$4 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$4 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear;
var hashDelete = _hashDelete;
var hashGet = _hashGet;
var hashHas = _hashHas;
var hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash;
var ListCache$4 = _ListCache;
var Map$2 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$4),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$1;

var getMapData = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$3 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$3(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData$4 = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData$4(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear;
var mapCacheDelete = _mapCacheDelete;
var mapCacheGet = _mapCacheGet;
var mapCacheHas = _mapCacheHas;
var mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var ListCache$3 = _ListCache;
var Map = _Map;
var MapCache = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$3) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache;
var stackClear = _stackClear;
var stackDelete = _stackDelete;
var stackGet = _stackGet;
var stackHas = _stackHas;
var stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

var getNative$3 = _getNative;

var defineProperty$1 = (function() {
  try {
    var func = getNative$3(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

var defineProperty = _defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$1(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$1;

var baseAssignValue = _baseAssignValue;
var eq$2 = eq_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq$2(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue$1;

var assignValue$2 = _assignValue;
var baseAssignValue$2 = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$2(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$2;

var baseGetTag$2 = _baseGetTag;
var isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$1(value) && baseGetTag$2(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments;
var isObjectLike = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$2 = Array.isArray;

var isArray_1 = isArray$2;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule$$1(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$1;

var baseGetTag$3 = _baseGetTag;
var isLength = isLength_1;
var isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$2 = '[object Function]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$1] = typedArrayTags[float64Tag$1] =
typedArrayTags[int8Tag$1] = typedArrayTags[int16Tag$1] =
typedArrayTags[int32Tag$1] = typedArrayTags[uint8Tag$1] =
typedArrayTags[uint8ClampedTag$1] = typedArrayTags[uint16Tag$1] =
typedArrayTags[uint32Tag$1] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$2] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$3(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag$3(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = createCommonjsModule$$1(function (module, exports) {
var freeGlobal = _freeGlobal;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var baseIsTypedArray = _baseIsTypedArray;
var baseUnary = _baseUnary;
var nodeUtil = _nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;

var baseTimes = _baseTimes;
var isArguments = isArguments_1;
var isArray$1 = isArray_1;
var isBuffer$1 = isBuffer_1;
var isIndex = _isIndex;
var isTypedArray = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$1(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype;
var nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction$3 = isFunction_1;
var isLength$2 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$2(value.length) && !isFunction$3(value);
}

var isArrayLike_1 = isArrayLike$1;

var arrayLikeKeys = _arrayLikeKeys;
var baseKeys = _baseKeys;
var isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$2(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$2;

var copyObject = _copyObject;
var keys$1 = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign$1(object, source) {
  return object && copyObject(source, keys$1(source), object);
}

var _baseAssign = baseAssign$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$5 = isObject_1;
var isPrototype$2 = _isPrototype;
var nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$5(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$2(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys$2 = _arrayLikeKeys;
var baseKeysIn = _baseKeysIn;
var isArrayLike$2 = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$2(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$2(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$2;

var copyObject$2 = _copyObject;
var keysIn$1 = keysIn_1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$1(source), object);
}

var _baseAssignIn = baseAssignIn$1;

var _cloneBuffer = createCommonjsModule$$1(function (module, exports) {
var root = _root;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter;
var stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$11.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

var copyObject$3 = _copyObject;
var getSymbols = _getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$3(source, getSymbols(source), object);
}

var _copySymbols = copySymbols$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var overArg$2 = _overArg;

/** Built-in value references. */
var getPrototype$1 = overArg$2(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$1;

var arrayPush = _arrayPush;
var getPrototype = _getPrototype;
var getSymbols$2 = _getSymbols;
var stubArray$2 = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$1 = !nativeGetSymbols$1 ? stubArray$2 : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$2(object));
    object = getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn$1;

var copyObject$4 = _copyObject;
var getSymbolsIn = _getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn$1(source, object) {
  return copyObject$4(source, getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn$1;

var arrayPush$2 = _arrayPush;
var isArray$4 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$4(object) ? result : arrayPush$2(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

var baseGetAllKeys = _baseGetAllKeys;
var getSymbols$3 = _getSymbols;
var keys$3 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$3, getSymbols$3);
}

var _getAllKeys = getAllKeys$1;

var baseGetAllKeys$2 = _baseGetAllKeys;
var getSymbolsIn$2 = _getSymbolsIn;
var keysIn$3 = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return baseGetAllKeys$2(object, keysIn$3, getSymbolsIn$2);
}

var _getAllKeysIn = getAllKeysIn$1;

var getNative$4 = _getNative;
var root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$4, 'DataView');

var _DataView = DataView$1;

var getNative$5 = _getNative;
var root$5 = _root;

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative$5(root$5, 'Promise');

var _Promise = Promise$1;

var getNative$6 = _getNative;
var root$6 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$6(root$6, 'Set');

var _Set = Set$1;

var getNative$7 = _getNative;
var root$7 = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative$7(root$7, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView;
var Map$3 = _Map;
var Promise = _Promise;
var Set = _Set;
var WeakMap = _WeakMap;
var baseGetTag$4 = _baseGetTag;
var toSource$2 = _toSource;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$2 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource$2(DataView);
var mapCtorString = toSource$2(Map$3);
var promiseCtorString = toSource$2(Promise);
var setCtorString = toSource$2(Set);
var weakMapCtorString = toSource$2(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$4;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$3 && getTag$1(new Map$3) != mapTag$2) ||
    (Promise && getTag$1(Promise.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$2) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag$2)) {
  getTag$1 = function(value) {
    var result = baseGetTag$4(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource$2(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$2;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;

var root$8 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$8.Uint8Array;

var _Uint8Array = Uint8Array$1;

var Uint8Array = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$1;

var cloneArrayBuffer$2 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry$1(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry$1;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

var addMapEntry = _addMapEntry;
var arrayReduce = _arrayReduce;
var mapToArray = _mapToArray;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$2 = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap$1(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG$2) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

var _cloneMap = cloneMap$1;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry$1(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var addSetEntry = _addSetEntry;
var arrayReduce$2 = _arrayReduce;
var setToArray = _setToArray;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$3 = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet$1(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG$3) : setToArray(set);
  return arrayReduce$2(array, addSetEntry, new set.constructor);
}

var _cloneSet = cloneSet$1;

var Symbol$3 = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$3 ? Symbol$3.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$3 = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

var cloneArrayBuffer = _cloneArrayBuffer;
var cloneDataView = _cloneDataView;
var cloneMap = _cloneMap;
var cloneRegExp = _cloneRegExp;
var cloneSet = _cloneSet;
var cloneSymbol = _cloneSymbol;
var cloneTypedArray = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return cloneDataView(object, isDeep);

    case float32Tag$2: case float64Tag$2:
    case int8Tag$2: case int16Tag$2: case int32Tag$2:
    case uint8Tag$2: case uint8ClampedTag$2: case uint16Tag$2: case uint32Tag$2:
      return cloneTypedArray(object, isDeep);

    case mapTag$3:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return cloneRegExp(object);

    case setTag$3:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag$1:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var isObject$6 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$1 = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate$1;

var baseCreate = _baseCreate;
var getPrototype$2 = _getPrototype;
var isPrototype$3 = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype$3(object))
    ? baseCreate(getPrototype$2(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

var Stack = _Stack;
var arrayEach = _arrayEach;
var assignValue = _assignValue;
var baseAssign = _baseAssign;
var baseAssignIn = _baseAssignIn;
var cloneBuffer = _cloneBuffer;
var copyArray = _copyArray;
var copySymbols = _copySymbols;
var copySymbolsIn = _copySymbolsIn;
var getAllKeys = _getAllKeys;
var getAllKeysIn = _getAllKeysIn;
var getTag = _getTag;
var initCloneArray = _initCloneArray;
var initCloneByTag = _initCloneByTag;
var initCloneObject = _initCloneObject;
var isArray = isArray_1;
var isBuffer = isBuffer_1;
var isObject = isObject_1;
var keys = keys_1;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone$1, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;

var baseClone = _baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var cloneDeep_1 = cloneDeep;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor;
var keys$4 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$4);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$3 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn;
var createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;

var baseEach = _baseEach;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter$1(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache$2 = _MapCache;
var setCacheAdd = _setCacheAdd;
var setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var this$1 = this;

  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache$2;
  while (++index < length) {
    this$1.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache;
var arraySome = _arraySome;
var cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$1(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$1;

var Symbol$4 = _Symbol;
var Uint8Array$2 = _Uint8Array;
var eq$3 = eq_1;
var equalArrays$2 = _equalArrays;
var mapToArray$2 = _mapToArray;
var setToArray$2 = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var errorTag$2 = '[object Error]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var symbolTag$2 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$4 ? Symbol$4.prototype : undefined;
var symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$4:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$3:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag$3:
    case dateTag$3:
    case numberTag$3:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$3(+object, +other);

    case errorTag$2:
      return object.name == other.name && object.message == other.message;

    case regexpTag$3:
    case stringTag$3:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$4:
      var convert = mapToArray$2;

    case setTag$4:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3;
      convert || (convert = setToArray$2);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$2:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

var getAllKeys$2 = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1;

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4,
      objProps = getAllKeys$2(object),
      objLength = objProps.length,
      othProps = getAllKeys$2(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$11.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var Stack$3 = _Stack;
var equalArrays = _equalArrays;
var equalByTag = _equalByTag;
var equalObjects = _equalObjects;
var getTag$2 = _getTag;
var isArray$7 = isArray_1;
var isBuffer$2 = isBuffer_1;
var isTypedArray$2 = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$7(object),
      othIsArr = isArray$7(other),
      objTag = objIsArr ? arrayTag$2 : getTag$2(object),
      othTag = othIsArr ? arrayTag$2 : getTag$2(other);

  objTag = objTag == argsTag$3 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$3 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer$2(object)) {
    if (!isBuffer$2(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3);
    return (objIsArr || isTypedArray$2(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$10.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$10.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$3);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep;
var isObjectLike$4 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike$4(value) && !isObjectLike$4(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual = baseIsEqual$1;

var Stack$2 = _Stack;
var baseIsEqual = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$7 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$1(value) {
  return value === value && !isObject$7(value);
}

var _isStrictComparable = isStrictComparable$1;

var isStrictComparable = _isStrictComparable;
var keys$5 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$5(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$1(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$1;

var baseIsMatch = _baseIsMatch;
var getMatchData = _getMatchData;
var matchesStrictComparable = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGetTag$5 = _baseGetTag;
var isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$3 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$5(value) && baseGetTag$5(value) == symbolTag$3);
}

var isSymbol_1 = isSymbol$1;

var isArray$9 = isArray_1;
var isSymbol = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$2(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$2;

var MapCache$3 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$3);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$3;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol$5 = _Symbol;
var arrayMap = _arrayMap;
var isArray$10 = isArray_1;
var isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$5 ? Symbol$5.prototype : undefined;
var symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$10(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$8 = isArray_1;
var isKey$1 = _isKey;
var stringToPath = _stringToPath;
var toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray$8(value)) {
    return value;
  }
  return isKey$1(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol$3 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$2(value) {
  if (typeof value == 'string' || isSymbol$3(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey$2;

var castPath = _castPath;
var toKey$1 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$1(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath$2 = _castPath;
var isArguments$2 = isArguments_1;
var isArray$11 = isArray_1;
var isIndex$2 = _isIndex;
var isLength$3 = isLength_1;
var toKey$3 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath$2(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$3(length) && isIndex$2(key, length) &&
    (isArray$11(object) || isArguments$2(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn;
var hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual$2 = _baseIsEqual;
var get = get_1;
var hasIn = hasIn_1;
var isKey = _isKey;
var isStrictComparable$2 = _isStrictComparable;
var matchesStrictComparable$2 = _matchesStrictComparable;
var toKey = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey(path) && isStrictComparable$2(srcValue)) {
    return matchesStrictComparable$2(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$2 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty;
var basePropertyDeep = _basePropertyDeep;
var isKey$3 = _isKey;
var toKey$4 = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey$3(path) ? baseProperty(toKey$4(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches;
var baseMatchesProperty = _baseMatchesProperty;
var identity = identity_1;
var isArray$6 = isArray_1;
var property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray$6(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

var arrayFilter$2 = _arrayFilter;
var baseFilter = _baseFilter;
var baseIteratee = _baseIteratee;
var isArray$5 = isArray_1;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray$5(collection) ? arrayFilter$2 : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

var filter_1 = filter;

var arrayMap$2 = _arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues$1(object, props) {
  return arrayMap$2(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues$1;

var baseValues = _baseValues;
var keys$6 = keys_1;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys$6(object));
}

var values_1 = values;

var identity$2 = identity_1;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction$1(value) {
  return typeof value == 'function' ? value : identity$2;
}

var _castFunction = castFunction$1;

var arrayEach$2 = _arrayEach;
var baseEach$2 = _baseEach;
var castFunction = _castFunction;
var isArray$12 = isArray_1;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray$12(collection) ? arrayEach$2 : baseEach$2;
  return func(collection, castFunction(iteratee));
}

var forEach_1 = forEach;

var baseGetTag$6 = _baseGetTag;
var isArray$13 = isArray_1;
var isObjectLike$6 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag$4 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray$13(value) && isObjectLike$6(value) && baseGetTag$6(value) == stringTag$4);
}

var isString_1 = isString;

var baseAssignValue$3 = _baseAssignValue;
var eq$4 = eq_1;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue$1(object, key, value) {
  if ((value !== undefined && !eq$4(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$3(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue$1;

var isArrayLike$4 = isArrayLike_1;
var isObjectLike$7 = isObjectLike_1;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$7(value) && isArrayLike$4(value);
}

var isArrayLikeObject_1 = isArrayLikeObject$1;

var baseGetTag$7 = _baseGetTag;
var getPrototype$3 = _getPrototype;
var isObjectLike$8 = isObjectLike_1;

/** `Object#toString` result references. */
var objectTag$4 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$15 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$8(value) || baseGetTag$7(value) != objectTag$4) {
    return false;
  }
  var proto = getPrototype$3(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$12.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject$1;

var copyObject$5 = _copyObject;
var keysIn$5 = keysIn_1;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject$1(value) {
  return copyObject$5(value, keysIn$5(value));
}

var toPlainObject_1 = toPlainObject$1;

var assignMergeValue$2 = _assignMergeValue;
var cloneBuffer$1 = _cloneBuffer;
var cloneTypedArray$2 = _cloneTypedArray;
var copyArray$2 = _copyArray;
var initCloneObject$2 = _initCloneObject;
var isArguments$3 = isArguments_1;
var isArray$14 = isArray_1;
var isArrayLikeObject = isArrayLikeObject_1;
var isBuffer$3 = isBuffer_1;
var isFunction$4 = isFunction_1;
var isObject$9 = isObject_1;
var isPlainObject = isPlainObject_1;
var isTypedArray$3 = isTypedArray_1;
var toPlainObject = toPlainObject_1;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue$2(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray$14(srcValue),
        isBuff = !isArr && isBuffer$3(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray$3(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$14(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray$2(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer$1(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray$2(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments$3(srcValue)) {
      newValue = objValue;
      if (isArguments$3(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject$9(objValue) || (srcIndex && isFunction$4(objValue))) {
        newValue = initCloneObject$2(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue$2(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep$1;

var Stack$4 = _Stack;
var assignMergeValue = _assignMergeValue;
var baseFor$2 = _baseFor;
var baseMergeDeep = _baseMergeDeep;
var isObject$8 = isObject_1;
var keysIn$4 = keysIn_1;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$2(source, function(srcValue, key) {
    if (isObject$8(srcValue)) {
      stack || (stack = new Stack$4);
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$4);
}

var _baseMerge = baseMerge$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

var apply = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var constant = constant_1;
var defineProperty$2 = _defineProperty;
var identity$4 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty$2 ? identity$4 : function(func, string) {
  return defineProperty$2(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString;
var shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var identity$3 = identity_1;
var overRest = _overRest;
var setToString = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity$3), func + '');
}

var _baseRest = baseRest$1;

var eq$5 = eq_1;
var isArrayLike$5 = isArrayLike_1;
var isIndex$3 = _isIndex;
var isObject$10 = isObject_1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$1(value, index, object) {
  if (!isObject$10(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$5(object) && isIndex$3(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq$5(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$1;

var baseRest = _baseRest;
var isIterateeCall = _isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner$1(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner$1;

var baseMerge = _baseMerge;
var createAssigner = _createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

var baseIsEqual$3 = _baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual$3(value, other);
}

var isEqual_1 = isEqual;

var baseEach$3 = _baseEach;
var isArrayLike$6 = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike$6(collection) ? Array(collection.length) : [];

  baseEach$3(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$1;

var arrayMap$3 = _arrayMap;
var baseIteratee$2 = _baseIteratee;
var baseMap = _baseMap;
var isArray$15 = isArray_1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray$15(collection) ? arrayMap$3 : baseMap;
  return func(collection, baseIteratee$2(iteratee, 3));
}

var map_1 = map;

var baseGetTag$8 = _baseGetTag;
var isObjectLike$9 = isObjectLike_1;

/** `Object#toString` result references. */
var boolTag$4 = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike$9(value) && baseGetTag$8(value) == boolTag$4);
}

var isBoolean_1 = isBoolean;

var isObject$11 = isObject_1;
var isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN;
  }
  if (isObject$11(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$11(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;

var toInteger = toInteger_1;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

var isInteger_1 = isInteger;

var toString$2 = toString_1;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString$2(prefix) + id;
}

var uniqueId_1 = uniqueId;

var arrayMap$4 = _arrayMap;

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs$1(object, props) {
  return arrayMap$4(props, function(key) {
    return [key, object[key]];
  });
}

var _baseToPairs = baseToPairs$1;

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

var _setToPairs = setToPairs$1;

var baseToPairs = _baseToPairs;
var getTag$3 = _getTag;
var mapToArray$3 = _mapToArray;
var setToPairs = _setToPairs;

/** `Object#toString` result references. */
var mapTag$5 = '[object Map]';
var setTag$5 = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs$1(keysFunc) {
  return function(object) {
    var tag = getTag$3(object);
    if (tag == mapTag$5) {
      return mapToArray$3(object);
    }
    if (tag == setTag$5) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

var _createToPairs = createToPairs$1;

var createToPairs = _createToPairs;
var keys$7 = keys_1;

/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = createToPairs(keys$7);

var toPairs_1 = toPairs;

var _arity$1 = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

var _isPlaceholder$1 = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};

var _isPlaceholder = _isPlaceholder$1;


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curry1$1 = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

var _curry1$3 = _curry1$1;
var _isPlaceholder$3 = _isPlaceholder$1;


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curry2$1 = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder$3(a) ? f2
             : _curry1$3(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder$3(a) && _isPlaceholder$3(b) ? f2
             : _isPlaceholder$3(a) ? _curry1$3(function(_a) { return fn(_a, b); })
             : _isPlaceholder$3(b) ? _curry1$3(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};

var _arity$3 = _arity$1;
var _isPlaceholder$4 = _isPlaceholder$1;


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curryN$1 = function _curryN(length, received, fn) {
  return function() {
    var arguments$1 = arguments;

    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder$4(received[combinedIdx]) ||
           argsIdx >= arguments$1.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments$1[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder$4(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity$3(left, _curryN(length, combined, fn));
  };
};

var _arity = _arity$1;
var _curry1 = _curry1$1;
var _curry2 = _curry2$1;
var _curryN = _curryN$1;


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN$1 = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

var curryN = curryN$1;

// Utility
function isFunction$5(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}
function trueFn() { return true; }

// Globals
var toUpdate = [];
var inStream;
var order = [];
var orderNextIdx = -1;
var flushing = false;

/** @namespace */
var flyd = {};

// /////////////////////////// API ///////////////////////////////// //

/**
 * Creates a new stream
 *
 * __Signature__: `a -> Stream a`
 *
 * @name flyd.stream
 * @param {*} initialValue - (Optional) the initial value of the stream
 * @return {stream} the stream
 *
 * @example
 * var n = flyd.stream(1); // Stream with initial value `1`
 * var s = flyd.stream(); // Stream with no initial value
 */
flyd.stream = function(initialValue) {
  var endStream = createDependentStream([], trueFn);
  var s = createStream();
  s.end = endStream;
  s.fnArgs = [];
  endStream.listeners.push(s);
  s.toJSON = function() {
    return s();
  };
  if (arguments.length > 0) { s(initialValue); }
  return s;
};

/**
 * Create a new dependent stream
 *
 * __Signature__: `(...Stream * -> Stream b -> b) -> [Stream *] -> Stream b`
 *
 * @name flyd.combine
 * @param {Function} fn - the function used to combine the streams
 * @param {Array<stream>} dependencies - the streams that this one depends on
 * @return {stream} the dependent stream
 *
 * @example
 * var n1 = flyd.stream(0);
 * var n2 = flyd.stream(0);
 * var max = flyd.combine(function(n1, n2, self, changed) {
 *   return n1() > n2() ? n1() : n2();
 * }, [n1, n2]);
 */
flyd.combine = curryN(2, combine);
function combine(fn, streams) {
  var i, s, deps, depEndStreams;
  var endStream = createDependentStream([], trueFn);
  deps = []; depEndStreams = [];
  for (i = 0; i < streams.length; ++i) {
    if (streams[i] !== undefined) {
      deps.push(streams[i]);
      if (streams[i].end !== undefined) { depEndStreams.push(streams[i].end); }
    }
  }
  s = createDependentStream(deps, fn);
  s.depsChanged = [];
  s.fnArgs = s.deps.concat([s, s.depsChanged]);
  s.end = endStream;
  endStream.listeners.push(s);
  addListeners(depEndStreams, endStream);
  endStream.deps = depEndStreams;
  updateStream(s);
  return s;
}

/**
 * Returns `true` if the supplied argument is a Flyd stream and `false` otherwise.
 *
 * __Signature__: `* -> Boolean`
 *
 * @name flyd.isStream
 * @param {*} value - the value to test
 * @return {Boolean} `true` if is a Flyd streamn, `false` otherwise
 *
 * @example
 * var s = flyd.stream(1);
 * var n = 1;
 * flyd.isStream(s); //=> true
 * flyd.isStream(n); //=> false
 */
flyd.isStream = function(stream) {
  return isFunction$5(stream) && 'hasVal' in stream;
};

/**
 * Invokes the body (the function to calculate the value) of a dependent stream
 *
 * By default the body of a dependent stream is only called when all the streams
 * upon which it depends has a value. `immediate` can circumvent this behaviour.
 * It immediately invokes the body of a dependent stream.
 *
 * __Signature__: `Stream a -> Stream a`
 *
 * @name flyd.immediate
 * @param {stream} stream - the dependent stream
 * @return {stream} the same stream
 *
 * @example
 * var s = flyd.stream();
 * var hasItems = flyd.immediate(flyd.combine(function(s) {
 *   return s() !== undefined && s().length > 0;
 * }, [s]);
 * console.log(hasItems()); // logs `false`. Had `immediate` not been
 *                          // used `hasItems()` would've returned `undefined`
 * s([1]);
 * console.log(hasItems()); // logs `true`.
 * s([]);
 * console.log(hasItems()); // logs `false`.
 */
flyd.immediate = function(s) {
  if (s.depsMet === false) {
    s.depsMet = true;
    updateStream(s);
  }
  return s;
};

/**
 * Changes which `endsStream` should trigger the ending of `s`.
 *
 * __Signature__: `Stream a -> Stream b -> Stream b`
 *
 * @name flyd.endsOn
 * @param {stream} endStream - the stream to trigger the ending
 * @param {stream} stream - the stream to be ended by the endStream
 * @param {stream} the stream modified to be ended by endStream
 *
 * @example
 * var n = flyd.stream(1);
 * var killer = flyd.stream();
 * // `double` ends when `n` ends or when `killer` emits any value
 * var double = flyd.endsOn(flyd.merge(n.end, killer), flyd.combine(function(n) {
 *   return 2 * n();
 * }, [n]);
*/
flyd.endsOn = function(endS, s) {
  detachDeps(s.end);
  endS.listeners.push(s.end);
  s.end.deps.push(endS);
  return s;
};

/**
 * Map a stream
 *
 * Returns a new stream consisting of every value from `s` passed through
 * `fn`. I.e. `map` creates a new stream that listens to `s` and
 * applies `fn` to every new value.
 * __Signature__: `(a -> result) -> Stream a -> Stream result`
 *
 * @name flyd.map
 * @param {Function} fn - the function that produces the elements of the new stream
 * @param {stream} stream - the stream to map
 * @return {stream} a new stream with the mapped values
 *
 * @example
 * var numbers = flyd.stream(0);
 * var squaredNumbers = flyd.map(function(n) { return n*n; }, numbers);
 */
// Library functions use self callback to accept (null, undefined) update triggers.
flyd.map = curryN(2, function(f, s) {
  return combine(function(s, self) { self(f(s.val)); }, [s]);
});

/**
 * Listen to stream events
 *
 * Similar to `map` except that the returned stream is empty. Use `on` for doing
 * side effects in reaction to stream changes. Use the returned stream only if you
 * need to manually end it.
 *
 * __Signature__: `(a -> result) -> Stream a -> Stream undefined`
 *
 * @name flyd.on
 * @param {Function} cb - the callback
 * @param {stream} stream - the stream
 * @return {stream} an empty stream (can be ended)
 */
flyd.on = curryN(2, function(f, s) {
  return combine(function(s) { f(s.val); }, [s]);
});

/**
 * Creates a new stream with the results of calling the function on every incoming
 * stream with and accumulator and the incoming value.
 *
 * __Signature__: `(a -> b -> a) -> a -> Stream b -> Stream a`
 *
 * @name flyd.scan
 * @param {Function} fn - the function to call
 * @param {*} val - the initial value of the accumulator
 * @param {stream} stream - the stream source
 * @return {stream} the new stream
 *
 * @example
 * var numbers = flyd.stream();
 * var sum = flyd.scan(function(sum, n) { return sum+n; }, 0, numbers);
 * numbers(2)(3)(5);
 * sum(); // 10
 */
flyd.scan = curryN(3, function(f, acc, s) {
  var ns = combine(function(s, self) {
    self(acc = f(acc, s.val));
  }, [s]);
  if (!ns.hasVal) { ns(acc); }
  return ns;
});

/**
 * Creates a new stream down which all values from both `stream1` and `stream2`
 * will be sent.
 *
 * __Signature__: `Stream a -> Stream a -> Stream a`
 *
 * @name flyd.merge
 * @param {stream} source1 - one stream to be merged
 * @param {stream} source2 - the other stream to be merged
 * @return {stream} a stream with the values from both sources
 *
 * @example
 * var btn1Clicks = flyd.stream();
 * button1Elm.addEventListener(btn1Clicks);
 * var btn2Clicks = flyd.stream();
 * button2Elm.addEventListener(btn2Clicks);
 * var allClicks = flyd.merge(btn1Clicks, btn2Clicks);
 */
flyd.merge = curryN(2, function(s1, s2) {
  var s = flyd.immediate(combine(function(s1, s2, self, changed) {
    if (changed[0]) {
      self(changed[0]());
    } else if (s1.hasVal) {
      self(s1.val);
    } else if (s2.hasVal) {
      self(s2.val);
    }
  }, [s1, s2]));
  flyd.endsOn(combine(function() {
    return true;
  }, [s1.end, s2.end]), s);
  return s;
});

/**
 * Creates a new stream resulting from applying `transducer` to `stream`.
 *
 * __Signature__: `Transducer -> Stream a -> Stream b`
 *
 * @name flyd.transduce
 * @param {Transducer} xform - the transducer transformation
 * @param {stream} source - the stream source
 * @return {stream} the new stream
 *
 * @example
 * var t = require('transducers.js');
 *
 * var results = [];
 * var s1 = flyd.stream();
 * var tx = t.compose(t.map(function(x) { return x * 2; }), t.dedupe());
 * var s2 = flyd.transduce(tx, s1);
 * flyd.combine(function(s2) { results.push(s2()); }, [s2]);
 * s1(1)(1)(2)(3)(3)(3)(4);
 * results; // => [2, 4, 6, 8]
 */
flyd.transduce = curryN(2, function(xform, source) {
  xform = xform(new StreamTransformer());
  return combine(function(source, self) {
    var res = xform['@@transducer/step'](undefined, source.val);
    if (res && res['@@transducer/reduced'] === true) {
      self.end(true);
      return res['@@transducer/value'];
    } else {
      return res;
    }
  }, [source]);
});

/**
 * Returns `fn` curried to `n`. Use this function to curry functions exposed by
 * modules for Flyd.
 *
 * @name flyd.curryN
 * @function
 * @param {Integer} arity - the function arity
 * @param {Function} fn - the function to curry
 * @return {Function} the curried function
 *
 * @example
 * function add(x, y) { return x + y; };
 * var a = flyd.curryN(2, add);
 * a(2)(4) // => 6
 */
flyd.curryN = curryN;

/**
 * Returns a new stream identical to the original except every
 * value will be passed through `f`.
 *
 * _Note:_ This function is included in order to support the fantasy land
 * specification.
 *
 * __Signature__: Called bound to `Stream a`: `(a -> b) -> Stream b`
 *
 * @name stream.map
 * @param {Function} function - the function to apply
 * @return {stream} a new stream with the values mapped
 *
 * @example
 * var numbers = flyd.stream(0);
 * var squaredNumbers = numbers.map(function(n) { return n*n; });
 */
function boundMap(f) { return flyd.map(f, this); }

/**
 * Returns a new stream which is the result of applying the
 * functions from `this` stream to the values in `stream` parameter.
 *
 * `this` stream must be a stream of functions.
 *
 * _Note:_ This function is included in order to support the fantasy land
 * specification.
 *
 * __Signature__: Called bound to `Stream (a -> b)`: `a -> Stream b`
 *
 * @name stream.ap
 * @param {stream} stream - the values stream
 * @return {stream} a new stream with the functions applied to values
 *
 * @example
 * var add = flyd.curryN(2, function(x, y) { return x + y; });
 * var numbers1 = flyd.stream();
 * var numbers2 = flyd.stream();
 * var addToNumbers1 = flyd.map(add, numbers1);
 * var added = addToNumbers1.ap(numbers2);
 */
function ap(s2) {
  var s1 = this;
  return combine(function(s1, s2, self) { self(s1.val(s2.val)); }, [s1, s2]);
}

/**
 * Get a human readable view of a stream
 * @name stream.toString
 * @return {String} the stream string representation
 */
function streamToString() {
  return 'stream(' + this.val + ')';
}

/**
 * @name stream.end
 * @memberof stream
 * A stream that emits `true` when the stream ends. If `true` is pushed down the
 * stream the parent stream ends.
 */

/**
 * @name stream.of
 * @function
 * @memberof stream
 * Returns a new stream with `value` as its initial value. It is identical to
 * calling `flyd.stream` with one argument.
 *
 * __Signature__: Called bound to `Stream (a)`: `b -> Stream b`
 *
 * @param {*} value - the initial value
 * @return {stream} the new stream
 *
 * @example
 * var n = flyd.stream(1);
 * var m = n.of(1);
 */

// /////////////////////////// PRIVATE ///////////////////////////////// //
/**
 * @private
 * Create a stream with no dependencies and no value
 * @return {Function} a flyd stream
 */
function createStream() {
  function s(n) {
    if (arguments.length === 0) { return s.val }
    updateStreamValue(s, n);
    return s
  }
  s.hasVal = false;
  s.val = undefined;
  s.vals = [];
  s.listeners = [];
  s.queued = false;
  s.end = undefined;
  s.map = boundMap;
  s.ap = ap;
  s.of = flyd.stream;
  s.toString = streamToString;
  return s;
}

/**
 * @private
 * Create a dependent stream
 * @param {Array<stream>} dependencies - an array of the streams
 * @param {Function} fn - the function used to calculate the new stream value
 * from the dependencies
 * @return {stream} the created stream
 */
function createDependentStream(deps, fn) {
  var s = createStream();
  s.fn = fn;
  s.deps = deps;
  s.depsMet = false;
  s.depsChanged = deps.length > 0 ? [] : undefined;
  s.shouldUpdate = false;
  addListeners(deps, s);
  return s;
}

/**
 * @private
 * Check if all the dependencies have values
 * @param {stream} stream - the stream to check depencencies from
 * @return {Boolean} `true` if all dependencies have vales, `false` otherwise
 */
function initialDepsNotMet(stream) {
  stream.depsMet = stream.deps.every(function(s) {
    return s.hasVal;
  });
  return !stream.depsMet;
}

/**
 * @private
 * Update a dependent stream using its dependencies in an atomic way
 * @param {stream} stream - the stream to update
 */
function updateStream(s) {
  if ((s.depsMet !== true && initialDepsNotMet(s)) ||
      (s.end !== undefined && s.end.val === true)) { return; }
  if (inStream !== undefined) {
    toUpdate.push(s);
    return;
  }
  inStream = s;
  if (s.depsChanged) { s.fnArgs[s.fnArgs.length - 1] = s.depsChanged; }
  var returnVal = s.fn.apply(s.fn, s.fnArgs);
  if (returnVal !== undefined) {
    s(returnVal);
  }
  inStream = undefined;
  if (s.depsChanged !== undefined) { s.depsChanged = []; }
  s.shouldUpdate = false;
  if (flushing === false) { flushUpdate(); }
}

/**
 * @private
 * Update the dependencies of a stream
 * @param {stream} stream
 */
function updateDeps(s) {
  var i, o, list;
  var listeners = s.listeners;
  for (i = 0; i < listeners.length; ++i) {
    list = listeners[i];
    if (list.end === s) {
      endStream(list);
    } else {
      if (list.depsChanged !== undefined) { list.depsChanged.push(s); }
      list.shouldUpdate = true;
      findDeps(list);
    }
  }
  for (; orderNextIdx >= 0; --orderNextIdx) {
    o = order[orderNextIdx];
    if (o.shouldUpdate === true) { updateStream(o); }
    o.queued = false;
  }
}

/**
 * @private
 * Add stream dependencies to the global `order` queue.
 * @param {stream} stream
 * @see updateDeps
 */
function findDeps(s) {
  var i;
  var listeners = s.listeners;
  if (s.queued === false) {
    s.queued = true;
    for (i = 0; i < listeners.length; ++i) {
      findDeps(listeners[i]);
    }
    order[++orderNextIdx] = s;
  }
}

/**
 * @private
 */
function flushUpdate() {
  flushing = true;
  while (toUpdate.length > 0) {
    var s = toUpdate.shift();
    if (s.vals.length > 0) { s.val = s.vals.shift(); }
    updateDeps(s);
  }
  flushing = false;
}

/**
 * @private
 * Push down a value into a stream
 * @param {stream} stream
 * @param {*} value
 */
function updateStreamValue(s, n) {
  if (n !== undefined && n !== null && isFunction$5(n.then)) {
    n.then(s);
    return;
  }
  s.val = n;
  s.hasVal = true;
  if (inStream === undefined) {
    flushing = true;
    updateDeps(s);
    if (toUpdate.length > 0) { flushUpdate(); } else { flushing = false; }
  } else if (inStream === s) {
    markListeners(s, s.listeners);
  } else {
    s.vals.push(n);
    toUpdate.push(s);
  }
}

/**
 * @private
 */
function markListeners(s, lists) {
  var i, list;
  for (i = 0; i < lists.length; ++i) {
    list = lists[i];
    if (list.end !== s) {
      if (list.depsChanged !== undefined) {
        list.depsChanged.push(s);
      }
      list.shouldUpdate = true;
    } else {
      endStream(list);
    }
  }
}

/**
 * @private
 * Add dependencies to a stream
 * @param {Array<stream>} dependencies
 * @param {stream} stream
 */
function addListeners(deps, s) {
  for (var i = 0; i < deps.length; ++i) {
    deps[i].listeners.push(s);
  }
}

/**
 * @private
 * Removes an stream from a dependency array
 * @param {stream} stream
 * @param {Array<stream>} dependencies
 */
function removeListener(s, listeners) {
  var idx = listeners.indexOf(s);
  listeners[idx] = listeners[listeners.length - 1];
  listeners.length--;
}

/**
 * @private
 * Detach a stream from its dependencies
 * @param {stream} stream
 */
function detachDeps(s) {
  for (var i = 0; i < s.deps.length; ++i) {
    removeListener(s, s.deps[i].listeners);
  }
  s.deps.length = 0;
}

/**
 * @private
 * Ends a stream
 */
function endStream(s) {
  if (s.deps !== undefined) { detachDeps(s); }
  if (s.end !== undefined) { detachDeps(s.end); }
}

/**
 * @private
 * transducer stream transformer
 */
function StreamTransformer() { }
StreamTransformer.prototype['@@transducer/init'] = function() { };
StreamTransformer.prototype['@@transducer/result'] = function() { };
StreamTransformer.prototype['@@transducer/step'] = function(s, v) { return v; };

var index = flyd;

/**
 *  Create polymorphic functions
 *  @package    polymorphic
 *  @copyright  Konfirm ⓒ 2015
 *  @author     Rogier Spieker (rogier+npm@konfirm.eu)
 *  @license    GPLv2
 */
function polymorphic() {
	var registry = [];

	/**
	 *  Determine if somewhere in the prototype chains the variable extends an Object with given name
	 *  @name    isExtendOf
	 *  @access  internal
	 *  @param   string  name
	 *  @param   object  variable
	 *  @return  bool    extends
	 */
	function isExtendOf(name, variable) {
		var offset = typeof variable === 'object' && variable ? Object.getPrototypeOf(variable) : null,
			pattern = offset ? new RegExp('^' + name + '$') : null;

		//  It is not quite feasible to compare the inheritance using `instanceof` (all constructors would have to
		//  be registered somehow then) we simply compare the constructor function names.
		//  As a side effect, this enables polymorphic to compare against the exact type (unless a developer has
		//  altered the constructor name, which is not protected from overwriting)
		while (offset && offset.constructor) {
			if (pattern.test(offset.constructor.name)) {
				return true;
			}

			offset = Object.getPrototypeOf(offset);
		}

		return false;
	}

	/**
	 *  Map the param property of given candidate to contain only the values and resolve any references to other arguments
	 *  @name    parameterize
	 *  @access  internal
	 *  @param   Object candidate
	 *  @return  Object candidate (with resolved params)
	 */
	function parameterize(candidate) {
		candidate.param = candidate.param.map(function(param) {
			var value;

			if ('value' in param) {
				value = param.value;
			}
			else if ('reference' in param) {
				value = candidate.param.reduce(function(p, c) {
					return c !== param && !p && param.reference === c.name && 'value' in c ? c.value : p;
				}, null);
			}

			return value;
		});

		return candidate;
	}

	/**
	 *  Filter given list so only matching signatures are kept
	 *  @name    matchSignature
	 *  @access  internal
	 *  @param   array  candidates
	 *  @param   array  arguments
	 *  @return  array  filtered candidates
	 */
	function matchSignature(list, arg) {
		var types = arg.map(function(variable) {
				return new RegExp('^(' + type(variable) + ')');
			});

		return list.filter(function(config) {
			var variadic = false,
				result;

			//  result is true if no more arguments are provided than the signature allows OR the last
			//  argument in the signature is variadic
			result = arg.length <= config.arguments.length || (config.arguments[config.arguments.length - 1] && config.arguments[config.arguments.length - 1].type === '...');

			//  test each given argument agains the configured signatures
			if (result) {
				arg.forEach(function(value, index) {
					var expect = config.arguments[index] ? config.arguments[index].type : null;

					//  look at ourself and ahead - if there is a following item, and it is variadic, it may be
					//  left out entirely (zero or more)
					if (isTypeAtIndex('...', config.arguments, index)) {
						variadic = true;
					}

					//  the result remains valid as long as the values match the given signature
					//  (type matches or it is variadic)
					result = result && (variadic || types[index].test(expect) || (expect[expect.length - 1] !== '!' && isExtendOf(expect, value)));
				});
			}

			return result;
		});
	}

	/**
	 *  Map the registered values to a new object containing the specifics we use to determine the best
	 *  @name    prepare
	 *  @access  internal
	 *  @param   array  candidates
	 *  @param   array  arguments
	 *  @return  array  mapped candidates
	 */
	function prepare(list, arg) {
		return list.map(function(config) {
			var item = {
					//  the function to call
					call: config.call,

					//  all configured arguments
					arguments: config.arguments,

					//  the calculated specificity
					specificity: config.arguments.map(function(argument, index) {
						var value = 'value' in argument,
							specificity = 0;

						//  if a argument not a variadic one and the value is specified
						if (argument.type !== '...' && index < arg.length) {
							++specificity;

							//  bonus points if the exact type matches (explicit by type)
							//  OR there is no default value (explicitly provided)
							if (Number(argument.type === type(arg[index], true) || isExtendOf(argument.type, arg[index]) || !value)) {
								++specificity;
							}

							//  extra bonus points if the type is explicity the same (in case of inheritance)
							if (argument.type[argument.type.length - 1] === '!' && type(arg[index], true)) {
								++specificity;
							}
						}

						return specificity;
					}).join(''),

					//  the parameters with which the `call` may be executed
					param: config.arguments.map(function(argument, index) {
						var result = {};

						result.name = argument.name;

						//  if a variadic type is encountered, the remainder of the given arguments becomes the value
						if (argument.type === '...') {
							result.value = arg.slice(index);
						}
						else if (index < arg.length && typeof arg[index] !== 'undefined' && arg[index] !== null) {
							result.value = arg[index];
						}
						else if ('value' in argument) {
							result.value = argument.value;
						}
						else if ('reference' in argument) {
							result.reference = argument.reference;
						}

						return result;
					})
				};

			return item;
		});
	}

	/**
	 *  Prioritize the items in the list
	 *  @name    prepare
	 *  @access  internal
	 *  @param   array  candidates
	 *  @param   array  arguments
	 *  @return  array  prioritized candidates
	 *  @note    the list should contain pre-mapped items (as it works on specificity mostly)
	 */
	function prioritize(list, arg) {
		return list.sort(function(a, b) {
			var typing = function(item, index) {
					return +(item.type === type(arg[index], true));
				};

			//  if the calculated specificity is not equal it has precedence
			if (a.specificity !== b.specificity) {
				//  the shortest specificity OR ELSE the highest specificity wins
				return a.specificity.length - b.specificity.length || b.specificity - a.specificity;
			}

			//  if the specificity is equal, we want to prioritize on the more explicit types
			return b.arguments.map(typing).join('') - a.arguments.map(typing).join('');
		});
	}

	/**
	 *  Compare the type of the argument at a specific position within a collection
	 *  @name    isTypeAtIndex
	 *  @access  internal
	 *  @param   string type
	 *  @param   array  arguments
	 *  @param   int    index
	 *  @return  boolean type at index
	 */
	function isTypeAtIndex(type, list, index) {
		return list.length > index && 'type' in list[index] ? list[index].type === type : false;
	}

	/**
	 *  Determine the proper delegate handler for given arguments
	 *  @name    delegate
	 *  @access  internal
	 *  @param   array  arguments
	 *  @return  mixed  handler result
	 */
	function delegate(arg) {
		//  create a list of possible candidates based on the given arguments
		var candidate = matchSignature(registry, arg);

		//  prepare the configured signatures/arguments based on the arguments actually recieved
		candidate = prepare(candidate, arg);

		//  prioritize the candidates
		candidate = prioritize(candidate, arg);

		//  and finally, filter any candidate which does not fully comply with the signature based on the - now - parameters
		candidate = candidate.filter(function(item) {
			var variadic = false,
				min = item.arguments.map(function(argument, index) {
					variadic = isTypeAtIndex('...', item.arguments, index) || isTypeAtIndex('...', item.arguments, index + 1);

					return +(!(variadic || 'value'  in argument || 'reference' in argument));
				}).join('').match(/^1+/);

			return arg.length >= (min ? min[0].length : 0);
		});

		return candidate.length ? parameterize(candidate[0]) : false;
	}

	/**
	 *  Cast variable to given type
	 *  @name    cast
	 *  @access  internal
	 *  @param   string type
	 *  @param   string value
	 *  @return  mixed  value
	 */
	function cast(type, variable) {
		var result = variable;

		switch (type) {
			case 'number':
				result = +result;
				break;

			case 'int':
				result = parseInt(result, 10);
				break;

			case 'float':
				result = parseFloat(result);
				break;

			case 'bool':
			case 'boolean':
				result = ['true', '1', 1].indexOf(result) >= 0;
				break;
		}

		return result;
	}

	/**
	 *  Create a string matching various number types depending on given variable
	 *  @name    numberType
	 *  @access  internal
	 *  @param   string  type
	 *  @param   number  variable
	 *  @param   bool    explicit typing
	 *  @return  string  types
	 */
	function numberType(type, variable, explicit) {
		//  if the integer value is identical to the float value, it is an integer
		return (parseInt(variable, 10) === parseFloat(variable) ? 'int' : 'float') + (explicit ? '' : '|' + type);
	}

	/**
	 *  Create a string matching various object types (object constructor name if explicit)
	 *  @name    objectType
	 *  @access  internal
	 *  @param   string  type
	 *  @param   object  variable
	 *  @param   bool    explicit typing
	 *  @return  string  types
	 */
	function objectType(type, variable, explicit) {
		//  array get some special treatment by indicating it is not an object but instead an array
		//  this also goes for inherited types
		if (variable instanceof Array) {
			type = 'array';
		}

		return variable ? variable.constructor.name + (explicit ? '' : '|' + type) : 'null';
	}

	/**
	 *  Create a string matching 'boolean' type and - if not explicit - its shorthand version 'bool'
	 *  @name    booleanType
	 *  @access  internal
	 *  @param   string  type
	 *  @param   bool    explicit typing
	 *  @return  string  types
	 */
	function booleanType(type, explicit) {
		return type + (explicit ? '' : '|bool');
	}

	/**
	 *  Create a string matching undefined (and any string having one or more alphatical characters if not explicit)
	 *  @name    undefinedType
	 *  @access  internal
	 *  @param   string     type
	 *  @param   bool       explicit typing
	 *  @return  string  types
	 */
	function undefinedType(type, explicit) {
		return type + (explicit ? '' : '|[a-z]+');
	}

	/**
	 *  Determine the type and create a string ready for use in regular expressions
	 *  @name    type
	 *  @access  internal
	 *  @param   mixed   variable
	 *  @param   bool    explicit
	 *  @return  string  type
	 */
	function type(variable, explicit) {
		var result = typeof variable;

		switch (result) {
			case 'number':
				result = numberType(result, variable, explicit);
				break;

			case 'object':
				result = objectType(result, variable, explicit);
				break;

			case 'boolean':
				result = booleanType(result, explicit);
				break;

			case 'undefined':
				result = undefinedType(result, explicit);
				break;
		}

		return result;
	}

	/**
	 *  Process the expression match result and prepare the argument object
	 *  @name    prepareArgument
	 *  @access  internal
	 *  @param   RegExpMatch match
	 *  @param   string defaultname
	 *  @result  Object argument
	 */
	function prepareArgument(match, name) {
		var result = {
				type:  match ? match[1] : false,
				name:  match ? match[2] : name
			};

		if (match) {
			if (match[4] === '@') {
				result.reference = match[5];
			}
			else if (match[3] === '=') {
				result.value = cast(result.type, match[5]);
			}
		}

		return result;
	}

	/**
	 *  Parse given signature string and create an array containing all argument options for the signature
	 *  @name    parse
	 *  @access  internal
	 *  @param   string  signature
	 *  @return  array   options
	 */
	function parse(signature) {
		var pattern = /^(?:void|([a-zA-Z]+!?|\.{3})(?:[:\s]+([a-zA-Z]+)(?:(=)(@)?(.*))?)?)?$/;

		return signature.split(/\s*,\s*/).map(function(argument, index, all) {
			var result = prepareArgument(argument.match(pattern), 'var' + (index + 1));

			if (result.type === false) {
				throw new Error('polymorphic: invalid argument "' + argument + '" in signature "' + signature + '"');
			}
			else if (result.type === '...' && index < all.length - 1) {
				throw new Error('polymorphic: variadic argument must be at end of signature "' + signature + '"');
			}

			return result;
		}).filter(function(argument) {
			//  a type is undefined if it was declared as 'void' or '' (an empty string)
			return argument.type !== undefined;
		});
	}

	/**
	 *  The main result function, this is the function actually being returned by `polymorphic`
	 *  @name    result
	 *  @access  internal
	 *  @param   * [one or more arguments]
	 *  @return  mixed  handler result
	 *  @throws  polymorph: signature not found "<resolved pattern>"
	 */
	function polymorph() {
		var arg = Array.prototype.slice.call(arguments),
			candidate = delegate(arg);

		if (!candidate) {
			throw new Error('polymorph: signature not found "' + arg.map(function(variable) {
				return type(variable);
			}).join(', ') + '"');
		}

		return candidate.call.apply(this, candidate.param);
	}

	/**
	 *  Add one or more signatures and a handler for those signatures
	 *  @name    signature
	 *  @access  public
	 *  @param   string signature1
	 *  @param   string signatureN [optional - any number of signature can be provided for a handler]
	 *  @param   function handler
	 *  @return  void
	 *  @throws  polymorphic.signature: expected one or more signatures
	 *           polymorphic.signature: expected final argument to be a callback
	 */
	polymorph.signature = function() {
		var arg = Array.prototype.slice.call(arguments),
			call = arg.length && typeof arg[arg.length - 1] === 'function' ? arg.pop() : null;

		if (!arg.length) {
			throw new Error('polymorphic.signature: expected one or more signatures');
		}
		else if (!call) {
			throw new Error('polymorphic.signature: expected final argument to be a callback');
		}

		arg.forEach(function(signature) {
			registry.push({
				signature: signature,
				arguments: parse(signature),
				call: call
			});
		});
	};

	return polymorph;
}

var polymorphic_1 = polymorphic;

var yaku = createCommonjsModule$$1(function (module) {
/*
 Yaku v0.17.8
 (c) 2015 Yad Smood. http://ysmood.org
 License MIT
*/
(function () {
    "use strict";

    var $undefined
    , $null = null
    , root = typeof window === "object" ? window : commonjsGlobal$$1
    , isLongStackTrace = false
    , process = root.process
    , Arr = Array
    , Err = Error

    , $rejected = 1
    , $resolved = 2
    , $pending = 3

    , $Symbol = "Symbol"
    , $iterator = "iterator"
    , $species = "species"
    , $speciesKey = $Symbol + "(" + $species + ")"
    , $return = "return"

    , $unhandled = "_uh"
    , $promiseTrace = "_pt"
    , $settlerTrace = "_st"

    , $invalidThis = "Invalid this"
    , $invalidArgument = "Invalid argument"
    , $fromPrevious = "\nFrom previous "
    , $promiseCircularChain = "Chaining cycle detected for promise"
    , $unhandledRejectionMsg = "Uncaught (in promise)"
    , $rejectionHandled = "rejectionHandled"
    , $unhandledRejection = "unhandledRejection"

    , $tryCatchFn
    , $tryCatchThis
    , $tryErr = { e: $null }
    , $noop = function () {}
    , $cleanStackReg = /^.+\/node_modules\/yaku\/.+\n?/mg;

    /**
     * This class follows the [Promises/A+](https://promisesaplus.com) and
     * [ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects) spec
     * with some extra helpers.
     * @param  {Function} executor Function object with two arguments resolve, reject.
     * The first argument fulfills the promise, the second argument rejects it.
     * We can call these functions, once our operation is completed.
     */
    var Yaku = module.exports = function (executor) {
        var self = this,
            err;

        // "this._s" is the internal state of: pending, resolved or rejected
        // "this._v" is the internal value

        if (!isObject(self) || self._s !== $undefined)
            { throw genTypeError($invalidThis); }

        self._s = $pending;

        if (isLongStackTrace) { self[$promiseTrace] = genTraceInfo(); }

        if (executor !== $noop) {
            if (!isFunction(executor))
                { throw genTypeError($invalidArgument); }

            err = genTryCatcher(executor)(
                genSettler(self, $resolved),
                genSettler(self, $rejected)
            );

            if (err === $tryErr)
                { settlePromise(self, $rejected, err.e); }
        }
    };

    Yaku["default"] = Yaku;

    extend(Yaku.prototype, {
        /**
         * Appends fulfillment and rejection handlers to the promise,
         * and returns a new promise resolving to the return value of the called handler.
         * @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
         * @param  {Function} onRejected  Optional. Called when the Promise is rejected.
         * @return {Yaku} It will return a new Yaku which will resolve or reject after
         * @example
         * the current Promise.
         * ```js
         * var Promise = require('yaku');
         * var p = Promise.resolve(10);
         *
         * p.then((v) => {
         *     console.log(v);
         * });
         * ```
         */
        then: function (onFulfilled, onRejected) {
            if (this._s === undefined) { throw genTypeError(); }

            return addHandler(
                this,
                newCapablePromise(Yaku.speciesConstructor(this, Yaku)),
                onFulfilled,
                onRejected
            );
        },

        /**
         * The `catch()` method returns a Promise and deals with rejected cases only.
         * It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
         * @param  {Function} onRejected A Function called when the Promise is rejected.
         * This function has one argument, the rejection reason.
         * @return {Yaku} A Promise that deals with rejected cases only.
         * @example
         * ```js
         * var Promise = require('yaku');
         * var p = Promise.reject(new Error("ERR"));
         *
         * p['catch']((v) => {
         *     console.log(v);
         * });
         * ```
         */
        "catch": function (onRejected) {
            return this.then($undefined, onRejected);
        },

        /**
         * Register a callback to be invoked when a promise is settled (either fulfilled or rejected).
         * Similar with the try-catch-finally, it's often used for cleanup.
         * @param  {Function} onFinally A Function called when the Promise is settled.
         * It will not receive any argument.
         * @return {Yaku} A Promise that will reject if onFinally throws an error or returns a rejected promise.
         * Else it will resolve previous promise's final state (either fulfilled or rejected).
         * @example
         * ```js
         * var Promise = require('yaku');
         * var p = Math.random() > 0.5 ? Promise.resolve() : Promise.reject();
         * p.finally(() => {
         *     console.log('finally');
         * });
         * ```
         */
        "finally": function (onFinally) {
            function eventually (value) {
                return Yaku.resolve(onFinally()).then(function () {
                    return value;
                });
            }

            return this.then(eventually, eventually);
        },

        // The number of current promises that attach to this Yaku instance.
        _c: 0,

        // The parent Yaku.
        _p: $null
    });

    /**
     * The `Promise.resolve(value)` method returns a Promise object that is resolved with the given value.
     * If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
     * adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
     * @param  {Any} value Argument to be resolved by this Promise.
     * Can also be a Promise or a thenable to resolve.
     * @return {Yaku}
     * @example
     * ```js
     * var Promise = require('yaku');
     * var p = Promise.resolve(10);
     * ```
     */
    Yaku.resolve = function (val) {
        return isYaku(val) ? val : settleWithX(newCapablePromise(this), val);
    };

    /**
     * The `Promise.reject(reason)` method returns a Promise object that is rejected with the given reason.
     * @param  {Any} reason Reason why this Promise rejected.
     * @return {Yaku}
     * @example
     * ```js
     * var Promise = require('yaku');
     * var p = Promise.reject(new Error("ERR"));
     * ```
     */
    Yaku.reject = function (reason) {
        return settlePromise(newCapablePromise(this), $rejected, reason);
    };

    /**
     * The `Promise.race(iterable)` method returns a promise that resolves or rejects
     * as soon as one of the promises in the iterable resolves or rejects,
     * with the value or reason from that promise.
     * @param  {iterable} iterable An iterable object, such as an Array.
     * @return {Yaku} The race function returns a Promise that is settled
     * the same way as the first passed promise to settle.
     * It resolves or rejects, whichever happens first.
     * @example
     * ```js
     * var Promise = require('yaku');
     * Promise.race([
     *     123,
     *     Promise.resolve(0)
     * ])
     * .then((value) => {
     *     console.log(value); // => 123
     * });
     * ```
     */
    Yaku.race = function (iterable) {
        var self = this
        , p = newCapablePromise(self)

        , resolve = function (val) {
            settlePromise(p, $resolved, val);
        }

        , reject = function (val) {
            settlePromise(p, $rejected, val);
        }

        , ret = genTryCatcher(each)(iterable, function (v) {
            self.resolve(v).then(resolve, reject);
        });

        if (ret === $tryErr) { return self.reject(ret.e); }

        return p;
    };

    /**
     * The `Promise.all(iterable)` method returns a promise that resolves when
     * all of the promises in the iterable argument have resolved.
     *
     * The result is passed as an array of values from all the promises.
     * If something passed in the iterable array is not a promise,
     * it's converted to one by Promise.resolve. If any of the passed in promises rejects,
     * the all Promise immediately rejects with the value of the promise that rejected,
     * discarding all the other promises whether or not they have resolved.
     * @param  {iterable} iterable An iterable object, such as an Array.
     * @return {Yaku}
     * @example
     * ```js
     * var Promise = require('yaku');
     * Promise.all([
     *     123,
     *     Promise.resolve(0)
     * ])
     * .then((values) => {
     *     console.log(values); // => [123, 0]
     * });
     * ```
     * @example
     * Use with iterable.
     * ```js
     * var Promise = require('yaku');
     * Promise.all((function * () {
     *     yield 10;
     *     yield new Promise(function (r) { setTimeout(r, 1000, "OK") });
     * })())
     * .then((values) => {
     *     console.log(values); // => [123, 0]
     * });
     * ```
     */
    Yaku.all = function (iterable) {
        var self = this
        , p1 = newCapablePromise(self)
        , res = []
        , ret;

        function reject (reason) {
            settlePromise(p1, $rejected, reason);
        }

        ret = genTryCatcher(each)(iterable, function (item, i) {
            self.resolve(item).then(function (value) {
                res[i] = value;
                if (!--ret) { settlePromise(p1, $resolved, res); }
            }, reject);
        });

        if (ret === $tryErr) { return self.reject(ret.e); }

        if (!ret) { settlePromise(p1, $resolved, []); }

        return p1;
    };

    /**
     * The ES6 Symbol object that Yaku should use, by default it will use the
     * global one.
     * @type {Object}
     * @example
     * ```js
     * var core = require("core-js/library");
     * var Promise = require("yaku");
     * Promise.Symbol = core.Symbol;
     * ```
     */
    Yaku.Symbol = root[$Symbol] || {};

    // To support browsers that don't support `Object.defineProperty`.
    genTryCatcher(function () {
        Object.defineProperty(Yaku, getSpecies(), {
            get: function () { return this; }
        });
    })();

    /**
     * Use this api to custom the species behavior.
     * https://tc39.github.io/ecma262/#sec-speciesconstructor
     * @param {Any} O The current this object.
     * @param {Function} defaultConstructor
     */
    Yaku.speciesConstructor = function (O, D) {
        var C = O.constructor;

        return C ? (C[getSpecies()] || D) : D;
    };

    /**
     * Catch all possibly unhandled rejections. If you want to use specific
     * format to display the error stack, overwrite it.
     * If it is set, auto `console.error` unhandled rejection will be disabled.
     * @param {Any} reason The rejection reason.
     * @param {Yaku} p The promise that was rejected.
     * @example
     * ```js
     * var Promise = require('yaku');
     * Promise.unhandledRejection = (reason) => {
     *     console.error(reason);
     * };
     *
     * // The console will log an unhandled rejection error message.
     * Promise.reject('my reason');
     *
     * // The below won't log the unhandled rejection error message.
     * Promise.reject('v')["catch"](() => {});
     * ```
     */
    Yaku.unhandledRejection = function (reason, p) {
        try {
            root.console.error(
                $unhandledRejectionMsg,
                isLongStackTrace ? p.longStack : genStackInfo(reason, p)
            );
        } catch (e) {} // eslint-disable-line
    };

    /**
     * Emitted whenever a Promise was rejected and an error handler was
     * attached to it (for example with `["catch"]()`) later than after an event loop turn.
     * @param {Any} reason The rejection reason.
     * @param {Yaku} p The promise that was rejected.
     */
    Yaku.rejectionHandled = $noop;

    /**
     * It is used to enable the long stack trace.
     * Once it is enabled, it can't be reverted.
     * While it is very helpful in development and testing environments,
     * it is not recommended to use it in production. It will slow down
     * application and eat up memory.
     * It will add an extra property `longStack` to the Error object.
     * @example
     * ```js
     * var Promise = require('yaku');
     * Promise.enableLongStackTrace();
     * Promise.reject(new Error("err"))["catch"]((err) => {
     *     console.log(err.longStack);
     * });
     * ```
     */
    Yaku.enableLongStackTrace = function () {
        isLongStackTrace = true;
    };

    /**
     * Only Node has `process.nextTick` function. For browser there are
     * so many ways to polyfill it. Yaku won't do it for you, instead you
     * can choose what you prefer. For example, this project
     * [next-tick](https://github.com/medikoo/next-tick).
     * By default, Yaku will use `process.nextTick` on Node, `setTimeout` on browser.
     * @type {Function}
     * @example
     * ```js
     * var Promise = require('yaku');
     * Promise.nextTick = require('next-tick');
     * ```
     * @example
     * You can even use sync resolution if you really know what you are doing.
     * ```js
     * var Promise = require('yaku');
     * Promise.nextTick = fn => fn();
     * ```
     */
    Yaku.nextTick = process ?
        process.nextTick :
        function (fn) { setTimeout(fn); };

    // ********************** Private **********************

    Yaku._s = 1;

    /**
     * All static variable name will begin with `$`. Such as `$rejected`.
     * @private
     */

    // ******************************* Utils ********************************

    function getSpecies () {
        return Yaku[$Symbol][$species] || $speciesKey;
    }

    function extend (src, target) {
        for (var k in target) {
            src[k] = target[k];
        }
    }

    function isObject (obj) {
        return obj && typeof obj === "object";
    }

    function isFunction (obj) {
        return typeof obj === "function";
    }

    function isInstanceOf (a, b) {
        return a instanceof b;
    }

    function isError (obj) {
        return isInstanceOf(obj, Err);
    }

    function ensureType (obj, fn, msg) {
        if (!fn(obj)) { throw genTypeError(msg); }
    }

    /**
     * Wrap a function into a try-catch.
     * @private
     * @return {Any | $tryErr}
     */
    function tryCatcher () {
        try {
            return $tryCatchFn.apply($tryCatchThis, arguments);
        } catch (e) {
            $tryErr.e = e;
            return $tryErr;
        }
    }

    /**
     * Generate a try-catch wrapped function.
     * @private
     * @param  {Function} fn
     * @return {Function}
     */
    function genTryCatcher (fn, self) {
        $tryCatchFn = fn;
        $tryCatchThis = self;
        return tryCatcher;
    }

    /**
     * Generate a scheduler.
     * @private
     * @param  {Integer}  initQueueSize
     * @param  {Function} fn `(Yaku, Value) ->` The schedule handler.
     * @return {Function} `(Yaku, Value) ->` The scheduler.
     */
    function genScheduler (initQueueSize, fn) {
        /**
         * All async promise will be scheduled in
         * here, so that they can be execute on the next tick.
         * @private
         */
        var fnQueue = Arr(initQueueSize)
        , fnQueueLen = 0;

        /**
         * Run all queued functions.
         * @private
         */
        function flush () {
            var i = 0;
            while (i < fnQueueLen) {
                fn(fnQueue[i], fnQueue[i + 1]);
                fnQueue[i++] = $undefined;
                fnQueue[i++] = $undefined;
            }

            fnQueueLen = 0;
            if (fnQueue.length > initQueueSize) { fnQueue.length = initQueueSize; }
        }

        return function (v, arg) {
            fnQueue[fnQueueLen++] = v;
            fnQueue[fnQueueLen++] = arg;

            if (fnQueueLen === 2) { Yaku.nextTick(flush); }
        };
    }

    /**
     * Generate a iterator
     * @param  {Any} obj
     * @private
     * @return {Object || TypeError}
     */
    function each (iterable, fn) {
        var len
        , i = 0
        , iter
        , item
        , ret;

        if (!iterable) { throw genTypeError($invalidArgument); }

        var gen = iterable[Yaku[$Symbol][$iterator]];
        if (isFunction(gen))
            { iter = gen.call(iterable); }
        else if (isFunction(iterable.next)) {
            iter = iterable;
        }
        else if (isInstanceOf(iterable, Arr)) {
            len = iterable.length;
            while (i < len) {
                fn(iterable[i], i++);
            }
            return i;
        } else
            { throw genTypeError($invalidArgument); }

        while (!(item = iter.next()).done) {
            ret = genTryCatcher(fn)(item.value, i++);
            if (ret === $tryErr) {
                isFunction(iter[$return]) && iter[$return]();
                throw ret.e;
            }
        }

        return i;
    }

    /**
     * Generate type error object.
     * @private
     * @param  {String} msg
     * @return {TypeError}
     */
    function genTypeError (msg) {
        return new TypeError(msg);
    }

    function genTraceInfo (noTitle) {
        return (noTitle ? "" : $fromPrevious) + new Err().stack;
    }


    // *************************** Promise Helpers ****************************

    /**
     * Resolve the value returned by onFulfilled or onRejected.
     * @private
     * @param {Yaku} p1
     * @param {Yaku} p2
     */
    var scheduleHandler = genScheduler(999, function (p1, p2) {
        var x, handler;

        // 2.2.2
        // 2.2.3
        handler = p1._s !== $rejected ? p2._onFulfilled : p2._onRejected;

        // 2.2.7.3
        // 2.2.7.4
        if (handler === $undefined) {
            settlePromise(p2, p1._s, p1._v);
            return;
        }

        // 2.2.7.1
        x = genTryCatcher(callHanler)(handler, p1._v);
        if (x === $tryErr) {
            // 2.2.7.2
            settlePromise(p2, $rejected, x.e);
            return;
        }

        settleWithX(p2, x);
    });

    var scheduleUnhandledRejection = genScheduler(9, function (p) {
        if (!hashOnRejected(p)) {
            p[$unhandled] = 1;
            emitEvent($unhandledRejection, p);
        }
    });

    function emitEvent (name, p) {
        var browserEventName = "on" + name.toLowerCase()
            , browserHandler = root[browserEventName];

        if (process && process.listeners(name).length)
            { name === $unhandledRejection ?
                process.emit(name, p._v, p) : process.emit(name, p); }
        else if (browserHandler)
            { browserHandler({ reason: p._v, promise: p }); }
        else
            { Yaku[name](p._v, p); }
    }

    function isYaku (val) { return val && val._s; }

    function newCapablePromise (Constructor) {
        if (isYaku(Constructor)) { return new Constructor($noop); }

        var p, r, j;
        p = new Constructor(function (resolve, reject) {
            if (p) { throw genTypeError(); }

            r = resolve;
            j = reject;
        });

        ensureType(r, isFunction);
        ensureType(j, isFunction);

        return p;
    }

    /**
     * It will produce a settlePromise function to user.
     * Such as the resolve and reject in this `new Yaku (resolve, reject) ->`.
     * @private
     * @param  {Yaku} self
     * @param  {Integer} state The value is one of `$pending`, `$resolved` or `$rejected`.
     * @return {Function} `(value) -> undefined` A resolve or reject function.
     */
    function genSettler (self, state) {
        return function (value) {
            if (isLongStackTrace)
                { self[$settlerTrace] = genTraceInfo(true); }

            if (state === $resolved)
                { settleWithX(self, value); }
            else
                { settlePromise(self, state, value); }
        };
    }

    /**
     * Link the promise1 to the promise2.
     * @private
     * @param {Yaku} p1
     * @param {Yaku} p2
     * @param {Function} onFulfilled
     * @param {Function} onRejected
     */
    function addHandler (p1, p2, onFulfilled, onRejected) {
        // 2.2.1
        if (isFunction(onFulfilled))
            { p2._onFulfilled = onFulfilled; }
        if (isFunction(onRejected)) {
            if (p1[$unhandled]) { emitEvent($rejectionHandled, p1); }

            p2._onRejected = onRejected;
        }

        if (isLongStackTrace) { p2._p = p1; }
        p1[p1._c++] = p2;

        // 2.2.6
        if (p1._s !== $pending)
            { scheduleHandler(p1, p2); }

        // 2.2.7
        return p2;
    }

    // iterate tree
    function hashOnRejected (node) {
        // A node shouldn't be checked twice.
        if (node._umark)
            { return true; }
        else
            { node._umark = true; }

        var i = 0
        , len = node._c
        , child;

        while (i < len) {
            child = node[i++];
            if (child._onRejected || hashOnRejected(child)) { return true; }
        }
    }

    function genStackInfo (reason, p) {
        var stackInfo = [];

        function push (trace) {
            return stackInfo.push(trace.replace(/^\s+|\s+$/g, ""));
        }

        if (isLongStackTrace) {
            if (p[$settlerTrace])
                { push(p[$settlerTrace]); }

            // Hope you guys could understand how the back trace works.
            // We only have to iterate through the tree from the bottom to root.
            (function iter (node) {
                if (node && $promiseTrace in node) {
                    iter(node._next);
                    push(node[$promiseTrace] + "");
                    iter(node._p);
                }
            })(p);
        }

        return (reason && reason.stack ? reason.stack : reason) +
            ("\n" + stackInfo.join("\n")).replace($cleanStackReg, "");
    }

    function callHanler (handler, value) {
        // 2.2.5
        return handler(value);
    }

    /**
     * Resolve or reject a promise.
     * @private
     * @param  {Yaku} p
     * @param  {Integer} state
     * @param  {Any} value
     */
    function settlePromise (p, state, value) {
        var i = 0
        , len = p._c;

        // 2.1.2
        // 2.1.3
        if (p._s === $pending) {
            // 2.1.1.1
            p._s = state;
            p._v = value;

            if (state === $rejected) {
                if (isLongStackTrace && isError(value)) {
                    value.longStack = genStackInfo(value, p);
                }

                scheduleUnhandledRejection(p);
            }

            // 2.2.4
            while (i < len) {
                scheduleHandler(p, p[i++]);
            }
        }

        return p;
    }

    /**
     * Resolve or reject promise with value x. The x can also be a thenable.
     * @private
     * @param {Yaku} p
     * @param {Any | Thenable} x A normal value or a thenable.
     */
    function settleWithX (p, x) {
        // 2.3.1
        if (x === p && x) {
            settlePromise(p, $rejected, genTypeError($promiseCircularChain));
            return p;
        }

        // 2.3.2
        // 2.3.3
        if (x !== $null && (isFunction(x) || isObject(x))) {
            // 2.3.2.1
            var xthen = genTryCatcher(getThen)(x);

            if (xthen === $tryErr) {
                // 2.3.3.2
                settlePromise(p, $rejected, xthen.e);
                return p;
            }

            if (isFunction(xthen)) {
                if (isLongStackTrace && isYaku(x))
                    { p._next = x; }

                // Fix https://bugs.chromium.org/p/v8/issues/detail?id=4162
                if (isYaku(x))
                    { settleXthen(p, x, xthen); }
                else
                    { Yaku.nextTick(function () {
                        settleXthen(p, x, xthen);
                    }); }
            } else
                // 2.3.3.4
                { settlePromise(p, $resolved, x); }
        } else
            // 2.3.4
            { settlePromise(p, $resolved, x); }

        return p;
    }

    /**
     * Try to get a promise's then method.
     * @private
     * @param  {Thenable} x
     * @return {Function}
     */
    function getThen (x) { return x.then; }

    /**
     * Resolve then with its promise.
     * @private
     * @param  {Yaku} p
     * @param  {Thenable} x
     * @param  {Function} xthen
     */
    function settleXthen (p, x, xthen) {
        // 2.3.3.3
        var err = genTryCatcher(xthen, x)(function (y) {
            // 2.3.3.3.3
            // 2.3.3.3.1
            x && (x = $null, settleWithX(p, y));
        }, function (r) {
            // 2.3.3.3.3
            // 2.3.3.3.2
            x && (x = $null, settlePromise(p, $rejected, r));
        });

        // 2.3.3.3.4.1
        if (err === $tryErr && x) {
            // 2.3.3.3.4.2
            settlePromise(p, $rejected, err.e);
            x = $null;
        }
    }

})();
});

var callable;
var byObserver;

callable = function (fn) {
	if (typeof fn !== 'function') { throw new TypeError(fn + " is not a function"); }
	return fn;
};

byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, currentQueue, i = 0;
	new Observer(function () {
		var callback;
		if (!queue) {
			if (!currentQueue) { return; }
			queue = currentQueue;
		} else if (currentQueue) {
			queue = currentQueue.concat(queue);
		}
		currentQueue = queue;
		queue = null;
		if (typeof currentQueue === 'function') {
			callback = currentQueue;
			currentQueue = null;
			callback();
			return;
		}
		node.data = (i = ++i % 2); // Invoke other batch, to handle leftover callbacks in case of crash
		while (currentQueue) {
			callback = currentQueue.shift();
			if (!currentQueue.length) { currentQueue = null; }
			callback();
		}
	}).observe(node, { characterData: true });
	return function (fn) {
		callable(fn);
		if (queue) {
			if (typeof queue === 'function') { queue = [queue, fn]; }
			else { queue.push(fn); }
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

var index$1 = (function () {
	// Node.js
	if ((typeof process === 'object') && process && (typeof process.nextTick === 'function')) {
		return process.nextTick;
	}

	// MutationObserver
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') { return byObserver(MutationObserver); }
		if (typeof WebKitMutationObserver === 'function') { return byObserver(WebKitMutationObserver); }
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(callable(cb)); };
	}

	// Wide available standard
	if ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {
		return function (cb) { setTimeout(callable(cb), 0); };
	}

	return null;
}());

//      

/**
 * Several utility functions / libs used by alo
 *
 * Some of this functions / libs might change over time: Please read the description of the specific function / lib.
 *
 */
var Util = function () {};

// Library functions
// Lodash
/**
 * Lodash cloneDeep, can be used
 *
 * @function
 */
Util.prototype.cloneDeep = cloneDeep_1;

Util.prototype.filter = filter_1;

/**
 * Lodash values, can be used
 *
 * @function
 */
Util.prototype.values = values_1;

/**
 * Lodash forEach, can be used
 *
 * @function
 */
Util.prototype.forEach = forEach_1;

/**
 * Lodash isFunction, can be used
 *
 * @function
 */
Util.prototype.isFunction = isFunction_1;

/**
 * Lodash isString, can be used
 *
 * @function
 */
Util.prototype.isString = isString_1;

/**
 * Lodash isObject, can be used
 *
 * @function
 */
Util.prototype.isObject = isObject_1;

Util.prototype.merge = merge_1;

/**
 * Lodash isEqual, can be used
 *
 * @function
 */
Util.prototype.isEqual = isEqual_1;

/**
 * Lodash isPlainObject, can be used
 *
 * @function
 */
Util.prototype.isPlainObject = isPlainObject_1;

/**
 * Lodash isArray, can be used
 *
 * @function
 */
Util.prototype.isArray = isArray_1;

Util.prototype.map = map_1;

/**
 * Lodash isBoolean, can be used
 *
 * @function
 */
Util.prototype.isBoolean = isBoolean_1;

Util.prototype.isInteger = isInteger_1;

/**
 * Lodash uniqueId, can be used
 *
 * @function
 */
Util.prototype.uniqueId = uniqueId_1;

Util.prototype.toPairs = toPairs_1;

/**
 * Flyd stream: Might change!
 *
 * @function
 */
Util.prototype.createStream = index.stream;

/**
 * Flyd stream: Might change!
 *
 * @function
 */
Util.prototype.combineStreams = index.combine;

/**
 * Flyd isStream: Might change!
 *
 * @function
 */
Util.prototype.isStream = index.isStream;

/**
 * Flyd immediate: Might change!
 *
 * @function
 */
Util.prototype.immediateStream = index.immediate;

/**
 * Flyd endsOn: Might change!
 *
 * @function
 */
Util.prototype.streamEndsOn = index.endsOn;

/**
 * Flyd map: Might change!
 *
 * @function
 */
Util.prototype.mapStream = index.map;

/**
 * Flyd on: Might change!
 *
 * @function
 */
Util.prototype.streamOn = index.on;

/**
 * Flyd scan: Might change!
 *
 * @function
 */
Util.prototype.scanStream = index.scan;

/**
 * Flyd merge: Might change!
 *
 * @function
 */
Util.prototype.mergeStream = index.merge;

/**
 * Flyd transduce: Might change!
 *
 * @function
 */
Util.prototype.transduceStream = index.transduce;

/**
 * Polymorphic helper: Might change!
 *
 * @function
 */
Util.prototype.createPolymorphic = polymorphic_1;

Util.prototype.Promise = yaku;

// TODO: yaku 0.17.4 uses setTimeout for nextTick in the browser, next-tick is a faster polyfill. Remove the polyfill, if yaku decides to implement/integrate one itsself
Util.prototype.Promise.nextTick = function (fn) { return index$1(fn); };

Util.prototype.createPromise = function createPromise (resolve, reject) {
  return new this.Promise(resolve, reject)
};

/**
 * Same as new Alo
 * @see Alo
 */
Util.prototype.createAlo = function createAlo () {
  var alo = Object.create(Alo.prototype);
  Alo.apply(alo, arguments);
  return alo
};

var u$1 = new Util();

var functions = {
  get: {
    relation: true
  },
  add: {
    relation: true
  },
  remove: {
    relation: true
  },
  relatedTo: {
    relation: true
  },
  indexOf: {
    relation: true
  },
  setIndexOf: {
    relation: true
  },
  getId: {}
};

var formatFunctionName = function (action, name) {
  name = name.split('');
  name[0] = name[0].toUpperCase();
  name = name.join('');
  return action + name
};

var ObjectRelation = function ObjectRelation () {
  objectRelation.apply(this, arguments);
};
var objectRelation = u$1.createPolymorphic();
objectRelation.signature('string, string, function', function (parentName, relationName, isRelationObject) {
  var self = this;
  if (parentName === '' || relationName === '') {
    throw new Error('Argument given should not be empty')
  } else {
    this.idPropertyName = '_id';
    this.parentName = parentName;
    this.relationName = relationName;
    this.relationByIdPropertyName = '_' + relationName + 'RelationsById';
    this.relationPropertyName = '_' + relationName + 'Relations';
    this.isRelationObject = isRelationObject;

    this.functions = {};
    u$1.forEach(functions, function (func, funcName) {
      self.functions[funcName] = {
        before: [],
        after: []
      };
      if (func.relation === true) {
        self.functions[funcName].parentName = formatFunctionName(funcName, parentName);
        self.functions[funcName].relationName = formatFunctionName(funcName, relationName);
      }
    });
  }
});

/**
 * Should be called in the constructor of the parent
 */
ObjectRelation.prototype.constructParent = function (parentObject) {
  if (parentObject[this.idPropertyName] === null || parentObject[this.idPropertyName] === undefined) {
    var id = u$1.uniqueId();
    parentObject[this.idPropertyName] = id;
  }
  parentObject[this.relationByIdPropertyName] = {};
  parentObject[this.relationPropertyName] = [];
};

ObjectRelation.prototype.registerParentPrototype = function (prototype) {
  var self = this;
  var createCaller = function (funcName, func) {
    return function () {
      var parent = this;
      var args = u$1.values(arguments);
      args.unshift(self);
      u$1.forEach(self.functions[funcName].before, function (beforeFunc) {
        beforeFunc.call(parent);
      });
      var result = func.apply(parent, args);
      u$1.forEach(self.functions[funcName].after, function (afterFunc) {
        afterFunc.call(parent);
      });
      return result
    }
  };

  u$1.forEach(self.functions, function (func, funcName) {
    var prototypeFunctionName = funcName;
    if (u$1.isString(func.relationName) && func.relationName !== '') {
      prototypeFunctionName = func.relationName;
    }
    prototype[prototypeFunctionName] = createCaller(funcName, self[funcName + 'Function']);
  });
};

ObjectRelation.prototype.getIdFunction = function getId (config) {
  return this[config.idPropertyName]
};

ObjectRelation.prototype.getFunction = u$1.createPolymorphic();
var get$2 = ObjectRelation.prototype.getFunction;
get$2.signature('object, boolean b=true', function (config, byId) {
  var self = this;

  if (byId) {
    return this[config.relationByIdPropertyName]
  } else {
    var result = [];
    u$1.forEach(this[config.relationPropertyName], function (item) {
      result.push(get$2.call(self, config, item));
    });
    return result
  }
});
get$2.signature('object, string', function (config, id) {
  if (id === '') {
    throw new Error('Argument given should not be an empty string')
  } else {
    if (this[config.relationByIdPropertyName][id] !== null) {
      return this[config.relationByIdPropertyName][id]
    } else {
      return false
    }
  }
});

ObjectRelation.prototype.addFunction = u$1.createPolymorphic();
var add = ObjectRelation.prototype.addFunction;
add.signature('object, object, integer a=-1, boolean b=false', function (config, relationObject, index, fromRelation) {
  if (!config.isRelationObject.call(this, relationObject)) {
    throw new Error('Argument given is not a ' + config.relationName)
  } else {
    var id = relationObject.getId();
    if (!u$1.isString(id) || id === '') {
      throw new Error('Id is not a string or empty')
    } else {
      if (fromRelation !== true) {
        relationObject[config.functions.add.parentName](this, -1, true);
      }
      this[config.relationByIdPropertyName][id] = relationObject;
      if (index >= 0) {
        this[config.relationPropertyName].splice(index, 0, id);
      } else {
        this[config.relationPropertyName].push(id);
      }
    }
  }

  return this
});
add.signature('object, array', function (config, relationObjects) {
  var self = this;

  u$1.forEach(relationObjects, function (relationObject) {
    add.call(self, config, relationObject, -1);
  });

  return this
});
add.signature('object, object, object, ...', function (config, relationObject1, relationObject2, rest) {
  var relationObjects = [relationObject1, relationObject2];

  return add.call(this, config, relationObjects.concat(rest), -1)
});

ObjectRelation.prototype.removeFunction = u$1.createPolymorphic();
var remove = ObjectRelation.prototype.removeFunction;
remove.signature('object, string, boolean b=false', function (config, id, fromRelation) {
  if (id === '') {
    throw new Error('Argument given should not be empty')
  } else {
    if (!u$1.isBoolean(fromRelation) || fromRelation !== true) {
      if (config.isRelationObject.call(this, this[config.relationPropertyName][id])) {
        this[config.relationByIdPropertyName][id][config.functions.remove.parentName](this.getId(), true);
      }
    }
    delete this[config.relationByIdPropertyName][id];
    var position = this[config.relationPropertyName].indexOf(id);
    if (position > -1) {
      this[config.relationPropertyName].splice(position, 1);
    }
  }

  return this
});
remove.signature('object, object, boolean b=false', function (config, relationObject, fromRelation) {
  if (!config.isRelationObject.call(this, relationObject)) {
    throw new Error('Argument given is not a ' + config.relationName)
  } else {
    var id = relationObject.getId();
    return remove.call(this, config, id, fromRelation)
  }
});
remove.signature('object', function (config) {
  var self = this;

  u$1.forEach(this[config.relationPropertyName], function (id) {
    remove.call(self, config, id);
  });

  return this
});

ObjectRelation.prototype.relatedToFunction = function (config, relationObj) {
  return indexOf.apply(this, arguments) > -1
};

ObjectRelation.prototype.indexOfFunction = function (config, relationObj) {
  var id = null;

  if (u$1.isString(relationObj) || u$1.isInteger(relationObj)) {
    id = relationObj;
  } else if (!config.isRelationObject.call(this, relationObj)) {
    throw new Error('Argument given should be an id or a ' + config.relationName)
  } else {
    id = relationObj.getId();
  }

  return this[config.relationPropertyName].indexOf(id)
};
var indexOf = ObjectRelation.prototype.indexOfFunction;

ObjectRelation.prototype.setIndexOfFunction = function (config, relationObj, index) {
  if (!u$1.isInteger(index)) {
    throw new Error('Argument for index should be an integer')
  } else {
    var id = null;

    if (u$1.isString(relationObj) || u$1.isInteger(relationObj)) {
      id = relationObj;
    } else if (!config.isRelationObject.call(this, relationObj)) {
      throw new Error('Argument given should be an id or a ' + config.relationName)
    } else {
      id = relationObj.getId();
    }

    var oldIndex = this[config.relationPropertyName].indexOf(id);
    if (oldIndex !== -1 && oldIndex !== index) {
      delete this[config.relationPropertyName][oldIndex];
      this[config.relationPropertyName].splice(index, 0, id);
    }

    return index
  }
};

ObjectRelation.prototype.before = u$1.createPolymorphic();
var before = ObjectRelation.prototype.before;
before.signature('string, function', function (functionName, func) {
  this.functions[functionName].before.push(func);
});

ObjectRelation.prototype.after = u$1.createPolymorphic();
var after = ObjectRelation.prototype.after;
after.signature('string, function', function (functionName, func) {
  this.functions[functionName].after.push(func);
});

var u = new Util();

var storeRelation = new ObjectRelation('subscription', 'store', function () {
  return this._alo.isStore.apply(this._alo, arguments)
});
var memberRelation = new ObjectRelation('subscription', 'member', function () {
  return this._alo.isMember.apply(this._alo, arguments)
});
var dependencyRelation = new ObjectRelation('subscription', 'dependency', function () {
  return this._alo.isDependency.apply(this._alo, arguments)
});

/**
 * Subscription Constructor, is used in the Store Class to create Subscriptions to state
 *
 * @class
 * @extends {Store}
 * @see Store
 * @param {number} id
 * @param {Object} storeProtected
 * @param {string | Array} namespace
 */
var Subscription = function Subscription () {
  this._id = null;

  this._storeRelations = null;
  this._memberRelations = null;
  this._dependencyRelations = null;

  this._events = {
    'beforePublish': [],
    'afterPublish': []
  };

  this._subscriptionStream = null;
  this._stream = null;
  this._lastData = null;

  this._muted = false;

  storeRelation.constructParent(this);
  memberRelation.constructParent(this);
  dependencyRelation.constructParent(this);

  subscription.apply(this, arguments);
};

var subscription = u.createPolymorphic();
subscription.signature('', function () {});
subscription.signature('object, array', function (dependencies, members) {
  this.setDependency(dependencies);
  this.addMember(members);
});
subscription.signature('object', function (dependencies) {
  this.setDependency(dependencies);
});
subscription.signature('array', function (members) {
  this.addMember(members);
});
subscription.signature('function', function (func) {
  this.createMember(func);
});

Subscription.prototype.addMember = null;
Subscription.prototype.getMember = null;

var afterChange = function () {
  var self = this;

  if (u.isStream(this._stream)) {
    this._stream.end(true);
    this._stream = null;
  }
  if (u.isStream(this._subscriptionStream)) {
    this._subscriptionStream.end(true);
    this._subscriptionStream = null;
  }

  var streams = [];
  var stores = u.values(this.getStore());
  u.forEach(stores, function (store) {
    streams.push(store.getStream());
  });
  this._stream = u.combineStreams(function () {
    var streamState = {};
    u.forEach(u.values(arguments), function (stream, idx) {
      if (self._alo.isStore(stores[idx])) {
        streamState[stores[idx].getId()] = stream();
      }
    });
    return u.Promise.resolve().then(function () {
      var dependencies = self.getDependency(false);
      if (dependencies.length > 0) {
        var depsState = {
          state: streamState,
          computed: {}
        };
        return dependencies[0].reduceRecursive(dependencies, self.getId(), depsState)
      } else {
        return {}
      }
    }).then(function (computed) {
      return {stores: streamState, computed: computed}
    })
  }, streams);
  this._subscriptionStream = u.streamOn(function (data) {
    var computedLength = u.values(data.computed).length;
    if (self._lastData === null ||
      (computedLength === 0 && !u.isEqual(self._lastData.stores, data.stores)) ||
      (computedLength > 0 && !u.isEqual(self._lastData.computed, data.computed))
    ) {
      self._lastData = data;
      self._publish(data);
    }
  }, this._stream);
};

storeRelation.after('add', afterChange);
storeRelation.after('remove', afterChange);

storeRelation.registerParentPrototype(Subscription.prototype);
memberRelation.registerParentPrototype(Subscription.prototype);
dependencyRelation.registerParentPrototype(Subscription.prototype);

Subscription.prototype.createMember = function createMember () {
  var member = this._alo.createMember.apply(this._alo, arguments);
  this.addMember(member);

  return member
};

Subscription.prototype._callEvent = function (name, state) {
  var promises = this._events[name].map(function (func) {
    return u.Promise.resolve(state).then(func)
  });
  return u.Promise.all(promises).then(function (results) {
    var result = (results.indexOf(false) === -1);
    return result
  })
};

Subscription.prototype._publish = function (state) {
  var self = this;
  if (state && self._muted === false) {
    self._muted = true;
    var promise = u.Promise.resolve().then(function () {
      return self._callEvent('beforePublish', state)
    }).then(function (runPublish) {
      self._muted = false;
      if (runPublish !== false) {
        var state = self.getData();
        var promises = [];
        u.forEach(self.getMember(false), function (member) {
          promises.push(member._call(state.stores, state.computed));
        });
        return u.Promise.all(promises)
      } else {
        return false
      }
    }).then(function (runPublish) {
      if (runPublish !== false) {
        self._muted = true;
        return self._callEvent('afterPublish', state)
      }
    }).then(function () {
      self._muted = false;
      return null
    });
    return promise
  }
};

Subscription.prototype.enable = null;
Subscription.prototype.disable = null;

Subscription.prototype.remember = function remember () {
  var self = this;

  var data = self.getData();

  return self._publish(data)
};

Subscription.prototype.stop = function stop () {
  this.disable();
  this.removeStore();

  return this
};

Subscription.prototype.getStream = function getStream () {
  return this._stream
};

Subscription.prototype.getData = function getData () {
  return u.cloneDeep(this.getStream()())
};

Subscription.prototype.createDependency = function createDependency () {
  var dependency = this._alo.createDependency.apply(this._alo, arguments);
  this.addDependency(dependency);

  return dependency
};

Subscription.prototype.on = u.createPolymorphic();
var on = Subscription.prototype.on;
on.signature('string, function', function (type, func) {
  if (!u.isArray(this._events[type])) {
    throw new Error('Argument type is not a valid type')
  } else {
    var idx = this._events[type].length;
    this._events[type].push(func);
  }
  return {
    stop: function () {
      delete this._events[type][idx];
    }
  }
});

var u$2 = new Util();

var dependencyRelation$1 = new ObjectRelation('dependency', 'parentDependency', function () {
  return this._alo.isDependency.apply(this._alo, arguments)
});
var parentDependencyRelation = new ObjectRelation('parentDependency', 'dependency', function () {
  return this._alo.isDependency.apply(this._alo, arguments)
});
var storeRelation$1 = new ObjectRelation('dependency', 'store', function () {
  return this._alo.isStore.apply(this._alo, arguments)
});
var subscriptionRelation = new ObjectRelation('dependency', 'subscription', function () {
  return this._alo.isSubscription.apply(this._alo, arguments)
});
var memberRelation$1 = new ObjectRelation('dependency', 'member', function () {
  return this._alo.isMember.apply(this._alo, arguments)
});

var Dependency = function Dependency () {
  this._beforeDependencies = {};
  this._afterDependencies = {};

  this._cache = {};

  dependencyRelation$1.constructParent(this);
  parentDependencyRelation.constructParent(this);
  storeRelation$1.constructParent(this);
  subscriptionRelation.constructParent(this);
  memberRelation$1.constructParent(this);

  this.add.apply(this, arguments);
};

dependencyRelation$1.registerParentPrototype(Dependency.prototype);
parentDependencyRelation.registerParentPrototype(Dependency.prototype);
storeRelation$1.registerParentPrototype(Dependency.prototype);
subscriptionRelation.registerParentPrototype(Dependency.prototype);
memberRelation$1.registerParentPrototype(Dependency.prototype);

Dependency.prototype.get = u$2.createPolymorphic();
var get$3 = Dependency.prototype.get;
get$3.signature('string a=after', function (type) {
  switch (type) {
    case 'before':
      return this._beforeDependencies
    case 'after':
      return this._afterDependencies
    default:
      throw new Error('Argument for type should be before or after')
  }
});

Dependency.prototype.add = u$2.createPolymorphic();
var add$1 = Dependency.prototype.add;
add$1.signature('', function () {});
add$1.signature('object, string b=after', function (dependencies, type) {
  var self = this;
  if (['before', 'after'].indexOf(type) === -1) {
    throw new Error('Argument type should be before or after')
  } else {
    u$2.forEach(dependencies, function (dependency, name) {
      if (u$2.isArray(dependency)) {
        self.add(name, dependency[0], dependency[1], type);
      } else {
        self.add(name, dependency, type);
      }
    });
  }

  return this
});
add$1.signature('string, array, function, string a=after', function (name, dependencies, func, type) {
  u$2.forEach(dependencies, function (dependency) {
    if (!u$2.isString(dependency) || dependency === '') {
      throw new Error('Dependency should be a string and not empty')
    }
  });
  switch (type) {
    case 'before':
      this._beforeDependencies[name] = [dependencies, func];
      break
    case 'after':
      this._afterDependencies[name] = [dependencies, func];
      break
    default:
      throw new Error('Type should be before or after')
  }

  return this
});
add$1.signature('string, function, string a=after', function (name, func, type) {
  return add$1.call(this, name, [], func, type)
});

Dependency.prototype.remove = function remove (name, type) {
  if (type !== undefined && ['before', 'after'].indexOf(type) === -1) {
    throw new Error('Argument for type should be before or after')
  } else {
    if (type === undefined || type === 'before') {
      this._beforeDependencies = false;
    }
    if (type === undefined || type === 'after') {
      this._afterDependencies = false;
    }
  }

  return this
};

// TODO: Maybe implement createDependency

Dependency.prototype.reduceRecursive = function reduceRecursive (dependencies, id, data) {
  var self = this;

  return u$2.Promise.resolve().then(function () {
    if (dependencies.length > 0) {
      var idx = 0;
      var walker = function () {
        if (dependencies[idx] !== undefined) {
          if (self._alo.isDependency(dependencies[idx])) {
            return u$2.Promise.resolve().then(function () {
              return dependencies[idx].reduce(id, data)
            }).then(function (computed) {
              data.computed = computed;
              idx++;
              return walker()
            })
          } else {
            idx++;
            return walker()
          }
        } else {
          return data.computed
        }
      };
      return walker()
    } else {
      return {}
    }
  })
};

Dependency.prototype.reduce = function reduce (id, data) {
  var self = this;
  self._cache[id] = self._cache[id] || {};

  var walkDependencies = function (dependencies, called) {
    var pairs = u$2.toPairs(dependencies);
    if (called === undefined) {
      called = [];
    }
    var idx = 0;
    var walker = function () {
      if (pairs[idx] !== undefined) {
        return u$2.Promise.resolve().then(function () {
          return walkDependency(called, pairs[idx], dependencies)
        }).then(function (newCalled) {
          called = newCalled;
          idx++;
          return walker()
        })
      } else {
        return called
      }
    };
    return walker()
  };

  var walkDependency = function (called, properties, dependencies) {
    var name = properties[0];
    var deps = properties[1][0];
    var func = properties[1][1];
    if (called.indexOf(name) === -1) {
      return u$2.Promise.resolve().then(function () {
        if (deps.length > 0) {
          var filteredDeps = u$2.filter(deps, function (name) {
            return (data.computed[name] === undefined)
          });
          var preparedDeps = {};
          u$2.forEach(filteredDeps, function (name) {
            preparedDeps[name] = dependencies[name];
          });
          return walkDependencies(preparedDeps, called)
        } else {
          return called
        }
      }).then(function (called) {
        var recalculate = true;
        if (deps.length > 0) {
          recalculate = false;
          u$2.forEach(deps, function (name) {
            if (!u$2.isEqual(data.computed[name], self._cache[id][name])) {
              recalculate = true;
              return false
            }
          });
        }
        if (recalculate) {
          if (u$2.isFunction(func)) {
            return func(data.state, data.computed, data.action)
          } else {
            return null
          }
        } else {
          return self._cache[id][name]
        }
      }).then(function (result) {
        if (result === undefined) {
          result = null;
        }
        data.computed[name] = result;
        called.push(name);
        return called
      })
    } else {
      return called
    }
  };

  var nextDependencies = {
    before: this.get('before'),
    after: this.get('after')
  };

  return u$2.Promise.resolve().then(function () {
    return walkDependencies(nextDependencies.before, [])
  }).then(function (called) {
    var idx = 0;
    var relationDependencies = self.getDependency(false);
    var walker = function () {
      if (relationDependencies[idx] !== undefined) {
        if (self._alo.isDependency(relationDependencies[idx])) {
          return u$2.Promise.resolve().then(function () {
            return relationDependencies[idx].reduce(self.getId(), data)
          }).then(function (computed, called) {
            data.computed = computed;
            idx++;
            return walker()
          })
        } else {
          idx++;
          return walker()
        }
      } else {
        return true
      }
    };
    return walker()
  }).then(function () {
    return walkDependencies(nextDependencies.after, [])
  }).then(function () {
    self._cache[id] = data.computed;
    return data.computed
  })
};

var u$3 = new Util();

var subscriptionRelation$1 = new ObjectRelation('member', 'subscription', function () {
  return this._alo.isSubscription.apply(this._alo, arguments)
});
var dependencyRelation$2 = new ObjectRelation('member', 'dependency', function () {
  return this._alo.isDependency.apply(this._alo, arguments)
});

var Member = function Member () {
  this._dependency = {};
  this._function = null;
  this._enabled = true;
  this._lastData = null;

  subscriptionRelation$1.constructParent(this);
  dependencyRelation$2.constructParent(this);
  member.apply(this, arguments);
};
var member = u$3.createPolymorphic();
member.signature('function', function (func) {
  this.setFunction(func);
});
member.signature('object', function (dependencies) {
  this.addDependency(dependencies);
});
member.signature('object, function', function (dependencies, func) {
  this.addDependency(dependencies);
  this.setFunction(func);
});

subscriptionRelation$1.registerParentPrototype(Member.prototype);
dependencyRelation$2.registerParentPrototype(Member.prototype);

Member.prototype._call = function _call (stores, computed) {
  var self = this;
  if (this.isEnabled()) {
    var func = self.getFunction();
    if (u$3.isFunction(func)) {
      return u$3.Promise.resolve().then(function () {
        var dependencies = self.getDependency(false);
        if (dependencies.length > 0) {
          var depsState = {
            state: stores,
            computed: {}
          };
          return dependencies[0].reduceRecursive(dependencies, self.getId(), depsState)
        } else {
          return computed
        }
      }).then(function (computed) {
        var computedLength = u$3.values(computed).length;
        if (self._lastData === null ||
          (computedLength === 0) ||
          (computedLength > 0 && !u$3.isEqual(self._lastData, computed))
        ) {
          self._lastData = computed;
          func(stores, computed);
        }
      })
    }
  }
  return this
};

Member.prototype.createDependency = function createDependency () {
  var dependency = this._alo.createDependency.apply(this._alo, arguments);
  this.addDependency(dependency);

  return dependency
};

Member.prototype.disable = function disable () {
  this._enabled = false;
  return this
};

Member.prototype.enable = function enable () {
  this._enabled = true;
  return this
};

Member.prototype.isEnabled = function isEnabled () {
  return this._enabled
};

Member.prototype.getFunction = function getFunction () {
  return this._function
};

Member.prototype.setFunction = function setFunction (func) {
  if (!u$3.isFunction(func)) {
    throw new Error('Argument given needs to be a function')
  } else {
    this._function = func;
  }

  return this
};

Member.prototype.stop = function stop () {
  this.disable();
  this.removeSubscription();

  return this
};

var u$5 = new Util();

var functions$1 = {
  getCustomizer: {},
  setCustomizer: {},
  unsetCustomizer: {},
  callCustomizer: {}
};

var customizerTypes = ['prepare', 'finalize'];

var Customizer = function (async) {
  var self = this;

  this.async = (async === true);

  this.functions = {};
  u$5.forEach(functions$1, function (func, funcName) {
    self.functions[funcName] = {
      after: []
    };
  });
};

Customizer.prototype.constructParent = function (parent) {
  parent._customizers = {};
  u$5.forEach(customizerTypes, function (type) {
    parent._customizers[type] = false;
  });
};

Customizer.prototype.registerParentPrototype = function (proto) {
  return ObjectRelation.prototype.registerParentPrototype.call(this, proto)
};

/**
 *
 */
Customizer.prototype.setCustomizerFunction = u$5.createPolymorphic();
var set = Customizer.prototype.setCustomizerFunction;
set.signature('object, function, string b=finalize', function (config, func, type) {
  if (customizerTypes.indexOf(type) === -1) {
    throw new Error('Argument for type is invalid')
  } else {
    this._customizers[type] = func;
  }

  return this
});

Customizer.prototype.unsetCustomizerFunction = function (config, type) {
  var self = this;

  if (type !== undefined && customizerTypes.indexOf(type) === -1) {
    throw new Error('Argument for type should be prepare or finalize')
  } else {
    if (type === undefined) {
      u$5.forEach(this._customizers, function (func, type) {
        self.unsetCustomizer(type);
      });
    } else {
      this._customizers[type] = false;
    }
  }

  return this
};

Customizer.prototype.getCustomizerFunction = u$5.createPolymorphic();
var get$4 = Customizer.prototype.getCustomizerFunction;
get$4.signature('object, string a=finalize', function (config, type) {
  if (customizerTypes.indexOf(type) === -1) {
    throw new Error('Argument for type is invalid')
  } else {
    return this._customizers[type]
  }
});

Customizer.prototype.callCustomizerFunction = function (config, type) {
  if (!u$5.isString(type)) {
    throw new Error('Argument for type should be a string')
  } else {
    var func = this.getCustomizer(type);
    if (!u$5.isFunction(func)) {
      return undefined
    } else {
      var args = u$5.values(arguments);
      /*
       * The config argument is prepended to the function by the customizer - not by the user
       * This error is done for the enduser which doenst know about config
       */
      if (args.length <= 2) {
        throw new Error('Atleast two arguments are required')
      }
      args = args.slice(2);
      if (config.async === true) {
        return u$5.Promise.resolve().then(function () {
          return func.apply(null, args)
        })
      } else {
        return func.apply(null, args)
      }
    }
  }
};

var u$4 = new Util();
var customizer = new Customizer(false);

var storeRelation$2 = new ObjectRelation('reducer', 'store', function () {
  return this._alo.isStore.apply(this._alo, arguments)
});
var reducerRelation = new ObjectRelation('reducer', 'parentReducer', function () {
  return this._alo.isReducer.apply(this._alo, arguments)
});
var parentReducerRelation = new ObjectRelation('parentReducer', 'reducer', function () {
  return this._alo.isReducer.apply(this._alo, arguments)
});

/**
 * Reducer class
 * TODO: Describe what this class is all about
 *
 * @class
 */
var Reducer = function Reducer () {
  /**
   * Is this reducer enabled?
   *
   * @name _enabled
   * @memberof Reducer
   * @private
   */
  this._enabled = true;

  /**
   * Unique ID of this reducer
   *
   * @name _id
   * @memberof Reducer
   * @private
   */
  this._id = null;

  /**
   * Array of registered reducers
   *
   * @name _reducers
   * @memberof Reducer
   * @private
   */
  this._reducerRelations = null;

  /**
   * Object of registered stores
   *
   * @name _stores
   * @memberof Reducer
   * @private
   */
  this._storeRelations = null;

  customizer.constructParent(this);
  storeRelation$2.constructParent(this);
  reducerRelation.constructParent(this);
  parentReducerRelation.constructParent(this);

  reducer.apply(this, arguments);
};
var reducer = u$4.createPolymorphic();
reducer.signature('', function () {});
reducer.signature('function', function (prepareFunction) {
  this.setCustomizer(prepareFunction, 'prepare');
});
reducer.signature('array', function (reducers) {
  this.addReducer(reducers);
});
reducer.signature('function, function', function (prepareFunction, finalizeFunction) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.setCustomizer(finalizeFunction);
});
reducer.signature('function, array', function (prepareFunction, reducers) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.addReducer(reducers);
});
reducer.signature('function, function, array', function (prepareFunction, finalizeFunction, reducers) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.setCustomizer(finalizeFunction);
  this.addReducer(reducers);
});

/**
 * Get id of this reducer
 *
 * @return {string} Unique ID of this reducer
 */
Reducer.prototype.getId = null;

/**
 * Connect one or multible stores to this reducer
 *
 * @function
 *
 * @param {Store|array} store One store or array of stores
 * @param {boolean} fromStore Was this function called within a store
 *
 * @return {Reducer} this
 */
Reducer.prototype.addStore = null;

/**
 * Remove a store or all stores from this reducer
 *
 * @function
 *
 * @param {integer|Store|boolean} store|fromStore
 * @param {boolean} fromStore Was this called within a store?
 *
 * @return {Reducer} this
 */
Reducer.prototype.removeStore = null;

customizer.registerParentPrototype(Reducer.prototype);
storeRelation$2.registerParentPrototype(Reducer.prototype);
reducerRelation.registerParentPrototype(Reducer.prototype);
parentReducerRelation.registerParentPrototype(Reducer.prototype);

Reducer.prototype.createReducer = function () {
  var reducer = this._alo.createReducer.apply(this._alo, arguments);
  this.addReducer(reducer);

  return reducer
};

/**
 * Calls the registered reducers with the provided state and action
 * This is automatically started after a successfull dispatch on the Store
 *
 * @private
 *
 * @param {object} state
 * @param {object} action
 *
 * @return {object} state Returns the changed state
 */
Reducer.prototype.reduce = function reduce (state, action) {
  if (this.isEnabled()) {
    var customizerResult = this.callCustomizer('prepare', u$4.cloneDeep(state), action);
    if (customizerResult !== undefined) {
      state = customizerResult;
    }
    u$4.forEach(this.getReducer(false), function (item) {
      state = item.reduce(u$4.cloneDeep(state), action);
    });
    customizerResult = this.callCustomizer('finalize', u$4.cloneDeep(state), action);
    if (customizerResult !== undefined) {
      state = customizerResult;
    }
  }

  return state
};

/**
 * Disables this reducer
 *
 * @return {Reducer} this
 */
Reducer.prototype.disable = function disable () {
  this._enabled = false;

  return this
};

/**
 * Enables this reducer
 *
 * @return {Reducer} this
 */
Reducer.prototype.enable = function enable () {
  this._enabled = true;

  return this
};

Reducer.prototype.isEnabled = function isEnabled () {
  return this._enabled
};

/**
 * Stops this reducer: it will be disabled and removed from all stores
 *
 * @return {Reducer} this
 */
Reducer.prototype.stop = function stop () {
  this.removeStore();
  this.disable();
  return this
};

//      

var util = new Util();

/**
 * Creates a typecheck function which throws an error if the typechecker returns false
 */
var createTypecheck = function createTypecheck (isType                        , type       )                              {
  return function (value    )                {
    if (!isType(value)) {
      throw new Error(("Type of argument should be a " + type))
    } else {
      return true
    }
  }
};

/**
 * Throws an error of type is not a string
 */
var isString$2 = function isString (value    )              {
  return createTypecheck(util.isString, 'string')(value)
};

/*       */

var u$6 = new Util();

var reducerRelation$1 = new ObjectRelation('store', 'reducer', function () {
  return this._alo.isReducer.apply(this._alo, arguments)
});
var subscriptionRelation$2 = new ObjectRelation('store', 'subscription', function () {
  return this._alo.isSubscription.apply(this._alo, arguments)
});
var middlewareRelation = new ObjectRelation('store', 'middleware', function () {
  return this._alo.isMiddleware.apply(this._alo, arguments)
});
var computedPropertyRelation = new ObjectRelation('store', 'computedProperty', function () {
  return this._alo.isDependency.apply(this._alo, arguments)
});

/**
 * The core of Alo. A store is the central place for application state
 *
 * @class
 *
 * @param {Object} state - Optional object to set as a start state
 */
var Store = function Store (state      , id         ) {
  if (state === undefined || state === null) {
    state = {};
  }
  state = {
    state: state,
    computed: {},
    action: { type: null, payload: null }
  };

  /**
   * @private
   */

  /*
   * TODO: Document members
   */

  this._id = null;
  if (id != null && isString$2(id)) {
    id = id.trim();
    if (id !== '') {
      this._id = id;
    }
  }

  /**
   * Stream
   */
  this._stream = u$6.createStream(state);

  /**
   * Reducers
   */
  this._reducerRelations = null;

  /**
   * Middlewares
   */
  this._middlewareRelations = null;

  /**
   * Subscriptions
   */
  this._subscriptionRelations = null;

  this._computedProperty = {};

  reducerRelation$1.constructParent(this);
  middlewareRelation.constructParent(this);
  subscriptionRelation$2.constructParent(this);
  computedPropertyRelation.constructParent(this);
};

/*
 * Setup relations
 */

/**
 * Returns the id of the store
 *
 * @function
 */
Store.prototype.getId = null;

/**
 * Returns the registered reducers
 *
 * @function
 * @return {array} Array of reducers
 */
Store.prototype.getReducer = null;

/**
 * Adds a reducer object to the registered reducers
 *
 * @function
 * @param {Reducer} reducer
 *
 * @return {Store} this
 */
Store.prototype.addReducer = null;

/**
 * Removes a reducer from the currently registered reducers
 *
 * @function
 * @param {int|Reducer} reducer id or Reducer
 *
 * @return {Store} this
 */
Store.prototype.removeReducer = null;

/**
 * Returns the registered middlewares
 *
 * @function
 * @param {string} [id] The id is optional
 *
 * @return {array|Middleware|false} Array of middlewares, middleware with id, or false if middleware with id wasn't found
 */
Store.prototype.getMiddleware = null;

/**
 * Registers one or multible middlewares on this store
 *
 * @function
 * @return {Store} this
 */
Store.prototype.addMiddleware = null;

/**
 * Get a registered subscription by id
 *
 * @function
 */
Store.prototype.getSubscription = null;

/**
 * Registers a subscription
 *
 * @function
 */
Store.prototype.addSubscription = null;

/**
 * Removes a subscription
 *
 * @function
 */
Store.prototype.removeSubscription = null;

reducerRelation$1.registerParentPrototype(Store.prototype);
middlewareRelation.registerParentPrototype(Store.prototype);
subscriptionRelation$2.registerParentPrototype(Store.prototype);
computedPropertyRelation.registerParentPrototype(Store.prototype);

/**
 * Creates and registers one or multible reducers
 *
 * @function
 *
 * @param {array|...function} Array or variadic call of one or multible reducer functions
 *
 * @return {Reducer}
 * @see Reducer
 */
Store.prototype.createReducer = function createReducer () {
  var reducer = this._alo.createReducer.apply(this._alo, arguments);
  this.addReducer(reducer);

  return reducer
};

Store.prototype.mapState = function mapState (func) {
  if (!u$6.isFunction(func)) {
    throw new Error('Argument given should be a function')
  } else {
    return u$6.map(this.getState(), func)
  }
};

Store.prototype.mapData = function mapData (func) {
  if (!u$6.isFunction(func)) {
    throw new Error('Argument given should be a function')
  } else {
    return u$6.map(this.getData(), func)
  }
};

Store.prototype.mapStream = function mapStream (func) {
  if (!u$6.isFunction(func)) {
    throw new Error('Argument given should be a function')
  } else {
    return u$6.mapStream(func, this.getStream())
  }
};

/**
 * Returns the stream of this store
 *
 * @return {stream} flyd stream
 */
Store.prototype.getStream = function getStream () {
  // TODO: Implement Stream Combine
  return this._stream
};

/**
 * Returns the current state
 *
 * @return {object} current state
 */
Store.prototype.getData = function getData () {
  return u$6.cloneDeep(this.getStream()())
};

Store.prototype.getState = function getState () {
  return this.getData().state
};

Store.prototype.createComputedProperty = function createComputedProperty () {
  var dependency = this._alo.createDependency.apply(this._alo, arguments);
  this.addComputedProperty(dependency);

  return dependency
};

Store.prototype.createSubscription = function createSubscription () {
  var subscription = this._alo.createSubscription.apply(this._alo, arguments);
  this.addSubscription(subscription);
  return subscription
};
Store.prototype.subscribe = Store.prototype.createSubscription;

/**
 * Dispatches an action
 *
 * @function
 * @param {function|object} action An untyped action function that returns payload, or an action object
 *
 * @return {Store} this
 */
Store.prototype.dispatch = function () {
  var self = this;
  var dispatchArguments = u$6.values(arguments);

  var formatAction = function (action) {
    // Set the type to null if it is undefined
    if (action.type === undefined) {
      action.type = null;
    }
    if (action.payload === undefined) {
      action.payload = null;
    }
    return action
  };

  return u$6.Promise.resolve().then(function () {
    /*
     * Start with middleware logic
     */
    var middlewares = self.getMiddleware(false);
    if (middlewares.length > 0 && self._alo.isMiddleware(middlewares[0])) {
      dispatchArguments.unshift(self);
      return u$6.Promise.resolve().then(function () {
        return middlewares[0].meddleRecursive(middlewares, dispatchArguments)
      }).then(function (resultArgs) {
        if (u$6.isArray(resultArgs)) {
          return resultArgs[0]
        } else {
          return resultArgs
        }
      })
    } else {
      return dispatchArguments[0]
    }
  }).then(function (action) {
    /*
     * Here is the final commit part
     */
    if (!u$6.isPlainObject(action)) {
      return false
    } else {
      action = formatAction(action);
      var state = self.getData();
      var newState = state.state;
      u$6.forEach(self.getReducer(false), function (reducer) {
        if (self._alo.isReducer(reducer)) {
          newState = reducer.reduce(u$6.cloneDeep(newState), action);
        }
      });

      newState = {
        state: newState,
        computed: {},
        action: action
      };

      return u$6.Promise.resolve().then(function () {
        /*
         * Add the computed properties into the mix
         */
        var computedProperties = self.getComputedProperty(false);
        if (computedProperties.length > 0) {
          return computedProperties[0].reduceRecursive(computedProperties, self.getId(), u$6.cloneDeep(newState))
        } else {
          return newState.computed
        }
      }).then(function (computed) {
        newState.computed = computed;

        // Apply the changed state
        var stream = self.getStream();
        stream(newState);
      })
    }
  })
};

var u$7 = new Util();

var customizer$1 = new Customizer(true);
var middlewareRelation$1 = new ObjectRelation('middleware', 'parentMiddleware', function () {
  return this._alo.isMiddleware.apply(this._alo, arguments)
});
var parentMiddlewareRelation = new ObjectRelation('parentMiddleware', 'middleware', function () {
  return this._alo.isMiddleware.apply(this._alo, arguments)
});
var storeRelation$3 = new ObjectRelation('middleware', 'store', function () {
  return this._alo.isStore.apply(this._alo, arguments)
});

var Middleware = function Middleware () {
  customizer$1.constructParent(this);
  middlewareRelation$1.constructParent(this);
  parentMiddlewareRelation.constructParent(this);
  storeRelation$3.constructParent(this);
  customizer$1.constructParent(this);

  middleware.apply(this, arguments);
};
var middleware = u$7.createPolymorphic();
middleware.signature('', function () {});
middleware.signature('function', function (prepareFunction) {
  this.setCustomizer(prepareFunction, 'prepare');
});
middleware.signature('array', function (middlewares) {
  this.addMiddleware(middlewares);
});
middleware.signature('function, function', function (prepareFunction, finalizeFunction) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.setCustomizer(finalizeFunction);
});
middleware.signature('function, array', function (prepareFunction, middlewares) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.addMiddleware(middlewares);
});
middleware.signature('function, function, array', function (prepareFunction, finalizeFunction, middlewares) {
  this.setCustomizer(prepareFunction, 'prepare');
  this.setCustomizer(finalizeFunction);
  this.addMiddleware(middlewares);
});

customizer$1.registerParentPrototype(Middleware.prototype);
middlewareRelation$1.registerParentPrototype(Middleware.prototype);
parentMiddlewareRelation.registerParentPrototype(Middleware.prototype);
storeRelation$3.registerParentPrototype(Middleware.prototype);

Middleware.prototype.createMiddleware = function createMiddleware () {
  var middleware = this._alo.createMiddleware.apply(this._alo, arguments);
  this.addMiddleware(middleware);

  return middleware
};

/*
 * The middleware handling is done in a recursive manner
 */
Middleware.prototype.meddleRecursive = function meddleRecursive (middlewares, args) {
  var self = this;
  args = u$7.values(args);
  // First argument is always the store
  var store = args[0];

  if (!u$7.isArray(middlewares)) {
    throw new Error('Argument given should be an array')
  } else if (middlewares.length === 0) {
    // store needs to be removed at the end of the recursion
    return args.slice(1)
  } else {
    return u$7.Promise.resolve().then(function () {
      if (self._alo.isMiddleware(middlewares[0])) {
        return middlewares[0].meddle(args)
      } else {
        return args.slice(1)
      }
    }).then(function (resultArgs) {
      resultArgs = u$7.values(resultArgs);
      if (resultArgs[0] === undefined) {
        resultArgs = args;
      } else {
        resultArgs.unshift(store);
      }
      args = resultArgs;
      middlewares = middlewares.slice(1);
      return self.meddleRecursive(middlewares, resultArgs)
    })
  }
};

Middleware.prototype.meddle = function meddle (args) {
  var self = this;
  args = u$7.values(args);
  var store = args[0];
  args = args.slice(1);

  var argsToArray = function (resultArgs) {
    if (resultArgs === undefined) {
      resultArgs = args;
    } else if (!u$7.isArray(resultArgs)) {
      resultArgs = [resultArgs];
    }
    args = u$7.cloneDeep(resultArgs);

    return resultArgs
  };

  return u$7.Promise.resolve().then(function () {
    var newArgs = u$7.cloneDeep(args);
    newArgs.unshift(store);
    newArgs.unshift('prepare');
    return self.callCustomizer.apply(self, newArgs)
  }).then(function (resultArgs) {
    return u$7.Promise.all(argsToArray(resultArgs))
  }).then(function (resultArgs) {
    resultArgs.unshift(store);
    return self.meddleRecursive(self.getMiddleware(false), resultArgs)
  }).then(function (resultArgs) {
    return u$7.Promise.all(argsToArray(resultArgs))
  }).then(function (resultArgs) {
    resultArgs.unshift(store);
    resultArgs.unshift('finalize');
    return self.callCustomizer.apply(self, resultArgs)
  }).then(function (resultArgs) {
    return u$7.Promise.all(argsToArray(resultArgs))
  }).then(function (resultArgs) {
    return resultArgs
  })
};

//      

var Alo = function Alo (id) {
  /**
   * Access to the util namespace
   *
   * @see util
   */
  this.util = new Util();
  this._id = (this.util.isString(id) && id !== '') ? id : this.util.uniqueId();
};

Alo.prototype.createSubscription = function createSubscription () {
  var subscription = Object.create(Subscription.prototype);
  subscription._alo = this;
  Subscription.apply(subscription, arguments);
  return subscription
};

Alo.prototype.isSubscription = function isSubscription (subscription) {
  return (subscription instanceof Subscription)
};

Alo.prototype.createDependency = function createDependency () {
  var dependency = Object.create(Dependency.prototype);
  dependency._alo = this;
  Dependency.apply(dependency, arguments);
  return dependency
};

Alo.prototype.isDependency = function isDependency (dependency) {
  return (dependency instanceof Dependency)
};

Alo.prototype.createMember = function createMember () {
  var member = Object.create(Member.prototype);
  member._alo = this;
  Member.apply(member, arguments);
  return member
};

Alo.prototype.isMember = function isMember (member) {
  return (member instanceof Member)
};

/**
 * Access to the handler constructor
 *
 * @see Handler
 */
// util.Handler = require('./../handler/handler.js'),
/**
 * Access to the store constructor
 *
 * @see Store
 */
// util.Store = require('./../store/store.js'),
/**
 * Access to the subscription constructor
 *
 * @see Subscription
 */
// util.Subscription = require('./../subscription/subscription.js')

/**
 * Same as new Reducer
 * @see Reducer
 */
Alo.prototype.createReducer = function createReducer () {
  var reducer = Object.create(Reducer.prototype);
  reducer._alo = this;
  Reducer.apply(reducer, arguments);
  return reducer
};

/**
 * Instanceof check for reducers
 *
 * @param {*} reducer Argument to check if it is a reducer
 *
 * @return {boolean} true of it is a reducer, false in the other case
 */
Alo.prototype.isReducer = function isReducer (reducer) {
  return (reducer instanceof Reducer)
};

/**
 * Same as new Store
 * @see Store
 */
Alo.prototype.createStore = function createStore () {
  var store = Object.create(Store.prototype);
  store._alo = this;
  Store.apply(store, arguments);
  return store
};

/**
 * Instanceof check for stores
 *
 * @param {*} store Argument to check if it is a store
 *
 * @return {boolean} true of it is a store, false in the other case
 */
Alo.prototype.isStore = function isStore (store, validateId) {
  validateId = (validateId === true);
  var isStore = (store instanceof Store);
  var idValid = !validateId || (store._alo && store._alo._id === this._id);
  return isStore && idValid
};

Alo.prototype.isMiddleware = function isMiddleware (middleware) {
  return (middleware instanceof Middleware)
};

Alo.prototype.createMiddleware = function createMiddleware () {
  var middleware = Object.create(Middleware.prototype);
  middleware._alo = this;
  Middleware.apply(middleware, arguments);
  return middleware
};

var alo = new Alo();

var reducers = {};

/**
 * A basic reducer which just replaces state with payload of untyped actions
 *
 * @memberof extras.reducers
 */
reducers.createUntypedReplace = function () {
  var reduce = function (state, action) {
    if (action.type === undefined || action.type === null || action.type === '') {
      if (action.payload !== undefined) {
        return action.payload
      }
    }
    return state
  };

  return alo.createReducer(reduce)
};

var alo$1 = new Alo();
var u$8 = alo$1.util;

var middlewares = {};

/**
 * A thunk middleware
 *
 * @memberof extras.middlewares
 */
middlewares.createThunk = function createThunk () {
  var middleware = alo$1.createMiddleware(function () {
    var args = u$8.values(arguments);
    var arg = args[1];
    var walk = function (args) {
      var arg = args[1];
      args.splice(1, 1);
      return u$8.Promise.resolve().then(function () {
        return arg.apply(null, args)
      }).then(function (arg) {
        if (u$8.isFunction(arg)) {
          args.splice(1, 0, arg);
          return walk(args)
        } else {
          args.splice(0, 1, arg);
          return args
        }
      })
    };

    if (u$8.isFunction(arg)) {
      return walk(args)
    } else {
      args.splice(0, 1);
      return args
    }
  });

  return middleware
};

/**
 * Extras, but useful stuff
 */
var extras = {};

/**
 * Several included reducer examples
 */
extras.reducers = reducers;

/**
 */
extras.middlewares = middlewares;

var addExtras = function addExtras (AloOrig) {
  var Alo = (function (AloOrig) {
    function Alo(id) {
      AloOrig.call(this, id);
      /**
      * Useful functions
      *
      * @memberof Alo
      *
      * @see extras
      */
      this.extras = extras;
    }

    if ( AloOrig ) { Alo.__proto__ = AloOrig; }
    Alo.prototype = Object.create( AloOrig && AloOrig.prototype );
    Alo.prototype.constructor = Alo;

    return Alo;
  }(AloOrig));
  return Alo
};

//      

var AloFull = addExtras(Alo);

return AloFull;

})));
});

var alo = new alo_full$1();

var initState = {
  navActive: false,
  config: {}
};
var appStore = alo.createStore(initState, 'app');
var toggleNavActive = function() {
  return {
    type: 'toggleNavActive'
  };
};

var setNavActive = function(active) {
  return {
    type: 'setNavActive',
    payload: (active != null)? active: true
  };
};

var setConfig = function(config) {
  return {
    type: 'setConfig',
    payload: config
  };
};

appStore.createReducer(function (state, action) {
  switch(action.type) {
    case 'setConfig':
      state.config = action.payload;
      break;
    case 'toggleNavActive':
      state.navActive = !state.navActive;
      break;
    case 'setNavActive':
      state.navActive = action.payload;
      break;
  }

  return state;
});

var getEnclosedChildren = function(itemId, items) {
  if (items == null) {
    var routerState = router$2.getState();
    items = routerState.toc.items;
  }

  var item = items[itemId];

  var children = [];
  if (item.children != null) {
    item.children.forEach(function(childId) {
      children.push(childId);
      children = children.concat( getEnclosedChildren(childId));
    });
  }

  return children;
};

var isViewableItem = function(item) {
  var result = item.path != null && item.hasContent === true;
  return result
};

var getTitle = function(item) {
  return item.title || item.path;
};

var getActiveItem = function() {
  var state = router$2.getData();
  return state.computed.tocItem;
};

var getUrl = function(item, html) {
  var self = this;

  item = item || getActiveItem();
  if (html == null) { html = false; }

  var data = router$2.getData();
  var rootUrl = data.state.rootUrl;

  if (html) {
    return rootUrl + item.htmlPath;
  } else {
    return rootUrl + item.path;
  }
};

var $$2 = document.querySelectorAll.bind(document);

var setTocItemId = function(id, resetChapterId, body) {
  return {
    type: 'setTocItemId',
    payload: {
      id: id,
      resetChapterId: resetChapterId,
      body: body
    }
  };
};

var reduceSetTocItemId = function(state, action) {
  if (action.type === 'setTocItemId') {
    state.itemId = action.payload.id;
    if (action.payload.resetChapterId === true) {
      state.chapterId = null;
    }
  }

  return state;
};

var setTocItemContent = function(content) {
  return {
    type: 'setTocItemContent',
    payload: {
      content: content
    }
  }
};

var reduceSetTocItemContent = function(state, action) {
  if (action.type === 'setTocItemContent') {
    state.itemContent = action.payload.content;
  }

  return state;
};

var setTocChapterId = function(id) {
  return {
    type: 'setTocChapterId',
    payload: {
      id: id
    }
  };
};

var reduceSetTocChapterId = function(state, action) {
  if (action.type === 'setTocChapterId') {
    state.chapterId = action.payload.id;
  }

  return state;
};

var initToc = function(items, root) {
  return {
    type: 'initToc',
    payload: {
      items: items, root: root
    }
  };
};
var reduceInitToc = function(state, action) {
  if (action.type === 'initToc') {
    state.toc = action.payload;
  }

  return state;
};

var reduceToc = function(state, action) {
  if (action.type === 'setTocItemId') {
    if (state.toc.itemId == null) {
      var item = state.toc.items[action.payload.id];
      var pathIdx = location.href.indexOf(item.path);
      var rootUrl = location.href.slice(0, pathIdx);
      if (rootUrl[rootUrl.length - 1] != '/') {
        rootUrl += '/';
      }
      state.rootUrl = rootUrl;

      // Make sure that the favicon always targets the root of the website
      var faviconEl = $$2('.favicon')[0];
      if (faviconEl != null) {
        var faviconUrl = state.rootUrl + 'favicon.ico';
        faviconEl.href = faviconUrl;
      }
    }
  }

  var reducers = [
    reduceSetTocItemId,
    reduceSetTocItemContent,
    reduceSetTocChapterId
  ];

  state = reduceInitToc(state, action);

  state.toc = reducers.reduce(function (acc, reducer) {
    return reducer(acc, action);
  }, state.toc);

  return state;
};

var getTocItemById = function(id, items) {
  if (items == null) {
    var state = router$2.getState();
    items = state.toc.items;
  }

  return items[id];
};

var $$1 = document.querySelectorAll.bind(document);

var initState$1 = {
  toc: {
    items: [],
    root: []
  }
};
var router$2 = alo.createStore(initState$1, 'router');
router$2.createComputedProperty({
  itemId: function(state) {
    return state.toc.itemId;
  },
  chapterId: function(state) {
    return state.toc.chapterId;
  },
  tocItems: function(state) {
    return state.toc.items;
  },
  tocItem: [['itemId', 'tocItems'], function(state, comp) {
    return comp.tocItems[comp.itemId];
  }],
  parentTocItemIds: [['tocItem', 'tocItems'], function(state, comp) {
    var parentIds = [];
    if (comp.tocItem) {
      var id = comp.tocItem.id;

      comp.tocItems.forEach(function(item) {
        // TODO: This could probably be done faster!
        var childIds = getEnclosedChildren(item.id);
        if (childIds.indexOf(id) >= 0) {
          parentIds.push(item.id);
        }
      });
    }

    return parentIds;
  }],
  parentTocItems: [['parentTocItemIds', 'tocItems'], function(state, comp) {
    return comp.parentTocItemIds.map(function (id) { return comp.tocItems[id]; });
  }],
  tocChapter: [['tocItem', 'chapterId'], function(state, comp) {
    if (comp.tocItem != null && comp.tocItem.chapters && comp.chapterId != null) {
      var items = comp.tocItem.chapters.items;
      if (items != null) {
        return items[comp.chapterId];
      }
    }
  }],
  viewableTocItems: [['tocItems'], function(state, comp) {
    if (comp.tocItems != null) {
      return comp.tocItems.filter(function (item) {
        return isViewableItem(item);
      });
    }
  }],
  readingProgress: [['viewableTocItems', 'itemId', 'tocItem', 'chapterId'], function(state, comp) {
    var result = {};
    if (comp.viewableTocItems != null && comp.itemId != null && comp.tocItem != null) {
      if (comp.viewableTocItems[0] != null) {
        result.firstEntry = comp.viewableTocItems[0].id === comp.itemId;
      }
      if (comp.viewableTocItems[0] != null) {
        result.lastEntry = comp.viewableTocItems[comp.viewableTocItems.length - 1].id === comp.itemId;
      }
    }

    return result;
  }]
});

window.router = router$2;

var routeMiddleware = alo.createMiddleware(function(store, action) {
  if (action.type === 'setTocItemId') {
    var state = router$2.getState();
    var itemId = action.payload.id;

    // Push history only, if there already was a previous item id set
    if (state.toc.itemId != null && state.toc.itemId !== itemId) {
      var item = getTocItemById(itemId);

      if (item.hasContent === true) {
        if (action.payload.content == null) {
          var content_url = getUrl(item, true);
          return fetch(content_url)
            .then(function (res) {
              return res.text();
            })
            .then(function (body) {
              return store.dispatch(setTocItemContent(body));
            })
            .then(function () {
              return action
            });
        } else {
          return store.dispatch(setTocItemContent(action.payload.content));
        }
      }
    }
  }

  return action;
});
router$2.addMiddleware(routeMiddleware);

var getCurrentTitle = function() {
  var appState = appStore.getState();
  var state = router$2.getData();
  var item = state.computed.tocItem;

  var title = '';
  if (appState != null && state != null && item != null) {
    if (item.title != null) { title = item.title; }
    var titleLower = title.toLowerCase();
    var pageTitle = (appState.config.title != null)? appState.config.title: '';
    var pageTitleLower = pageTitle.toLowerCase();
    if (titleLower !== pageTitleLower) {
      if (title.length > 0 && pageTitle.length > 0) {
        title += ' - ';
      }
      title += pageTitle;
    }
  }


  return title;
};

var addNewHistoryEntry = function(replaceHistory) {
  replaceHistory = replaceHistory === true;

  var state = router$2.getData();
  var hash = '';
  if (state.computed.tocChapter != null && state.computed.tocChapter.hash != null) {
    hash = '#' + state.computed.tocChapter.hash;
  }
  var item = state.computed.tocItem;

  var title = getCurrentTitle();
  document.title = title;

  var historyState = {
    itemId: item.id,
    hash: hash,
    title: title
  };
  var url = getUrl(item) + hash;
  //console.log(historyState, url, replaceHistory);

  if (replaceHistory) {
    history.replaceState(historyState, title, url);
  } else {
    history.pushState(historyState, title, url);
  }

};

router$2.createReducer(function (state, action) {
  var reducers = [
    reduceToc
  ];

  return reducers.reduce(function (acc, reducer) {
    return reducer(acc, action);
  }, state);
});

var gotoItemById = function(itemId, resetChapterId) {
  var self = this;
  var items = router$2.getState().toc.items;
  var item = getTocItemById(itemId, items);
  resetChapterId = resetChapterId === true;

  if (item != null) {
    if (!isViewableItem(item)) {
      var enclosedChildrenIds = getEnclosedChildren(itemId);
      var enclosedChildren = enclosedChildrenIds.map(function (childId) { return getTocItemById(childId, items); });
      var viewableChildren = enclosedChildren.filter(function (child) { return isViewableItem(child); });

      if (viewableChildren.length > 0) {
        return gotoItemById(viewableChildren[0].id, resetChapterId);
      } else {
        var newItemId = itemId + 1;
        return gotoItemById(newItemId, resetChapterId);
      }
    } else {
      return router$2.dispatch(setTocItemId(itemId, resetChapterId));
    }
  }
};

var createUpdatePlan =  function() {
  var store = {
    items: [],
    data: [],
  };

  var data;

  var plan = function(el, updateFn) {
    if (typeof el === "function") {
      return el.call(this, plan);
    } else {
      if (updateFn) {
        this.items.push({
          node: el,
          updateFn: updateFn
        });
      }
      return el;
    }
  };

  plan = plan.bind(store);
  plan.run = function() {
    var self = this;
    self.data = arguments;

    store.items.forEach(function(item) {
      item.updateFn.apply(item.node, self.data);
    });
  };
  plan.getData = function() {
    return this.data;
  };

  return plan;
};

var $$3 = document.querySelectorAll.bind(document);

var V = function V (tag, attr, children) {
  this.tag(tag);
  this.attr(attr);
  this.children(children);
};
V.prototype.key = function key (key$1) { this._key = key$1; return this; };
V.prototype.tag = function tag (tag$1) { this._tag = tag$1; return this; };
V.prototype.text = function text$$1 (text$1) { this._text = text$1; return this; };
V.prototype.el = function el$$1 (el$1) { this._el = el$1; return this; };
V.prototype.attr = function attr (attr$1) {
  if (attr$1 != null) {
    if (attr$1.key != null) {
      this.key(attr$1.key);
      attr$1.key = null;
      delete attr$1.key;
    }
  }
  this._attr = attr$1;

  return this;
};
V.prototype.overwrite = function overwrite (overwrite$1) { this._overwrite = (overwrite$1 != null)? overwrite$1: true; return this; };
V.prototype.list = function list$$1 (list$1, child, key) {
  this._list = list$1;
  this._listChild = child;
  this._listKey = key;

  return this;
};
V.prototype.children = function children (children$1) { this._children = children$1; return this; };
V.prototype.get = function get (getFutureSelf) {
    var this$1 = this;

  var self = this;
  var _el;

  if (this._el != null) {
    _el = (this._el.call != null)? this._el(): this._el;
  } else if (this._list != null) {
    if (this._listChild.call != null) {
      var ListItem = function ListItem() {
          this.el = document.createDocumentFragment();
          this.vmount = vm();
        };
        ListItem.prototype.update = function update (item, key) {
          var v = (getFutureSelf != null)? getFutureSelf(): self;
          this.vmount(this.el, v._listChild(item, key));
        };
      _el = list(this._tag, ListItem, this._listKey);
    } else {
      _el = list(this._tag, this._listChild, this._listKey);
    }
  } else if (this._tag != null) {
    if (this._tag == 'fragment') {
      _el = document.createDocumentFragment();
    } else if (this._tag == 'svg') {
      _el = svg(this._tag);
    } else {
      _el = el(this._tag);
    }
  } else if (this._text != null) {
    _el = text();
  }

  if (this._attr != null) {
    var attrs = Object.create(null);
    if (this._attr.onremount != null) { attrs.onremount = this._attr.onremount; }
    if (this._attr.onunmount != null) { attrs.onunmount = this._attr.onunmount; }
    if (this._attr.onmount != null) { attrs.onmount = this._attr.onmount; }
    attrs = Object.keys(this._attr).reduce(function (acc, k) {
      if (acc[k] == null && this$1._attr[k] != null && this$1._attr[k].call != null) {
        acc[k] = this$1._attr[k];
      }

      return acc;
    }, attrs);
    setAttr(_el, attrs);
  }

  return _el;
};
var v = function(tag, key, children) {
  return new V(tag, key, children);
};

var isNotHandlerAttr = function(key) {
  return key.indexOf('on') !== 0;
};

var filterAttr = function(attr, filter) {
  return Object.keys(attr)
    .filter(filter)
    .reduce(function (acc, key) {
      acc[key] = attr[key];
      return acc;
    }, {});
};

var _getElFromTree = function(state, v, keyPrefix) {
  var tree = state.tree;

  keyPrefix = (keyPrefix != null)? keyPrefix: '';
  var key = (v._key != null)? keyPrefix + v._key: null;

  if (v.length != null) {
    return v.filter(function (v) { return v != null; }).map(function (_v) { return _getElFromTree(state, _v, keyPrefix); });
  } else {
    var vel;

    if (key != null) {
      tree.vByKey[key] = v;
      if (tree.keyed[key] == null || v._overwrite === true) {
        var getFutureV;
        if (v._list != null) {
          getFutureV = function() {
            return tree.vByKey[key];
          };
        }
        tree.keyed[key] = v.get(getFutureV);
      }
      vel = tree.keyed[key];
    } else {
      if (v.id != null) {
        vel = v;
      } else {
        vel = v.get();
      }
    }

    if (v._text != null) {
      vel.textContent = v._text;
    }

    if (v._attr != null) {
      var filteredAttrs = filterAttr(v._attr, isNotHandlerAttr);
      setAttr(vel, filteredAttrs);
    }

    if (v._list != null) {
      vel.update(v._list);
    }

    if (v._children != null) {
      var newKeyPrefix = ((key != null)? key: (keyPrefix + '<el>')) + '<$>';
      var children = _getElFromTree(state, v._children, newKeyPrefix);
      if (v._children.length == null) { children = [ children ]; }
      setChildren(vel, children);
    }

    return vel;
  }
};
var _vmount = function(parent, vtree) {
  if (vtree == null) {
    parent.innerHTML = null;
  } else {
    var children = _getElFromTree(this, vtree);
    setChildren(parent, children);
  }
};

var vm = function() {
  var state = {
    tree: {
      keyed: {},
      unkeyed: {},
      vByKey: {},
    }
  };

  return _vmount.bind(state)
};

var getTocItemsById = function(state, itemIds) {
  var router = state.router.state;
  return itemIds.map(function (itemId) {
    return router.toc.items[itemId];
  });
};

var onNavChapterItemClick = function(itemId, chapterId, evt) {
  evt.preventDefault();

  router$2.dispatch(setTocItemId(itemId))
    .then(function () {
      return router$2.dispatch(setTocChapterId(chapterId));
    })
    .then(function () {
      addNewHistoryEntry();
    })
    .then(function () {
      return appStore.dispatch(setNavActive(false));
    });
};

var navChapterItem = function(state, navItem, level) {
  var navItemUrl = getUrl(navItem);
  if (level == null) { level = 1; }

  return function(item) {
    if (item.hash != null) {
      var href = navItemUrl + "#" + (item.hash);
      var classes = createClassesObj(['left_nav__menu_item']);

      var title = item.heading;
      var link = v('a.left_nav__menu_item_link', {
        href: href,
        onclick: onNavChapterItemClick.bind(null, navItem.id, item.id)
      }).text(title);
      var itemContent = [
        link
      ];

      var toc = state.router.state.toc;

      if (item.children != null && level <= 2 && item.children.length > 0) {
        var chapterIds = item.children;
        var chapters = chapterIds.map(function(chapterId) {
          return navItem.chapters.items[chapterId];
        });
        var subList = v('ul.list-unstyled.left_nav__menu--sub', { key: 'list' })
          .list(chapters, navChapterItem(state, navItem, level + 1));
        itemContent.push(subList);
      }

      classes['left_nav__menu_item--active'] = (toc.chapterId == item.id);

      return v('li', { key: 'li', className: applyClassesObj(classes) }, itemContent);
    }
  }
};

var createClassesObj = function(classes) {
  if (classes != null) {
    return classes.reduce(function (acc, _class) {
      acc[_class] = true;
      return acc;
    }, {});
  } else {
    return {};
  }
};

var applyClassesObj = function(classes, separator) {
  if (separator == null) { separator = ' '; }

  return Object.keys(classes).filter(function (k) { return classes[k] == true; }).join(separator);
};

var onNavTocItemClick = function(itemId, evt) {
  evt.preventDefault();
  gotoItemById(itemId, true)
    .then(function () {
      addNewHistoryEntry();
    })
    .then(function () {
      return appStore.dispatch(setNavActive(false));
    });
};

var navTocItem = function(state, classes) {
  var classes = createClassesObj(classes);
  var toc = state.router.state.toc;
  var tocItem = state.router.computed.tocItem || {};
  var parentItemIds = state.router.computed.parentTocItemIds || [];

  return function(item) {
    classes['left_nav__menu_item'] = true;
    var title = getTitle(item);

    var href = (item.href != null)? item.href: getUrl(item);
    var linkAttrs = { key: 'link', href: href, target: '_blank' };
    if (item.href == null) {
      linkAttrs.onclick = onNavTocItemClick.bind(null, item.id);
    }
    var link = v('a.left_nav__menu_item_link', linkAttrs).text(title);
    var itemContent = [
      link
    ];

    var subList = v('ul.list-unstyled.left_nav__menu--sub', { key: 'list' });
    var childrenVisible = item.id === tocItem.id || state.app.state.navActive === true;
    if (item.children != null && (childrenVisible || parentItemIds.indexOf(item.id) >= 0)) {
      var items = getTocItemsById(state, item.children);
      subList.list(items, navTocItem(state), 'id');
      itemContent.push(subList);
    } else if (item.chapters != null && item.id === tocItem.id) {
      var chapterIds = item.chapters.root;
      if (chapterIds.length === 1) {
        chapterIds = item.chapters.items[chapterIds[0]].children;
      }
      var chapters = chapterIds.map(function(chapterId) {
        return item.chapters.items[chapterId];
      });
      subList.list(chapters, navChapterItem(state, item), 'id');
      itemContent.push(subList);
    }

    classes['left_nav__menu_item--active'] = toc.itemId === item.id &&
      ((item.chapters == null && item.children == null) ||
        ((item.chapters != null && item.chapters.root.length === 1 && toc.chapterId == 0) || toc.chapterId == null)
      );

    return v('li', {
      key: 'navTocItem',
      className: applyClassesObj(classes)
     }, itemContent);
  }
};

var Nav = function Nav() {
  var self = this;

  this.classes = createClassesObj([
    'nav', 'col-12', 'col-xl-3', 'left_nav'
  ]);
  self.el = el('nav', { role: 'navigation' });
  self.vm = vm();
  self.state = {};
  self.update();
};

Nav.prototype.update = function update (state) {
  var navMenu;

  if (state != null) {
    var tocItems = getTocItemsById(state, state.router.state.toc.root);
    navMenu = v('ul.list-group.left_nav__menu.left_nav__menu--root', { key: 'menu' })
      .list(tocItems, navTocItem(state, ['list-group-item']), 'id');
    this.classes['left_nav--active'] = state.app.state.navActive;
  }

  this.el.className = applyClassesObj(this.classes);

  var vdom = v('div.card.card-secondary.left_nav__content_wrapper', { key: 'contentWrapper' })
    .children([
      v('div.card-block.left_nav__content', { key: 'content' })
        .children([
          // v('input.form-control.left_nav__search', { key: 'search', placeholder: 'Type to search' }),
          navMenu
        ])
    ]);

  this.vm(this.el, vdom);
};

var cache = {};
var rules = [];
var insert = function insert(rule) {
  return rules.push(rule);
};
var hyph = function hyph(s) {
  return s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};
var mx = function mx(rule, media) {
  return media ? media + '{' + rule + '}' : rule;
};
var rx = function rx(cn, prop, val) {
  return '.' + cn + '{' + hyph(prop) + ':' + px(val) + '}';
};
var noAnd = function noAnd(s) {
  return s.replace(/&/g, '');
};

var parse = function parse(obj) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var media = arguments[2];
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === null) { return ''; }
    if (typeof val === 'object') {
      var m2 = /^@/.test(key) ? key : null;
      var c2 = m2 ? child : child + key;
      return parse(val, c2, m2 || media);
    }
    var _key = key + val + child + media;
    if (cache[_key]) { return cache[_key]; }
    var className = 'x' + rules.length.toString(36);
    insert(mx(rx(className + noAnd(child), key, val), media));
    cache[_key] = className;
    return className;
  }).join(' ');
};

var index = function () {
  var arguments$1 = arguments;

  for (var _len = arguments.length, styles = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    styles[_key2] = arguments$1[_key2];
  }

  return styles.map(function (style) {
    return parse(style);
  }).join(' ').trim();
};

var css = function () {
  return rules.sort().join('');
};

var reset = function () {
  cache = {};
  while (rules.length) {
    rules.pop();
  }
};

if (typeof document !== 'undefined') {
  var sheet = document.head.appendChild(document.createElement('style')).sheet;
  insert = function insert(rule) {
    rules.push(rule);
    sheet.insertRule(rule, sheet.cssRules.length);
  };
}

index.css = css;
index.reset = reset;

var $ = document.querySelectorAll.bind(document);

window.router = router$2;

var App$1 = function App(appEl, config) {
  var this$1 = this;

  var self = this;

  this.appEl = appEl;
  this.mainEl = appEl.querySelectorAll('main')[0];
  this.appEl.className = 'app';
  var plan = createUpdatePlan();
  this.plan = plan;

  history.replaceState({ itemId: config.toc.activeItemId, hash: window.location.hash }, "", window.location.href);
  router$2.dispatch(initToc(config.toc.items, config.toc.root))
    .then(function () {
      return router$2.dispatch(
        setTocItemId(config.toc.activeItemId, false, this$1.mainEl.innerHTML));
    })
    .then(function () {
      return appStore.dispatch(setConfig(config.config))
    })
    .then(function () {
      return self.setActiveChapterByLocationHash();
    }).then(function () {
      addNewHistoryEntry(true);
    });

  this.nav = new Nav();

  var linkStyle = { color: config.config.colors.accent };
  var appClassName = index({
    '.app': {
      ' main a': linkStyle,
      ' .fixed_menu_button__icon': linkStyle,
      ' .left_nav__menu_item_link': {
        ':focus': linkStyle,
        ':hover': linkStyle,
        ':active': linkStyle,
      },
      ' .left_nav__menu_item--active > .left_nav__menu_item_link': linkStyle
    }
  });
  this.appEl.className += ' ' + appClassName;

  setChildren(this.appEl, el('div.container-fluid.fullscreen', this.mainWrapperEl = el('div.row.fullscreen')));
  setChildren(this.mainWrapperEl, [
    el('div.fixed_menu_button.hidden-xl-up',
      el('button.btn.btn-sm.btn-secondary', { onclick: self.toggleLeftNavActive.bind(null, self) },
        el('span.fixed_menu_button__icon_wrapper',
          el('span.icono-hamburger.fixed_menu_button__icon')
        )
      )
    ),
    this.nav,
    el('div.main_col.col-12.col-xl-9', [
      el('div.main-wrapper-wrapper', [
        el('a.navigation.navigation-prev.hidden-md-down', { href: '#', onclick: self.onClickNavPrev.bind({self: self}) },
          el('span', el('span.icono-caretLeft'))
        ),
        this.mainWrapperEl = el('div.main-wrapper', [
          el('header.row.header', { role: 'navigation', id: 'header' }, [
            el('div.col', [
              el('div.header__inner', [
                this.titleEl = el('a.header__title', { href: '#' }) ])
            ])
          ]),
          this.mobileNavTop = el('button.btn.btn-sm.btn-secondary.btn-block.hidden-md-up', { href: '#', onclick: self.onClickNavPrev.bind({self: self, ignoreChapters: true}) },
            el('span', el('span.icono-caretUp'))
          ),
          plan(this.mainEl, function(state){
            if (state.router.state.toc.itemContent != null) {
              this.innerHTML = state.router.state.toc.itemContent;
            }
          }),
          this.mobileNavBottom = el('button.btn.btn-sm.btn-secondary.btn-block.hidden-md-up', { href: '#', onclick: self.onClickNavNext.bind({self: self, ignoreChapters: true}) },
            el('span', el('span.icono-caretDown'))
          ),
          el('footer.row.footer', [
            el('div.col',
              el('div.footer__content', { innerHTML: config.config.footer.html })
            )
          ])
        ]),
        el('a.navigation.navigation-next.hidden-md-down', { href: '#', onclick: self.onClickNavNext.bind({self: self}) },
          el('span', el('span.icono-caretRight'))
        )
      ])
    ])
  ]);

  var renderState;
  var renderSub = alo.createSubscription(function(stores) {
    renderState = {
      router: stores.router,
      app: stores.app
    };
    self.update(renderState);
  });
  renderSub.addStore([router$2, appStore]);

  // Changes to current focus based on specific router changes
  var focusSubscription = router$2.createSubscription(function(stores, computed) {
    if (computed.chapter != null) {
      self.gotoChapter(computed.chapter);
    } else {
      self.focusElementByHash('#header');
    }
  });
  focusSubscription.createDependency({
    'item': function(stores) {
      return stores.router.computed.tocItem;
    },
    'chapter': function(stores) {
      return stores.router.computed.tocChapter;
    }
  });

  window.onpopstate = function(evt) {
    if (evt.state != null && evt.state.itemId != null) {
      if (evt.state.title != null) {
        document.title = evt.state.title;
      }
      router$2.dispatch(setTocItemId(evt.state.itemId))
        .then(function () {
          var chapterId = null;

          if (evt.state.hash != null && evt.state.hash != '') {
            var item = getTocItemById(evt.state.itemId);
            if (item.chapters != null && item.chapters.items.length > 0) {
              var idx = 0;
              var length = item.chapters.items.length;
              var hash = evt.state.hash.slice(1);

              while (idx < length) {
                var chapter = item.chapters.items[idx];
                if (chapter.hash === hash) {
                  chapterId = chapter.id;
                  break;
                }
                idx++;
              }
            }
          } else {
            self.mainWrapperEl.scrollTop = 0;
          }

          return router$2.dispatch(setTocChapterId(chapterId));
        });
    } else {
      /*
       * This case should only ever happen when an anchor link
       * in the body was clicked
       */
      var prom = self.setActiveChapterByLocationHash();
      if (prom != null && prom.then != null) {
        prom.then(function () {
          addNewHistoryEntry(true);
        });
      }
    }
  };
};

App$1.prototype.update = function update (state) {
  this.plan.run(state);
  this.nav.update(state);
  this.titleEl.textContent = getCurrentTitle();
  if (state.router.computed != null) {
    if (state.router.computed.tocItem != null) {
      var topUrl = getUrl(state.router.computed.tocItem);
      this.titleEl.href = topUrl;
    }

    if (state.router.computed.readingProgress != null) {
      var ref = state.router.computed;
        var readingProgress = ref.readingProgress;
      this.mobileNavTop.style.display = (readingProgress.firstEntry !== true)? 'block': 'none';
      this.mobileNavBottom.style.display = (readingProgress.lastEntry !== true)? 'block': 'none';
    }
  }
};

App$1.prototype.setActiveChapterByLocationHash = function setActiveChapterByLocationHash () {
  var self = this;

  if (window.location.hash != '') {
    var hashEl = $(window.location.hash)[0];
    if (hashEl != null) {
      window.scrollTo(0, hashEl.offsetTop);
      self.mainWrapperEl.scrollTop = hashEl.offsetTop;
      hashEl.focus();
    }
    var item = getActiveItem();
    if (item != null) {
      if (item.chapters != null && item.chapters.items.length > 0) {
        var idx = 0;
        var length = item.chapters.items.length;
        var hash = window.location.hash.slice(1);
        while (idx < length) {
          var chapter = item.chapters.items[idx];
          if (chapter.hash === hash) {
            return router$2.dispatch(setTocChapterId(chapter.id));
          }
          idx++;
        }
      }
    }
  }
};

App$1.prototype.toggleLeftNavActive = function toggleLeftNavActive (self, evt) {
  appStore.dispatch(toggleNavActive());
};

App$1.prototype.focusElementByHash = function focusElementByHash (hash) {
  var self = this;

  var hashEl = $(hash)[0];
  if (hashEl != null) {
    window.scrollTo(0, hashEl.offsetTop);
    self.mainWrapperEl.scrollTop = hashEl.offsetTop;
    hashEl.focus();
  }
};

App$1.prototype.onClickNavPrev = function onClickNavPrev (evt) {
  evt.preventDefault();

  var ref = this;
    var self = ref.self;
    var ignoreChapters = ref.ignoreChapters;

  var item = getActiveItem();
  var chapterId = self.getPreviousChapterId(item);

  var prom;
  if (chapterId !== false && ignoreChapters !== true) {
    prom = router.dispatch(setTocChapterId(chapterId));
  } else {
    var routerState = router$2.getState();
    var newItemId = self.getPreviousItemId();
    if (item.id !== newItemId) {
      prom = gotoItemById(newItemId)
        .then(function () {
          var newItem = getActiveItem();
          var newChapterId = null;
          if (newItem.chapters != null && newItem.chapters.items.length > 0) {
            var chapters = newItem.chapters.items;
            newChapterId = chapters.length - 1;
          }

          return router.dispatch(setTocChapterId(newChapterId));
        });
    }
  }

  if (prom != null) {
    return prom.then(function () {
      addNewHistoryEntry();
    });
  }
};

App$1.prototype.gotoChapter = function gotoChapter (chapter) {
  var newHash;
  if (chapter.id === 0) {
    newHash = '#header';
  }
  else if (chapter.hash != null) {
    newHash = "#" + (chapter.hash);
  }

  if (newHash != null) {
    this.focusElementByHash(newHash);
  }
};

App$1.prototype.getPreviousItemId = function getPreviousItemId (idxMove) {
  if (idxMove == null) { idxMove = -1; }
  var routerState = router$2.getState();
  var items = routerState.toc.items;
  var itemsCount = items.length;
  var activeId = routerState.toc.itemId;
  var newId = activeId;

  while(true) {
    newId = newId + idxMove;
    if (newId < 0) {
      newId = 0;
      break;
    } else if (newId > itemsCount) {
      newId = activeId;
      break;
    }

    var newItem = items[newId];
    if (newItem != null) {
      if (newItem.path != null && newItem.hasContent === true) {
        break;
      }
    }
  }

  return newId;
};

App$1.prototype.getNextItemId = function getNextItemId () {
  return this.getPreviousItemId(1);
};

App$1.prototype.onClickNavNext = function onClickNavNext (evt) {
  evt.preventDefault();

  var ref = this;
    var self = ref.self;
    var ignoreChapters = ref.ignoreChapters;

  var item = getActiveItem();
  var chapterId = self.getNextChapterId(item);

  var prom;

  if (chapterId !== false && ignoreChapters !== true) {
    prom = router.dispatch(setTocChapterId(chapterId));
  } else {
    var routerState = router$2.getState();
    var nextItemId = self.getNextItemId();
    if (nextItemId !== item.id) {
      prom = gotoItemById(nextItemId, true);
    }
  }

  if (prom != null && prom.then != null) {
    return prom.then(function () {
      addNewHistoryEntry();
    });
  }
};

App$1.prototype.getPreviousChapterId = function getPreviousChapterId (item, idxMove) {
  var self = this;

  if (idxMove == null) { idxMove = -1; }

  var currentHeading = window.location.hash;
  var newIdx = false;
  if (item.chapters != null && item.chapters.items.length > 0) {
    for (var idx = 0; idx < item.chapters.items.length; idx++) {
      var chapter = item.chapters.items[idx];
      if ('#' + chapter.hash === currentHeading || currentHeading == '') {
        newIdx = idx + idxMove;
        idx = item.chapters.items.length;
        break;
      }
    }
  }

  if (newIdx !== false && newIdx >= 0) {
    return (item.chapters.items[newIdx] != null)? newIdx: false;
  } else {
    return false;
  }
};

App$1.prototype.getNextChapterId = function getNextChapterId (item) {
  return this.getPreviousChapterId(item, 1)
};

return App$1;

}());
