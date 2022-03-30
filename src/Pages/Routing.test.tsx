import { fireEvent, render, screen } from "@testing-library/react";
// import React from "react";
import { MemoryRouter } from "react-router";
import App from "../App";
import AppRouter from "./Routing";

describe("Testing router", () => {
    
  test("It should test navigation with inbuilt routing", () => {
  const {container}=  render(<App></App>);
   
    const layoutNav = container.querySelector("a[href='/app']") as HTMLAnchorElement;
    expect(layoutNav).toBeInTheDocument();
    let indexPage = screen.queryByText(/Index Page/i);
    expect(indexPage).not.toBeInTheDocument();

    fireEvent.click(layoutNav);

    indexPage = screen.getByText(/Index Page/i);
    expect(indexPage).toBeInTheDocument();

    let page1 = screen.queryByText(/Page 1/i);
    expect(page1).not.toBeInTheDocument();

    const page1Nav = screen.getByText(/Page1/i);
    expect(page1Nav).toBeInTheDocument();

    page1Nav.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    page1 = screen.queryByText(/Page 1/i);
    expect(page1).toBeInTheDocument();
  });

  test("It should test navigation", () => {
    render(
      <MemoryRouter initialEntries={["/app"]}>
        <AppRouter></AppRouter>
      </MemoryRouter>
    );

    const layoutNav = screen.getByText(/app/i);
    expect(layoutNav).toBeInTheDocument();

    let indexPage = screen.queryByText(/Index Page/i);
    expect(indexPage).toBeInTheDocument();

    let page1 = screen.queryByText(/Page 1/i);
    expect(page1).not.toBeInTheDocument();

    const page1Nav = screen.getByText(/Page1/i);
    expect(page1Nav).toBeInTheDocument();

    fireEvent.click(page1Nav);

    page1 = screen.queryByText(/Page 1/i);
    expect(page1).toBeInTheDocument();
  });
});
