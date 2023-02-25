import React from 'react'
import './App.css';
import Body from './components/Body';
import Head from './components/head';
import store from './Utils/store'
import { Provider } from 'react-redux';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },{
      path:"watch",
      element:<WatchPage/>
    },

  ],
},
])
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}/>
      
    </div>
    </Provider>
  );
}

export default App;
