import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import css from './ReportPage.module.css'

export const CategoriesItem = ({ category }) => {
  return (
    <>
      <p>{category.value}</p>
      <img src={category.url} alt={category.name} />
      <p>{category.name}</p>
    </>
  );
};
