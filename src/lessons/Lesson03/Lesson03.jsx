import { v7 } from "uuid";
import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalsData } from "./data";
import Button from "../../components/Button/Button";
function Lesson03() {
  // Метод map позволяет выполнять какое-то действие с каждым элементом массива
  // при этом он возвращает новый массив (обязательно должен быть return)
  //   Как результат мы здесь получим массив компонентов(JSX)
  // const animals = animalsData.map((animal, index, array) => {
  const animals = animalsData.map((animal, index) => {
    return (
      <AnimalCard
        key={v7()}
        name={`${index + 1} - ${animal.name}`}
        species={animal.species}
        imgSrc={animal.image}
      />
    );
  });
    const showMessage = () => {
    alert("Hello");
  };
  return (
    <div className="lesson03-wrapper">
      <Button name="Show Message" onClick={showMessage} />
      {/* Задание: отобразить две карточки  AnimalCard передав значения
    пропсов, используя данные из файла data.js*/}
      {/* <AnimalCard
        name={animalsData[0].name}
        species={animalsData[0].species}
        imgSrc={animalsData[0].image}
      />
      <AnimalCard
        name={animalsData[1].name}
        species={animalsData[1].species}
        imgSrc={animalsData[1].image}
      /> */}
      {animals}
    </div>
  );
}
export default Lesson03;


