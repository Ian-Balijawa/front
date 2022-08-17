import React, { useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomOrderIncreamentAction = ({ onIncreament, onDecreament, record }) => {

    const [count, setCount] = useState(0)

    return (
        <div style={styles.main} >

            <div
                style={styles.boxSm}
                onClick={() => {
                    count > 1 && setCount(count - 1)
                    onDecreament()
                }}>
                <FontAwesomeIcon icon={faMinus} />
            </div>

            <div style={styles.boxLong}>
                {count}
            </div>

            <div
                style={styles.boxSm}
                onClick={() => {
                    count < 100 && setCount(count + 1)
                    onIncreament()
                }}>
                <FontAwesomeIcon icon={faPlus} />
            </div>


        </div>
    )
}

export default CustomOrderIncreamentAction

const styles = {
    main: {
        width: "160px",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    boxSm: {
        width: "24px",
        height: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid #7A7A7A",
        borderRadius: "3px"
    },
    boxLong: {
        width: "104px",
        height: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid #7A7A7A",
        borderRadius: "3px"
    }

}