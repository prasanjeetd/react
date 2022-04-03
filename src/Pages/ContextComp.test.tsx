import { render } from "@testing-library/react";
import React from "react";
import { ContextConsumer, SampleContext } from "./ContextComp";

describe("Test React Context", () => {
  test("It should test Context Component", () => {
    const contextData = { name: "Billa Meow" };
    const { container, getAllByText } = render(
      <SampleContext.Provider value={contextData}>
        <ContextConsumer></ContextConsumer>
      </SampleContext.Provider>
    );

    expect(getAllByText("Billa Meow").length).toBe(2);
  });

  test("It should test Context Component with wrapper parameter", () => {
    const contextData = { name: "Billa Meow" };

    const wrapper: React.FC<{}> = ({ children }) => (
      <SampleContext.Provider value={contextData}>
        {children}
      </SampleContext.Provider>
    );

    const {  getAllByText } = render(
      <ContextConsumer></ContextConsumer>,
      { wrapper }
    );

    expect(getAllByText("Billa Meow").length).toBe(2);
  });
});
