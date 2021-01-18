import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
it("render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// import { render, screen } from '@testing-library/react';
// import App from './App';
// import { isTSAnyKeyword } from "@babel/types";

// test('renders', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
