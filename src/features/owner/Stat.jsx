const colors = {
  primary: "bg-primary-100 text-secondary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
};

const Stat = ({ icon, title, value, color }) => {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] p-4 bg-secondary-0 rounded-lg gap-x-4">
      <div
        className={`row-span-2 rounded-full p-2 aspect-square flex items-center justify-center ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-lg text-secondary-500 self-center">
        {title}
      </h5>
      <p className="font-bold text-3xl text-secondary-900">{value}</p>
    </div>
  );
};

export default Stat;
