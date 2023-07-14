import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/Weather';
function App() {
  const weather=useWeather();
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button 
      onClick={weather.fetchData}
      value="Fetch"/>
      <Card/>
    </div>
  );
}

export default App;
