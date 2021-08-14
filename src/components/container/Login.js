import React from 'react'
import {BasicButton, ComponentBox, Row} from '../presentational'

const Login = () => {
    return (
        <>
            <div>
                <div>Welcome PangPang Study Planner!</div>
                <input placeholder={'ID'}></input>
                <input placeholder={'PASSWORD'} type={'password'}></input>
                <BasicButton message={'로그인'}></BasicButton>
            </div>

            <Row>
                <ComponentBox></ComponentBox>
            </Row>
        </>
    )
}

export default Login