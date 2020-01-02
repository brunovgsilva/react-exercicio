import ReactDom from 'react-dom'
import React from 'react'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './utils/counterReducer'

import Counter from './componentes/Counter'

const reducers = combineReducers({
    counter: counterReducer
})

const elements = document.getElementById('root')
// ReactDom.render(<h1>Titulo</h1>, elements)

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
    // <div>

    //     {/* <Hook></Hook> */}
    //     {/* <Contador numero='5'>

    //     </Contador>
    //     <ClasseComponente valor='Valor Alterado'></ClasseComponente> */}
    //     {/* <Pai2></Pai2> */}
    //     {/* <Primeirocomponente titulo='Texto Parametro' /> */}
    //     {/* <CompA valor='valor A' />
    //     <CompB valor='valor B' /> */}
    //     {/* <MultComponentes tag1='Tag Elemento 1' tag2='Tag Elemento 2' /> */}
    //     {/* <Familia sobrenome='Sobre Nome Familia'>
    //         <Pai1 nomepai='Pai 01' />
    //         <Pai1 nomepai='Pai 02' />
    //     </Familia> */}

    // </div>
    , elements)
