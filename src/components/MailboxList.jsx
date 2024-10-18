// ! IMPORTS
import { Link } from "react-router-dom";

export default function MailboxList(props) {
  return (
    <>
      <h1>Mailbox List</h1>
      {props.mailboxes.map((mailbox) => {
        return (
          <h2 key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox.boxholder}</Link>
          </h2>
        );
      })}
    </>
  );
}
