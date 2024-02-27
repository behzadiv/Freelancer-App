import http from "./httpServices";

export const getAllCategoriesApi = () => {
  return http.get("/category/list").then(({ data }) => {
    return data.data;
  });
};
