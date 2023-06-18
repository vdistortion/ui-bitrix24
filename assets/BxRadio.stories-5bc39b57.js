import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as p,a as c,b as o,g as v,i as f,o as b}from"./vue.esm-bundler-c8b1aa06.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const r=p({computed:{isChecked(){return this.modelValue===this.value}},emits:["update:modelValue"],props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},width:{type:String,default:"320px"},disabled:{type:Boolean,default:!1}},name:"bx-radio"});const V=["checked","value","disabled"],x={class:"ui-ctl-label-text"};function y(e,t,h,_,w,B){return b(),c("label",{class:"ui-ctl ui-ctl-radio",style:f({width:e.width})},[o("input",{class:"ui-ctl-element",type:"radio",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value))},null,40,V),o("div",x,[v(e.$slots,"default")])],4)}const u=g(r,[["render",y]]);r.__docgenInfo={displayName:"bx-radio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxRadio.vue"]};const a={modelValue:"",value:"",width:"320px",disabled:!1},S={title:"bx-radio",component:u,tags:["autodocs"],args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:a.modelValue,value:"Two",width:a.width,disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},width:{defaultValue:a.width,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},l={render:e=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),components:{BxRadio:u}})};var d,n,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    components: {
      BxRadio
    }
  })
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const $=["Default"];export{l as Default,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=BxRadio.stories-5bc39b57.js.map
