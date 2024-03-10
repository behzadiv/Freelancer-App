import http from "./httpServices";

export const getOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => {
    return data.data;
  });
};
export const removeProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => {
    return data.data;
  });
};
export const getOneProjectApi = (id) => {
  return http.get(`/project/${id}`).then(({ data }) => {
    return data.data;
  });
};
export const addNewProjectApi = (data) => {
  return http.post("/project/add", data).then(({ data }) => {
    return data.data;
  });
};
export const editProjectApi = ({ id, data }) => {
  return http.patch(`/project/update/${id}`, data).then(({ data }) => {
    return data.data;
  });
};
export const toggleProjectStatusApi = ({ id, data }) => {
  return http.patch(`/project/${id}`, data).then(({ data }) => {
    return data.data;
  });
};
export const getProjectsApi = () => {
  return http.get("/project/list").then(({ data }) => {
    return data.data;
  });
};
