import Footer from "./Footer";
import { useMediaQuery } from 'react-responsive'


const Homepage = () => {
    const mobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <>
            <div className="home">
                <div className="home-text">
                    <p className="vet-title">Veterinaria.</p>
                    <h1 className="vet-h">
                        Cuidando tus mascotas y animales mayores por nuestros veterinarios profesionales.
                    </h1>
                    <p className="vet-p">Veterinaria Barrantes está aquí para traerle amor, salud y felicidad a sus mascotas.
                        Con 45 años de experiencia estamos para darle la mejor experiencia posible.
                    </p>
                    <button class="contactButton"> Contact
                        <div class="iconButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </div>
                    </button>
                    <div className="perks">
                        <h1 className="perk1">10K+<br /><span><p className="perk-p"> clientes</p></span></h1>
                        <h1 className="perk2">55<br /><span><p className="perk-p"> años de servicio</p></span></h1>
                        <h1 className="perk3">1k+<br /><span><p className="perk-p"> Animales salvados</p></span></h1>
                    </div>
                </div>
                <div className="home-image-zone">
                    <img src={require("../images/def.png")} className="home-image"></img>
                </div>
            </div>
            <div className="reviews">
                <div className="reviews-elements">
                    {mobile ? 
                    <img src={require("../images/reviewV.png")} className="review-imgV"></img> :
                    <img src={require("../images/reviews.png")} className="review-img"></img>}
                </div>
            </div>
            <div className="choose">
                <div className="choose-text">
                <h1 className="choose-h">Por qué elegirnos?</h1>
                <p className="choose-p">Somos la mejor veterinaria de Perez Zeledon.
                Ademas de tener mucha experiencia y seguridad en el cuido de mascotas.</p>
                </div>
                <img src={require("../images/choose.png")} className="choose-img"></img>
            </div>
            <Footer />
        </>
    )
}

export default Homepage;

