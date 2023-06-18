import{a as p}from"./chunk-OPEUWD42-a3b45fd8.js";import{d as m,a as b,b as d,g as f,i as v,o as h}from"./vue.esm-bundler-c8b1aa06.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const r=m({methods:{updateInput(e){const t=e.target.checked,l=[...this.modelValue];t?l.push(this.value):l.splice(l.indexOf(this.value),1),this.$emit("update:modelValue",l)}},computed:{isChecked(){return this.modelValue.includes(this.value)}},emits:["update:modelValue"],props:{modelValue:{type:Array,default:()=>[]},value:{type:[Boolean,String,Array,Object],default:""},width:{type:String,default:"320px"},disabled:{type:Boolean,default:!1}},name:"bx-checkbox"});const g=["checked","value","disabled"],V={class:"ui-ctl-label-text"};function k(e,t,l,y,_,w){return h(),b("label",{class:"ui-ctl ui-ctl-checkbox",style:v({width:e.width})},[d("input",{class:"ui-ctl-element",type:"checkbox",checked:e.isChecked,value:e.value,disabled:e.disabled,onChange:t[0]||(t[0]=(...i)=>e.updateInput&&e.updateInput(...i))},null,40,g),d("div",V,[f(e.$slots,"default")])],4)}const c=x(r,[["render",k]]);r.__docgenInfo={displayName:"bx-checkbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"value",type:{name:"boolean|string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxCheckbox.vue"]};const a={modelValue:[],value:"",width:"320px",disabled:!1},$={title:"bx-checkbox",component:c,tags:["autodocs"],args:{default:"Two","update:modelValue":p("update:modelValue"),modelValue:a.modelValue,value:"Two",width:a.width,disabled:a.disabled},argTypes:{default:{control:{type:"text"}},modelValue:{defaultValue:a.modelValue,control:{type:"object"}},value:{defaultValue:a.value,control:{type:"text"}},width:{defaultValue:a.width,control:{type:"text"}},disabled:{defaultValue:a.disabled,control:{type:"boolean"}}}},o={render:e=>({template:`
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,data:()=>({args:e}),components:{BxCheckbox:c}})};var s,n,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    components: {
      BxCheckbox
    }
  })
}`,...(u=(n=o.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,$ as default};
//# sourceMappingURL=BxCheckbox.stories-8885e54c.js.map
