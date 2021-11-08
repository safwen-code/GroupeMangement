import React, { useState, useContext, useEffect } from "react";
import ModalKm from "./ModalKm.jsx";
import ContextKm from "../../context/ContextKm.js";
import AddkmSableuse from "./AddkmSableuse.jsx";
import { useHistory } from "react-router-dom";
const AddkmForms = (props) => {
  const [kmForm, setkmForm] = useState({
    kmName: "",
    article: "",
    users: [],
    sableuse: [],
    modalvalue: "users",
  });

  const contextContext = useContext(ContextKm);
  const { AddKm, currentKm, updateKmInfo, clearCurrentKm } = contextContext;
  let history = useHistory();
  useEffect(() => {
    if (currentKm !== null) {
      setkmForm(currentKm);
    } else {
      setkmForm({
        kmName: "",
        article: "",
        users: [],
        sableuse: [],
        modalvalue: "users",
      });
    }
    //eslint-disable-next-time
  }, [contextContext, currentKm]);
  const { kmName, article, users, sableuse, modalvalue } = kmForm;

  const hundelchange = (e) => {
    setkmForm({ ...kmForm, [e.target.name]: e.target.value });
  };

  const hundelSubmit = (e) => {
    console.log("km info ", kmForm);
    if (currentKm === null) {
      AddKm(kmForm);
      history.push("/");
    } else {
      updateKmInfo(kmForm);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrentKm();
    setkmForm({
      kmName: "",
      article: "",
      users: [],
      sableuse: [],
      modalvalue: "users",
    });
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
          {/* user */}
          <div className="border border-danger mt-3 mb-3 d-flex justify-content-between">
            <div>
              <ModalKm
                // users={users}
                modalvalue={modalvalue}
                kmForm={kmForm}
                setkmForm={setkmForm}
              />
            </div>
            <div>
              {users.map((user, index) => {
                return (
                  <span key={index} className="ms-2 me-3">
                    {user.name}
                  </span>
                );
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

export default AddkmForms;
