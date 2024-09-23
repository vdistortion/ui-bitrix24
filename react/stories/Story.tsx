import { Args } from '@storybook/react';

interface IStory {
  <T>(component: any, propName?: string, propList?: T[]): any;
}

export const Story: IStory = (Component, propName, propList) => {
  const Template = ({ children, ...args }: Args) => <Component {...args}>{children}</Component>;

  if (!propName || !propList) return Template;

  return {
    render(args: Args) {
      return propList.map((value, key: number) => {
        const dynamicProp = { [propName]: value };

        return (
          <div className="component" key={key}>
            {Template({ ...args, ...dynamicProp })}
          </div>
        );
      });
    },
    argTypes: {
      [propName]: {
        table: {
          disable: true,
        },
      },
    },
  };
};
