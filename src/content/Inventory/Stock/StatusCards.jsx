function StatusCard({status, value}) {
    return (
        <div
            style={{
                boxShadow: ' 0px 3px 17px 1px rgba(84, 84, 84, 0.06)',
                border: 'none',
                marginRight: '5px',
                width: '244px',
                height: '75px',
                borderRadius: '6px',
                padding: '20px',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                paddingTop: '1rem',
            }}
        >
            <p
                style={{
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#7A7A7A',
                    marginBottom: '0.5rem',
                    marginTop: '1rem',
                }}
            >
                {status}
            </p>
            <p
                style={{
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    color: '#00000',
                }}
            >
                {value}
            </p>
        </div>
    )
}

export default StatusCard

export const StatusCardWrapper = ({children}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            {children}
        </div>
    )
}
