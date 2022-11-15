import React from 'react'
import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import List from './pages/List/List';
import Home from './pages/Home/Home';
import UpdateFlight from './components/UpdateFlight/UpdateFlight';
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              theme: {
                primary: '#4aee88',
              },
            },
          }}
        />
      </div>
    <BrowserRouter>
   
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/flights' element={<List/>}/>
       <Route path='/edit/:id' element={<UpdateFlight/>}/>
       
   </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
