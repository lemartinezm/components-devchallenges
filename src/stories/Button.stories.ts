import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const DisableShadow: Story = {
  args: {
    disableShadow: true,
    children: "Disable Shadow",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: "menu",
    children: "Menu",
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: "done",
    children: "Done",
  },
};

export const SizeSm: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const SizeMd: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const SizeLg: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const ColorDefault: Story = {
  args: {
    color: "default",
    children: "Button",
  },
};

export const ColorPrimary: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
};

export const ColorSecondary: Story = {
  args: {
    color: "secondary",
    children: "Button",
  },
};

export const ColorDanger: Story = {
  args: {
    color: "danger",
    children: "Button",
  },
};
