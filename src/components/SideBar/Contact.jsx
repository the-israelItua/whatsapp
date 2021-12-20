import React from "react";
import { Link } from "react-router-dom";
import { formatTime } from "utils";
// import { useUsersContext } from "store/userContext";
import {
  DoubleTickIcon,
  DownArrowIcon,
  PinnedIcon,
  SingleTickIcon,
} from "assets/svgs";

const Contact = ({ contact }) => {
  //   const { setUserAsUnread } = useUsersContext();
  const getLastMessage = () => {
    const messageDates = Object.keys(contact.messages);
    const recentMessageDate = messageDates[messageDates.length - 1];
    const messages = [...contact.messages[recentMessageDate]];
    const lastMessage = messages.pop();
    return lastMessage;
  };

  const lastMessage = getLastMessage(contact);

  return (
    <Link
      className="sidebar-contact"
      to={`/chat/${contact.id}`}
      //   onClick={() => setUserAsUnread(contact.id)}
    >
      <div className="sidebar-contact__avatar-wrapper">
        <img
          src={contact.profile_picture}
          alt={contact.profile_picture}
          className="avatar"
        />
      </div>
      <div className="sidebar-contact__content">
        <div className="sidebar-contact__top-content">
          <h2 className="sidebar-contact__name"> {contact.name} </h2>
          <span className="sidebar-contact__time">
            {formatTime(lastMessage.time)}
          </span>
        </div>
        <div className="sidebar-contact__bottom-content">
          <p className="sidebar-contact__message-wrapper">
            {lastMessage.status &&
              (lastMessage?.status === "sent" ? (
                <SingleTickIcon />
              ) : lastMessage?.status === "read" ? (
                <DoubleTickIcon
                  className={`sidebar-contact__message-icon ${
                    lastMessage?.status === "read"
                      ? "sidebar-contact__message-icon--blue"
                      : ""
                  }`}
                  aria-label={lastMessage?.status}
                />
              ) : (
                ""
              ))}

            <span
              className={`sidebar-contact__message ${
                !!contact.unread ? "sidebar-contact__message--unread" : ""
              }`}
            >
              {contact.typing ? <i> typing...</i> : lastMessage?.content}
            </span>
          </p>
          <div className="sidebar-contact__icons">
            {contact.pinned && <PinnedIcon />}
            {!!contact.unread && (
              <span className="sidebar-contact__unread">{contact.unread}</span>
            )}
            <button aria-label="sidebar-contact__btn">
              <DownArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
