import React from 'react'
import './listing.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// Importing images========>
import img from '../../../Assets/image3.png'
import img1 from '../../../Assets/image4.png'
import img2 from '../../../Assets/image5.png'
import img3 from '../../../Assets/image6.png'
import user4 from '../../../Assets/user4.jpg'
import user1 from '../../../Assets/user1.jpg'
import user2 from '../../../Assets/user2.jpg'
import user3 from '../../../Assets/user3.jpg'
import user5 from '../../../Assets/user5.jpg'

const Listing = () => {
  return (
    <div className="lisitingSection">

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img1} alt="Image Name" />
          <h3>Coffee Plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img3} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user5} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Plant sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing