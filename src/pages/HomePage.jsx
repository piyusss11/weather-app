import React from 'react'
import NavBar from '../components/NavBar'
import useWeather from "../hooks/useWeather"
import MainContainer from '../components/MainContainer'

const HomePage = () => {
  useWeather()
  return (
    <div>
      <NavBar/>
      <MainContainer/>
    </div>
  )
}

export default HomePage
