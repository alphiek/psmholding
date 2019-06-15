import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-height: 424px) and (orientation: landscape) {
    margin: 5em auto;
  }
`

const PageWrapper = ({ children }) => (
  <FlexWrapper>
    {children}
  </FlexWrapper>
)

export default PageWrapper
