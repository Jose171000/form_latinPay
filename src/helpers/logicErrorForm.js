const validarFormulario = (data, setError) => {
  const errorPhrases = {
    name:"",
    phone:"",
    email:"",
    country:"",
  };
  if (data.name) {
    let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/u;
    if (regex.test(data.name)) {
      if (data.name.length > 30) {
        errorPhrases.name = "Tu nombre es muy extenso";
      }
    } else {
      errorPhrases.name = "tu nombre solo debe contener letras";
    }
  }
  if (data.phone) {
    if (!/\D/.test(data.phone)) {
      if (data.phone.length > 9) {
        errorPhrases.phone = "Solo 9 dígitos en tu teléfono";
      }
    } else {
      errorPhrases.phone = "Digita solo números";
    }
  }
  if (data.email) {
    const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexCorreoElectronico.test(data.email)) {
      if (data.email.length > 50) {
        errorPhrases.email =
          "Tu correo es muy extenso, parece que te confundiste";
      }
    } else {
      errorPhrases.email = "Digite su correo de forma correcta";
    }
  }
  if (data.country) {
    const regexCountries = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;
    if (regexCountries.test(data.country)) {
      if (data.country.length > 46) {
        errorPhrases.country = "El nombre de tu país es muy extenso";
      }
    } else {
      errorPhrases.country =
        "El nombre de tu país debe contener solo letras";
    }
  }
  setError(errorPhrases);
  return errorPhrases;
};

export { validarFormulario };
