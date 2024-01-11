import React, {useState} from "react";
import Input from "./components/Input";
import Hover from "./components/Hover";
import List from "./components/List";
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <Search/>
      <Input/>
      <Hover/>
      <List/>
    </div>
  );
}

export default App;
