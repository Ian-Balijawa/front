import React from 'react'

function GPMessage() {
  return (
    <div>GPMessage</div>
  )
}

export default GPMessage


// import React from 'react'
// import {Message, SemanticCOLORS, SemanticSIZES} from 'semantic-ui-react'
// type MessageInterface = {
//     color?: SemanticCOLORS
//     compact?: boolean
//     headerText?: string
//     message?: string
//     error?: boolean
//     info?: boolean
//     success?: boolean
//     size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'
//     warning?: boolean
//     visible?: boolean
// }
// export const GPMessage = ({
//     color,
//     compact,
//     headerText,
//     message,
//     error,
//     info,
//     success,
//     size,
//     warning,
//     visible,
// }: MessageInterface) => (
//     <Message
//         color={color}
//         compact={compact}
//         error={error}
//         info={info}
//         success={success}
//         size={size}
//         warning={warning}
//         visible={visible}
//     >
//         <Message.Header>{headerText}</Message.Header>
//         <p>{message}</p>
//     </Message>
// )
