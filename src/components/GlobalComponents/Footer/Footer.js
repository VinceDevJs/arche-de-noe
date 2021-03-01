import React from 'react'
import styled from '@emotion/styled'

const Footer = () => {
  return (
    <FooterContainer>
      footer
    </FooterContainer>
  )
}

export default Footer


export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: 10em;
  padding: 0 2em;
  background-color: #096796;
  margin-top: 2em;
  color: antiquewhite;
`

