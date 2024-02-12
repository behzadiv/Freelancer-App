import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import Loading from "../../ui/Loading";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      if (user.status !== 2) navigate("/");
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        return toast("پروفایل شما در حال تایید است", {
          icon: "👏",
        });
      }
      //if (user.role === "OWNER") return navigate("/owner");
      //if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="w-full space-y-8 sm:max-w-sm" onSubmit={handleSubmit}>
      <TextField
        label="نام و نام خانوادگی"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <TextField
        label="ایمیل"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <div className="flex justify-center gap-x-8">
        <RadioInput
          label={"کارفرما"}
          name={"role"}
          value={"OWNER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "OWNER"}
        />
        <RadioInput
          label={"فریلنسر"}
          name={"role"}
          value={"FREELANCER"}
          onChange={(e) => setRole(e.target.value)}
          checked={role === "FREELANCER"}
        />
      </div>
      {isPending ? (
        <Loading />
      ) : (
        <button className="btn btn-primary w-full" type="submit">
          تایید
        </button>
      )}
    </form>
  );
};

export default CompleteProfileForm;
