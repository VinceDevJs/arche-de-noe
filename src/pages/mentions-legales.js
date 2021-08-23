import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import waves from './../assets/images/formation/waves_2.png'
import { breakpoints } from '../utils/styles'
import DefaultLayout from '../layouts/default'

const MentionsLegales = () => {
  return (
    <DefaultLayout>
      <Container>
        <Helmet>
          <title>Mentions légales | Arche de noé</title>
        </Helmet>
        <img
          src={waves}
          style={{ width: '100%', marginBottom: '2.5em' }}
          alt=''
        />
        <Title>Mentions légales</Title>
        <Content>

          <TitleContent>
            Loi applicable et juridiction :
          </TitleContent>

          <TextContent>
            Les éventuels litiges survenant à l’occasion de votre commande sont régis par les tribunaux français selon la loi française.
          </TextContent>

          <TitleContent>
            Éditeur
          </TitleContent>

          <TextContent>
            Vous êtes actuellement connecté sur l’un des sites web de l'Association l’Arche de Noé, 12 avenue du Général de Gaulle 93440 Dugny. <br /><br />
            Directeur de la publication : <strong>Jean Guillaume</strong> <br /><br /> Responsable du site : <strong>Soumaila Diallo</strong>

          </TextContent>

          <TitleContent>
            Hébergement
          </TitleContent>

          <TextContent>
            Ce site est hébergé par <strong>Netlify</strong>
          </TextContent>

          <TitleContent>
            Déclaration
          </TitleContent>

          <TextContent>
            Conformément à la Loi « Informatique et Libertés » du 6 janvier 1978, le présent site a fait l'objet d'une déclaration à la CNIL référencée sous le numéro 644628. <br /><br />
            La protection des données personnelles sur le site : <br /><br />
            · Aucune information personnelle n'est collectée à votre insu. <br /> · Aucune information personnelle n'est cédée à des tiers. <br /> · Les informations ne sont collectées qu'à des fins de gestion de votre demande et de statistiques internes à l’IADN.

          </TextContent>

          <TitleContent>
            Informations nominatives
          </TitleContent>

          <TextContent>
            Conformément à la Loi « informatique et Libertés » du 6 janvier 1978, vous disposez d’un droit d’accès et de rectification aux données personnelles vous concernant. <br /> Si vous souhaitez exercer ce droit, contactez le directeur de la publication à l'adresse suivante : contact@associationarchedenoe.fr. <br /><br />
            Les personnes concernées ont été informées de leurs droits. Le droit d'accès est immédiat sur le site. Le droit de rectification s'exerce auprès du directeur de la publication à l'adresse suivante : contact@associationarchedenoe.fr.

          </TextContent>

          <TitleContent>
            Droit d'auteur - Copyright
          </TitleContent>

          <TextContent>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. <br /><br />
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication. <br /><br />
            La reproduction des textes de ce site sur un support papier est autorisée, tout particulièrement dans le cadre pédagogique, sous réserve du respect des trois conditions suivantes : <br /> - gratuité de la diffusion, <br /> - respect de l'intégrité des documents reproduits : pas de modification ni altération d'aucune sorte, <br /> - citation claire et lisible de la source sous la forme suivante : «Ce document provient du site internet de l'AADN : http://www.institutarchedenoe.fr. Les droits de reproduction sont réservés et strictement limités». <br /><br />
            L'adresse internet du site de l’IADN doit impérativement figurer dans la référence. Pour d'autres utilisations, veuillez contacter le responsable du site.

          </TextContent>

        </Content>
      </Container>
    </DefaultLayout>
  )
}

export default MentionsLegales

export const Container = styled.div`
`

export const Title = styled.h1`
  text-align: center;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  font-size: 2.5em;
  margin: 0 0 2em;
`

export const Content = styled.div`
  padding: 0 8em;
  margin-bottom: 7em;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 1.5em;
  }
`

export const TitleContent = styled.p`
  font-weight: bold;
  margin: 4em 0 1em;
  font-size: 1.1em;
`

export const TextContent = styled.p``
