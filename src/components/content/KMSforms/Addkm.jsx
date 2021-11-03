import React, { useState } from "react";

const Addkm = () => {
  const [kmForm, setkmForm] = useState({
    kmName: "",
    article: "",
    users: {},
    sableuse: [],
  });
  return (
    <div className="container border border-dark mt-3">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          km Name
        </label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Article
        </label>
        <input type="text" class="form-control" />
      </div>
      <div className="border border-dark mt-3 d-flex justify-content-center mb-3">
          hello users
      </div>
    </div>
  );
};

export default Addkm;
