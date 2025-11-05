import Image from "next/image";
import Slider from "../components/sections/sliderhero";
import Aboutme from "../components/sections/aboutme";
import Todo from "../components/sections/todo";
import Project from "../components/sections/project";


export default function Home() {
  return (
     <main>
       <Slider />
       <Aboutme />
       <Todo />
       <Project />
    </main>
  );
}
