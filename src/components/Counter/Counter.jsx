import "./styles.css"

function Counter({ count = 0, onMinusClick, onPlusClick }) {
    return (
        <div className="counter">
            <button className="counter-button" onClick={onMinusClick}>
                -
            </button>

            <div className="count">{count}</div>

            <button className="counter-button" onClick={onPlusClick}>
                +
            </button>
        </div>
    );
}

export default Counter