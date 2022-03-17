import React from "react";

import Input from "./Input.js";

export default {
  title: "Basics/Inputs",
  component: Input,
  argTypes: {
    type: {
      control: {type: "select"},
      options: ["outline", "blur"],
    },
    variant: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => (
  <div style={{ width: 300 }}>
    <Input {...args} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = {
  variant: "dark",
  type: "outline",
  placeholder: "Placeholder",
  value: "",
};
