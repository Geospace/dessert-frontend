import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { Module } from '../types/Module';
import styles from './ModuleList.module.css';

interface Props {
  modules: Module[];
}

const ModuleList = ({ modules }: Props): JSX.Element => {
  const [moduleArray, setModules] = useState(modules);
  const fetchMoreData = (): void => {
    setTimeout(() => {
      const m = moduleArray.concat(modules);
      setModules(m);
    }, 1500);
  };
  return (
    <InfiniteScroll
      dataLength={modules.length}
      next={fetchMoreData}
      hasMore
      loader={<h4>Loading...</h4>}
    >
      {moduleArray.map(
        (module): JSX.Element => (
          <div key={module.id}>
            <div className={styles.box}>
              <p>{module.name}</p>
              <p>{module.description}</p>
              <p>@{module.author}</p>
            </div>
          </div>
        )
      )}
    </InfiniteScroll>
  );
};

export default ModuleList;
