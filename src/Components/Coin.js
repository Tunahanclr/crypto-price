import React from 'react'
import {BsTwitter} from 'react-icons/bs'

export default function Coin({name,icon,price,symbol,twitter}) {
  return (
    <div className='coin'>
 <img src={icon} alt="" />
          <h3>name:{name}</h3>
          <p>price:{price}</p>
          <h4>symbol:{symbol}</h4>
            <a className='twitter' target='blank' href={twitter}><BsTwitter/></a>
    </div>
  )
}
