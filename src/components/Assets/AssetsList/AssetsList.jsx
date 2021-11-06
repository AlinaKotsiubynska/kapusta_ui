import { useTable } from 'react-table';
import { useMemo } from 'react';
import { ReactComponent as Trash } from 'assets/icons/trash1.svg';

export const AssetsList = () => {
  const deleteEntry = data => {
    const onDel = event => {
      //delete method
      console.log(data);
    };
    return (
      <button type="button" onClick={onDel}>
        <Trash />
      </button>
    );
  };

  const data = [
    {
      id: 1,
      date: 'миллион до н.э',
      descr: 'Бананы',
      category: 'Трансопрт',
      total: 5000,
    },
    {
      id: 2,
      date: '500',
      descr: 'Лампа',
      category: 'аптека',
      total: 100,
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date',
      },
      {
        Header: 'Описание',
        accessor: 'descr',
      },
      {
        Header: 'Категория',
        accessor: 'category',
      },
      {
        Header: 'Сумма',
        accessor: 'total',
      },
      {
        Header: ' ',
        accessor: deleteEntry,
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
