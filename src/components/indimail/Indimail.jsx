import React from "react";
import { getEmailBody } from "../../redux-store/slice/emailServices";
import {
  setEmail,
  setReadedMail,
  setMails,
  setSelectedEmail,
} from "../../redux-store/slice/emailSlice";
import { useDispatch, useSelector } from "react-redux";
import "./indimail.css";

const Indimail = ({ email, fav }) => {
  const dispatch = useDispatch();
  const { emails, readedMails, favEmails } = useSelector(
    (state) => state.email
  );

  const makeEmailAsRead = (email) => {
    const givenMail = email;
    dispatch(setReadedMail(givenMail));
    const updatedMails = emails.filter((email) => email.id !== givenMail.id);
    dispatch(setMails(updatedMails));
  };

  return (
    <>
      <div
        className={`mail ${fav ? "bg-fav" : ""}`}
        onClick={() => {
          dispatch(setSelectedEmail(email));
          dispatch(getEmailBody(email.id));
          dispatch(setEmail(email));
          if (
            !readedMails.find((remail) => remail.id === email.id) &&
            !favEmails.find((favemail) => favemail.id === email.id)
          ) {
            makeEmailAsRead(email);
          }
        }}
      >
        <span className="from">
          From: {email.from.name} {"<"}
          {email.from.email}
          {">"}
        </span>
        <span className="subject"> Subject: {email.subject}</span>
        <span className="des">{email.short_description}</span>
        <div className={`${fav ? "flex-container" : ""}`}>
          <span className="dt">
            {new Date(email.date).toLocaleDateString()}{" "}
            {new Date(email.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          {fav && <span className="red">Favorite</span>}
        </div>
      </div>
    </>
  );
};

export default Indimail;
