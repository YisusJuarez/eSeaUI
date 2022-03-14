import React from "react";

import Button from "./Button";

export default {
  title: "Basics/Buttons",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "success", "light", "dark"],	
      control: {type:"select"},
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Button",
  variant: "primary",	
};
