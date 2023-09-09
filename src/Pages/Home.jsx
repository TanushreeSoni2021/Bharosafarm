import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import "../App.css";
import data from "../Data/Data"
import 'tippy.js/dist/tippy.css'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import Linked from "../Assets/linkedin.png";
import greenmail from "../Assets/mail.png";
import Formfill from '../components/Formfill';
import Slider from '../components/Slider';
import We from '../components/We';
import T from "../hooks/Translate";

const mystyle = {

  textAlign: 'center',
  color: '#598216',
  fontSize: '1.1em'
}

function Home() {

  return (
    <>

      <Slider />
      {/* 2 */}
      <section>

        <div className='container mt-5'>
          <div className='row d-flex justify-content-center '>
            <h2 className=' d-flex justify-content-center head'>{T(data.about.heading)}
            </h2>
          </div>
          <div className='row para d-flex justify-content-center'><p>{T(data.about.para)}</p></div>
          <div className="row text-center text-md-left">
            {
              data.aboutimg.map((items, index) => {
                return (
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto " key={index}>
                    <div className="text-uppercase mb-4 font-weight-bold">
                      <Tooltip theme='light' arrow='true' arrowSize='big'
                        html={(
                          <div style={mystyle} >
                            {T(items.title)}
                          </div>
                        )}
                        position="bottom" >
                        <img src={items.image} alt='' />
                        <p className='p-2' style={{ fontWeight: 'bold', fontSize: '1em' }} >{T(items.text)}</p>
                      </Tooltip>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </section>

      {/* 3 */}
      <section>
        <div className='container-fluid d-flex mt-5 justify-content-center align-items-center bg-img'>
          <div className="styling">
            <img alt='' className='row d-flex' src={data.aboutproduct.logo} height={"80px"} width={"80px"} style={{ 'margin': '0 auto' }} /><br />

            <div className='row d-flex justify-content-center'>
              <h2 className=' d-flex justify-content-center head' style={{ color: "#FFFFFF" }}>{T(data.aboutproduct.heading)}</h2>
            </div>
            <div className='row d-flex justify-content-center para paragraph-Align'>
              <p style={{ color: "#FFFFFF" }}>{T(data.aboutproduct.content)}</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4 */}
      <div id='bharosapartner' className='mb-5'></div>

      <section className=" pt-5 pb-4">
        <div>
          <h2 className=' d-flex justify-content-center head'>{T(data.heading.head)}</h2>
        </div>
        <div className="container text-center text-md-left contain-align">

          <div className="row text-center text-md-left">
            {data.partners.map((item, index) => {
              return (
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto img-fluid" key={index}>

                  <img src={item.image} alt='' className="img-fluid" />
                  <h5 className="font-weight-bold">{T(item.title)}</h5>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>

      {/* 5 */}
      <div id='ourteam' className='mb-5'></div>

      <section className="text-white pt-5 pb-4" style={{ "backgroundColor": "#F9F8E7" }}>
        <div>
          <h2 className=' d-flex justify-content-center head'>{T(data.heading.head2)}</h2>
        </div>
        <div className="container text-center text-md-left contain-align">
          <div className="row text-center text-md-left ">
            {data.team.map((title, index) => {
              return (
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 mb-5" key={index}>
                  <img className='img-fluid' src={title.image} alt='' />
                  <h5 className="head font-weight-bold">{T(title.name)}</h5>
                  <h5 className=" font-weight-bold text-dark">{T(title.position)}</h5>
                  <a href={title.linkedin} target="_blank" rel="noreferrer"> <img className='img-fluid' src={Linked} alt='' /></a>
                  <a href={title.mail} target="_blank" rel="noreferrer">
                    <img className='img-fluid' src={greenmail} alt='' />
                  </a>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
      {/* 6 */}
      <section>
        <div className='container d-flex justify-content-center align-items-center mt-5'>
          <div className="styling pt-5" >
            <img className='row d-flex' src={data.position.icon} style={{ 'margin': '0 auto' }} alt='' /><br />
            <div className='row d-flex '>
              <h2 className=' d-flex justify-content-center head'>{T(data.position.heading)}</h2>
            </div>
            <div className='row d-flex justify-content-center para paragraph-Align'>
              <p>{T(data.position.content)}</p>
            </div>
            <div className='row d-flex justify-content-center contain-align '>

              <We />
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3' id='contact'>
        <Formfill />
      </section>

    </>
  );
}

export default Home;