// ! IMPORTS
import { useParams } from "react-router-dom";

export default function MailboxDetails(props) {
  const { mailboxId } = useParams();
  const singleBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const showLetters = props.letters.filter((letter) => letter.mailboxId === props.mailboxes.boxholder);
  console.log(showLetters);
  console.log(props.mailboxes._id);
  return (
    <>
      {/* {props.mailboxes._id ? ( */}
      <div className="mail-box">
        <h1>Mailbox {singleBox._id}</h1>
        <h2>Details</h2>
        <dl>
          <dt>Box Holder:</dt>
          <dd>{singleBox.boxholder}</dd>
          <dt>Box Size:</dt>
          <dd>{singleBox.boxsize}</dd>
        </dl>
        <h2>Letters</h2>
        {/* <p>{showLetters}</p> */}
        {showLetters.map((letter) => {
          return (
            <p key={letter.mailboxId}>
              {letter.message}
              <h3>test</h3>
            </p>
          );
        })}
        {props.letters.map((letter) => {
          return (
            <p key={letter.mailboxId}>
              {letter.message}
              {letter.mailboxId}
              {letter.recipient}
            </p>
          );
        })}
      </div>
      {/* ) : (
        <h1>Mailbox not found!</h1>
      )} */}
    </>
  );
}
