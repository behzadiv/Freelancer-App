import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import RadioInputGroup from "../../ui/RadioInputGroup";

const CompleteProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleCmpleteProfile = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
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
    <form
      className="w-full space-y-8 container xl:max-w-screen-xl"
      onSubmit={handleSubmit(handleCmpleteProfile)}
    >
      <TextField
        label="نام و نام خانوادگی"
        name="name"
        register={register}
        validationSchema={{ required: "نام و نام خانوادگی ضروری است" }}
        errors={errors}
      />
      <TextField
        label="ایمیل"
        name="email"
        register={register}
        validationSchema={{
          required: "ایمیل ضروری است",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل نامعتبر است",
          },
        }}
        errors={errors}
      />
      <RadioInputGroup
        config={{
          name: "role",
          options: [
            { label: "فریلنسر", value: "FREELANCER", id: "FREELANCER" },
            { label: "کارفرما", value: "OWNER", id: "OWNER" },
          ],
          validationSchema: { required: "انتخاب نقش ضروری است" },
        }}
        watch={watch}
        errors={errors}
        register={register}
      />
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
