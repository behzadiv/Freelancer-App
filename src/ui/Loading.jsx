import { ThreeDots } from "react-loader-spinner";

const Loading = ({ height = "30", width = "40" }) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={3}
      visible={true}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{ justifyContent: "center" }}
    />
  );
};

export default Loading;
