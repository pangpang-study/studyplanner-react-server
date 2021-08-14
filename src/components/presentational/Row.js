import React from 'react'
import styled from 'styled-components'

const Row = props => {

    const BasicRow = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    `

    return (
        <BasicRow>
            {props.children}
        </BasicRow>
    )
}

Row.defaultProps = {}

export default Row