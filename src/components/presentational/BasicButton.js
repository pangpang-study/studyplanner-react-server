import React from 'react'
import styled from 'styled-components'

const BasicButton = props => {

    const message = props.message

    const LoginButton = styled.button`
    border-radius: 10px;
    `

    return (
        <LoginButton>{message}</LoginButton>
    )
}

BasicButton.defaultProps = {
    message: 'defaultMessage'
}

export default BasicButton