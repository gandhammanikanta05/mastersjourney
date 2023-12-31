import { Link } from 'react-router-dom'
import {LoginContainer, MainHeading, CreateHead, LoginForm, UsernameLabel, UsernameInput, PasswordLabel, PasswordInput, LoginBtn, Para} from './styledComponents'
import { useRef } from 'react'

const LoginPage = () => {
    const username = useRef()
    const password = useRef()

    const onsubmitDetails = async event => {
        event.preventDefault()
        const userName = username.current.value
        const passWord = password.current.value
        const userDetails = {userName, passWord}
        const url = 'http://localhost:3005/NewAccount'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        console.log(response.ok)
        }

    return(
        <LoginContainer>
            <MainHeading>My Masters Journey</MainHeading>
            <CreateHead>CREATE AN ACCOUNT</CreateHead>
            <LoginForm onSubmit={onsubmitDetails}>
                <UsernameLabel htmlFor="username">NAME</UsernameLabel>
                <UsernameInput id="username" type="text" placeholder="Enter Your Name" ref={username} />
                <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
                <PasswordInput id="password" type="password" placeholder="Enter Your Password" ref={password} />
                <LoginBtn type="submit">Submit</LoginBtn>
                <Para>Already have an account ?</Para>
                <Link to="/LoginPage">
                Login
                </Link>
            </LoginForm>
        </LoginContainer>
    )
}

export default LoginPage