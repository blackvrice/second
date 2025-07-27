import React from "react";
export default ({className, content} : {className:string, content : React.JSX.Element}) => {
    return (
        <div className={className}>
            {content}
        </div>
    )
}