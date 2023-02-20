import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Img from './Img';
import Pri from './Pri';
import reportWebVitals from './reportWebVitals';
import Prdtdescription  from './Prdtdescription';
import Prdtlogo from './Prdtlogo';
import Name  from './Name';

function App(){
  return(
    <div>
      <Name/>
   <div className="one">
    
    <div className="two">
      
      <Img/>
    </div>
    <div className="three">
      <Prdtdescription/>
      <Pri/>
    </div>

   </div>
   </div>
    
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <div  className="one">
  
// );

// // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 
export default App;
