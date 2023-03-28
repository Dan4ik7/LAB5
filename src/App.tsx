import React, { useEffect } from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';
import { useRootStore } from '.';
import {Local} from './Layouts/Local'


const carslist = [
  {
    engine:"W16",
    year:2020,
    miles:3000,
    origin:"France",
    color:"Black-orange",
    speed:"490 km/h",
    tires: 21,
    photo:"/Bugatti.jpg"
     
  },
  {
    engine:"W16",
    year:2020,
    miles:3000,
    origin:"France",
    color:"Black-orange",
    speed:"490 km/h",
    tires: 21,
    photo:"/Gwagon.jpeg"
     
  },
  {
    engine:"W16",
    year:2020,
    miles:3000,
    origin:"France",
    color:"Black-orange",
    speed:"490 km/h",
    tires: 21,
    photo:"/Red.jpeg"

     
  },



]


function App() {

   const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])

  return (
      <>
        <LayoutCustom></LayoutCustom>
        <p className='text_1'>Data from interface</p>
        <Card_box  
        Cars={carslist}
        />
        <p className='text_1'>Data from localStorage</p>
        <Local/>
        <FooterNow></FooterNow>
      </>
  );
}

export default App;

