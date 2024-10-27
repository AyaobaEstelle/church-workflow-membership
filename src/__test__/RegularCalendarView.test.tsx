import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import RegularCalendarView from "../components/regularCalendar/page";

it("Checks if Calendar Renders on the page", async () => {
  render(<RegularCalendarView />);
  const calendarView = screen.getByTestId("calendar");
  expect(calendarView).toBeDefined();
});
