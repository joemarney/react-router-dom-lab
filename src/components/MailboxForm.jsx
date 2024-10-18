// ! IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  _id: 0,
  boxholder: "",
  boxsize: "Small",
};

export default function MailboxForm(props) {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a name:</label>
        <input id="boxholder" name="boxholder" placeholder="Boxholder name" onChange={handleChange}></input>
        <label htmlFor="boxsize">Select a box size:</label>
        <select onChange={handleChange} name="boxsize" id="boxsize">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
