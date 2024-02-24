const DeleteProject = ({ resourceName, onConfirm, onClose }) => {
  return (
    <div>
      <p className="font-bold text-base mb-4">
        آیا از حذف پروژه {resourceName} اطمینان دارید ؟
      </p>
      <div className="flex justify-center items-center gap-x-2 bg-red-50">
        <button className="btn btn-danger w-1/2" onClick={onConfirm}>
          بله
        </button>
        <button className="btn btn-primary w-1/2" onClick={onClose}>
          خیر
        </button>
      </div>
    </div>
  );
};

export default DeleteProject;
