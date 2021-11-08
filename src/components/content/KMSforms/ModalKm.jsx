import React, { useState } from "react";

const ModalKm = ({ kmForm, setkmForm, modalvalue }) => {
  // console.log("from modal", usersinfo);
  // console.log("km form from modal km", kmForm);
  // console.log("setkmfor ", setkmForm);

  console.log(modalvalue);
  const [UsersForm, setUsersForm] = useState({
    name: "",
    formée: "",
    role: "",
  });

  const [showModal, setshowModal] = useState(true);

  const hundelChange = (e) => {
    setUsersForm({ ...UsersForm, [e.target.name]: e.target.value });
  };

  const { name, formée, role } = UsersForm;

  const hundelSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    const test = kmForm.users.push(UsersForm);
    console.log("test", test);
    // usersinfo.push({ ...UsersForm });
    setkmForm({ ...kmForm, test });
    console.log(kmForm);
    setshowModal(false);
    setUsersForm({
      name: "",
      formée: "",
      role: "",
    });
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setshowModal(true)}
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {showModal && (
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label className="form-label">name</label>
                <input
                  className="form-controle"
                  type="text"
                  name="name"
                  value={name}
                  onChange={hundelChange}
                />
                <label className="form-label">fromée</label>
                <input
                  className="form-controle"
                  type="text"
                  name="formée"
                  value={formée}
                  onChange={hundelChange}
                />
                <label className="form-label">role</label>
                <input
                  className="form-controle"
                  type="text"
                  name="role"
                  value={role}
                  onChange={hundelChange}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={hundelSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalKm;
