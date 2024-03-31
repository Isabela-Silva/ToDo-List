import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./ListTasks.module.css";
import { Tasks } from "./Tasks";

export function ListTasks() {
  const [tasks, setTasks] = useState([
    { id: Math.random(), name: "estudar", done: false },
  ]);
  const [newTasks, setNewTasks] = useState("");

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      name: newTasks,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setNewTasks("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTasks(event.target.value);
  }
  function deleteTask(taskId: number) {
    const tasksWithoutDeleted = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksWithoutDeleted);
  }

  function checked(id: number) {
    const changeDone = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(changeDone);
  }

  const createdTasksCount = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.done).length;
  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateTask} className={styles.searchBar}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTasks}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.status}>
        <span className={styles.createTask}>
          Tarefas criadas: {createdTasksCount}
        </span>
        <span className={styles.completeTask}>
          Concluídas: {completedTasksCount}
        </span>
      </div>

      {tasks.map((task) => {
        return (
          <Tasks
            key={task.id}
            task={task}
            checked={checked}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}
