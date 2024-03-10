import http from "./httpServices";

export const changeProposalStatusApi = ({ id, data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => {
    return data.data;
  });
};
export const getProposalListApi = () => {
  return http.get("/proposal/list").then(({ data }) => {
    return data.data;
  });
};
export const addProposalApi = (data) => {
  return http.post("/proposal/add", data).then(({ data }) => {
    return data.data;
  });
};
