import type { Meta, StoryObj } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import PaginationButtons from "@/components/PaginationButtons.vue";

const meta = {
  title: "Example/Pagination Buttons",
  component: PaginationButtons,
  tags: ["autodocs"],
} satisfies Meta<typeof PaginationButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 6,
    maxPage: 10,
  },
  render: (args) => ({
    components: { PaginationButtons },
    setup() {
      return { args };
    },
    template: `<pagination-buttons v-model="args.modelValue" :maxPage="args.maxPage" />`,
  }),
  play: async ({ args, canvasElement }) => {
    const btnActiveClass = "btn-info";
    const canvas = within(canvasElement);
    const initPage = args.modelValue;

    // check current page
    let currPageBtn = canvas.getByText(initPage.toString());
    await expect(currPageBtn.classList).toContain(btnActiveClass);

    // go to next page
    const goToNextPageBtn = canvas.getByText("»");
    await userEvent.click(goToNextPageBtn);

    // re-assign `currPageBtn` to ensure it matches the page number
    currPageBtn = canvas.getByText(initPage.toString());
    const nextPageBtn = canvas.getByText((initPage + 1).toString());
    await expect(currPageBtn.classList).not.toContain(btnActiveClass);
    await expect(nextPageBtn.classList).toContain(btnActiveClass);
  },
};
