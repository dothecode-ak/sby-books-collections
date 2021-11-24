import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./AlertDeleteModal.module.css";
const ModalOverlay = ({ title, author, id, onHide, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
    onHide();
  };

  return (
    <Card className={styles.modal}>
      <p>
      Are you sure you want to delete the book with the title <strong>{title}</strong>  <strong>{author}</strong>?
      </p>
      <div className={styles["button-group"]}>
        <Button title="Cancelled" variant="primary" onClick={onHide} />
        <Button
          title="Ok Delete"
          variant="outline-danger"
          onClick={deleteHandler}
        />
      </div>
    </Card>
  );
};

const Backdrop = ({ onHide }) => {
  return <div onClick={onHide} className={styles.backdrop}></div>;
};

const AlertDeleteModal = ({ title, author, id, onHide, onDelete }) => {

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHide={onHide} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onHide={onHide}
          title={title}
          author={author}
          id={id}
          onDelete={onDelete}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AlertDeleteModal;
