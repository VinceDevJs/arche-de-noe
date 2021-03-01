import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import arrowUp from '../assets/icons/pushUp.png'
import { breakpoints } from '../utils/styles'

const PushUp = () => {
  const [showPushUp, setShowPushUp] = useState(false)

  const pushUp = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop
    setShowPushUp(scrollPosition >= 500)
  }

  useEffect(() => {
    window.addEventListener('scroll', pushUp)
    return () => window.addEventListener('scroll', pushUp)
  }, [])

  const scrollMeTo = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <ArrowBox disable={showPushUp} onClick={scrollMeTo}>
      <Arrow src={arrowUp} />
    </ArrowBox>
  )
}

export default PushUp

export const ArrowBox = styled.div`
  position: fixed;
  right: 2.5em;
  bottom: 5.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  border: 7px solid #eed7b8;
  border-radius: 50px;
  cursor: pointer;
  z-index: 100;
  transform: ${props => (props.disable ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.3s;

  @media (max-width: ${breakpoints.s}px) {
    right: 1.5em;
    bottom: 2em;
`

export const Arrow = styled.img`
  width: 1.5em;
`