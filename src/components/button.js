export default function Button({content, style, Icon, onClick, className}){
    return(
        <button onClick={onClick ? onClick : null} style={style} className={className}>{Icon && Icon }{content}</button>
    )
}