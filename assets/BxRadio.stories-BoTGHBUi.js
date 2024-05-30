import{a as f}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as b,e as g,o as V,f as x,g as s,l as y}from"./vue.esm-bundler-Bn_nRS7z.js";import{u as _}from"./useStyles-B1JkXNY2.js";import"./v4-CQkTLCs1.js";const B={class:"bx-radio ui-ctl ui-ctl-radio"},h=["checked","value","disabled"],O={class:"ui-ctl-label-text"},d=b({__name:"BxRadio",props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:m}){_();const a=o,c=m,p=g(()=>a.modelValue===a.value);function v(t){const n=t.target;c("update:modelValue",n.value)}return(t,n)=>(V(),x("label",B,[s("input",{class:"ui-ctl-element",type:"radio",checked:p.value,value:a.value,disabled:a.disabled,onChange:v},null,40,h),s("div",O,[y(t.$slots,"default")])]))}});d.__docgenInfo={exportName:"default",displayName:"BxRadio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/WebstormProjects/vue-bitrix24/src/components/BxRadio.vue"]};const e={modelValue:"",value:"",disabled:!1},C={title:"forms/bx-radio",component:d,args:{default:"Two","update:modelValue":f("update:modelValue"),modelValue:e.modelValue,value:"Two",disabled:e.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:e.modelValue,control:{type:"object"}},value:{defaultValue:e.value,control:{type:"text"}},disabled:{defaultValue:e.disabled,control:{type:"boolean"}}}},l={render:o=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:o}),provide:{$BX24:null},components:{BxRadio:d}})};var r,u,i;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    template: \`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
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
      BxRadio
    }
  })
}`,...(i=(u=l.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,C as default};
