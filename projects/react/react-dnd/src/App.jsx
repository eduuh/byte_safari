import { useState } from 'react'
import './App.css'

import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"

import { Column } from "./Column"
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add Dnd to 1JS" },
    { id: 2, title: "Using DND context provider" },
    { id: 3, title: "Using DND sortable utilities" },
    { id: 4, title: "Sorting a list with DND" }
  ])

  const getTaskPos = id => tasks.findIndex(task => task.id == id);

  const handlDragEnd = event => {
    const { active, over } = event;

    if (active.id == over.id) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, newPos);
    })
  }

  // const addTask = title => {
  //   setTasks(tasks => [...tasks, { id: tasks.length + 1, title }])
  // }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })

  )

  return (
    < div className='App' >
      <h1> My Tasks</h1>
      <DndContext sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handlDragEnd}>
        <Column tasks={tasks} />
      </DndContext>
    </div >
  )
}

export default App
