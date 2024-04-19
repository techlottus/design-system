import React, { useState } from "react";
import AccordionList from "../components/Accordion/AccordionList"
import mdx from "../components/Accordion/AccordionList.mdx"
import cn from "classnames"

export default {
  title: "ORGANISMS/AccordionList",
  component: AccordionList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Template = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(100);      
    }
    else {setClicked(index)}
  };
  return (
    <AccordionList>
      <AccordionList.Item >
        <AccordionList.Button  
        open={clicked==0} 
        className="flex justify-between border-primary-500" 
        variant="outlined" 
        onClick={()=>handleToggle(0)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==0)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==0}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item>
        <AccordionList.Button  
        open={clicked==1}
        className="flex justify-between border-primary-500" 
        variant="outlined" 
        onClick={()=>handleToggle(1)}>
          <div className="flex space-x-2.5  order-1 w-full">
            <span className="font-icons-outlined text-lg text-surface-300">person</span>
             <span className="font-bold font-texts">Title</span>
          </div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>
            {(clicked==1)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}
          </div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==1}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  
        open={clicked==2} 
        className="flex justify-between border-primary-500" 
        variant="outlined" 
        onClick={()=>handleToggle(2)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==2)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==2}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>

    </AccordionList>

  )
};
const Template2 = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(100);      
    }
    else {setClicked(index)}
  };
  return (
    <AccordionList>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==0} className="flex justify-between " variant="solid" onClick={()=>handleToggle(0)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==0)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==0}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==1} className="flex justify-between " variant="solid" onClick={()=>handleToggle(1)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==1)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==1}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item>
        <AccordionList.Button open={clicked==2} className="flex justify-between " variant="solid" onClick={()=>handleToggle(2)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==2)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==2}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>

    </AccordionList>

  )
};
const Template3 = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(100);      
    }
    else {setClicked(index)}
  };
  return (
    <div className="flex-col space-y-2 p-1">
     <h3 className="fonts-texts text-lg">Preguntas frecuentes</h3> 
    <AccordionList>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==0} className="flex justify-between " variant="solid" onClick={()=>handleToggle(0)}>
          <div><span className="font-texts">¿Cuándo inician mis clases?</span></div>
          <div >
            {(clicked==0)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==0}>
        Consideramos que todo aquél o aquella que haya terminado con éxito sus estudios de educación media superior,
         tiene derecho a acceder a la educación superior, por lo cual no realizamos exámenes de admisión. Sin embargo, 
         todos los alumnos de nuevo ingreso deben realizar una evaluación diagnóstica. Este diagnóstico nos permite identificar
          las áreas de oportunidad en los ámbitos de la lógica matemática y en español. Una vez que el alumno logra la permanencia en
           nuestro centro participa en cursos de nivelación para cada área de oportunidad.
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==1} className="flex justify-between " variant="solid" onClick={()=>handleToggle(1)}>
          <div><span className="font-texts">¿Cuál navegador es el indicado para acceder la aula virtual ? </span></div>
          <div >
            {(clicked==1)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==1}>
        Consideramos que todo aquél o aquella que haya terminado con éxito sus estudios de educación media superior,
         tiene derecho a acceder a la educación superior, por lo cual no realizamos exámenes de admisión. Sin embargo, 
         todos los alumnos de nuevo ingreso deben realizar una evaluación diagnóstica. Este diagnóstico nos permite identificar
          las áreas de oportunidad en los ámbitos de la lógica matemática y en español. Una vez que el alumno logra la permanencia en
           nuestro centro participa en cursos de nivelación para cada área de oportunidad.
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==2} className="flex justify-between " variant="solid" onClick={()=>handleToggle(2)}>
          <div><span className="font-texts">¿Hay una fecha límite para entregar mis actividades?, ¿Dónde puedo consultarla? </span></div>
          <div >
            {(clicked==2)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==2}>
        Consideramos que todo aquél o aquella que haya terminado con éxito sus estudios de educación media superior,
         tiene derecho a acceder a la educación superior, por lo cual no realizamos exámenes de admisión. Sin embargo, 
         todos los alumnos de nuevo ingreso deben realizar una evaluación diagnóstica. Este diagnóstico nos permite identificar
          las áreas de oportunidad en los ámbitos de la lógica matemática y en español. Una vez que el alumno logra la permanencia en
           nuestro centro participa en cursos de nivelación para cada área de oportunidad.
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==3} className="flex justify-between " variant="solid" onClick={()=>handleToggle(3)}>
          <div><span className="font-texts">Tuve un problema con un profesor ¿Qué puedo hacer?  </span></div>
          <div >
            {(clicked==3)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==3}>
        Consideramos que todo aquél o aquella que haya terminado con éxito sus estudios de educación media superior,
         tiene derecho a acceder a la educación superior, por lo cual no realizamos exámenes de admisión. Sin embargo, 
         todos los alumnos de nuevo ingreso deben realizar una evaluación diagnóstica. Este diagnóstico nos permite identificar
          las áreas de oportunidad en los ámbitos de la lógica matemática y en español. Una vez que el alumno logra la permanencia en
           nuestro centro participa en cursos de nivelación para cada área de oportunidad.
        </AccordionList.Panel>
      </AccordionList.Item>

    </AccordionList>
