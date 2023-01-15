import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import {
  setFavMails,
  setReadedMail,
  setMails,
} from "../../redux-store/slice/emailSlice";
import "./Indimailbody.css";
import Avatar from "../avatar/Avatar";

export default function Indimailbody() {
  const { emailBody, email, readedMails, favEmails, emails } = useSelector(
    (state) => state.email
  );
  const dispatch = useDispatch();
  const date = new Date(email?.date)?.toLocaleDateString();
  const time = new Date(email?.date)?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="container">
        <div className="flex-indi">
          <Avatar email={email} />
          <h3>{email.subject}</h3>
        </div>
        <div className="dtfav">
          <p>
            {date} {time}
          </p>
          <span
            className="fav1"
            onClick={() => {
              const filteredReadedMails = readedMails.filter(
                (mail) => mail.id !== email.id
              );
              const filteredMails = emails.filter(
                (mail) => mail.id !== email.id
              );
              dispatch(setReadedMail(filteredReadedMails));
              dispatch(setMails(filteredMails));
              if (!favEmails.find((favemail) => favemail.id === email.id)) {
                dispatch(setFavMails(email));
              }
            }}
          >
            Mark as Favorite
          </span>
        </div>
        {emailBody?.body && parse(emailBody?.body)}
      </div>
    </>
  );
}
