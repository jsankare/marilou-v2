import logo from '../assets/marilou-logo-cropped.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Marilou - Pet sitting'
    return  (
        <div className='mrl-banner flex'>
            <img src={logo} alt="Marilou logo" className='mrl-logo'/>
            <ul className='flex'>
                <li><a href="Accueil" onClick={test}>Accueil</a></li>
                <li><a href="Prestations">Prestations</a></li>
                <li><a href="Contact"></a>Contact</li>
            </ul>
        </div>
    )
}

function test() {
    console.log('test')
}

export default Banner