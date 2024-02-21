import { useParams } from "react-router-dom";

const Project = () => {
    const params = useParams()
    console.log(typeof(params),params);
  return (
    <div>
      <h1>project </h1>
    </div>
  );
};

export default Project;
