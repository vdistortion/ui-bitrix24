import{_ as s,c as a,a0 as t,o as n}from"./chunks/framework.DerDJkVh.js";const c=JSON.parse('{"title":"react-bitrix24","description":"","frontmatter":{},"headers":[],"relativePath":"react-bitrix24.md","filePath":"react-bitrix24.md"}'),l={name:"react-bitrix24.md"};function e(r,i,h,p,k,o){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="react-bitrix24" tabindex="-1">react-bitrix24 <a class="header-anchor" href="#react-bitrix24" aria-label="Permalink to &quot;react-bitrix24&quot;">​</a></h1><p>Component library in Bitrix24 style</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-nodejs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nodejs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i -S react-bitrix24@latest bitrix24-library@latest</span></span></code></pre></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h2><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// App.tsx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BxButton, loadStyles } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react-bitrix24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Bitrix24 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bitrix24-library&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Bitrix24.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">BX24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    loadStyles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BX24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BxButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> menu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;BxButton&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BxButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="storybook" tabindex="-1"><a href="https://astrotrain55.github.io/ui-bitrix24/react" target="_blank" rel="noreferrer">Storybook</a> <a class="header-anchor" href="#storybook" aria-label="Permalink to &quot;[Storybook](https://astrotrain55.github.io/ui-bitrix24/react)&quot;">​</a></h3><ul><li>BxAlert</li><li>BxButton</li><li>BxCheckbox</li><li>BxEntitySelector</li><li>BxIcon</li><li>BxInput</li><li>BxInputFile</li><li>BxProgressbar</li><li>BxRadio</li><li>BxTextarea</li></ul><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="https://training.bitrix24.com/api_d7/bitrix/ui/index.php" target="_blank" rel="noreferrer">UI library [EN]</a></li><li><a href="https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php" target="_blank" rel="noreferrer">UI library [RU]</a></li></ul>`,11)]))}const E=s(l,[["render",e]]);export{c as __pageData,E as default};