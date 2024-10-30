import { Fragment } from "react";
import Display from "./components/Display";
import Color from "./components/Color";
import Person from "./components/Person";
import ColorObjectArray from "./components/FruitObjectArray";
import FruitObjectArray from "./components/FruitObjectArray";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ActorList from "./components/actor/ActorList";
import ProductList from "./components/product/ProductList";
import ButtonClick from "./components/ButtonClick";
import Counter from "./components/Counter";
import PersonClick from "./components/PersonClick";
import MovieName from "./components/MovieName";
import InputDemo from "./components/InputDemo";
import EcomList from "./components/ecommerce/EcomList";
import EcomAdd from "./components/ecommerce/EcomAdd";
import EcomEdit from "./components/ecommerce/EcomEdit";
import EcomAddValidation from "./components/ecommerce/EcomAddValidation";
import EcomAddValidationRef from "./components/ecommerce/EcomAddValidationRef";
import TodoList from "./components/todo-app/TodoList";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Error from "./components/Error";
import HeaderApp from "./components/HeaderApp";
import HeaderTraining from "./components/training/HeaderTraining";
import VenueList from "./components/training/venue/VenueList";
import VenueAdd from "./components/training/venue/VenueAdd";
import CohortList from "./components/training/cohort/CohortList";
import CohortAdd from "./components/training/cohort/CohortAdd";
function App() {
  return (
    <>
      {/* <h2>This is App Component!</h2> */}
      {/* <Display></Display> */}
      {/* <Color></Color> */}
      {/* <Person></Person> */}
      {/* <FruitObjectArray></FruitObjectArray> */}
      {/* <ActorList></ActorList> */}
      {/* {<ProductList></ProductList>} */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <Counter></Counter> */}
      {/* <PersonClick></PersonClick> */}
      {/* <MovieName></MovieName> */}
      {/* <InputDemo></InputDemo> */}
      {/* <EcomList></EcomList> */}
      {/* <EcomAdd></EcomAdd> */}
      {/* <EcomEdit></EcomEdit> */}
      {/* <InputDemo></InputDemo> */}
      {/* <EcomAddValidation></EcomAddValidation> */}
      {/* <EcomAddValidationRef></EcomAddValidationRef> */}
      {/* <TodoList></TodoList> */}
      {/* <HeaderApp></HeaderApp> */}

      <BrowserRouter>
      <HeaderApp></HeaderApp>
      <Routes>
        <Route path='/' element={<Counter/>}></Route>
        <Route path='/todo' element={ <TodoList></TodoList>}></Route>
        <Route path='/fruit-list' element={ <FruitObjectArray/>}></Route>
        <Route path='/ecom-list' element={ <EcomList/>}></Route>
        <Route path='/actor-list' element={ <ActorList/>}></Route>
        <Route path='/training' element={<HeaderTraining/>}>
          <Route path="venue-list" element={<VenueList/>}></Route>
          <Route path="venue-add" element={<VenueAdd/>}></Route>
          <Route path="cohort-list" element={<CohortList/>}></Route>
          <Route path="cohort-add" element={<CohortAdd/>}></Route>
        </Route>
        {/* This should be the last routing path */}
        <Route path="/*" element={<Error/>}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
