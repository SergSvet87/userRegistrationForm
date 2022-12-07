import { useState, useEffect } from 'react'

import { Input } from './Input'
import { Button } from './Button'

export const Form = ({ getUserData }) => {
  // Отримані значення з інпутів
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordConfirmInput, setPasswordComfirmInput] = useState('')

  // Зроблені помилки в інпутах
  const [emailInputError, setEmailInputError] = useState(
    'The email field cannot be empty!'
  )
  const [passwordInputError, setPasswordInputError] = useState(
    'The password field cannot be empty!'
  )
  const [passwordComfirmInputError, setPasswordComfirmInputError] = useState(
    'The password confirmation field cannot be empty!'
  )

  // Якщо інпут був у фокусі, але в ньому є помилка
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false)
  const [buttonValid, setButtonValid] = useState(false)

  // Обробник поля емейла
  const onChangeHandlerEmail = (e) => {
    setEmailInput(e.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!re.test(e.target.value.toLowerCase())) {
      setEmailInputError('The email field is not correct')
    } else {
      setEmailInputError('')
    }
  }

  // Обробник поля пароль
  const onChangeHandlerPassword = (e) => {
    setPasswordInput(e.target.value)

    if (e.target.value < 6 || e.target.value > 15) {
      setPasswordInputError('The password is not correct')

      if (!e.target.value) {
        setPasswordInputError('The password field cannot be empty!')
      }
    } else {
      setPasswordInputError('')
    }
  }

  // Обробник поля повторити пароль
  const onChangeHandlerPasswordComfirm = (e) => {
    setPasswordComfirmInput(e.target.value)

    if (passwordInput === e.target.value) {
      setPasswordComfirmInputError('')
    } else {
      setPasswordComfirmInputError('Passwords do not match')
    }
  }

  // Обробник втрати фокуса
  const blurHandler = (e) => {
    if (e.target.id === 'email') {
      setEmailDirty(true)
    } else if (e.target.id === 'password') {
      setPasswordDirty(true)
    } else if (e.target.id === 'passwordConfirmation') {
      setPasswordConfirmDirty(true)
    }
  }

  // Відправка форми
  const onSubmitHandler = (e) => {
    e.preventDefault()

    getUserData({
      email: emailInput,
      password: passwordInput,
      passwordConfirm: passwordConfirmInput,
    })
    setEmailInput('')
    setPasswordInput('')
    setPasswordComfirmInput('')
  }

  useEffect(() => {
    if (emailInputError || passwordInputError || passwordComfirmInputError) {
      setButtonValid(false)
    } else {
      setButtonValid(true)
    }
  }, [emailInputError, passwordInputError, passwordComfirmInputError])

  // Форма
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <h1>user registration form</h1>
      <Input
        id="email"
        name="email"
        type="email"
        className="field__input"
        value={emailInput}
        placeholder="📋 Enter email"
        onChange={(e) => onChangeHandlerEmail(e)}
        onBlur={(e) => blurHandler(e)}
      />
      {emailInputError && emailDirty ? (
        <h6 style={{ opacity: '1' }}>{emailInputError}</h6>
      ) : (
        <h6>{emailInputError}</h6>
      )}
      <Input
        id="password"
        name="password"
        type="password"
        className="field__input"
        value={passwordInput}
        placeholder="📋 Enter password"
        onChange={(e) => onChangeHandlerPassword(e)}
        onBlur={(e) => blurHandler(e)}
      />
      {passwordInputError && passwordDirty ? (
        <h6 style={{ opacity: '1' }}>{passwordInputError}</h6>
      ) : (
        <h6>{passwordInputError}</h6>
      )}
      <Input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        className="field__input"
        value={passwordConfirmInput}
        placeholder="📋 Enter password confirmation"
        onChange={(e) => onChangeHandlerPasswordComfirm(e)}
        onBlur={(e) => blurHandler(e)}
      />
      {passwordComfirmInputError && passwordConfirmDirty ? (
        <h6 style={{ opacity: '1' }}>{passwordComfirmInputError}</h6>
      ) : (
        <h6>{passwordComfirmInputError}</h6>
      )}
      <Button disabled={!buttonValid} />
    </form>
  )
}
