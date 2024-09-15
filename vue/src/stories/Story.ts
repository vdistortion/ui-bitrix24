import type { Args } from '@storybook/vue3';

interface IStory {
  <T>(component: any, propName?: string, propList?: T[]): any;
}

export const Story: IStory = (Component, propName, propList) => {
  if (propName && propList) {
    return {
      render: (args: Args) => ({
        template: `
        <div v-for="item in propList" :key="item" class="component">
          <Component v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</Component>
        </div>
      `,
        data: () => ({ args, propName, propList }),
        provide: {
          $BX24: null,
        },
        components: { Component },
      }),
      argTypes: {
        [propName]: {
          table: {
            disable: true,
          },
        },
      },
    };
  }

  return {
    render: (args: Args) => ({
      template: '<Component v-bind="args" v-on="args">{{ args.default }}</Component>',
      data: () => ({ args }),
      provide: {
        $BX24: null,
      },
      components: { Component },
    }),
  };
};
