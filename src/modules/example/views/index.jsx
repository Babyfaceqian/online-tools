import React, { useState, useEffect } from 'react';
import styles from './index.less';
import * as Fetch from '../apis';
export default () => {
  const [data, setData] = useState('');
  useEffect(() => {
    Fetch.example().then(res => {
      if (res && res.success) {
        setData(res.data);
      }
    })
  }, [])
  return (
    <div className={styles.example}>
      {data}
    </div>
  )
}