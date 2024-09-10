import { render, screen } from "@testing-library/react"; // 修正: react-dom から @testing-library/react に変更
import Button from "./Button";
import "@testing-library/jest-dom"; // 追加: jest-dom をインポート

describe("Button", () => {
  it("Buttonタグがレンダリングされる", () => {
    render(<Button label="ボタン" onClick={() => alert("Button clicked")} />);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("ボタン");
  });
});
