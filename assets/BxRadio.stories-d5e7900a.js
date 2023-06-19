import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as p,a as c,b as o,g as f,i as v,o as b}from"./vue.esm-bundler-47f028ed.js";import{l as g}from"./loadStyles-b9de59bf.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const r=p({computed:{isChecked(){return this.modelValue===this.value}},created(){g()},emits:["update:modelValue"],props:{modelValue:{type:[Boolean,String,Array,Object],default:""},value:{type:[Boolean,String,Array,Object],default:""},width:{type:String,default:"320px"},disabled:{type:Boolean,default:!1}},name:"bx-radio"});const y=["checked","value","disabled"],x={class:"ui-ctl-label-text"};function h(e,t,_,w,B,O){return b(),c("label",{class:"ui-ctl ui-ctl-radio",style:v({width:e.width})},[o("input",{class:"ui-ctl-element",type:"radio",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value))},null,40,y),o("div",x,[f(e.$slots,"default")])],4)}const u=V(r,[["render",h]]);r.__docgenInfo={displayName:"bx-radio",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxRadio.vue"]};const a={modelValue:"",value:"",width:"320px",disabled:!1},R={title:"forms/bx-radio",component:u,tags:["autodocs"],args:{default:"Two","update:modelValue":m("update:modelValue"),modelValue:a.modelValue,value:"Two",width:a.width,disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},width:{defaultValue:a.width,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},l={render:e=>({template:`
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),components:{BxRadio:u}})};var d,s,n;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(n=(s=l.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Default"];export{l as Default,C as __namedExportsOrder,R as default};
//# sourceMappingURL=BxRadio.stories-d5e7900a.js.map
