import React from 'react'
import Layout from '../components/Layout/Layout';
import {Link} from 'react-router-dom';
import Banner from '../Images/heroimage.jpg';
import "../styles/Homestyle.css";

function Home() {
  return (
    <Layout>
      <div className='Home' style={{backgroundImage: `url(${Banner})`, backgroundSize: 'cover'}}>
        <div className='headerContainer'>
<h1>Marhaba  Resturant</h1>
<p>Best food in pakistan</p>
<Link to="/menu">
<button>
  Order Now
  </button>
</Link>
        </div>
      </div>

    </Layout>
  )
}

export default Home
