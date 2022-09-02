import '../../css/entry.css'

const Entry = (props) =>{
    return(
        <div className="control">
            <input type={props.type} placeholder={props.name} value={props.value}/>
            <p>{props.error}</p>
        </div>
    )
}

export default Entry