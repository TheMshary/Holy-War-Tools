import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import StatsCalculator from './components/StatsCalculator';

const Home = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-XYZ" />

      <div>
        <StatsCalculator />
      </div>
    </>
  )
}

export default Home;