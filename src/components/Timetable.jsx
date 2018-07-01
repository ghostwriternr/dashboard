import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Timetable = (props) => {
  const { ttData } = props;

  const tableData = [];
  let i = 0;
  for (i = 1; i < ttData.length; i += 1) {
    tableData.push({
      day: ttData[i][0],
      p1: ttData[i][1],
      p2: ttData[i][2],
      p3: ttData[i][3],
      p4: ttData[i][4],
      p5: ttData[i][5],
      p6: ttData[i][6],
      p7: ttData[i][7],
      p8: ttData[i][8],
      p9: ttData[i][9],
    });
  }

  const columns = [{
    Header: 'Day',
    accessor: 'day',
  }, {
    Header: '8AM - 9AM',
    accessor: 'p1',
  }, {
    Header: '9AM - 10AM',
    accessor: 'p2',
  }, {
    Header: '10AM - 11AM',
    accessor: 'p3',
  }, {
    Header: '11AM - 12PM',
    accessor: 'p4',
  }, {
    Header: '12PM - 1AM',
    accessor: 'p5',
  }, {
    Header: '2PM - 3PM',
    accessor: 'p6',
  }, {
    Header: '3PM - 4PM',
    accessor: 'p7',
  }, {
    Header: '4PM - 5PM',
    accessor: 'p8',
  }, {
    Header: '5PM - 6PM',
    accessor: 'p9',
  }];

  return (
    <div className="nlp-data">
      <ReactTable
        data={tableData}
        columns={columns}
        showPagination={false}
        showPaginationBottom={false}
        showPageSizeOptions={false}
        minRows={0}
        showPageJump={false}
        className="ttTable"
      />
    </div>
  );
};

export default Timetable;
