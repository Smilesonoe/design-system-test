import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Outline", "Ghost"],
      description: "Visual style of the button",
      table: { defaultValue: { summary: "Primary" } },
    },
    size: {
      control: "select",
      options: ["SM", "MD", "LG"],
      description: "Size of the button",
      table: { defaultValue: { summary: "MD" } },
    },
    label: {
      control: "text",
      description: "Button label text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
  args: {
    label: "Button",
    variant: "Primary",
    size: "MD",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "Primary" },
};

export const Secondary: Story = {
  args: { variant: "Secondary" },
};

export const Outline: Story = {
  args: { variant: "Outline" },
};

export const Ghost: Story = {
  args: { variant: "Ghost" },
};

export const Small: Story = {
  args: { size: "SM" },
};

export const Large: Story = {
  args: { size: "LG" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

// Show all style × size combinations
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {(["Primary", "Secondary", "Outline", "Ghost"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {(["SM", "MD", "LG"] as const).map((size) => (
            <Button key={size} variant={variant} size={size} label={`${variant} ${size}`} />
          ))}
        </div>
      ))}
    </div>
  ),
};
