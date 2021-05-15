import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="inicio"
        subtitle="projeto crud em react."> 
        <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema de cadastro de usúario
                desenvolvido em React
            </p>
    </Main>