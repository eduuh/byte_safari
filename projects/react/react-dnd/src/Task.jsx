import React from "react"
import "./Task.css"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export const Task = ({ id, title }) => {
  const { attributes, listeners,
    setNodeRef, transform, transition } = useSortable({ id })

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div style={styles} ref={setNodeRef} {...attributes} {...listeners} className="task">
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  )
}
