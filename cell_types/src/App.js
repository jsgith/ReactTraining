import './App.css';
import Navbar from './components/Navbar';
import Cell from './components/Cell';
import data from './data';

function App() {

  const cells = data.map(cell => {
    return <Cell cellName = {cell.cellName}
                 img = {`../../images/${cell.image}`}
                 description = {cell.description}/>
  })

  return (
    <div className="App">
      <Navbar/>
      {cells}
    </div>
  );
}

export default App;
