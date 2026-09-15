import "./styles.css";
// Именованный импорт
import { lessonData } from "./data";
function LessonCard() {
  return (
    <div className="lesson-card-wrapper">
      <h3>Lesson {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      <p>{lessonData.teacher_name}</p>
      <img src={lessonData.img_src} />
    </div>
  );
}
export default LessonCard;