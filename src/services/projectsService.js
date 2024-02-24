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
