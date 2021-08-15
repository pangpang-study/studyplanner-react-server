import React from 'react'
import styled from 'styled-components'

const BasicText = props => {

    const message = props.message
    const type = props.type

    const Title = styled.h3`
    `
    const Content = styled.div`
    `

    return (
        <>
            {type === 'title'
                ? <Title>{message}</Title>
                : <Content>{message}</Content>
            }
        </>
    )
}

BasicText.defaultProps = {
    message: 'defaultMessage',
    type:'content'
}

export default BasicText