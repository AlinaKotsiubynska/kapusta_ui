// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
// import css from './ReportPage.module.css'
import { ReportHeading } from '../ReportHeading';
import { CategoriesList } from '../CategoriesList';
import { Chart } from '../Chart';

export const ReportPage = () => {
  return (
    <>
      <ReportHeading />
      <CategoriesList />
      <Chart />
    </>
  );
};
