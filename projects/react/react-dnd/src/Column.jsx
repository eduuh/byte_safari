import React from "react";
import "./Column.css"
import { Task } from "./Task"

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

export const Column = ({ tasks }) => {
  return <div className="column">
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {
        tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))
      }
    </SortableContext>
  </div>
}
