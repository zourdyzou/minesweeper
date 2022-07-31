import { GridComponent } from "@components/grid/grid";
import { MockFieldData } from "@helpers/mockData";
import { render } from "@testing-library/react";
import React from "react";

describe("Grid Component rendering test", function () {
  it("should render the grid correctly", function () {
    const internalProps = {
      onClick: jest.fn(),
      onContextMenu: jest.fn(),
    };

    const { asFragment } = render(<GridComponent children={MockFieldData} {...internalProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
