import React, { useContext } from "react";
import Moment from "react-moment";
import SableuseInfo from "./SableuseInfo";
import UserInfo from "./UserInfo";
import ContextKm from "../../context/ContextKm";
import { useHistory } from "react-router-dom";

const KmsItem = ({ kminfo, id }) => {
  let history = useHistory();
  const { kmName, article, Date, users, sableuse } = kminfo;
  const contextKm = useContext(ContextKm);
  console.log();
  const { setCurrentKm, clearCurrentKm } = contextKm;

  const HundelDelete = () => {
    console.log("hundel delete");
  };

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

        <div className=" col ms-2 mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setCurrentKm(kminfo);
              history.push("/addkm");
            }}
          >
            Edite
          </button>
          <button className="ms-3 btn btn-danger" onClick={HundelDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default KmsItem;
