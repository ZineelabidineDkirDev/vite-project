import { useEffect } from 'react';
import './App.css'
import Module from './Module';

function App() {
  const htmlContent ="<i>The 2 <sup>sd</sup> Time</i>";
  const showTitle = true;
  const objects =[
    'JsxExpression','Components','Hooks'
]
  const handleLoading=e=>{
    alert("Hello world");
  }


  return (
    <div>
     {showTitle  ? <h1 style={{color:'white'}}>Hello world <mark><code style={{color:'green',padding:'10px'}}>on react</code></mark></h1> : <h1 style={{color:'white'}}>Hello World <code><mark style={{background:'crimson',color:'white'}}>on Angular</mark></code></h1>}
     <h3 onClick={handleLoading} style={{color:'yellowgreen',cursor:'pointer'}} dangerouslySetInnerHTML={{ __html: htmlContent }}></h3>
     
     
     {<Module prog="dotNet" language="EntityFramework"/>}

      <table class="table" style={{color:'white',width:'100%;'}}>

          <tr>
    { objects.map((todo,id)=>(
          
          <td scope="row" key={id} style={{border:'1px solid #FFF',padding:'5px 10px'}}>{todo}</td>
          
      ))}
      </tr>
      </table>
    </div>
  )
}

export default App
