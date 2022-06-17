import InputForm from "./InputForm";
import React from 'react';
import ToDo from "./ToDo";

const App = () => {

  const [tasks, setTask] = React.useState([])

  const createTask = (dataInput) => {
    debugger
    if (dataInput) {
      let newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: dataInput,
        complete: false,
      }
      setTask([...tasks, newItem])
    }
  }

  const removeTask = id => {
    setTask([
      ...tasks.filter(task => {
        return task.id !== id
      })
    ])
  }

  const handleToggle = (id) => {
    setTask([
      ...tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>Список задач: {tasks.length}</h1>
      </header>
      <InputForm createTask={createTask} />
      {tasks.map(task =>
        <ToDo
          task={task}
          key={task.id}
          toggleTask={handleToggle}
          removeTask={removeTask} />)}
    </div>
  )
}

export default App;



