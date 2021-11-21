import { useTable } from 'react-table';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ReactComponent as Trash } from 'assets/icons/trash1.svg';
import styles from './AssetsList.module.scss';
import {
  getReportsByMouthAndYear,
  deleteTransaction,
} from 'components/Assets/Api/Api';
import { Context } from 'components/Context';
import { format } from 'date-fns';
import { getNormalizeData } from 'utils';

export const AssetsList = ({ tabKey, isUpdate, setUpdate }) => {
  const { reportContext } = useContext(Context);

  const [, mounth, year] = format(reportContext.viewDate, 'dd/MM/yyyy').split(
    '/',
  );

  const init = [
    {
      id: null,
      date: '',
      descr: '',
      category: '',
      value: null,
    },
  ];

  const [data, setData] = useState(init);

  useEffect(() => {
    (async () => {
      const { data } = await getReportsByMouthAndYear({
        mounth,
        year,
        sign: tabKey,
      });
      const normData = getNormalizeData(data.results);
      setData(normData);
    })();
  }, [tabKey, mounth, year, isUpdate]);

  const deleteEntry = useCallback(
    data => {
      const onDel = async event => {
        await deleteTransaction(data.id);
        setUpdate(pr => !pr);
      };
      return (
        <button type="button" onClick={onDel} className={styles.button}>
          <Trash />
        </button>
      );
    },
    [setUpdate],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date',
      },
      {
        Header: 'Описание',
        accessor: 'description',
      },
      {
        Header: 'Категория',
        accessor: 'category',
      },
      {
        Header: 'Сумма',
        accessor: 'value',
      },
      {
        Header: ' ',
        accessor: deleteEntry,
      },
    ],
    [deleteEntry],
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      {data && (
        <div className={styles.tableWrapper}>
          <table {...getTableProps()} className={styles.table}>
            <thead className={styles.header}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
          <div className={styles.bodyWrapper}>
            <table {...getTableProps()} className={styles.tableBody}>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
