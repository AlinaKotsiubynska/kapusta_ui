import {useState, useEffect} from 'react'
import axios from 'axios'
import {MONTHS} from 'helpers/constants/months.constants'
import styles from './AssetsSummary.module.scss';

export const AssetsSummary = ({isUpdate, tabKey}) => {
  const [reports, setReports] = useState([])
  
  useEffect(()=> {
    (async () => {
      const {data} = await axios.get(`/reports/year-report?sign=${tabKey}`)
      setReports(Object.entries(data.results))
    })()
  }, [])
  useEffect(() => {
    if(!isUpdate) {
      return
    }
    (async () => {
      const {data} = await axios.get(`/reports/year-report?sign=${tabKey}`)
      setReports(Object.entries(data.results))
    })()
  }
  , [isUpdate, tabKey])
  return (
    <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead className={styles.tableHead}>
      <th>Сводка</th>
      </thead>
      <tbody className={ styles.tableBody}>
      {reports.map(([month, value]) => {
        return <tr key={month} className={styles.summaryTr}>
          <td className={styles.summaryTd}><p className={styles.month}>{MONTHS[+month]}</p><p>{value}</p></td>
          </tr>
      })}
      </tbody>

    </table>
    </div>
  );
};
