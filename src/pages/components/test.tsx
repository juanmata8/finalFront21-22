const Test = (param:{param:boolean}) => {
    if(!param.param)
    return (
        <>
        <div>
        muestro el componente {param.param}
        </div>
        </>
    )
     return(
        <>
        no lo muestro</>
    )
    
}
export default Test;