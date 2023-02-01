import { useEffect } from 'react';
import { trpc } from './apis/trpc';
import './App.css';
import Hello from './components/Hello/Hello';

function App() {
  useEffect(() => {
    const init = () => {
      return Promise.all([
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
        trpc.query('hello'),
      ]);
    };
    (async () => {
      const hello = await init();
      console.log(hello);
    })();
  }, []);

  return (
    <div className='App'>
      <Hello />
    </div>
  );
}

export default App;
