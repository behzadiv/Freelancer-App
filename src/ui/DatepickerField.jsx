import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

const DatepickerField = ({ label, date, setDate }) => {
  return (
    <div>
      <label htmlFor="deadline" className="block mb-2 text-secondary-700">
        {label}
      </label>
      <DatePicker
        value={date}
        onChange={setDate}
        name="deadline"
        format="YYYY/MM/DD"
        containerClassName="w-full"
        inputClass="textField_input"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </div>
  );
};

export default DatepickerField;
