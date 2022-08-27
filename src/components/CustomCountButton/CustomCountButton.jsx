import React, {useState} from 'react'
import {faPlus, faMinus, faCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CustomCountButton = ({onCount}) => {
    const [count, setCount] = useState(0)

    return (
        <div style={styles.main}>
            <div style={styles.boxLong}>{count}</div>

            <div
                style={styles.boxSm}
                onClick={() => {
                    count < 100 && setCount(count + 1)
                    onCount()
                }}
            >
                <FontAwesomeIcon icon={faCircle} style={{color: '#56AE57'}} />
            </div>
        </div>
    )
}

export default CustomCountButton

const styles = {
    main: {
        width: '160px',
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFE5DC',
        padding: '4px',
    },
    boxSm: {
        padding: '2px',
        background: '#ffff',
        height: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px solid #7A7A7A',
    },
    boxLong: {
        background: '#ffff',
        width: '128px',
        height: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px solid #7A7A7A',
    },
}
