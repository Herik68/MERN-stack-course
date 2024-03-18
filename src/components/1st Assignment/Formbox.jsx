import { useRef } from "react";
import Card from "./Card.jsx";

const Formbox = (props) => {
  const nameInput = useRef();
  const liveInput = useRef();
  const emailInput = useRef();

  const addUser = (event) => {
    event.preventDefault();
    if (
      nameInput.current.value.trim().length === 0 ||
      liveInput.current.value.trim().length === 0 ||
      emailInput.current.value.trim().length === 0
    ) {
      window.confirm("Please fill a valid value");
      return;
    }
    const userInfo = {
      name: nameInput.current.value,
      live: liveInput.current.value,
      email: emailInput.current.value,
    };
    props.getUserInfo(userInfo);
    nameInput.current.value="";
    liveInput.current.value="";
    emailInput.current.value="";
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInput} />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input type="text" id="live" ref={liveInput} />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailInput} />
        </div>
        <button type="Submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default Formbox;
