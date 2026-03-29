import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import AvailablePlayer from './components/homePage/AvailablePlyer/AvailablePlayer'
import NavBar from './components/NavBar/NavBar'

const playerFetch = async () => {
  const res = await fetch('/playerData.json')
  return res.json();
}
function App() {

  const playerPromise = playerFetch();
  const [coins,setCoins]=useState(50000);

  return (
    <>

     
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-secondary "></span>
        </div>
      }>
        <NavBar coins={coins}></NavBar>
        <Banner></Banner>
        <AvailablePlayer playerPromise={playerPromise} setCoins={setCoins} coins={coins}></AvailablePlayer>
        
      </Suspense>
    </>
  )
}

export default App
