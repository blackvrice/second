import React from "react";
export default ({className, content} : {className:string, content : Element}) => {
    return (
        <div className={className}>
            content
        </div>
    )
}