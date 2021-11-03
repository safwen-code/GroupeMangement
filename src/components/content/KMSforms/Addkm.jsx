import React, { useState } from "react";
import ModalKm from "./ModalKm";
const Addkm = () => {
  const [kmForm, setkmForm] = useState({
    kmName: "",
    article: "",
    usersinfo: [],
    sableuse: [],
  });

  const { kmName, article, usersinfo, sableuse } = kmForm;
  const hundelchange = (e) => {
    setkmForm({ ...kmForm, [e.target.name]: e.target.value });
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
              <ModalKm usersinfo={usersinfo} />
            </div>
            <div>displayuser</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addkm;
