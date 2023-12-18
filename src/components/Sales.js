import React from 'react'
export default function Sales(props) {
  return (
    <>
    <div className={`container mt-3 text-${props.mode==="light"?'dark':"light"}`}>
      <h1 className="text-center m-3">Lastest Properties For Sale</h1>
      <div className="row mx-1">
        <div className="col-md-4">
            <img src="https://static.wixstatic.com/media/f61af8_74653f054a584cb8ba3c53685c0d86a3.png/v1/fill/w_308,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_74653f054a584cb8ba3c53685c0d86a3.png" className="rounded" alt="..." />
            <h2 className="mt-2">Down Avenue</h2>
            <h6 className="text-muted">Three Bedroom</h6>
            <div className="col-md-10">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia exercitationem magnam, ipsum iure debitis eum quibusdam doloremque ea voluptates? Amet magnam nesciunt unde dignissimos debitis, quisquam eaque at fugit!
            </p>
            <button type="button" className="btn btn-outline-primary mb-2">Read More</button>
            </div>
        </div>
        <div className="col-md-4">
            <img src="https://static.wixstatic.com/media/f61af8_a1d54dc5177f4908a730cc1b5ead408f.png/v1/fill/w_308,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_a1d54dc5177f4908a730cc1b5ead408f.png" className="rounded" alt="..."/>
            <h2 className="mt-2" >Queens Way</h2>
            <h6 className="text-muted">Three Bedroom</h6>
            <div className="col-md-10">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia exercitationem magnam, ipsum iure debitis eum quibusdam doloremque ea voluptates? Amet magnam nesciunt unde dignissimos debitis, quisquam eaque at fugit!
                </p>
                <button type="button" className="btn btn-outline-primary mb-2">Read More</button>
                </div>
        </div>
        <div className="col-md-4">
            <img src="https://static.wixstatic.com/media/f61af8_e130fc3e48434847a39c919ef71527b9.png/v1/fill/w_312,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_e130fc3e48434847a39c919ef71527b9.png" className="rounded" alt="..." />
            <h2 className="mt-2">Randal Close</h2>
            <h6 className="text-muted">Three Bedroom</h6>
            <div className="col-md-10">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia exercitationem magnam, ipsum iure debitis eum quibusdam doloremque ea voluptates? Amet magnam nesciunt unde dignissimos debitis, quisquam eaque at fugit!
                </p>
                <button type="button" className="btn btn-outline-primary mb-2">Read More</button>
                </div>
        </div>
      </div>
    </div>
    <div className={`container m-2 text-${props.mode==="light"?'dark':"light"}`}>
        <div className="row">
          <div className="offset-md-4 col-md-6">
            <h1>Latest Rental Properties</h1>
          </div>
        </div>
    </div>
    <div style={{backgroundColor: "rgb(6, 57, 112)"}}>
        <div className="container">
            <div className="row">
            <div className="offset-1 col-md-3">
                <img className="img-fluid" src="https://static.wixstatic.com/media/f61af8_9efd52f661ab4e1682eb43a77f2125bf.png/v1/fill/w_292,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_9efd52f661ab4e1682eb43a77f2125bf.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-3">
                <h1 className="text-white">Chase Avenue</h1>
                <h6 className="text-warning">Four Bedroom</h6>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellat modi incidunt obcaecati, ipsa dolor illo, assumenda nostrum vitae similique nobis veniam? Exercitationem, mollitia quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et sapiente optio nihil porro veniam quo quis, harum omnis aperiam neque consequuntur volupt.
                </p>
                <h5 className="text-bold text-white">$500/Per Week</h5>
            </div>
        </div>
        </div>
    </div>
    <div style={{backgroundColor: "rgb(21, 76, 121)"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-6 mt-3">
                    <h1 className="text-white">Queen Avenue</h1>
                    <h6 className="text-warning">Three BedRoom</h6>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quos praesentium reiciendis quae autem non veritatis vitae porro molestias quas exercitationem eveniet, neque beatae perferendis, optio ex libero dolores cum. Sapiente voluptatem omnis atque, autem asperiores tempora nisi unde aliquam dolor ut placeat nesciunt?
                    </p>
                    <h5 className="text-bold text-white">$600/Per Week</h5>
                </div>
                <div className="col-md-3 mt-3">
                    <img src="https://static.wixstatic.com/media/f61af8_6eec4eef48154d4f843cc41d2ccda277.png/v1/fill/w_294,h_348,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_6eec4eef48154d4f843cc41d2ccda277.png" className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </div>
    <div className={`container mt-3 text-${props.mode==="light"?'dark':"light"}`}>
        <h1 className="text-center">Realtors You Can Trust</h1>
        <div className="row mt-5">
        <div className="col-md-3 text-center">
            <i className="fa-sharp fa-solid fa-4x fa-file"></i>
            <h5 className={`text-${props.mode==="light"?'muted':"white"} mt-3`}>FREE REGISTRATION</h5>
            <h5 className={`text-${props.mode==="light"?'muted':"white"}`}>NO HIDDEN FEE</h5>
            <p className="text-wrap">
                Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, vero. consectetur adipisicing elit. Adipisci, facilis! Eligendi similique sint, non dolorum aspernatur voluptate repellendus eius pariatur?
            </p>
        </div>
        <div className="col-md-3 offset-md-1 text-center">
            <i className="fa-solid fa-4x fa-house"></i>
            <h5 className={`text-${props.mode==="light"?'muted':"white"} mt-3`}>PROPERTY APPRAISAL</h5>
            <h5 className={`text-${props.mode==="light"?'muted':"white"}`}>FREE OF CHARGE</h5>
            <p className="text-wrap">
                Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, vero. consectetur adipisicing elit. Adipisci, facilis! Eligendi similique sint, non dolorum aspernatur voluptate repellendus eius pariatur?
            </p>
        </div>
        <div className="col-md-3 offset-md-1 text-center">
            <i className="fa-solid fa-4x fa-location-pin"></i>
            <h5 className={`text-${props.mode==="light"?'muted':"white"} mt-3`}>LARGE COVERAGE</h5>
            <h5 className={`text-${props.mode==="light"?'muted':"white"}`}>OFFICE IN 4 LOCATIONS</h5>
            <p className="text-wrap">
                Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, vero. consectetur adipisicing elit. Adipisci, facilis! Eligendi similique sint, non dolorum aspernatur voluptate repellendus eius pariatur?
            </p>
        </div>
    </div>
    </div>
    <div className={`container text-${props.mode==="light"?'dark':"light"}`}>
      <h1 className="text-center">Contact Us</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Enter Name</label>
            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Your Thoughts</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}
