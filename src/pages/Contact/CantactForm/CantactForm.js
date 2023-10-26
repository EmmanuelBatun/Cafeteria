import React from 'react'
import './CantactForm.css'
import emailjs from 'emailjs-com';

import bgImage from '../../../assets/cake.jpg'


const CantactForm = () => {

    function enviarEmail(event){
        event.preventDefault();

        emailjs.sendForm('service_pjph133','template_75ewr8p',event.target,'wg8UpuExYZvMxhtpM')
        .then(res=>{console.log(res);
          event.target.reset()
        })
    }

  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span>touch</span>
                </h1>

                <p>Lorem ipsum dolor sit amet, <span className='special-word'>consectetuer</span> adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>

                <img src={bgImage} alt="get in touch" />

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <span className='special-word'>penatibus</span> et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                <p>Nulla consequat massa quis enim. Donec pede justo, <span className='special-word'>fringilla</span> vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    Mail <span>us</span>
                </h1>

                <form onSubmit={enviarEmail}>
                    <div className='form-field name-email'>

                        <div>
                            <label>Name</label>
                            <input type="text" name="nombre" id="nombre"/>
                              
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>


                    <div className='form-field'>
                        <div>
                            <label>Personas</label>
                            <input type="number" name="cantidad" id="cantidad"/>
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Fecha</label>
                            <textarea type="text" name="fecha" id="fecha" />
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
    
            </div>
        </div>

        {/*<div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAMtXDVWKxVZztZd1QOlpeiXyQfYQpna5E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          
          text="My Marker"
        />
      </GoogleMapReact>
  </div>*/}
    </div>
  )
}

export default CantactForm