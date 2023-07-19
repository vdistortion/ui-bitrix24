import{d as p,c as d,r as c,o as u}from"./vue.esm-bundler-25ce8513.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const a=p({methods:{onClick(e){this.$BX24&&(e.preventDefault(),this.$BX24.openLink(this.href))},onMiddleClick(e){this.$BX24&&(e.preventDefault(),this.$BX24.openLink(this.href,!0))}},inject:["$BX24"],props:{href:{type:String,required:!0,validator(e){return typeof e=="string"}}},name:"bx-link"}),m=["href"];function k(e,n,b,$,B,v){return u(),d("a",{href:e.href,target:"_blank",onClick:n[0]||(n[0]=(...r)=>e.onClick&&e.onClick(...r)),onAuxclick:n[1]||(n[1]=(...r)=>e.onMiddleClick&&e.onMiddleClick(...r))},[c(e.$slots,"default")],40,m)}const l=f(a,[["render",k]]);a.__docgenInfo={displayName:"bx-link",exportName:"default",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxLink.vue"]};const h="https://training.bitrix24.com/rest_help/js_library/additional/openPath.php",g="Component opens a specified path inside slider in the Bitrix24 account.",x=/^\/(crm\/(deal|lead|contact|company)|marketplace|company\/personal\/user\/[0-9]+|workgroups\/group\/[0-9]+)\//,C={title:"bx-link",component:l,parameters:{docs:{description:{component:`<a href="${h}" target="_blank">${g}</a>`}}},args:{default:"bx-link",href:"https://astrotrain55.github.io/vue-bitrix24/"},argTypes:{default:{control:{type:"text"}},href:{description:`${x}`,defaultValue:"",control:{type:"text"}}}},t={render:e=>({template:'<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',data:()=>({args:e}),provide:{$BX24:null},components:{BxLink:l}})};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    template: '<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',
    data: () => ({
      args
    }),
    provide: {
      $BX24: null
    },
    components: {
      BxLink
    }
  })
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,C as default};
//# sourceMappingURL=BxLink.stories-8114422c.js.map
