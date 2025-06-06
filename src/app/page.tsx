import React from 'react'
import tableHead from '../../public/assets/table_head.jpg';
import bg from '../../public/assets/bg_content_cropped.jpg';
import StatsCalculator from './components/StatsCalculator';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className="min-h-screen">
      <StatsCalculator />
    </div>
  )
}

export default Home;