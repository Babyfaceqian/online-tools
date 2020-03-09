import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Table, Button, Input, Row, Col } from 'antd';
import { getCharLength } from 'utils';
// import * as Fetch from '../apis';
export default () => {
  const [reload, setReload] = useState(true);
  const [headers, setHeaders] = useState('');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const hanleAdjustOnHeader = () => {
    let sum = 0;
    let columns = headers.split(',');

    columns = columns.map(col => {
      let len = getCharLength(col);
      sum += len;
      return {
        title: col,
        dataIndex: col,
        key: col
      }
    });
    let data = {};
    columns.forEach(col => {
      let len = getCharLength(col.title);
      col.width = Math.floor((len / sum) * 1000);
      data[col.dataIndex] = col.width;
    });
    setTimeout(() => {
      setColumns(columns);
      setData([data])
      setReload(false)
    }, 0);
    setTimeout(() => setReload(true), 0);
  }
  const handleHeadersChange = (e) => {
    setHeaders(e.target.value);
  }
  console.log('----------------render----------------', columns)
  return (
    <div className={styles.antdTableAdjustment}>
      <Row className={styles.row}>
        <Col md={10}>
          <Input value={headers} onChange={handleHeadersChange} />
        </Col>
        <Col md={4} offset={2}>
          <Button onClick={hanleAdjustOnHeader} type="primary">按表头长度自适应</Button>
        </Col>
      </Row>
      {reload && <Table dataSource={data} columns={columns} />}
    </div>
  )
}