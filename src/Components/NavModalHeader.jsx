import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import vArenaLogo from '../assets/vArenaLogo.png'

const NavModalHeader = ({ closeNavModal }) => {
  return (
    <div className="navModalBackground">
      <div className="navModalContainer">
        <img src={vArenaLogo} className="v-arena-logo" alt="v-arena-logo" />
        <button className='closeNavModal' onClick={() => { closeNavModal(false) }}> X </button>
        <ul className="nav-links-mobile">
          <li className="nav-links" onClick={() => { closeNavModal(false) }}><Link to="/about">About</Link></li>
          <li className="nav-links" onClick={() => { closeNavModal(false) }}><Link to="/how-to-play">How to play</Link></li>
          <li className="nav-links" onClick={() => { closeNavModal(false) }}><Link to="/tournament">Tournament</Link></li>
          <li className="nav-links" onClick={() => { closeNavModal(false) }}><Link to="/leader-board">Leader Board</Link></li>
          <li className="nav-links play-now" onClick={() => { closeNavModal(false) }}><Link to="/">Play Now</Link></li>
        </ul>
      </div>
    </div>
  )
}

NavModalHeader.propTypes = {
  closeNavModal: PropTypes.func.isRequired
};

export default NavModalHeader
