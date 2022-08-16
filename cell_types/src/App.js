import './App.css';
import Navbar from './components/Navbar';
import Cell from './components/Cell';
import data from './data';

function App() {

  const cells = data.map(cell => {
    return <Cell 
                key = {cell.id}
                item = {cell}/>
  })

  return (
    <div className="App">
      <Navbar/>
      <section className='cells-list'>
        {cells}
      </section>
    </div>
  );
}

export default App;
