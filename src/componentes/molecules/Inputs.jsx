const Inputs = (props) =>{
    return(
        <div>
            <label htmlFor={`${props.name}`}>{props.value}</label>
            <input type={`${props.type}`} name={`${props.name}`} />
        </div>
    )
}

export default Inputs;