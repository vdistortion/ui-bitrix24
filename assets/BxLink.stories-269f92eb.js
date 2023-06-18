import{d as l,a as c,g as d,w as u,o as f}from"./vue.esm-bundler-c8b1aa06.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const s=l({methods:{onClick(e){this.$BX24&&(e.preventDefault(),this.$BX24.openLink(this.href))}},inject:["$BX24"],props:{href:{type:String,required:!0,validator(e){return typeof e=="string"}}},name:"bx-link"}),g=["href"];function h(e,n,_,$,v,B){return f(),c("a",{href:e.href,target:"_blank",onClick:n[0]||(n[0]=u((...p)=>e.onClick&&e.onClick(...p),["left"]))},[d(e.$slots,"default")],8,g)}const i=m(s,[["render",h]]);s.__docgenInfo={displayName:"bx-link",exportName:"default",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/valentin/Projects/vue-bitrix24/src/components/BxLink.vue"]};const k="https://training.bitrix24.com/rest_help/js_library/additional/openPath.php",x="Component opens a specified path inside slider in the Bitrix24 account.",b=/^\/(crm\/(deal|lead|contact|company)|marketplace|company\/personal\/user\/[0-9]+|workgroups\/group\/[0-9]+)\//,L={title:"bx-link",component:i,parameters:{docs:{description:{component:`<a href="${k}" target="_blank">${x}</a>`}}},tags:["autodocs"],args:{default:"bx-link",href:"https://astrotrain55.github.io/vue-bitrix24/"},argTypes:{default:{control:{type:"text"}},href:{description:`${b}`,defaultValue:"",control:{type:"text"}}}},t={render:e=>({template:'<bx-link v-bind="args" v-on="args">{{ args.default }}</bx-link>',data:()=>({args:e}),provide:{$BX24:null},components:{BxLink:i}})};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,L as default};
//# sourceMappingURL=BxLink.stories-269f92eb.js.map
