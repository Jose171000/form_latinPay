// import Inputs from "../molecules/Inputs";
import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.form_container}>
      <form noValidate>
        <h1>
          Hola, <br />
          bienvenido a latinPay
        </h1>
        <div>
          <p>
            Contáctate con un asesor <a href="#">aquí</a>
          </p>
        </div>
        <div className={style.contenedor}>
          <div>
            <div className={style.input_container}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" autoComplete="off"/>
            </div>

            <div className={style.input_container}>
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email" autoComplete="off"/>
            </div>
          </div>
          <div>
            <div className={style.input_container}>
              <label htmlFor="">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                autoComplete="off"
              />
            </div>

            <div className={style.input_container}>
              <label htmlFor="country">País</label>
              <input type="text" id="country" name="country" autoComplete="off"/>
            </div>
          </div>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
