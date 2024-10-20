// ! IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  mailboxId: 0,
  recipient: "",
  message: "",
};

export default function LetterForm(props) {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addLetter(formData);
    setFormData(initState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select onChange={handleChange} name="mailboxId" id="mailboxId">
          <option></option>
          {props.mailboxes.map((mailbox) => {
            return <option key={mailbox._id}>{mailbox._id}</option>;
          })}
        </select>
        <label htmlFor="recipient">Recipient:</label>
        <input type="text" name="recipient" placeholder="Name" onChange={handleChange}></input>
        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Dear..." onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
