import React from 'react'
import {BasicButton, ComponentBox, Row, BasicText, BasicInput} from '../presentational'

const Login = () => {
    return (
        <>

            <Row>
                <ComponentBox width={400} height={400}>

                    <BasicText type={'title'} message={'Welcome PangPang Study Planner!'}/>
                    <Row><BasicInput message={'ID'}/></Row>
                    <Row><BasicInput message={'PASSWORD'} type={'password'}/></Row>
                    <Row marginTop={15} rowGap={10}>
                        <BasicButton message={'로그인'}></BasicButton>
                        <BasicButton message={'회원가입'}></BasicButton>
                    </Row>

                </ComponentBox>
            </Row>
        </>
    )
}

export default Login