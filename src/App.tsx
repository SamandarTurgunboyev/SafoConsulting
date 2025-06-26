import './App.css'
import Left from './Left'
import Right from './Right'

function App() {
 
  return (
    <div style={{width:"99.6vw",height:"98.6vh",margin:"0",padding:"0",display:'grid', gridTemplateColumns:"1fr 2fr",gridTemplateRows:"1fr"}}>
      <div className='left'>
       
        <Left>

        </Left>
       
      </div>
      <div className='right'>

        <Right>
        </Right>
      </div>
    </div>
)}

export default App
