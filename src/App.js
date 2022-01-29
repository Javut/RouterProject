import React from "react";
import MyPage from './MyPage'
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route,   Link,   Routes } from "react-router-dom"


//Routing with react

const App = () => {
  return ( 

    ReactDOM.render(

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/MyPage" element={<div><MyPage/></div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="*" element={<div>404 - not found</div>} /> //Exception for default
            
        </Routes>
      </BrowserRouter>,
          document.getElementById("root")
    
    
      )

   );
}
 

  export default App;
