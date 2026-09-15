import AnimalCard from "../../components/AnimalCard/AnimalCard";
import LessonCard from "../../components/LessonCard/LessonCard";
import "./styles.css";
import { lionData, zebraData } from "./data";
function Lesson02() {
  return (
    <div className="lesson02-wrapper">
      <LessonCard />
      <LessonCard />
      <AnimalCard
        name={lionData.name}
        species={lionData.species}
        imgSrc={lionData.image}
      />
      <AnimalCard
        name={zebraData.name}
        species={zebraData.species}
        imgSrc={zebraData.image}
      >
        <p>Best Friend</p>
        <img src="https://png.pngtree.com/png-vector/20240819/ourmid/pngtree-lion-alex-png-image_13245261.png"/>
      </AnimalCard>
    </div>
  );
}
export default Lesson02;