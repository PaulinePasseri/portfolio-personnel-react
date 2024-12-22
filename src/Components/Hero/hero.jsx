import './hero.css'

export default function Hero() {
    return(
        <section className='hero-container'>
            <div className='hero-container__txt'>
                <h1>Bonjour,<br/>Je suis Pauline Passeri.</h1>
                <p>Web developer</p>
            </div>
            <div className='animated-moon'></div>
        </section>
        
    )
}