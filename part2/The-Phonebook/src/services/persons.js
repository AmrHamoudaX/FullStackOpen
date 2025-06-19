import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newPersonObject) => {
  return axios.post(baseUrl, newPersonObject);
};

const update = (id, newPersonObject) => {
  return axios.put(`${baseUrl}/${id}`, newPersonObject);
};

export default {
  getAll,
  create,
  update,
};
