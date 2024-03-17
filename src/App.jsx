

import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Head from './components/Header/Head'
import Recipes from './components/Recipes/Recipes'
import SimpleText from './components/SimpleText/SimpleText'



function App() {
      const [cooks,setCooks]=useState([]);

      const handelAddToCook=recipe=>{
        const newCooks=[...cooks,recipe];
        setCooks(newCooks);
      }

  return (
    <>

      <div className='mx-0 lg:mx-40 lg:mt-4'>
        <Head></Head>
        <Banner></Banner>
        <SimpleText></SimpleText>

        <div className='flex flex-col lg:flex-row gap-5'>
          <Recipes handelAddToCook={handelAddToCook}></Recipes>
          <Cook cooks={cooks}></Cook>
        </div>

      </div>
    </>
  )
}

export default App
