import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Modal from "react-responsive-modal";
import "../../assets/scss/components/ConfirmModal/ConfirmModal.scss";
import { NotificationManager } from "react-notifications";
import APIPost from "../../api/post/APIPost";
import "../../assets/scss/components/CreatePost/CreatePost.scss";
import EditPost from "../Post/EditPost/EditPost";
import APIComment from "../../api/comment/APIComment";
import CommentForm from "../Comment/CommentForm";

const ThreeDotComment = ({ options = [], comment, setComment, setEdit }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [editmodal, setEditmodal] = useState("editModal");
  const handleDelete = async (id) => {
    console.log("comment id", id);
    try {
      const response = await APIComment.delete({ id });
      console.log("response", response);
      if (response?.data?.meta?.statusCode === 200) {
        NotificationManager.success(response?.data?.meta?.message);
      } else {
        NotificationManager.error(response?.data?.meta?.message);
      }
    } catch (error) {
      NotificationManager.error(error?.response?.data?.meta?.message);
      console.error("Error:", error);
    }
    setOpenDelete(false);
    setComment(null);
  };

  const [editData, setEditData] = useState({
    id: null,
    content: null,
  });
  const handleEdit = async (id) => {
    console.log("comment id", id);
    try {
      const response = await APIComment.delete({ id });
      console.log("response", response);
      if (response?.data?.meta?.statusCode === 200) {
        NotificationManager.success(response?.data?.meta?.message);
      } else {
        NotificationManager.error(response?.data?.meta?.message);
      }
    } catch (error) {
      NotificationManager.error(error?.response?.data?.meta?.message);
      console.error("Error:", error);
    }
    setOpenDelete(false);
    setComment(null);
  };

  const handleButtonClick = async () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex" ref={dropdownRef}>
      <button
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200"
        onClick={handleButtonClick}
      >
        <FaEllipsisH size={20} />
      </button>
      {isOpen && (
        <div className="w-[140px] absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map(({ name, key }) => (
              <>
                <li
                  key={key}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    if (key === "edit") {
                      setOpenEdit(true);
                      setEdit(true);
                    } else {
                      setOpenDelete(true);
                    }
                  }}
                >
                  {name}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
      <div>
        <Modal
          classNames={{
            overlay: "",
            modal: "confirmModal",
          }}
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          center
        >
          <div className="flex flex-col items-center justify-center">
            <p className="p-2 text-lg font-semibold mt-[20px]">
              Bạn có chắc muốn xóa bình luận
            </p>
            <div className="flex gap-[60px] mt-[10px]">
              <button
                onClick={() => {
                  handleDelete(comment.id);
                }}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Có
              </button>
              <button
                onClick={() => setOpenDelete(false)}
                className="px-4 py-2 rounded-xl bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Không
              </button>
            </div>
          </div>
        </Modal>
        {/* <Modal
          classNames={{
            overlay: "",
            modal: editmodal,
          }}
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          center
        >
          <div className="flex items-end justify-center h-[400px] w-[550px]">
            <CommentForm
              commentData={comment}
              commentWidth="w-[300px]"
            ></CommentForm>
          </div>
        </Modal> */}
        {/* className="translate-y-[-75%] translate-x-[-100%]" */}
      </div>
    </div>
  );
};

export default ThreeDotComment;
