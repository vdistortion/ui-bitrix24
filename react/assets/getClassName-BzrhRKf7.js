import{r as l}from"./index-CDs2tPxN.js";var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l,y=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,x=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function a(n,r,o){var e,t={},s=null,u=null;o!==void 0&&(s=""+o),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(u=r.ref);for(e in r)d.call(r,e)&&!j.hasOwnProperty(e)&&(t[e]=r[e]);if(n&&n.defaultProps)for(e in r=n.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:y,type:n,key:s,ref:u,props:t,_owner:x.current}}f.Fragment=c;f.jsx=a;f.jsxs=a;p.exports=f;var i=p.exports;const O=(n,r,o)=>{const e=({children:t,...s})=>i.jsx(n,{...s,children:t});return!r||!o?e:{render(t){return o.map((s,u)=>{const _={[r]:s};return i.jsx("div",{className:"component",children:e({...t,..._})},u)})},argTypes:{[r]:{table:{disable:!0}}}}};function E(n,r){return Array.isArray(r)?[n,...r].join(" "):Object.entries(r).reduce((o,[e,t])=>(t&&o.push(e),o),[n]).join(" ")}export{O as S,E as g,i as j};
