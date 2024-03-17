

import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Head from './components/Header/Head'
import Recipes from './components/Recipes/Recipes'



function App() {


  return (
    <>

      <div className='mx-0 lg:mx-40 lg:mt-4'>
        <Head></Head>
        <Banner></Banner>

        <div className='flex flex-col lg:flex-row'>
          <Recipes></Recipes>
          <Cook></Cook>
        </div>

      </div>
    </>
  )
}

export default App
