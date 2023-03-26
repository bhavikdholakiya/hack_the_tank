import React from 'react'
import SubscriptionCardP from '../components/SubscriptionCardP.js'

const SubscriptionPlan = () => {
  return (
    <div style={{display:"flex", justifyContent:'space-around', lineHeight:'3.55',fontSize:'25px'}}>
    <SubscriptionCardP
        plan="Basic Plan"
        price="₹6000/month"
        value="basic"
        features={['Free Delivery', '200 /day', 'Menu - Variations']}
      />
      <SubscriptionCardP
        plan="Premium Plan"
        price="₹5400/month"
        value="premium"
        features={['Free Delivery', '180 /day', 'Menu - Variations']}
      />
      {/* bhavik */}
      </div>
  )
}
export default SubscriptionPlan