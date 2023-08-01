import type { Meta, StoryObj } from "@storybook/vue3";

import JudgeStatus from "@/components/JudgeStatus.vue";

const meta = {
  title: "Example/Judge Status",
  component: JudgeStatus,
  tags: ["autodocs"],
} satisfies Meta<typeof JudgeStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pending: Story = {
  args: {
    status: -1,
  },
};

export const AC: Story = {
  args: {
    // FIXME: it seems that storybook can't find `SubmissionStatusCodes`
    // status: SubmissionStatusCodes.ACCEPTED,
    status: 0,
  },
};

export const WA: Story = {
  args: {
    status: 1,
  },
};

export const CE: Story = {
  args: {
    status: 2,
  },
};

export const TLE: Story = {
  args: {
    status: 3,
  },
};

export const MLE: Story = {
  args: {
    status: 4,
  },
};

export const RE: Story = {
  args: {
    status: 5,
  },
};

export const JudgeError: Story = {
  args: {
    status: 6,
  },
};

export const OLE: Story = {
  args: {
    status: 7,
  },
};
