import logo from './logo.svg';
import './App.css';
import { LineChart, PieChart, ColumnChart} from 'react-chartkick'
import 'chart.js'
import axios from "axios"


fetch('https://mindicador.cl/api')
.then(response => response.json())
.then(json => console.log(json))
function App() {

  return (
    <div className="indi"><h1>Indicadores Económicos</h1>
    <LineChart data={{"2020-12-03T03:00:00.000Z": 755.34, "2017-05-14": 5}} />,
    <ColumnChart data={[["Sun", 32], ["Mon", 46], ["Tue", 28]]} />
    </div>
  );
}

export default App;
