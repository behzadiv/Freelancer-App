import http from "./httpServices";

export const changeProposalStatusApi = ({ id, data }) => {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => {
    return data.data;
  });
};
