import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'
import { breakpoints } from '../utils/styles'
import waves from './../assets/images/formation/waves_2.png'
import descriptionIcon from './../assets/icons/description_icon.svg'
import coupesIcon from './../assets/icons/coupes_icon.svg'
import priceIcon from './../assets/icons/price_icon.svg'
import facebookIcon from './../assets/images/formation/template/facebook.svg'
import twitterIcon from './../assets/images/formation/template/twitter.svg'
import selectArrow from './../assets/icons/select-arrow.png'

export const query = graphql`
  query($name: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "shop" }, name: { eq: $name } }
      }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            productPrice
            name
            pointsForts
            subTitle
            description
            title
            avaible
            images {
              image
            }
          }
        }
      }
    }
  }
`

const ProductTemplate = ({ data, path }) => {
  const {
    avaible,
    description,
    name,
    pointsForts,
    title,
    subTitle,
    productPrice,
    images
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  const gallery = []

  images.map(({ image }) =>
    gallery.push({
      original: image,
      thumbnail: image,
      sizes: '800px'
    })
  )

  console.log(gallery)

  const productSelectQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [quantity, setQuantity] = useState(1)
  console.log(path)
  return (
    <Container>
      <Helmet>
        <title>{title} | Arche de noé</title>
      </Helmet>

      <img
        src={waves}
        style={{ width: '100%', marginBottom: '2.5em' }}
        alt=''
      />

      <TitleWrapper>
        <ReturnLink to='/nos-ouvrages'>
          Revenir à la page de Nos Ouvrages
        </ReturnLink>
        <Title>
          {title} <TitleSeparator>|</TitleSeparator>
          <Br /> {subTitle.toUpperCase()}
        </Title>
      </TitleWrapper>

      <MainContainer>
        <LeftWrapper>
          <ProductImage
            showNav={false}
            infinite={false}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            items={gallery}
          />
          <LinkButton color='true' to='/formation'>
            Nos Formations
          </LinkButton>
          <LinkButton to='/contact#form'>J'ai une question</LinkButton>
        </LeftWrapper>

        <RightWrapper>
          <ContentBox>
            <IconWrapper>
              <img src={descriptionIcon} />
            </IconWrapper>
            <TextWrapper>
              <ContentTitle>Description</ContentTitle>
              <ContentText>{description}</ContentText>
            </TextWrapper>
          </ContentBox>

          <ContentBox>
            <IconWrapper>
              <img src={coupesIcon} />
            </IconWrapper>
            <TextWrapper>
              <ContentTitle>Les points forts de l’ouvrage</ContentTitle>
              <ContentText>{pointsForts}</ContentText>
            </TextWrapper>
          </ContentBox>

          <ContentBox>
            <IconWrapper>
              <img src={priceIcon} />
            </IconWrapper>
            <TextWrapper>
              <ContentTitle>Prix</ContentTitle>
              <Price>{productPrice} € TTC</Price>
            </TextWrapper>
          </ContentBox>

          <AddToCartWrapper>
            <AddToCartButton
              disabled={!avaible}
              className='snipcart-add-item'
              data-item-id={name}
              data-item-price={productPrice.replace(',', '.')}
              data-item-url={`http://localhost:8000/${path}`} // TODO changer l url
              data-item-description={description}
              data-item-image={images && images[0].image}
              data-item-name={name}
              data-item-quantity={quantity}
            >
              Ajouter au panier
            </AddToCartButton>
            <AddToCartQuantity
              arrow={selectArrow}
              onChange={e => {
                const { value } = e.target
                setQuantity(value)
              }}
            >
              {productSelectQuantity.map(el => (
                <option
                  key={`quantity${el}`}
                  value={el}
                  selected={el === quantity}
                >
                  0{el}
                </option>
              ))}
            </AddToCartQuantity>
          </AddToCartWrapper>

          <LinkContainer>
            <SocialText>
              J’informe une connaissance <br /> de l’ouvrage
            </SocialText>
            <SocialBox>
              <a href='https://fr-fr.facebook.com/institutarchedenoe'>
                <SocialIcon src={facebookIcon} />
              </a>
              <a href='https://twitter.com'>
                <SocialIcon src={twitterIcon} />
              </a>
            </SocialBox>
          </LinkContainer>
        </RightWrapper>
      </MainContainer>
      <img
        src={waves}
        style={{
          width: '100%',
          marginTop: '3.5em',
          transform: 'rotate(180deg) scaleX(-1)'
        }}
        alt=''
      />
    </Container>
  )
}

export default ProductTemplate

export const Container = styled.div``

export const TitleWrapper = styled.div`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  margin-left: 9em;

  @media (max-width: ${breakpoints.l}px) {
    margin-left: 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-left: 0;
  }
`

export const Title = styled.p`
  font-size: 2.8em;
  margin: 0.4em 0 0;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2em;
    text-align: center;
    margin-top: 2em;
  }
`

export const Br = styled.br`
  @media (min-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const TitleSeparator = styled.span`
  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const ReturnLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  color: #00a1c6;

  :hover {
    color: #007bac;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-left: 1em;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 9em;
  margin: 5em 0;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 1em;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 32em;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 25em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    width: 90%;
    max-width: 40em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const ProductImage = styled(ImageGallery)`
  width: 100%;
  margin-bottom: 2em;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 35em;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 28em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 3em auto;
    width: 90%;
    max-width: 40em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-start;
  width: 5em;
  margin-right: 2em;

  @media (max-width: ${breakpoints.s}px) {
    margin-right: 0;
  }

  img {
    width: 5em;
  }
`

export const TextWrapper = styled.div`
  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    margin-top: 1em;
  }
`

export const ContentTitle = styled.p`
  margin: 0;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  font-size: 1.7em;
`

export const ContentText = styled.p``

export const Price = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.7em;
  color: #4d4d4d;
  margin: 0;
`

export const AddToCartWrapper = styled.div`
  margin-top: 2em;

  @media (max-width: ${breakpoints.m}px) {
    margin: 1em auto;
  }

  @media (max-width: ${breakpoints.s}px) {
  }
`

export const AddToCartButton = styled.button`
  background-color: #00a1c6;
  border-radius: 50px;
  font-size: 1.4em;
  color: white;
  border: 2px solid transparent;
  font-family: 'Avenir Next Bold', sans-serif;
  padding: 0.2em 1.4em;
  cursor: pointer;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.2em;
  }

  :hover {
    background-color: white;
    color: #00a1c6;
    border: 2px solid #00a1c6;
  }
`

export const AddToCartQuantity = styled.select`
 width: 4em;
  height: 2em;
  border-radius: 30px;
  border: 2px solid #00a1c6;
  text-align: center;
  background-color: white;
  padding-left: 0.8em;
  font-weight: bold;
  margin-left: 0.7em;
  font-size: 1.3em;
  margin-bottom: 0.9em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('${props => props.arrow}');
  background-repeat: no-repeat;
  background-position: 85% center;
  background-size: 20px;
  outline: none;
  cursor: pointer;
  
  @media (max-width: ${breakpoints.s}px) {
    margin-left: 1em;
    height: 1.8em;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  @media (max-width: ${breakpoints.m}px) {
    align-items: center;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const LinkButton = styled(Link)`
  font-family: 'Avenir Next Bold', sans-serif;
  background-color: ${props => (props.color ? '#007CAD' : '#00A1C6')};
  color: white;
  margin-bottom: 0.5em;
  display: inline-block;
  width: 17em;
  border-radius: 30px;
  height: 2.7em;
  padding: 0.2em 0;
  text-align: center;
  line-height: ${props => (props.fontSize ? '1.3' : '2.7')};
  text-decoration: none;
  margin-top: ${props => (props.color ? '4em' : '0.1em')};
`

export const SocialText = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  font-size: 1.7em;

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
  }
`

export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 7em;
`

export const SocialIcon = styled.img`
  width: 3em;
`
