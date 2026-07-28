import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className={styles.cardContainer}>
        <header className={styles.cardHeader}>
          <input
            type="text"
            className={styles.todoInsert}
            placeholder="Create a new todo..."
          ></input>
          <button className={styles.insertBtn}>Add todo</button>
        </header>
        <div className={styles.todoListContainer}>
          <ul className={styles.todoList}>
            {data.map((api, key) => (
              <li key={api.id}>{api.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Card;