</div>
  )
};
const Template4 = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(100);      
    }
    else {setClicked(index)}
  };
  return (
    <div className="flex-col space-y-2 p-1">
     <h3 className="fonts-texts text-lg font-bold">Contenido del curso</h3> 
    <AccordionList>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==0} className="flex justify-between border-primary-500 " variant="outlined" onClick={()=>handleToggle(0)}>
          <div className="text-surface-400">Área curricular</div>
          <div >
            {(clicked==0)?<span className="font-icons-solid w-6 h-6 bg-primary-500 text-surface-50">expand_less</span>:<span className="font-icons-solid w-6 h-6 bg-primary-500 text-surface-50">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel className="border-0" open={clicked==0}>
          <ul>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Fundamentos de matemáticas</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Teoría general de la Administración</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Interpretación de textos y contextos</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Economía genera</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
          </ul>       
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==0} className="flex justify-between border-warning-500 " variant="outlined" onClick={()=>handleToggle(0)}>
          <div className="text-surface-400">Área disicplinar</div>
          <div >
            {(clicked==0)?<span className="font-icons-solid w-6 h-6 bg-warning-500 text-surface-50">expand_less</span>:<span className="font-icons-solid w-6 h-6 bg-warning-500 text-surface-50">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel className="border-0" open={clicked==0}>
          <ul>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Fundamentos de matemáticas</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Teoría general de la Administración</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Interpretación de textos y contextos</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Economía genera</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
          </ul>       
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item >
        <AccordionList.Button  open={clicked==0} className="flex justify-between border-info-500 " variant="outlined" onClick={()=>handleToggle(0)}>
          <div className="text-surface-400">Área profesional</div>
          <div >
            {(clicked==0)?<span className="font-icons-solid w-6 h-6 bg-info-500 text-surface-50">expand_less</span>:<span className="font-icons-solid w-6 h-6 bg-info-500 text-surface-50">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel className="border-0" open={clicked==0}>
          <ul>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Fundamentos de matemáticas</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Teoría general de la Administración</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Interpretación de textos y contextos</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
            <li className="border-b border-surface-300 last:border-0 p-2">
              <span className="font-texts text-surface-300">Economía genera</span><span className="font-icons-solid text-surface-300">more_horiz</span>
            </li>
          </ul>       
        </AccordionList.Panel>
      </AccordionList.Item>


    </AccordionList>
</div>
  )
};


const AccordionExample = Template.bind();
const AccordionExample2 = Template2.bind();
const AccordionFAQ = Template3.bind();
const AccordionCursos = Template4.bind();

export { AccordionExample, AccordionExample2,AccordionFAQ,AccordionCursos};