import React from 'react';
import Link from 'gatsby-link';



const Jumbotorn  = ({image, title, text, id}) => (

  <section className='jumbotorn'
      style={{backgroundImage: `url(${image})`}}
      id={id}>
      <div className='content'>
        {title?<h1 className="display-1 jumbotorn__title">{title}</h1>:undefined}
        {text?<p className="lead font-weight-normal">{text}</p>:undefined}        
        <Link className="btn btn-outline-light" to="#about">
          Learn more
        </Link>
      </div>      
    </section>
)
export default Jumbotorn;

