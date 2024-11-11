interface ButtonProp {
    onBtnClick: ()=>void
    value: string
    color: string
}


const Button = ({onBtnClick, value, color}: ButtonProp)=> {
    return (
        <>
        <div className="flex flex-col">
            
                <button  onClick={onBtnClick} className={`${color} rounded py-2 px-6 text-white mt-4`} >{value}</button>
        </div>
        </>
    )
}

export default Button;

// bg-green-600