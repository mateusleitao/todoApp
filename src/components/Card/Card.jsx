import styles from "./Card.module.css";

function Card() {
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
          <ul className={styles.todoList}><li>a</li></ul>
        </div>
      </main>
    </>
  );
}

export default Card;
