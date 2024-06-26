import http from "./httpServices";

export const getOTP = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => {
    return data.data;
  });
};
export const checkOTP = (data) => {
  return http.post("/user/check-otp", data).then(({ data }) => {
    return data.data;
  });
};
export const completeProfile = (data) => {
  return http.post("/user/complete-profile", data).then(({ data }) => {
    return data.data;
  });
};
export const getUser = () => {
  return http.get("/user/profile").then(({ data }) => {
    return data.data;
  });
};
export const logOutApi = () => {
  return http.post("/user/logout").then(({ data }) => {
    return data.data;
  });
};
export const getUsersApi = () => {
  return http.get("/admin/user/list").then(({ data }) => {
    return data.data;
  });
};
export const changeUserStatusApi = ({ userId, data }) => {
  return http.patch(`/admin/user/verify/${userId}`, data).then(({ data }) => {
    return data.data;
  });
};
