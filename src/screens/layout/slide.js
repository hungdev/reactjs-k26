import React from 'react'

export default function slide() {
  return (
    <div id="slide" className="carousel slide" data-ride="carousel">

      <ul className="carousel-indicators">
        <li data-target="#slide" data-slide-to="0" className="active"></li>
        <li data-target="#slide" data-slide-to="1"></li>
        <li data-target="#slide" data-slide-to="2"></li>
        <li data-target="#slide" data-slide-to="3"></li>
        <li data-target="#slide" data-slide-to="4"></li>
        <li data-target="#slide" data-slide-to="5"></li>
      </ul>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/slide-1.png" alt="Vietpro Academy" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide-2.png" alt="Vietpro Academy" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide-3.png" alt="Vietpro Academy" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide-4.png" alt="Vietpro Academy" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide-5.png" alt="Vietpro Academy" />
        </div>
        <div className="carousel-item">
          <img src="/images/slide-6.png" alt="Vietpro Academy" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#slide" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#slide" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>

    </div>
  )
}
