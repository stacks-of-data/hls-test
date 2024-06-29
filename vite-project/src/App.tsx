import ReactPlayer from 'react-player';
import './App.css'

function App() {
  return (
    <div>
      <ReactPlayer url="https://testbucket820.s3.eu-central-1.amazonaws.com/output.m3u8" controls={true} />
    </div>
  )
}

export default App