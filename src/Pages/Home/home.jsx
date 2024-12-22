import Hero from "../../Components/Hero/hero"
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import './home.css'

export default function Home() {
    return (
        <div className="main-container">
            <div className="header-container">
                <Header/>
            </div>
            <Hero/>
            <Footer/>
        </div>
    )
}