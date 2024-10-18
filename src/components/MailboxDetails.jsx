// ! IMPORTS
import { useParams } from "react-router-dom";

export default function MailboxDetails(props) {
  const { mailboxId } = useParams();
  const singleBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  return (
    <>
      {props.mailboxes._id ? (
        <div className="mail-box">
          <h1>Mailbox {singleBox._id}</h1>
          <h2>Details</h2>
          <dl>
            <dt>Box Holder:</dt>
            <dd>{singleBox.boxholder}</dd>
            <dt>Box Size:</dt>
            <dd>{singleBox.boxsize}</dd>
          </dl>
        </div>
      ) : (
        <h1>Mailbox not found!</h1>
      )}
    </>
  );
}
