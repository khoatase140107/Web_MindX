import axios from "axios";

export function getAllCategoryAPI() {
  return axios.get("http://localhost:8080/categories/");
}

export function addStatementAPI(data) {
  return axios.post("http://localhost:8080/categories/", data);
}

export function deleteStamentAPI(id) {
  return axios.delete(`http://localhost:8080/categories/${id}`);
}
