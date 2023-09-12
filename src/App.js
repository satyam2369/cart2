
import './App.css';
import Welcome from './Welcome';
import Hi from './hi';
import Image from './components/image';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Hi/>
      <Welcome name="satyam" cost="150"/>
      <Image link="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="100px"/>
      <Image link="https://thumbs.dreamstime.com/b/beautiful-scenery-clouds-sunbeams-blue-orange-colors-55713947.jpg" height="80px"/>
      <Greeting isLoggedIn='true'></Greeting>;
    </div>
  );
}

export default App;
