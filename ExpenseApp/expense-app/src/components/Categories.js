import React, { useState, useEffect } from "react";
import { getAllCategoryAPI } from "../services/CategoryAPI";
function Categories(props) {
  const [categories, setCategories] = useState(null);
  const { value, onChangeHandler } = props;
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await getAllCategoryAPI();
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const listCategories =
    categories &&
    categories.map((item, index) => {
      return <option key={index}>{item}</option>;
    });

  return (
    <select
      id="category"
      name="category"
      value={value}
      onChange={onChangeHandler}
    >
      {listCategories}
    </select>
  );
}

export default Categories;
