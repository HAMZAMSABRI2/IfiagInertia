import React from 'react';

const Bloc = () => {
  return (
    <>
      <div className="container mt-5">
        {/* First Row */}
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <button className="btn btn-primary rounded-pill w-25" style={{backgroundColor:'#E8EFFF' , color:'#2447F9' , border:'none' , fontWeight:'bold'}}>Forum </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 text-center">
            <span style={{color:'#78C08F', fontSize:'18px', fontWeight:600 , marginTop:"14px"}}>Discussion</span>
            <p style={{color:"#34364A" , fontWeight:700, fontSize:'24px' , marginTop:"14px"}}>Full-Stack Web Developer: Toko Online</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloc;
