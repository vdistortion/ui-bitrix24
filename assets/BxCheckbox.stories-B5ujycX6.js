import{a as x}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as V,e as h,o as g,f as k,g as s,l as y}from"./vue.esm-bundler-Bn_nRS7z.js";import{u as _}from"./useStyles-B1JkXNY2.js";import"./v4-CQkTLCs1.js";const B={class:"bx-checkbox ui-ctl ui-ctl-checkbox"},C=["checked","value","disabled"],O={class:"ui-ctl-label-text"},d=V({__name:"BxCheckbox",props:{modelValue:{type:Array,default:()=>[]},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:m}){_();const e=t,i=m,p=h(()=>e.modelValue.includes(e.value));function b(n){const f=n.target.checked,l=[...e.modelValue];f?l.push(e.value):l.splice(l.indexOf(e.value),1),i("update:modelValue",l)}return(n,v)=>(g(),k("label",B,[s("input",{class:"ui-ctl-element",type:"checkbox",checked:p.value,value:e.value,disabled:e.disabled,onChange:b},null,40,C),s("div",O,[y(n.$slots,"default")])]))}});d.__docgenInfo={exportName:"default",displayName:"BxCheckbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxCheckbox.vue"]};const a={modelValue:[],value:"",disabled:!1},T={title:"forms/bx-checkbox",component:d,args:{default:"Two","update:modelValue":x("update:modelValue"),modelValue:a.modelValue,value:"Two",disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},o={render:t=>({template:`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:t}),provide:{$BX24:null},components:{BxCheckbox:d}})};var u,c,r;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    template: \`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    \`,
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxCheckbox
    }
  })
}`,...(r=(c=o.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,T as default};
