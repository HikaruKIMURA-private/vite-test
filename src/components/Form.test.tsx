import { render, screen } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom"; // 追加: jest-dom をインポート
import userEvent from "@testing-library/user-event";
const user = userEvent.setup();

describe("Form", () => {
  it("Formタグがレンダリングされる", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent("");
  });

  it("テキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "test text");
    expect(screen.getByDisplayValue("test text")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledWith("submitted: test text");
    alertSpy.mockRestore();
  });
});
