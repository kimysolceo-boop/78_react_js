import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
const onLike = () => {
    setLikes((prev) => prev + 1);
};

const onDislike = () => {
    setDislikes((prev) => prev + 1);
};

const onReset = () => {
    setLikes(0);
    setDislikes(0);
};

return (
    <div className="feedback-wrapper">
        <div className="like-wrapper">
            <div className="feedback-result">{likes}</div>
            <Button name="Like" onClick={onLike} />
        </div>

        <div className="dislike-wrapper">
            <Button name="Dislike" onClick={onDislike} />
            <div className="feedback-result">{dislikes}</div>
        </div>

        <div className="reset-wrapper">
    <Button name="Reset Results" onClick={onReset} />
</div>
    </div>
);
}

export default Feedback;