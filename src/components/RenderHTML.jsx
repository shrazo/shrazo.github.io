import React from 'react'

const RenderHTML = ({content, display}) => {
    return (
        <div style={{ wordWrap: 'break-word', display: display?display:'block' }}>
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default RenderHTML