import type { Meta, StoryObj } from "@storybook/react"

import OneTimePassword from "./one-time-password"

const meta = {
	title: "OTP/Simple input",
	component: OneTimePassword,
	tags: ["autodocs"],
	argTypes: {
		numberOfFields: { control: "number" },
	},
} satisfies Meta<typeof OneTimePassword>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OTPInput: Story = {
	args: {
		numberOfFields: 6,
	},
}
