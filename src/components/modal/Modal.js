import "./Modal.css";
const Modal = ({ name, onClick }) => {
  /*CODE REVIEW: what am I logging into??? Make sure you are delivering what is asked for. Don't give
  more than the requirements state */
  return (
    <div className="modal">
      <h1>Welcome, {name}</h1>
      <h1>You are now logged in!</h1>
      <button onClick={onClick}>Close</button>
    </div>
  );
};
export default Modal;
