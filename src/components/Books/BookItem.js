import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./BookItem.module.css";

const BookItem = ({ data, onShowForm, onConfirmDelete }) => {
  const showFormHandler = () => {
    const book = {
      title: data.title,
      author: data.author,
      year: data.year,
      id: data.id,
    };
    onShowForm(true, book);
  };

  const confirmDeleteHandler = () => {
    onConfirmDelete({
      title: data.title,
      author: data.author,
      id: data.id,
    });
  };

  return (
    <Card className={styles.book}>
      <p>Book Name:<strong className={styles.title}> {data.title}</strong></p>
      <p className={styles.author}>Author: {data.author}</p>
      <p>Year: {data.year}</p>
      <div className={styles["button-group"]}>
        <Button
          title="Change"
          variant="success"
          size="sm"
          onClick={showFormHandler}
        />
        <Button
          title="Delete"
          variant="danger"
          size="sm"
          onClick={confirmDeleteHandler}
        />
      </div>
    </Card>
  );
};

export default BookItem;
