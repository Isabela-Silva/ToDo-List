import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.flex}>
        <main>
          <ListTasks />
        </main>
      </div>
    </div>
  );
}
