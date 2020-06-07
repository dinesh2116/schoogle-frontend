import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import StudentManagement from "./StudentManagement/StudentManagement";
import ManageClassroom from "./ManageClassroom/ManageClassroom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/StudentManage" component={StudentManagement} />
        <Route  path="/ManageClass" component={ManageClassroom} />
      </Switch>
    </div>
  );
}

export default App;
