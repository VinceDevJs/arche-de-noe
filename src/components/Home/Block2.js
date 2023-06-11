import styled from '@emotion/styled'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import wave from '../../assets/images/home/block4/waves_3.png'
import booksIcon from '../../assets/images/home/block2/books.png'
import penIcon from '../../assets/images/home/block2/pen.png'
import professorsIcon from '../../assets/images/home/block2/professors.png'
import studentsIcon from '../../assets/images/home/block2/students.png'
import { breakpoints } from '../../utils/styles'

const Block2 = () => {
  const numbers = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "homeNumber" } } }
      ) {
        edges {
          node {
            frontmatter {
              templateKey
              curses
              teachers
              teachers2
              students
            }
          }
        }
      }
    }
  `)

  const numbersData = numbers.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Container>
      <Wave src={wave} />
      <Box data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
        <TextBox color="true">
          <Number>{numbersData.students}</Number>
          <Text>Élèves</Text>
        </TextBox>
        <Icon src={studentsIcon} />
      </Box>

      <Box data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
        <TextBox>
          <Number>{numbersData.teachers}</Number>
          <Text>Professeurs</Text>
        </TextBox>
        <Icon src={professorsIcon} />
      </Box>

      <Box data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
        <TextBox color="true">
          <Number>{numbersData.teachers2}</Number>
          <Text>Formations</Text>
        </TextBox>
        <Icon src={penIcon} />
      </Box>

      <Box data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">
        <TextBox>
          <Number>{numbersData.curses}</Number>
          <Text>Cursus</Text>
        </TextBox>
        <Icon src={booksIcon} />
      </Box>
    </Container>
  )
}

export default Block2

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12em;
  height: 17em;
  background-color: #00a1c6;

  @media (max-width: ${breakpoints.xxl}px) {
    padding: 0 8em;
  }

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 4em;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 2em;
    height: 15em;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    height: fit-content;
    padding: 3em 0;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: 5em;
  font-family: 'Oswald';
  font-weight: 400;
  align-items: flex-end;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column-reverse;
    margin: 3em 0;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  width: fit-content;
  margin: 0 0.2em -0.4em 0;
  color: ${(props) => (props.color ? '#80edff' : 'white')};
  text-align: right;
  justify-content: flex-end;
`

export const Number = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  line-height: 0.8;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    font-size: 3em;
  }
`

export const Text = styled.p`
  margin: 0;
  font-size: 1.5em;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    font-size: 2.5em;
  }
`

export const Icon = styled.img`
  height: 4.5em;

  @media (max-width: ${breakpoints.m}px) {
    height: 3.5em;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-bottom: 0.8em;
    height: 7em;
  }
`

export const LastBox = styled(Box)`
  width: auto;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.2em;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`

export const LastTextBox = styled(TextBox)`
  align-items: flex-end;
`

export const LastNumber = styled(Number)`
  margin-bottom: 0.32em;
  margin-right: 0.1em;
`

export const LastIcon = styled(Icon)`
  height: 3.5em;
  margin-bottom: 0.3em;

  @media (max-width: ${breakpoints.m}px) {
    height: 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 5em;
  }
`

export const LastText = styled(Text)`
  color: white;
  line-height: 1.1;
`

export const Wave = styled.img`
  position: absolute;
  opacity: 0.4;
  left: 0;
  bottom: 0;
  width: 100%;
`
