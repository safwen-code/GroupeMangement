import React from "react";

const UserInfo = ({ user, iduser }) => {
  const { name, formée, role } = user;
  return (
    <div className="  mt-3" key={iduser}>
      <div className=" ms-1 mt-1 ms-1 me-1 d-flex">
        <span>{name}</span>{" "}
        <span
          class={`badge ${
            formée ? "bg-primary" : "bg-dark"
          }  justify-items-end `}
        >
          {formée ? "non formée" : "formée"}
        </span>
      </div>

      <h6 className="d-flex justify-content-center">role :{role}</h6>
    </div>
  );
};

export default UserInfo;
