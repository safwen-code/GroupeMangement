import React from "react";

const SableuseInfo = ({ sable: { articleName, usersName, idsabl } }) => {
  return (
    <div className="border border-primary " key={idsabl}>
      <h6 className="ms-2"> article {articleName}</h6>
      {usersName.map((user, id) => {
        return (
          <div key={id}>
            <span>{user.nameUser}</span>
            {"  "}
            <span
              class={`badge ${
                user.formée ? "bg-primary" : "bg-dark"
              }  justify-items-end `}
            >
              {user.formée ? "non formée" : "formée"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SableuseInfo;
