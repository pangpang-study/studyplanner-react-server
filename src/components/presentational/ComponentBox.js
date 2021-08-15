import React from 'react'
import styled from 'styled-components'

const ComponentBox = props => {

    const BasicBox = styled.div`
    width:${props.width || 100}px;
    height:${props.height || 100}px;
    background:gray;
    
    border-radius: 10px;
    box-shadow: 0px 0px 50px 0px grey;
    `

    return (
        <BasicBox>
            {props.children}
        </BasicBox>
    )
}

ComponentBox.defaultProps = {}

export default ComponentBox