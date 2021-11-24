import { useState, useEffect } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./FormBook.module.css";

const FormBook = ({ bookData, onShowForm, onSaveBook }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [bookID, setBookID] = useState(null);

  useEffect(() => {
    if (bookData) {
      setEnteredTitle(bookData.title);
      setEnteredAuthor(bookData.author);
      setEnteredYear(bookData.year);
      setBookID(bookData.id);
    }
  }, [bookData]);

  const cancelHandler = () => {
    onShowForm(false);
    resetFormHandler();
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
  };

  const saveBookHandler = (event) => {
    event.preventDefault();
    onSaveBook(enteredTitle, enteredAuthor, enteredYear, bookID);
    onShowForm(false);
    resetFormHandler();
  };

  const resetFormHandler = () => {
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredYear("");
  };

  return (
    <Card className={styles.form}>
      <h3 className={styles.title}>
        {bookData ? "Edit Book" : "Add New Book"}
      </h3>
      <form autoComplete="off" onSubmit={saveBookHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            onChange={authorChangeHandler}
            value={enteredAuthor}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            onChange={yearChangeHandler}
            value={enteredYear}
          />
        </div>
        <div className={styles["button-group"]}>
          <Button
            title={bookData ? "Change Books" : "Enter a Book"}
            variant="primary"
            type="submit"
          />
          <Button title="Cancel" variant="danger" onClick={cancelHandler} />
        </div>
      </form>
    </Card>
  );
};

export default FormBook;
