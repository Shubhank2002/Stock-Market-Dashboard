import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import { useContext } from 'react'
import { Data } from '../Context/StockContext'
import StockDetails from './StockDetails'

const Home = () => {
    const {selected,setselected}=useContext(Data)
  return (
    <div className='flex '>
      <Sidebar/>
      {selected?<StockDetails/>:<Main/>}
    </div>
  )
}

export default Home
