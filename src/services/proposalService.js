import http from "./httpServices";

export const changeProposalStatusApi = ({ proposalId, ...rest }) => {
  return http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => {
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
