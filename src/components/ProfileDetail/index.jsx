import React, { useState } from "react";
import { CheckIcon, EditIcon } from "assets/svgs";
import { SmileyIcon } from "assets/svgs";
import "./styles/main.scss";

const ProfileDetail = ({ header, value, wordCount, onChange }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="profileDetail">
      <h5>{header}</h5>
      {!editing ? (
        <div className="profileDetail__item">
          <p>{value}</p>
          <EditIcon onClick={() => setEditing(true)} />
        </div>
      ) : (
        <div className="profileDetail__editing">
          <input
            type="text"
            defaultValue={value}
            autoFocus
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="profileDetail__editing__icons">
            {wordCount && <p>{25 - value.length}</p>}
            <SmileyIcon className="profileDetail__editing__icons__icon" />
            <CheckIcon
              className="profileDetail__editing__icons__icon"
              onClick={() => setEditing(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetail;
