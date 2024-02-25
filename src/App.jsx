import { useState } from "react";
import style from "./App.module.css";
import Form from "./componentes/organism/Form/Form";
import FormAsesor from "./componentes/organism/FormAsesor/FormAsesor";

function App() {
  const [hideUp, setHideUp] = useState(true);
  const toggleUp = () => {
    console.log("hOla mundo");
    setHideUp(!hideUp);
  };
  return (
    <div className={style.form_container}>
      <div className={hideUp ? style.buyingForm : style.asesorForm}>
        <Form hideUp={toggleUp} />
      </div>
      <div className={!hideUp ? style.buyingForm : style.asesorForm}>
        <FormAsesor hideUp={toggleUp} />
      </div>
    </div>
  );
}

export default App;
