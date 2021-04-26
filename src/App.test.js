import { render, screen } from "@testing-library/react";
import MemberList from "./MemberList";

test("renders learn react link", () => {
  render(<MemberList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
