import { IoClose } from "react-icons/io5";

const Modal = ({ children, title, open, onClose }) => {
  return (
    open && (
      <>
        <div
          onClick={onClose}
          className="backdrop-blur-sm bg-secondary-800 w-full h-screen fixed top-0 left-0  bg-opacity-30 z-40"
        ></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 p-4 rounded-lg shadow-md z-50 w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6 font-bold text-base">
            <p className="text-secondary-700">{title}</p>
            <button onClick={onClose}>
              <IoClose className="w-5 h-5 text-secondary-400" />
            </button>
          </div>
          {children}
        </div>
      </>
    )
  );
};

export default Modal;
