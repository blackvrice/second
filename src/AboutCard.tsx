import React from "react";
export default ({className, content} : {className:string, content : any}) => {
    return (
        <div className={className}>
            content
        </div>
    )
}