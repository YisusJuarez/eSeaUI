import React from "react";

import Title from "./Title";

export default {
  title: "Basics/Titles",
  component: Title,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],	
      control: {type:"select"},
    },
    variant: {
      options: ["light", "dark"],
      control: { type: "select" },
    }
  },
};

const Template = (args) => <Title {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  content: "Example text",
  as: "h1",
  variant: "dark",	
};
