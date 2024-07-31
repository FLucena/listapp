"use client";
import { useState } from 'react';

const Home: React.FC = () => {
  const [element, setElement] = useState<string>('');
  const [list, setList] = useState<string[]>([]);
  const [fullList, setFullList] = useState<string>('');
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const addElement = () => {
    if (element) {
      setList([...list, element]);
      setElement('');
    }
  };

  const addFullList = () => {
    if (fullList) {
      setList([...list, ...fullList.split(',').map(item => item.trim())]);
      setFullList('');
    }
  };

  const resetList = () => {
    setList([]);
  };

  const getMax = (): string => {
    const numericList = list.map(Number).filter(item => !isNaN(item));
    return numericList.length > 0 ? Math.max(...numericList).toString() : 'N/A';
  };

  const getMin = (): string => {
    const numericList = list.map(Number).filter(item => !isNaN(item));
    return numericList.length > 0 ? Math.min(...numericList).toString() : 'N/A';
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Max & Min Finder App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={element}
          onChange={(e) => setElement(e.target.value)}
          placeholder="Agregar elemento"
          className="border p-2 mr-2 rounded"
        />
        <button onClick={addElement} className="bg-blue-500 text-white p-2 rounded">Agregar</button>
      </div>
      <div className="mb-4 relative inline-block">
        <input
          type="text"
          value={fullList}
          onChange={(e) => setFullList(e.target.value)}
          placeholder="Lista completa"
          className="border p-2 mr-2 rounded"
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
          onMouseOver={() => setTooltipVisible(true)}
          onMouseOut={() => setTooltipVisible(false)}
        />
        <button onClick={addFullList} className="bg-blue-500 text-white p-2 rounded">Agregar Lista Completa</button>
        {tooltipVisible && (
          <div className="absolute top-full left-0 bg-gray-200 border border-gray-400 text-gray-700 p-2 mt-1 rounded w-full">
            Ingrese la lista completa separada por comas
          </div>
        )}
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Lista:</h2>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          {list.map((item, index) => (
            <div key={index} className="py-1 border-b last:border-none">{item}</div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <button onClick={getMax} className="bg-green-500 text-white p-2 rounded mr-2">Mayor</button>
        <span className="mr-4">{getMax()}</span>
        <button onClick={getMin} className="bg-red-500 text-white p-2 rounded mr-2">Menor</button>
        <span>{getMin()}</span>
      </div>
      <div className="mb-4">
        <button onClick={resetList} className="bg-gray-500 text-white p-2 rounded">Resetear Lista</button>
      </div>
    </div>
  );
};

export default Home;