import {useEffect, useState} from 'react'
import {Navigation} from './components/navigation'
import {Header} from './components/header'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Footer} from "./components/footer";
import Candidates from "./components/candidates/Candidate";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Candidates data={landingPageData.President} />
            {/*<Candidates data={landingPageData.Features} />*/}
            {/*<Candidates data={landingPageData.Features} />*/}
            {/*<Candidates data={landingPageData.Features} />*/}
            {/*<Candidates data={landingPageData.Features} />*/}

            {/*<Secretary data={landingPageData.Secretary} />*/}
            {/*<Services data={landingPageData.Services} />*/}
            {/*<Gallery />*/}
            {/*<Testimonials data={landingPageData.Testimonials} />*/}
            <Footer />
        </div>
    )
}

export default App
