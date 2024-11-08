import React from 'react'
import './activity.css'

// Imported Icons ===============>
import { BsArrowRightShort } from 'react-icons/bs'

// Imported Images ==============>
import user1 from '../../../Assets/user.jpeg'
import user2 from '../../../Assets/user1.jpg'
import user3 from '../../../Assets/user2.jpg'
import user4 from '../../../Assets/user3.jpg'
import user5 from '../../../Assets/user4.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vihan Kumar Jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vihan Kumar Jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vihan Kumar Jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vihan Kumar Jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vihan Kumar Jain</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity