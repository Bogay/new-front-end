import type { Meta, StoryObj } from "@storybook/vue3";

import AnnouncementCard from "@/components/Announcement/AnnouncementCard.vue";

const meta = {
  title: "Example/Announcement Card",
  component: AnnouncementCard,
  tags: ["autodocs"],
} satisfies Meta<typeof AnnouncementCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const userBogay = {
  displayedName: "bogay",
  md5: "4d8a688b2637fcf029e8d6dd8458bab3",
  role: 0,
  username: "bogay",
};

export const Default: Story = {
  args: {
    announcement: {
      annId: "6472f6ecde3b678094af25f6",
      createTime: 1685255916,
      creator: userBogay,
      markdown: `公告的內文在這邊

## Markdown supported

- a
- b
- c
      `,
      pinned: false,
      title: "公告標題",
      updateTime: 1685255916,
      updater: userBogay,
    },
  },
};
