import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmation = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
  const { email, name } = deleteConfirm;
  // console.log("from dele",deleteConfirm);

  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${name} Doctor deleted`, {
            toastId: "doctor-delete",
          });
          setDeleteConfirm({
            isShow: false,
          });
          refetch();
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="delete-confirm" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you want to delete?</h3>
          <p className="py-4">
            Once you deleted can not recover the info about doctor
          </p>
          <div className="modal-action">
            <label htmlFor="" className="btn btn-error" onClick={handleDelete}>
              Sure
            </label>
            <label htmlFor="delete-confirm" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmation;
