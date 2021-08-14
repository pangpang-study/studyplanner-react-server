import React from 'react'
import styled from 'styled-components'

const Row = props => {

    const BasicRow = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    margin: ${props.marginTop}px ${props.marginLeft}px ${props.marginBottom}px ${props.marginRight}px;
    gap: ${props.columnGap}px ${props.rowGap}px;
    `

    return (
        <BasicRow>
            {props.children}
        </BasicRow>
    )
}

Row.defaultProps = {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,

    columnGap: 0,
    rowGap: 0,
}

export default Row