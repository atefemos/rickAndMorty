import { cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardItem from "./cardItem";
import React from "react";
import { renderWithProviders } from "../../utils/testProvider";

afterEach(cleanup);

describe("card item", () => {
  test("should render correctly when pass status", () => {
    const testStatus = "Alive";
    renderWithProviders(
      <CardItem status={testStatus} title={"rick"} gender={"dec"} img={""} />
    );

    const statusText = screen.getByTestId("status");
    expect(statusText).toBeInTheDocument();
    expect(statusText).toContainHTML("Alive");
  });
  test("should render correctly when pass title", () => {
    const testTitle = "Rick";
    renderWithProviders(
      <CardItem status={"Alive"} title={testTitle} gender={"dec"} img={""} />
    );

    const titleText = screen.getByTestId("title");
    expect(titleText).toBeInTheDocument();
    expect(titleText).toContainHTML("Rick");
  });
  test("should render correctly when pass gender", () => {
    const testGender = "loc";
    renderWithProviders(
      <CardItem status={"Alive"} title={"ricky"} gender={testGender} img={""} />
    );

    const titleText = screen.getByTestId("gender");
    expect(titleText).toBeInTheDocument();
    expect(titleText).toContainHTML("loc");
  });
});
