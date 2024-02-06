import http from "./httpServices";

export const getOTP = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => {
    return data.data;
  });
};
export const checkOTP = (data) => {
  return http.post("/user/check-otp", data);
};
