import "@testing-library/jest-dom"; // 追加: jest-dom をインポート
import { render, screen } from "@testing-library/react";
import { UserSearch } from "./UserSearch";
import userEvent from "@testing-library/user-event";
import axios from "axios";

const user = userEvent.setup();

it("snapshot", () => {
  const { container } = render(<UserSearch />);
  expect(container).toMatchSnapshot();
});

jest.mock("axios");
const mockAxios = jest.mocked(axios);
describe("UserSearch test", () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  it("検索ボタンをクリックすると適切なAPIリクエストが発生する", async () => {
    const userInfo = {
      id: 1,
      name: "vue",
    };
    const resp = { data: userInfo };
    mockAxios.get.mockResolvedValue(resp);

    render(<UserSearch />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    await user.type(input, userInfo.name);
    await user.click(button);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it("APIから取得したユーザー情報が正しく画面に表示される", async () => {
    const userInfo = {
      id: 1,
      name: "vue",
    };
    const resp = { data: userInfo };
    mockAxios.get.mockResolvedValue(resp);

    render(<UserSearch />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    await user.type(input, userInfo.name);
    await user.click(button);

    expect(screen.getByText(userInfo.name)).toBeInTheDocument();
  });
});
