import './hero.css'

export default function Hero() {
    return(
        <section className='hero-container'>
            <div className='hero-txt'>
                <h1>Bonjour<br/>Je suis Pauline Passeri</h1>
                <strong className='text-highlight'>Web developer</strong>
            </div>
            <div className='animated-moon'></div>
        </section>
        
    )
}