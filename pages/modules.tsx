import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import RegularLayout from '../displays/RegularLayout';
import ModuleList from '../components/ModuleList';
import { Module } from '../types/Module';
import SearchBar from '../components/SearchBar';

interface QueryOptions {
  query: string;
  type?: string;
}

const modules: Module[] = [
  {
    id: 1,
    name: 'dessert-yaml-js',
    description: 'yaml-js but with WebAssembly',
    author: 'Nyquase',
    core: false,
  },
  {
    id: 2,
    name: 'dessert-showdown',
    description: 'Showdown but with WebAssembly',
    author: 'Reno',
    core: false,
  },
  {
    id: 3,
    name: 'dessert-jsonschema-core',
    description: 'WebAssembly Core for Dessert JsonSchema',
    author: 'Reno',
    core: true,
  },
  {
    id: 4,
    name: 'dessert-filesize',
    description: 'Clone of filesize implemented in Rust for WebAssembly',
    author: 'Nyquase',
    core: false,
  },
  {
    id: 5,
    name: 'dessert-filesize-core',
    description: 'Core for filesize',
    author: 'Nyquase',
    core: true,
  },
];

const ResultPlaceholder = (): JSX.Element => (
  <div style={{ height: '100%', overflow: 'auto' }}>
    <p>
      <span role="img" aria-label="thinking">
        🤔
      </span>{' '}
      Feeling a bit lost?&nbsp;
      <Link href="#">
        <a>Check our quickstart guide.</a>
      </Link>
    </p>
  </div>
);

const search = (
  m: Module[],
  query: string,
  moduleType: string | undefined
): Module[] => {
  return m.filter((mod) => mod.name.includes(query));
};

const Index = (): JSX.Element => {
  const [result, setResult] = useState(modules);

  let moduleDisplay: JSX.Element;
  if (result.length) {
    moduleDisplay = <ModuleList modules={result} />;
  } else {
    moduleDisplay = <p>No module found</p>;
  }

  return (
    <>
      <Head>
        <title>Modules</title>
      </Head>

      <RegularLayout>
        <SearchBar
          onSearch={(s, t?): void => {
            const results = search(modules, s, t);
            console.log(results);
            setResult(results);
            // setQuery({ query: s, type: t });
          }}
        />
        <p>{result.length} matching modules</p>
        {moduleDisplay}
      </RegularLayout>
    </>
  );
};

export default Index;
