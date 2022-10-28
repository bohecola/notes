import{_ as s,c as n,o as a,a as l}from"./app.5ccb212c.js";const C=JSON.parse('{"title":"\u5783\u573E\u56DE\u6536","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58","slug":"\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58","link":"#\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58","children":[]},{"level":2,"title":"\u6807\u8BB0\u6E05\u9664 mark and sweep","slug":"\u6807\u8BB0\u6E05\u9664-mark-and-sweep","link":"#\u6807\u8BB0\u6E05\u9664-mark-and-sweep","children":[]},{"level":2,"title":"\u5F15\u7528\u8BA1\u6570 reference counting","slug":"\u5F15\u7528\u8BA1\u6570-reference-counting","link":"#\u5F15\u7528\u8BA1\u6570-reference-counting","children":[]}],"relativePath":"ecmascript/\u5783\u573E\u56DE\u6536.md","lastUpdated":1666925846000}'),p={name:"ecmascript/\u5783\u573E\u56DE\u6536.md"},e=l(`<h1 id="\u5783\u573E\u56DE\u6536" tabindex="-1">\u5783\u573E\u56DE\u6536 <a class="header-anchor" href="#\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a></h1><ul><li>\u627E\u51FA\u4E0D\u518D\u4F7F\u7528\u7684\u53D8\u91CF</li><li>\u91CA\u653E\u5176\u5360\u7528\u7684\u5185\u5B58</li><li>\u56FA\u5B9A\u65F6\u95F4\u95F4\u9694</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58" tabindex="-1">\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58 <a class="header-anchor" href="#\u89E3\u9664\u95ED\u5305\u7684\u5185\u5B58" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6807\u8BB0\u6E05\u9664-mark-and-sweep" tabindex="-1">\u6807\u8BB0\u6E05\u9664 mark and sweep <a class="header-anchor" href="#\u6807\u8BB0\u6E05\u9664-mark-and-sweep" aria-hidden="true">#</a></h2><ul><li>\u6807\u8BB0\u8FDB\u5165\u73AF\u5883</li><li>\u79BB\u5F00\u73AF\u5883\u65F6\uFF0C\u6392\u9664\u5168\u5C40\u53D8\u91CF\u548C\u5F62\u6210\u95ED\u5305\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u6E05\u9664</li></ul><h2 id="\u5F15\u7528\u8BA1\u6570-reference-counting" tabindex="-1">\u5F15\u7528\u8BA1\u6570 reference counting <a class="header-anchor" href="#\u5F15\u7528\u8BA1\u6570-reference-counting" aria-hidden="true">#</a></h2><ul><li>\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\u7684\u65F6\u5019\uFF0C\u65E0\u6CD5\u6E05\u9664\u53D8\u91CF\u53EF\u80FD\u5F15\u53D1\u5185\u5B58\u6EA2\u51FA</li></ul>`,9),o=[e];function t(c,r,F,y,i,D){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
