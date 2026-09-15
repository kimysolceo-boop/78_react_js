// Упрощенный иморт стилей
import "./styles.css"
function Button({name, type="button", onClick}) {
    return <button className="my-button" type={type} onClick={onClick}>{name}</button>
}
// Компоненты экспортируем по умолчанию 
export default Button
