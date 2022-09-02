import React from "react";
import './First.css'

import Group from '../../assets/image/Group.svg';
import F from '../../assets/image/F.svg'
import GroupLight from '../../assets/image/GroupLight.svg';

const First = () => {
  return (
    <main className="FBlock">
      <div className="FMain">
        <div className="F1">
          <li>Jersey</li>
          <li>Nike & NBA Collaboration</li>
        </div>
        <div className="First2">
          <p>JERSEY</p>
          <img src={Group} alt="" />
          <p>NBA</p>
        </div>
        <div className="F3">
          <p>whichever <span>nba</span> <span>team</span> your support, get your jersey here today.</p>
        </div>
        <div className="F4">
          <img src={F} alt="" />
        </div>
      </div>
    </main>
  )
}
export default First