import React from 'react'
import Myc from './context.js'

function Gs() {

    const val = React.useContext(Myc)

    return (
        <>
            <Myc.Consumer>
                {
                    c => <div>{c}</div>
                }

            </ Myc.Consumer>

            <br />

            <h1>{val}</h1>

        </>

    )

}

export default Gs;