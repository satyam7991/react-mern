// import './App.css'


import {Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import MyCard from "./component/MyCard";
import MyCounter from "./component/MyCounter";
import Languages from "./component/Languages";
import NavBar from "./component/NavBar";
import ErrorPage from "./component/ErrorPage";
import About from "./component/About";
import Product from "./component/Product";
import Product3 from "./component/Product3";
import Product2 from "./component/Product2";
import Product1 from "./component/Product1";
import Student from "./component/Student";
import UseState from "./Component2/UseState";
import UseEffect from "./Component2/UseEffect";
import UseReducer from "./Component2/UseReducer";
import UseRefex from "./Component2/UseRefex";
import UseContext from "./Component2/UseContext";


function App() {
  return(
    <>
  <NavBar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/card" element={<MyCard/>}/>
    <Route path="/counter" element={<MyCounter/>}/>
    <Route path="/lang" element={<Languages/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/student" element={<Student/>}/>
    <Route path="/product" element={<Product/>}>
    <Route path="/product1" element={<Product1/>}/>
    <Route path="/product2" element={<Product2/>}/>
    <Route path="/product3" element={<Product3/>}/>  
    </Route>
    <Route path="*" element={<ErrorPage/>}/>
    
    </Routes>
     <UseState/>
     <UseEffect/>
     <UseReducer/> 
     <UseRefex/>
     <UseContext/>
    </>
  );
}

export default App
