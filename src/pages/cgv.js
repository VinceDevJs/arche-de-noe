import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import waves from './../assets/images/formation/waves_2.png'
import { breakpoints } from '../utils/styles'
import DefaultLayout from '../layouts/default'

const Cgv = () => {
  return (
    <DefaultLayout>
      <Container>
        <Helmet>
          <title>Cgv | Arche de noé</title>
        </Helmet>
        <img
          src={waves}
          style={{ width: '100%', marginBottom: '2.5em' }}
          alt=''
        />
        <Title>Cgv</Title>
        <Content>
          <TextContent>
            L’association l’Arche de Noé propose à la vente des produits et services destinés à contribuer au financement de son activité. <br /> Les offres sont valables dans la limite des stocks disponibles et pour autant qu’elles figurent sur le site. <br /> La vente n’est proposée que pour les acheteurs résidant et se faisant livrer sur le territoire métropolitain. <br /> En passant commande sur le site, nos clients reconnaissent en avoir pris connaissance et les avoir acceptées.
          </TextContent>

          <TitleContent>
            Article 1- Données personnelles :
          </TitleContent>

          <TextContent>
            Les données collectées ne sont utilisées que pour pouvoir honorer la commande ; elles sont accessibles par les personnes chargées de la préparation et de l’envoi de la commande. Elles peuvent être transmises aux établissements bancaires pour exécution du paiement. <br /><br />
            Le responsable du traitement est M Jean Guillaume. <br /><br />
            Conformément à la Loi informatique et Libertés du 6 janvier 1978, un droit d’accès et de rectification est possible en nous contactant à l’adresse suivante : contact@associationarchedenoe.fr.
          </TextContent>

          <TitleContent>
            Article 2- Objet :
          </TitleContent>

          <TextContent>
            Les présentes conditions générales de vente régissent  exclusivement les ventes réalisées sur son site internet par l’association l’Arche de Noé et dont le président est M Soumaila Diallo. <br /><br />
            En conséquence, le fait pour toute personne de commander un produit proposé à la vente sur le site internet de l’association l’Arche de Noé emporte acceptation pleine et entière des conditions de vente dont l’Acheteur reconnait avoir pris connaissance préalablement à sa commande. <br /><br />
            L’Acheteur préalablement à sa commande, déclare avoir la pleine capacité juridique, lui permettant de s’engager au titre des présentes conditions générales de vente. <br /><br />
            L’association l’Arche de Noé se réserve le droit de modifier à tout moment les présentes conditions générales de vente.
          </TextContent>

          <TitleContent>
            Article 3- Identité de l’association l’Arche de Noé
          </TitleContent>

          <TextContent>
            Association Loi 1901, siège social : 12 avenue du Général de Gaulle 93440 Dugny <br /><br />
            NºSiret : 83072901800010 APE/9499Z <br /><br />
            NºTVA non applicable, Association non assujettie à la TVA - Art.293B Code des impôts. <br /> <br />
            L’association l’Arche de Noé propose à la vente des produits et services destinés à contribuer au financement de son activité. Sa boutique de vente en ligne est dédiée à la vente de livres, de produits dérivés. Elle permet aussi de récolter des dons en ligne.
          </TextContent>

          <TitleContent>
            Article 4- Produits :
          </TitleContent>

          <TextContent>
            Les Produits proposés à la vente sur le site sont les suivants : <br /><br />

            J’apprends l’arabe Niveau CP, J’apprends l’arabe Niveau 1 enfant, J’apprends l’arabe Niveau 1 adulte, Livrets d’exercices J’apprends l’arabe Niveau 1 adulte,Pack J’apprends l’arabe Niveau 1 adultes + Livrets d’exercices, Les Alphanimos Niveau Mater 1, Les Alphanimos Niveau Mater 2. <br /><br />

            Les caractéristiques principales des produits et notamment les spécifications, illustrations et indications de dimensions ou de capacité des produits, sont présentées sur le site https://www.institutarchedenoe.fr ce dont le client est tenu de prendre connaissance avant de commander. <br /><br />
            Le choix et l’achat d’un produit sont de la seule responsabilité de l’Acheteur. <br /><br />
            Les offres de produits s’entendent dans la limite des stocks disponibles, tels que précisés lors de la passation de la commande.
          </TextContent>

          <TitleContent>
            Article 5- Prix :
          </TitleContent>

          <TextContent>
            Les prix sont indiqués en euros TTC hors frais d’envoi ; ce sont les prix en vigueur au moment de la commande qui sont applicables à celle-ci.
          </TextContent>

          <TitleContent>
            Article 6- Commandes :
          </TitleContent>

          <TextContent>
            À partir du moment où l’Acheteur a enregistré sa commande, il est considéré comme ayant accepté en connaissance de cause et sans réserve les présentes conditions générales de vente, prix, volumes et quantités des produits proposés à la vente et commandés. <br /><br />
            Le processus de commande comprend plusieurs étapes : <br /> <br /> 1) Le client sélectionne sur le site les produits qu’il choisit et indique la quantité désirée <br />
            2) Un récapitulatif de sa commande lui est proposé ; l’acheteur a la possibilité de rectifier sa commande <br /> 3) L’acheteur valide sa commande : en confirmant la commande, l’acheteur reconnait son obligation de paiement <br /> 4) Une fois la commande validée, l’association l’Arche de Noé envoie dans les meilleurs délais un accusé de réception de la commande.
          </TextContent>

          <TitleContent>
            Article 7- Paiement :
          </TitleContent>

          <TextContent>
            Le paiement en ligne peut se faire par carte bancaire ou sur le site sécurisé de Paypal où il peut effectuer son paiement sécurisé. vos informations de paiement ne seront pas conservées après le paiement.
          </TextContent>

          <TitleContent>
            Article 8- Livraison :
          </TitleContent>

          <TextContent>
            Nous ne pouvons assurer l’envoi des produits proposés qu’aux personnes domiciliées en France métropolitaine à l’adresse indiquée lors de la commande. <br /><br />
            Les délais ou la période de livraison sont indiqués pour chaque produit au moment de la commande ; dans la mesure du possible, nous procédons à un envoi groupé. Si cela n’est pas possible, les frais de livraison des envois complémentaires sont à la charge de l’association. <br /> Les livraisons sont assurées par un transporteur indépendant, à l’adresse mentionnée par l’Acheteur lors de la commande et à laquelle le transporteur pourra facilement accéder. Le transfert de propriété s’opère au moment de la remise du colis par le transporteur.
          </TextContent>

          <TitleContent>
            Article 9- Droit de rétractation :
          </TitleContent>

          <TextContent>
            En application de l’article L121-17 I du code de la consommation, vous avez le droit de vous rétracter de la présente vente, sans donner de motif, dans un délai de quatorze jours. <br /><br />
            Le délai de rétractation expire quatorze jours après le jour où vous-même, ou un tiers autre que le transporteur et désigné par vous, prend physiquement possession du bien(ou du dernier bien si plusieurs colis issus de la même commande sont nécessaires). <br />  <br />
            Pour exercer le droit de rétractation, vous devez nous notifier à Association l’Arche de Noé votre décision de rétractation, au moyen d'une déclaration dénuée d'ambiguïté (par exemple, lettre envoyée par courrier postal ou courrier électronique). Vous pouvez utiliser le modèle de formulaire de rétractation mais ce n'est pas obligatoire (https://www.service-public.fr/particuliers/vosdroits/R38397) <br /><br />
            Pour que le délai de rétractation soit respecté, il suffit que vous transmettiez votre décision de rétractation avant l'expiration du délai de rétractation.
          </TextContent>

          <TitleContent>
            Article 10- Effets de rétractation
          </TitleContent>

          <TextContent>
            En cas de rétractation de votre part, nous vous rembourserons tous les paiements reçus de vous, y compris les frais de livraison (à l'exception des frais supplémentaires découlant du fait que vous avez choisi, le cas échéant, un mode de livraison autre que le mode moins coûteux de livraison standard proposé par nous). <br /> <br />
            Ce remboursement sera fait  sans retard excessif et au plus tard quatorze jours à compter du jour où nous sommes informés de votre décision de rétractation. Nous procéderons au remboursement en utilisant le même moyen de paiement que celui que vous aurez utilisé pour la transaction initiale; en tout état de cause, ce remboursement n'occasionnera pas de frais pour vous .Nous pouvons différer le remboursement jusqu'à ce que nous ayons reçu le bien ou jusqu'à ce que vous ayez fourni une preuve d'expédition du bien, la date retenue étant celle du premier de ces faits. <br /><br />
            Vous devrez renvoyer ou rendre le bien, à nous-mêmes sans retard excessif,  au plus tard quatorze jours après que vous nous aurez communiqué votre décision de rétractation du présent contrat. Ce délai est réputé respecté si vous renvoyez le bien avant l'expiration du délai de quatorze jours. <br /> Votre responsabilité n'est engagée qu'à l'égard de la dépréciation du bien résultant de manipulations autres que celles nécessaires pour établir la nature, les caractéristiques et le bon fonctionnement de ce bien. <br /> Vous devrez prendre en charge les frais directs de renvoi du bien.
          </TextContent>

          <TitleContent>
            Articlle 11- Garanties :
          </TitleContent>

          <TextContent>
            En application du code de la consommation (article L211-4, L133-3 et R111-1), nous sommes garants de la conformité des produits commandés pendant les 2 ans qui suivent l’achat. <br /><br />
            Vous devez nous prévenir par courrier et nous envisagerons la réparation, le remplacement ou le remboursement si les deux premières solutions ne peuvent être mises en œuvre. <br /><br />
            La garantie des vices cachés prévues aux articles 1641 à 1648 et 2232du code civil s’applique également.
            Ces garanties s’appliquent sans préjudice du droit de rétractation.
          </TextContent>

          <TitleContent>
            Article 12- Réclamations :
          </TitleContent>

          <TextContent>
            Vos réclamations concernant votre commande sont à adresser à contact@associationarchdenoe.fr <br /> Vous pouvez également nous téléphoner au 01.83.37.75.84 <br /> Si la réponse que nous vous apportons ne vous satisfait pas, vous pouvez contacter la plateforme de règlement des litiges en ligne mise en place par la commission européenne. https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.adr.show
          </TextContent>

          <TitleContent>
            Article 13- Médiation :
          </TitleContent>

          <TextContent>
            Conformément au décret du 30 octobre 2015, vous pouvez recourir à un service de médiation  ; des informations complémentaires vous seront données  sur le site suivant : http://www.economie.gouv.fr/mediation-conso.
          </TextContent>
        </Content>
      </Container>
    </DefaultLayout>
  )
}

export default Cgv

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
