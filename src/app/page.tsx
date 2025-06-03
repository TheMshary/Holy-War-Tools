import React from 'react'
import Script from "next/script";
import StatsCalculator from './components/StatsCalculator';

const Home = () => {
  return (
    <>
      <Script id="next"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-GCSJBYL1H7`}>
      </Script>
      <Script id="next">
        {
          `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GCSJBYL1H7');`
        }
      </Script>

      <div>
        <StatsCalculator />
      </div>
    </>
  )
}

export default Home;