import React from 'react'

const BasicButton = props => {

    const message = props.message

    return (
        <button>{message}</button>
    )
}

BasicButton.defaultProps = {
    message: 'defaultMessage'
}

export default BasicButton