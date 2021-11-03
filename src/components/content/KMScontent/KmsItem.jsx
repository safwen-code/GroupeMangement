import React from "react";
import Moment from "react-moment";
import SableuseInfo from "./SableuseInfo";
import UserInfo from "./UserInfo";

const KmsItem = ({
  kmInfo: { kmName, article, Date, users, sableuse },
  id,
}) => {
  return (
    <>
      <div className="col  mt-3 ms-2 me-2 mb-3 " key={id}>
        <div className="border border-primary ">
          <span>KmName : {kmName}</span>
          {"  "}
          <span> article : {article}</span>
        </div>
        <div className="d-flex justify-content-end">
          <Moment format="YYYY/MM/DD">{Date}</Moment>
        </div>
        {
            users.map((user)=>(
                <UserInfo user={user} iduser ={user.id}/>
            ))
        }
       <br/>

       <h4>Sableuse </h4>
       {
           sableuse.map((sabl)=>(
               <SableuseInfo sable ={sabl} idsabl = {sabl.id}/>
           ))
       }
      </div>
    </>
  );
};

export default KmsItem;
