import{a as v}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as y}from"./Story-YA5z4d3s.js";import{d as _,e as x,o as V,f as g,g as s,l as B,n as h}from"./vue.esm-bundler-BFuqo-Wr.js";import{u as S}from"./useStyles-DEeDzxik.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const e={value:"",disabled:!1},k=["checked","value","disabled"],P={class:"ui-ctl-label-text"},n=_({__name:"BxRadio",props:{modelValue:{type:[Boolean,String,Array,Object],default:e.value},value:{type:[Boolean,String,Array,Object],default:e.value},disabled:{type:Boolean,default:e.disabled}},emits:["update:modelValue"],setup(i,{emit:m}){S();const a=i,p=m,f=x(()=>a.modelValue===a.value);function b(t){const l=t.target;p("update:modelValue",l.value)}return(t,l)=>(V(),g("label",{class:h(["ui-ctl ui-ctl-radio",t.$style["bx-radio"]])},[s("input",{class:"ui-ctl-element",type:"radio",checked:f.value,value:a.value,disabled:a.disabled,onChange:b},null,40,k),s("div",P,[B(t.$slots,"default")])],2))}}),R={"bx-radio":"_bx-radio_1bzs3_2"},C={$style:R},c=j(n,[["__cssModules",C]]);n.__docgenInfo={exportName:"default",displayName:"BxRadio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"defaultProps.value"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"defaultProps.value"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"defaultProps.disabled"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxRadio.vue"]};const N={"update:modelValue":v("update:modelValue")},M={title:"forms/bx-radio",component:c,args:{default:"",...N,modelValue:e.value,value:e.value,disabled:e.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{control:{type:"text"}},value:{control:{type:"text"}},disabled:{control:{type:"boolean"}}}},o=y(c);var d,u,r;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"Story(BxRadio)",...(r=(u=o.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,M as default};