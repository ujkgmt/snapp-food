const Button = (props)=>{
    const buttonStyles={
        
            backgroundColor: "#ff00a6",
            padding: ".7rem .4rem",
            border: "none",
            borderRadius: ".5rem" ,
            color: "white",
            marginRight: ".7rem",
        
    }
    return(
        <button className={props.className} style={buttonStyles} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button