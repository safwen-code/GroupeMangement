import React, { useState, useContext } from "react";
import ModalKm from "./ModalKm.jsx";
import ContextKm from "../../context/ContextKm.js";

const Addkm = (props) => {
  const [kmForm, setkmForm] = useState({
    kmName: "",
    article: "",
    usersinfo: [],
    sableuse: [],
  });

  const contextContext = useContext(ContextKm);
  const { AddKm } = contextContext;

  const { kmName, article, usersinfo } = kmForm;

  const hundelchange = (e) => {
    setkmForm({ ...kmForm, [e.target.name]: e.target.value });
  };

  const hundelSubmit = (e) => {
    console.log("km info ", kmForm);
    AddKm(kmForm);
  };
  return (
    <div className="container border border-dark mt-3">
      <h6 className="text-center "> Add km Info</h6>
      <form>
        <div className="col d-flex justify-content-center">
          <label className="form-label">Km Name</label>{" "}
          <input
            className="form-controle"
            name="kmName"
            value={kmName}
            onChange={hundelchange}
            type="text"
          />{" "}
          <label className="form-label">Article</label>{" "}
          <input
            className="form-controle"
            type="text"
            name="article"
            value={article}
            onChange={hundelchange}
          />
        </div>
        <div className="border border-primary mt-3 mb-3 ms-2 me-2">
          <h6 className="text-center text-primary mt-4 mb-3">
            Add User to Km{" "}
          </h6>
          <div className="border border-danger mt-3 mb-3 d-flex justify-content-between">
            <div>
              {/* <ModalKm usersinfo={usersinfo} /> */}
            </div>
            <div>
              {usersinfo.map((user) => {
                return <span key={user.id}>{user.name}</span>;
              })}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary d-flex justify-content-center mb-4"
          onClick={hundelSubmit}
        >
          add km
        </button>
      </form>
    </div>
  );
};

export default Addkm;
