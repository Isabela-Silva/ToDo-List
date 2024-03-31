import { Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Tasks.module.css";

interface Task {
  id: number;
  name: string;
  done: boolean;
}
interface TasksProps {
  task: Task;
  checked: (id: number) => void;
  deleteTask: (taskId: number) => void;
}
export function Tasks({ task, deleteTask, checked }: TasksProps) {
  function handleDelete() {
    deleteTask(task.id);
  }
  function handleCheckboxChange() {
    checked(task.id);
  }

  const idInput = uuidv4();
  return (
    <div className={styles.container}>
      <div className={styles.boxTask}>
        <div className={styles.listTask}>
          <div className={styles.checkAndText}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={task.done}
              id={idInput}
            />

            <label htmlFor={idInput}>{task.name}</label>
          </div>
          <button onClick={handleDelete}>
            <Trash size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
