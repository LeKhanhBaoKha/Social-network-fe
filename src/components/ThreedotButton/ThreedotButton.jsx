import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Modal from "react-responsive-modal";
import "../../assets/scss/components/ConfirmModal/ConfirmModal.scss";
import DeletePost from "../../api/post/DeletePost";
const ThreeDotButton = ({ options = [], onOptionSelect, post }) => {
  const [openHidden, setOpenHidden] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  console.log("id post delete", post.id);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  function handleDelete(post_id) {
    setOpenDelete(false);
    DeletePost(post_id);
  }

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
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200"
        onClick={handleButtonClick}
      >
        <FaEllipsisH size={20} />
      </button>
      {isOpen && (
        <div className="w-[120px] absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map(({ name, key }) => (
              <>
                <li
                  key={key}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    if (key === "hidden") {
                      setOpenHidden(true);
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
          open={openHidden}
          onClose={() => setOpenHidden(false)}
          center
        >
          <div className="flex flex-col items-center justify-center">
            <p className="p-2 text-lg font-semibold mt-[20px]">
              Bạn có chắc muốn ẩn bài viết
            </p>
            <div className="flex gap-[60px] mt-[10px]">
              <button
                onClick={() => setOpenHidden(false)}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Có
              </button>
              <button
                onClick={() => setOpenHidden(false)}
                className="px-4 py-2 rounded-xl bg-red-500 text-white text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Không
              </button>
            </div>
          </div>
        </Modal>
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
              Bạn có chắc muốn xóa bài viết
            </p>
            <div className="flex gap-[60px] mt-[10px]">
              <button
                onClick={() => {
                  handleDelete(post.id);
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
      </div>
    </div>
  );
};

export default ThreeDotButton;
