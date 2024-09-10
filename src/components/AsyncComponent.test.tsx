import { render, screen, waitFor } from "@testing-library/react";
import AsyncComponent from "./AsyncComponent";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("AsyncComponent", () => {
  it("ボタンをクリックすると非同期処理が実行される", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText("Initial text")).toBeInTheDocument();

    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByText("Updated text")).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });
});
