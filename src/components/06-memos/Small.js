import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log("small llamada")
    return (
        <small>
            {value}
        </small>
    )
});
