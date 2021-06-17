import React, { useState } from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'

const ContactForm = () => {
  const [errMsg, setErrMsg] = useState({
    phone: false,
    mail: false,
    message: false
  })
  const [dataForm, setDataForm] = useState({
    name: '',
    mail: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    const { value, name } = e.target
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const validateData = () => {
    const { phone, message, mail } = dataForm

    function validateEmail (mail) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(mail).toLowerCase())
    }

    setErrMsg({
      phone: phone.length < 8,
      mail: !validateEmail(mail),
      message: message.length === 0
    })

    if (phone.length < 8) {
      return false
    } else if (!validateEmail(mail)) {
      return false
    } else return message.length >= 1
  }

  const sendMsg = e => {
    e.preventDefault()
    const isValid = validateData()
    // console.log(isValid)
    const { name, mail, message, subject, phone } = dataForm

    if (isValid) {
      // console.log('send')
      const payload = {
        nom: name,
        email: mail,
        telephone: phone,
        sujet: subject,
        message
      }
      fetch('https://formcarry.com/s/_gQTAtDuOOg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => {
          console.log('sended', res.ok)
          if (res.ok) {
            setSuccess(true)
            setDataForm({
              name: '',
              mail: '',
              message: '',
              phone: '',
              subject: ''
            })
            setTimeout(() => setSuccess(false), 5000)
          }
        })
        .catch(err => {
          // console.log("not send", err);
        })
    }
  }

  return (
    <>
      <Form onSubmit={sendMsg}>
        <InputsWrapper>
          <LabelWrapper>
            <p>Nom & Prénom</p>
            <StyledInput
              name='name'
              value={dataForm.name}
              type='text'
              onChange={handleChange}
            />
          </LabelWrapper>

          <LabelWrapper>
            <p>Sujet</p>
            <StyledInput
              name='subject'
              value={dataForm.subject}
              type='text'
              onChange={handleChange}
            />
          </LabelWrapper>

          <LabelWrapper>
            <p>Téléphone*</p>
            <StyledInput
              name='phone'
              size='10'
              value={dataForm.phone}
              type='tel'
              onChange={handleChange}
              error={errMsg.phone}
            />
          </LabelWrapper>

          <LabelWrapper>
            <p>E-mail*</p>
            <StyledInput
              name='mail'
              value={dataForm.mail}
              type='mail'
              onChange={handleChange}
              error={errMsg.mail}
            />
          </LabelWrapper>

          <LabelWrapper>
            <p>Message*</p>
            <StyledTextarea
              name='message'
              value={dataForm.message}
              onChange={handleChange}
              error={errMsg.message}
            />
          </LabelWrapper>

          <div style={{ height: '2em', textAlign: 'center' }}>
            {errMsg.phone || errMsg.mail || errMsg.message
              ? (
                <ErrorMessage>
                  Veuillez remplir correctement les champs en rouge !!!
                </ErrorMessage>
                )
              : null}
          </div>
          <div style={{ height: '2em' }}>
            {success
              ? (
                <SuccessMessage>Votre message a bien été envoyé</SuccessMessage>
                )
              : null}
          </div>

          <SubmitButton type='submit'>Envoyer</SubmitButton>
        </InputsWrapper>
      </Form>
    </>
  )
}

export default ContactForm

export const ErrorMessage = styled.p`
  background-color: #ff5757;
  color: white;
  width: fit-content;
  padding: 0.4em 1em;
  border-radius: 40px;
  font-size: 0.9em;
  margin: 0 auto;
  font-family: 'Avenir Next Bold', sans-serif;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
    width: 90%;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Form = styled.form`
  max-width: 900px;
  width: 80%;
  margin: 1em auto 2em auto;

  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5em;
  p {
    margin: 0 0 0.2em 2em;
    color: #0094be;
    font-family: 'Avenir Next Bold Demi', sans-serif;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 1em;
  }
`

export const StyledInput = styled.input`
  height: 2.5em;
  border-radius: 40px;
  border: 2px solid ${props => (props.error ? '#ff5757' : '#0094be')};
  padding-left: 1.4em;
  font-size: 1.1em;
  outline: none;
`

export const StyledTextarea = styled.textarea`
  height: 15em;
  padding: 1.4em;
  font-size: 1.2em;
  border-radius: 30px;
  resize: none;
  border: 2px solid ${props => (props.error ? '#ff5757' : '#0094be')};
  outline: none;
  p {
    margin: 0 0 0 1.6em;
    color: #0094be;
  }
`

export const SubmitButton = styled.button`
  display: block;
  background-color: #0094be;
  border-radius: 40px;
  border: 1px solid transparent;
  color: white;
  margin: 0.5em auto;
  font-size: 1em;
  width: 10em;
  height: 2.5em;
  font-family: 'Avenir Next Bold', sans-serif;
  outline: none;
  @media (max-width: ${breakpoints.s}px) {
    width: 60%;
    height: 2.6em;
    font-size: 1.2em;
  }
  :hover {
    cursor: pointer;
    background-color: #2b5c6b;
    color: white;
  }
`

export const SuccessMessage = styled.p`
  background-color: #32d13f;
  color: white;
  width: fit-content;
  padding: 0.4em 1em;
  border-radius: 40px;
  font-size: 0.9em;
  margin: 0 auto;
  font-family: 'Avenir Next Bold', sans-serif;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
