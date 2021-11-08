import React from "react";
import Moment from "react-moment";
import SableuseInfo from "./SableuseInfo";
import UserInfo from "./UserInfo";
const KmsItem = ({
  userinfo: { kmName, article, Date, users, sableuse },
  id,
}) => {
  console.log("users from kmitem", users);
  return (
    <>
      <div className="col  mt-3 ms-2 me-2 mb-3 " key={id}>
        <div className=" ">
          <span>KmName : {kmName}</span>
          {"  "}
          <span> article : {article}</span>
        </div>
        <h5>users</h5>

        {users &&
          users.map((user) => <UserInfo user={user} iduser={user.id} />)}
        <br />

        <h4>Sableuse </h4>
        {sableuse &&
          sableuse.map((sabl) => (
            <SableuseInfo sable={sabl} idsabl={sabl.id} />
          ))}
      </div>
    </>
  );
};

export default KmsItem;
