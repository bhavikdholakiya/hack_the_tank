import { Button } from '@mantine/core';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import './temp.css';
const SubscriptionCardP = ({ plan, price, value, features }) => {
  const { user, updateUser } = useSelector((state) => state.auth);
  return (
    <div className="subscription-card">
      <div className="plan">{plan}</div>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button variant="outlined" color="error" onClick={ async () => {
        console.log("bhavik");
        
        // const loggeduser = await axios.get('http://localhost:5000/user/userfind');
        const newplan = {
          _id:user._id,
          plan: value,
        }
        console.log(newplan);
        const data = await axios.post('http://localhost:5000/user/subscriptionplan', newplan);
        alert("You subscription of " + value + " plan is successful.");
        window.location.href = 'http://localhost:3000/';
      }}>Subscribe Now</Button>
    </div>
  );
};

export default SubscriptionCardP;