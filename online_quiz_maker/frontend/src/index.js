import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChooseCreateOrTakeQuiz from './ChooseCreateOrTakeQuiz';
import CreateQuiz from './CreateQuiz';
import TakeQuiz from './TakeQuiz';
import Result from './Result';

const router=createBrowserRouter([
  {path : "/", element:<ChooseCreateOrTakeQuiz/>},
  {path : "/create-quiz", element:<CreateQuiz></CreateQuiz>},
  {path : "/take-quiz", element:<TakeQuiz></TakeQuiz>},
  {path : "/result", element:<Result></Result>},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
