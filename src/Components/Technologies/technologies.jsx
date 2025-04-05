import './technologies.css'

export default function Technology({technology, image, altTitle}) {
    return(
        <div className='technology-container'>
            <img src={image} alt={altTitle} className='logo-img'/>
            <span className='technology-name'>{technology}</span>
        </div>
    )
}