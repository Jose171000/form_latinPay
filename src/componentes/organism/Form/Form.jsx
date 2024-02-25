// import Inputs from "../molecules/Inputs";
import style from "./Form.module.css";
import { useState } from "react";
import { validarFormulario } from "../../../helpers/logicErrorForm";
import "boxicons";
const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [toggle, setToggle] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target?.value,
    });
  };
  const handleBlur = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      console.log([event.target.name]);
      setError({
        ...error,
        [event.target.name]: event.target.value,
      });
    } else {
      validarFormulario(data, setError);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorSubmit = {};
    if (data.name === "") errorSubmit.name = "Debe completar su nombre";
    if (data.email === "") errorSubmit.email = "Debe completar su correo";
    if (data.phone === "")
      errorSubmit.phone = "Debe completar su número de teléfono";
    if (data.country === "")
      errorSubmit.country = "Debe completar su país de origen";

    setError({ ...error, ...errorSubmit });

    if (!error.name && !error.email && !error.phone && !error.country) {
      setToggle(true);
    }
  };
 
  return (
    <div className={style.form_container}>
      <div className={toggle ? style.cortain : style.noCortain}>
        <section>
          <div className={style.imageCortain}>
            <img src="https://latinpay.pe/wp-content/uploads/2023/01/Latinpay-logo.png" alt="latinPay" />
          </div>
          <h1>Bienvenido, {data.name}</h1>
          <span>
            <p>Presiona el siguiente botón para seguir</p>
          </span>
          <a href="https://latinpay.pe/">
          <button>Vamos allá</button>
          </a>
        </section>
      </div>
      <div className={style.left_container}>
        <div className={style.image}>
          <img src="https://latinpay.pe/wp-content/uploads/2023/01/Latinpay-logo.png" alt="latinPay" />
        </div>
        <div>
          <p>
            Contáctate con un asesor <b onClick={props.hideUp} className={style.aqui}>aquí</b>
          </p>
        </div>
      </div>
      <div className={style.rigth_container}>
        <h3>Ingresa tus datos para confirmar tu pedido</h3>
        <div className={style.container_icons}>
          <a href="https://www.facebook.com/LatinPayPe" target="_blank">
            <box-icon type="logo" name="facebook-circle"></box-icon>
          </a>
          <a href="https://www.instagram.com/latinpaype/" target="_blank">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <a href="https://www.linkedin.com/company/latinpay/" target="_blank">
            <box-icon name="linkedin" type="logo"></box-icon>
          </a>
        </div>
        <form noValidate onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputs_container}>
            <div>
              <div className={style.input_container}>
                <input
                  className={error.name ? style.error_input : style.form_input}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  placeholder=" "
                  value={data.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="name"
                  className={error.name ? style.error_label : style.form_label}
                >
                  Nombre
                </label>
                {error.name && (
                  <p className={style.error_message}>{error.name}</p>
                )}
              </div>

              <div className={style.input_container}>
                <input
                  className={error.email ? style.error_input : style.form_input}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={data.email}
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="email"
                  className={error.email ? style.error_label : style.form_label}
                >
                  Correo
                </label>
                {error.email && (
                  <p className={style.error_message}>{error.email}</p>
                )}
              </div>
            </div>
            <div>
              <div className={style.input_container}>
                <input
                  className={error.phone ? style.error_input : style.form_input}
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder=" "
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="phone"
                  className={error.phone ? style.error_label : style.form_label}
                >
                  Teléfono
                </label>
                {error.phone && (
                  <p className={style.error_message}>{error.phone}</p>
                )}
              </div>

              <div className={style.input_container}>
                <input
                  className={
                    error.country ? style.error_input : style.form_input
                  }
                  type="text"
                  id="country"
                  name="country"
                  autoComplete="off"
                  value={data.country}
                  onChange={handleChange}
                  placeholder=" "
                  onBlur={handleBlur}
                />
                <label
                  htmlFor="country"
                  className={
                    error.country ? style.error_label : style.form_label
                  }
                >
                  País
                </label>
                {error.country && (
                  <p className={style.error_message}>{error.country}</p>
                )}
              </div>
            </div>
          </div>
          <div className={style.button_container}>
            <input type="submit" value="Enviar" className={style.button} disabled={!data.name || !data.email || !data.phone || !data.country || error.name || error.email || error.phone || error.country}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
