import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Block1 from './Block1'
import { breakpoints } from './../../utils/styles'
import 'swiper/css'
import 'swiper/css/pagination'

const TopSlider = () => {
  const slider = useStaticQuery(graphql`
      {
          allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "slider" } } }
          ) {
              edges {
                  node {
                      frontmatter {
                          templateKey
                          slide {
                              buttonLink
                              buttonTitle
                              content
                              image
                              show
                              showButton
                              subTitle
                              clearText
                              title
                          }
                      }
                  }
              }
          }
      }
  `)

  const slides = slider.allMarkdownRemark.edges[0].node.frontmatter.slide

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      speed={1200}
    >

      <SwiperSlide>
        <Block1 />
      </SwiperSlide>

      {/* {
        slides.map(slide => {
          return slide.show && (
            <SwiperSlide key={slide.title}>
              <SlideContainer>
                <ContentBox color={slide.clearText}>
                  <Title>{slide.title}</Title>
                  <Separator color={slide.clearText} />
                  <SubTitle>{slide.subTitle}</SubTitle>
                  <Content>{slide.content}</Content>
                  {slide.showButton && (
                    <Button color={slide.clearText} href={slide.buttonLink}>
                      {slide.buttonTitle}
                    </Button>
                  )}
                </ContentBox>

                <BackgroundImage src={slide.image} alt="arche de noe slider" />
              </SlideContainer>
            </SwiperSlide>
          )
        })
      } */}

    </Swiper>
  )
}

export default TopSlider

export const SlideContainer = styled.div`
  position: relative;
  color: white;

  @media (max-width: ${breakpoints.m}px) {
    height: 50em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 47em;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 0;
`

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Avenir Next', sans-serif;
  height: 30em;
  max-width: 600px;
  padding: 4em;
  z-index: 10;
  color: ${props => props.color ? '#fff' : '#d9703a'};

  @media (max-width: ${breakpoints.m}px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
  }

  @media (max-width: ${breakpoints.s}px) {
    max-width: 90%;
  }
`

export const Title = styled.div`
  font-size: 2.3em;
  font-weight: bold;
  margin: 24px 0;
  white-space: pre-line;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2.3em;
  }
`

export const Separator = styled.div`
  width: 3em;
  border-top: 3px solid ${props => props.color ? '#fff' : '#d9703a'};
`

export const SubTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  white-space: pre-line;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.6em;
  }
`

export const Content = styled(ReactMarkdown)`

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.3em;
  }
  h5 {
    margin: 0.2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.2em;
  }
`

export const Button = styled.a`
  border: 2px solid ${props => props.color ? '#fff' : '#d9703a'};
  color: ${props => props.color ? '#fff' : '#d9703a'};
  font-size: 1.1em;
  border-radius: 30px;
  padding: .2em 2.3em;
  margin-top: 2em;
  text-decoration: none;
  width: fit-content;
  font-weight: bold;
  
  :hover {
    background: ${props => props.color ? '#fff' : '#d9703a'};
    color: ${props => props.color ? '#52b5d5' : '#d9703a'};
  }
`
