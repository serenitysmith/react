import React from "react"


export default function Body(props) {
    return (
        <section>
            {/* adddded props to body */}
            <h1>Welcome Back, {props.user}!</h1>
        </section>
    )
}
