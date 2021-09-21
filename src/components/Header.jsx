import React from 'react';
function Header() {
  
  

  
  return (
    <>
    <div className="menu">
     
      <div className="header bg-primary">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href=" ">Bread</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-link active" aria-current="page" href=" ">Offerings</a>
                <a className="nav-link" href=" ">Other links</a>
                <a className="nav-link " href=" ">Testimonials</a>
                <a className="nav-link" href=" ">Portfolio</a>
                <a className="nav-link" href=" ">Contact Me</a>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  
</div> */}
                 <button className="Trial bg-primary me-md-2  border-radius-lg">Book Trial</button> 

              </div>
            </div>
          </div>
        </nav>


        <h2>Start your day with <br /> the goodness of yoga</h2>

      </div>

    </div>
    </>
  );
  }

export default Header;