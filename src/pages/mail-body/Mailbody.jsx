import React, { useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Indimail from "../../components/indimail/Indimail";
import Indimailbody from "../../components/indimailbody/Indimailbody";
import { getEmails } from "../../redux-store/slice/emailServices";
import { useDispatch, useSelector } from "react-redux";
import "./mailbody.css";
import { useLocation } from "react-router-dom";

const Mailbody = () => {
  const { emails, readedMails, selectedEmail, favEmails } = useSelector(
    (state) => state.email
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const mails =
    pathname === "/unread-mails" || pathname === "/"
      ? emails
      : pathname === "/readed-mails"
      ? readedMails
      : [];

  useEffect(() => {
    dispatch(getEmails());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <div className={`${selectedEmail ? "grid-container" : ""}`}>
        <div className={`mailbody`}>
          {favEmails?.map((email) => (
            <Indimail key={email.id} email={email} fav={true} />
          ))}
          {mails?.map((email) => (
            <Indimail key={email.id} email={email} />
          ))}
        </div>
        {selectedEmail && <Indimailbody />}
      </div>
    </>
  );
};

export default Mailbody;
