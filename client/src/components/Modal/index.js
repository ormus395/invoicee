import "./modal.css";
import Button from "../Button";

const Modal = (props) => {
  return (
    <div className="modal">
      <h1 className="modal__title">Im the modal</h1>
      <p className="modal__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="modal__footer">
        <Button variant="secondary-light">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};

export default Modal;
