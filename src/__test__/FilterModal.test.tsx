import FullCalendar from "@fullcalendar/react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, test } from "vitest";
import RegularCalendarView from "../components/regularCalendar/page";

test("Checks if the FilterModal Component renders when 'Filter' Button is clicked", async () => {
  render(<RegularCalendarView />);
  const user = userEvent.setup();

  const getFilterLabelButton = screen.getByRole("button", { name: /filter/i });
  const getFilterModalComp = screen.queryByTestId("filter-modal-container");

  expect(getFilterModalComp).toBeNull();

  await user.click(getFilterLabelButton);

  expect(getFilterModalComp).toBeDefined();
});

test.each([
  { btnName: "Week", expectedView: "dayGridWeek" },
  { btnName: "Months", expectedView: "dayGridMonth" },
  { btnName: "Year", expectedView: "multiMonthYear" },
])(
  "Test Buttons on the Filter Modal are working properly",
  async ({ btnName, expectedView }) => {
    const ref = createRef<FullCalendar>();

    render(<RegularCalendarView ref={ref} />);

    const user = userEvent.setup();
    const getFilterLabelButton = screen.getByRole("button", {
      name: /filter/i,
    });

    await user.click(getFilterLabelButton);

    expect(screen.getByTestId("filter-modal-container")).toBeDefined();

    const getChangeCalViewToTodayGridWkBtn = screen.getByRole("button", {
      name: btnName,
    });

    await user.click(getChangeCalViewToTodayGridWkBtn);

    expect(ref.current?.getApi().view.type).toBe(expectedView);
  }
);
