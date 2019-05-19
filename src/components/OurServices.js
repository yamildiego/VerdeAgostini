import React from 'react';
import ImageTermotanque from './../assets/images/termotanque.jpg';
import ImagePiscinas from './../assets/images/piscinas.jpg';
import ImageLuminarias from './../assets/images/5285.jpg';
import ImagePaneles from './../assets/images/paneles.jpg';
import './styles/OurServices.css';

const services = [
    {
        id: 1,
        title: "Termotanques",
        subtitle: "Asesoramiento e instalaciones",
        image: ImageTermotanque,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, provident? Eius asperiores in itaque mollitia qui accusantium distinctio a dolores est."
    },
    {
        id: 2,
        title: "Luminarias led",
        subtitle: "Expertos en campos de juego",
        image: ImageLuminarias,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, provident? Eius asperiores in itaque mollitia qui accusantium distinctio a dolores est."
    },
    {
        id: 3,
        title: "Piscinas",
        subtitle: "Climatización solar",
        image: ImagePiscinas,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, provident? Eius asperiores in itaque mollitia qui accusantium distinctio a dolores est."
    },
    {
        id: 4,
        title: "Paneles solares",
        subtitle: "Servicio de instalacion",
        image: ImagePaneles,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, provident? Eius asperiores in itaque mollitia qui accusantium distinctio a dolores est."
    },
]

const handleClick = () => {
    console.error("carayo")
}

const OurServices = () => {
    return (
        <div className="OurServices mt-5 mb-5">
            <h1>Nuestro servicios</h1>
            <div className="row">
                {
                    services.map(item => {
                        return (
                            <div className="Service col-6 col-md-3 mb-3" onClick={handleClick}>
                                <div className="card Service-Card">
                                    <div className="ServiceImage">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="card-body Service-Body">
                                        <div className="card-title Service-Title h6">{item.title}</div>
                                        <button className="btn btn-info btn-sm btn-block mt-2">Ver mas</button>
                                    </div>
                                    <div className="card-footer Service-Footer">
                                        <small className="Service-Subtitle">{item.subtitle}</small>
                                    </div>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </div>
    );
}

export default OurServices;