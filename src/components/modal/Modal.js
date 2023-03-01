import "./Modal.css";
const Modal = ({ name, onClick }) => {
  return (
    <div className="modal">
      <h1>Welcome, {name}</h1>
      <h1>You are now logged in!</h1>
      <button onClick={onClick}>Close</button>
    </div>
  );
};
export default Modal;
