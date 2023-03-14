import React from "react";
import "./preview.css"
import { Link } from "react-router-dom"

const Preview = () => {
    return (
        <div className="container-fluid">
        <h5><span className="me-2" style={{color:"#00a8e1", marginLeft:"30px"}}><strong>prime</strong></span>Previews for you</h5>
        <p className="preview-sub" style={{marginLeft:"30px"}}>Selected for you based on your viewing</p>
        <div className="container preview-box">
          <div id="previewSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* <!-- slide 1 --> */}
              <div className="carousel-item active preview-1">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>Jurassic World: Dominion</h2>
                  </div>
                  <div className="col-sm-8">
                    <Link href="#">
                        <iframe src="https://www.youtube.com/embed/fb5ELWi-ekk" title="YouTube video player"></iframe>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- slide 2 --> */}
              <div className="carousel-item preview-2">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>Pushpa: The Rise</h2>
                  </div>
                  <div className="col-sm-8">
                    <Link href="#">
                        <iframe src="https://www.youtube.com/embed/Q1NKMPhP8PY" title="YouTube video player"></iframe>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- slide 3 --> */}
              <div className="carousel-item preview-3">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>K.G.F Chapter 2</h2>
                  </div>
                  <div className="col-sm-8">
                    <Link href="#">
                        <iframe src="https://www.youtube.com/embed/Qah9sSIXJqk?start=25" title="YouTube video player"></iframe>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item preview-4">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>No Body</h2>
                  </div>
                  <div className="col-sm-8">
                    <Link href="#">
                        <iframe src="https://www.youtube.com/embed/wZti8QKBWPo" title="YouTube video player"></iframe>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#previewSlider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#previewSlider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>  
    )
}

export default Preview