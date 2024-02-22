import localDateShort from "../utils/localDateShort";
import toPersianFormat from "../utils/toPersianFormat";
import truncateString from "../utils/truncateString";

const TableRow = ({ data, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{truncateString(data.title, 30)}</td>
      <td>{data.category.title}</td>
      <td>{toPersianFormat(data.budget)}</td>
      <td>{localDateShort(data.deadline)}</td>
      <td>
        <div className="flex gap-2 justify-center flex-wrap max-w-[200px]">
          {data.tags.map((tag) => {
            return (
              <span className="badge badge--secondary" key={tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </td>
      <td>{data.freelancer?.name || "-"}</td>
      <td>
        {data.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td></td>
    </tr>
  );
};
export default TableRow;
