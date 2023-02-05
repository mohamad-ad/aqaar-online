import React from 'react'
import { useNavigate } from "react-router-dom";

const Card = ({url, icon, title, body}) => {
    const navigate = useNavigate();
  return (
    <div className="card" onClick={()=>navigate(url)}>
        <div className="card-icon">
          <img src={icon} alt="icon" style={{height:'90%'}}/>
        </div>
        <div className="card-title">{title}</div>
        <div className="card-body">{body}</div>
      </div>
  )
}

export default Card