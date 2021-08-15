import React from 'react'
import styled from 'styled-components'

const BasicInput = props => {

    const message = props.message

    const LoginInput = styled.input`
    width:150px;
    height:20px;
    border-radius: 10px;
    `

    return <LoginInput placeholder={message}/>
}

BasicInput.defaultProps = {
    message: 'defaultMessage'
}

export default BasicInput