import React from 'react'
import Myc from './context.js'

function Gs() {

    return (
        <Myc.Consumer>
            {
                c => <div>{c}</div>
            }
        </ Myc.Consumer>
    )

}

export default Gs;