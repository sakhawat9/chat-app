import { render, fireEvent } from "@testing-library/react";
import App from "../../../App";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<App />);
  expect(queryByTestId("chat-app")).toBeTruthy();
});
