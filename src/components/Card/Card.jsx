import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState({
    todoActivity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className={styles.cardContainer}>
        <header className={styles.cardHeader}>
          <input
            type="text"
            className={styles.todoInsert}
            placeholder="Create a new todo..."
            onChange={(e) =>
              setValue({ ...value, todoActivity: e.target.value })
            }
          ></input>
          <button
            className={styles.insertBtn}
            type="submit"
            onClick={handleSubmit}
          >
            Add todo
          </button>
        </header>
        <div className={styles.todoListContainer}>
          <ul className={styles.todoList}>
            {data.map((list, key) => (
              <li key={list.id}>{list.todoActivity}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Card;
