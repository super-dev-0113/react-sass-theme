import React from "react";
import ThemeSetter from "../ThemeSetter";

import ThemeProvider from "../Contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <div className="myClass">
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
