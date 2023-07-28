import './Button.css';
export default function Button(props){
    let res=""
    let text=props.text
    if(props.variant) res+=" " +props.variant
    if(props.hvr) res+=" "+props.hvr
    if(props.disableShadow) res+="  no-shadow"
    if(props.disabled){
        text="Disabled"
        res+=" disabled"
    }
    if(props.color && !props.disabled){
        res+=" "+props.color 
    }
    if(props.size){
        res+=" "+props.size
    }
    let startIcon=""
    if(props.startIcon){
        startIcon=<img src={`${props.startIcon}.svg`}/>
    }
    let endIcon=""
    if(props.endIcon){
        endIcon=<img src={`${props.endIcon}.svg`}/>
    }

    
    return( <button className={`btn${res}`}>{startIcon}{text}{endIcon}</button>)
}
Button.defaultProps={
    text:"Default",
    size:"md"
    
}
// ${props.variant} ${props.hvr} ${props.disableShadow?"no-shadow":null}