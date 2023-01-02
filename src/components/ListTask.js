import React from "react";
import "../AppRedux.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
const ListTask = () => {
  const [search, setSearch] = useState("all");
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTask />
      <div className="pad">
        <Button
          className="buttons"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => setSearch("all")}
        >
          All
        </Button>
        <Button
          className="buttons"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => setSearch("done")}
        >
          Done
        </Button>
        <Button
          className="buttons"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => setSearch("notDone")}
        >
          Not Done
        </Button>
      </div>
      <Task search={search} />
    </div>
  );
};

export default ListTask;
