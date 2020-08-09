import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ModalSwitch from "./Components/ModalSwitch";

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function Test() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}







