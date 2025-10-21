import reactLogo from './assets/react.svg'
import bg from '/bg.jpg'
import './App.css'

function App() {

  return (
    <div style={{position: 'relative'}}>
      <h2 style={{position: 'absolute', top: '55%', left: '50px'}}>Cao Đức Hiep</h2>
      <img src={bg} alt="meow meow" width="500" height="600" />
    </div>
  )
}

export default App
