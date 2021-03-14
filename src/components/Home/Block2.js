import React from 'react'
import styled from '@emotion/styled'
import professorsIcon from '../../assets/images/home/block2/professors.png'
import penIcon from '../../assets/images/home/block2/pen.png'
import studentsIcon from '../../assets/images/home/block2/students.png'
import booksIcon from '../../assets/images/home/block2/books.png'

const Block2 = () => {
  return (
    <Container>
      <Box>
        <TextBox color>
          <Number>250</Number>
          <Text>élèves</Text>
        </TextBox>
        <Icon src={studentsIcon} />
      </Box>

      <Box>
        <TextBox>
          <Number>15</Number>
          <Text>Professeurs</Text>
        </TextBox>
        <Icon src={professorsIcon} />
      </Box>

      <Box>
        <TextBox color>
          <Number>11</Number>
          <Text>Professeurs</Text>
        </TextBox>
        <Icon src={penIcon} />
      </Box>

      <Box column>
        <TextBox row style={{ margin: '0 auto', width: 'auto', alignItems: 'flex-end' }}>
          <Number style={{ marginBottom: '0.1em', marginRight: '0.1em' }}>4</Number>
          <Icon style={{ height: '3.5em' }} src={booksIcon} />
        </TextBox>
        <Text style={{ color: 'white', lineHeight: '1.1' }}>Domaines d’apprentissage</Text>
      </Box>
    </Container>
  )
}

export default Block2

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  height: 15em;
  background-color: #00a1c6;
`

export const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  height: 5em;
  font-family: 'Oswald';
  font-weight: 400;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  width: 8em;
  margin: 0 .2em -0.4em 0;
  color: ${props => (props.color ? '#80edff' : 'white')};
  text-align: right;
  justify-content: flex-end;
`

export const Number = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  line-height: 0.8;
`

export const Text = styled.p`
  margin: 0;
  font-size: 1.5em;
`

export const Icon = styled.img`
  height: 5em;
`
