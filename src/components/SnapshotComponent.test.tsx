import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // 追加: jest-dom をインポート
import SnapshotComponent from "./SnapshotComponent";

it("snapshot test", () => {
  const { container } = render(<SnapshotComponent text="vue" />);
  expect(container).toMatchSnapshot();
});
