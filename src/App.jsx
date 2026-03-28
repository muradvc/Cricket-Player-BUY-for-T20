import { Suspense } from 'react'
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

  return (
    <>

     
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-secondary "></span>
        </div>
      }>
        <NavBar></NavBar>
        <Banner></Banner>
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
        
      </Suspense>
    </>
  )
}

export default App
