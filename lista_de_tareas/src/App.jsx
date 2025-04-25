import { useState } from "react";
import "./App.css";
import StatusTareas from "./components/StatusTareas";

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "Aprender ",
      estado: "todo", //indev - done
    },
    {
      id: 2,
      nombre: "Aprender angular",
      estado: "todo",
    },
    {
      id: 3,
      nombre: "Aprender java",
      estado: "done", //indev - done
    },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");
  const registrarTarea = () => {
    if (nuevaTarea.trim() === "") {
      alert("Debes ingreser una tarea");
      return;
    }
    setTareas([
      ...tareas,
      {
        id: tareas.length + 1,
        nombre: nuevaTarea,
        estado: todo,
      },
    ]);
    setNuevaTarea("");
  };

  return (
    <>
      <div>
        {" "}
        <h2>Nueva tarea: </h2>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe aqui tu tarea"
          style={{ width: "30%", padding: "10px", bordeRadius: "4px" }}
        />
        <button
          onClick={() => registrarTarea}
          style={{
            marginLeft: "10px",
            padding: "5px",
          }}
        >
          Registrar Tarea{" "}
        </button>
      </div>
      <div>
        <h2>Estado de Tereas: </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            width: "100%",
          }}
        >
          <StatusTareas tareas={tareas} status="todo" color={"red"} />
          <StatusTareas tareas={tareas} status="indev" color={"green"} />
          <StatusTareas tareas={tareas} status="done" color={"yellow"} />
        </div>
      </div>
    </>
  );
}

export default App;
