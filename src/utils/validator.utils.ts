import moment from "moment";

export function validateHasUppercase(text: string) {
  const hasUppercaseRegex = /.*[A-Z]+.*/g;
  return hasUppercaseRegex.test(text);
}

export function validateHasLowercase(text: string) {
  const hasLowercaseRegex = /.*[a-z]+.*/g;
  return hasLowercaseRegex.test(text);
}

export function validateHasNumber(text: string) {
  const hasNumberRegex = /.*[0-9]+.*/g;
  return hasNumberRegex.test(text);
}

export function validateMinLength(text: string, minLength: number) {
  return text.length >= minLength;
}

export function validateSpecialCharacters(text: string) {
  const hasSpecialCharacters = /[^A-Za-z0-9]/g;
  return hasSpecialCharacters.test(text);
}

export function isValidPassword(password: string) {
  try {
    if (
      validateSpecialCharacters(password) &&
      validateHasUppercase(password) &&
      validateHasLowercase(password) &&
      validateHasNumber(password) &&
      validateMinLength(password, 8)
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {}
}

export function nameIsValid(name: string) {
  return /^([A-Za-z&áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}\s){1}([A-Za-z&áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{1,}\s?){1,}$/.test(
    name
  );
}

export const cleanDocument = (value: string) => {
  let document = value.replace(/\./g, "");
  document = document.replace(/-/g, "");
  document = document.replace(/\//g, "");
  return document;
};

export function isValidDate(dateOfBirth: any) {
  try {
    let date = dateOfBirth;
    const ardt = date.split("/");
    const ExpReg = new RegExp(
      "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}"
    );

    let error = false;

    if (date.search(ExpReg) == -1) {
      error = true;
    } else if (
      (ardt[1] == 4 || ardt[1] == 6 || ardt[1] == 9 || ardt[1] == 11) &&
      ardt[0] > 30
    ) {
      error = true;
    } else if (ardt[1] == 2) {
      if (ardt[0] > 28 && ardt[2] % 4 != 0) {
        error = true;
      }

      if (ardt[0] > 29 && ardt[2] % 4 == 0) {
        error = true;
      }
    }

    if (error) return false;
    return true;
  } catch (error) {}
}

export function validateEmail(email: string) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export const verifyCardFlag = (cardNumber: any) => {
  if (!cardNumber) return false;

  cardNumber = cardNumber.replace(/[^0-9]+/g, "");

  const cards: any = {
    visa: /^4[0-9]{12}(?:[0-9]{3})/,
    mastercard: /^5[1-5][0-9]{14}/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    amex: /^3[47][0-9]{13}/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    aura: /^(5078\d{2})(\d{2})(\d{11})$/,
  };

  for (let flag in cards) {
    if (cards[flag].test(cardNumber)) {
      return flag;
    }
  }
  return false;
};

export const validateCpf = (inputCPF: string) => {
  let soma = 0;
  let resto;
  let i;

  if (inputCPF == "00000000000") return false;
  for (i = 1; i <= 9; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
};

export const validateInstagramUsername = (username: string) => {
  try {
    const isValid = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(username);
    return isValid;
  } catch (error) {}
};

export const validateCnpj = (cnpj: string) => {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros: any = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i: any = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado: any = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
};

export const validateOlderThenEighting = (birthday = "00/00/0000") => {
  const split = birthday.split("/");
  const newBirthday = split[2] + "-" + split[1] + "-" + split[0];
  const years = moment().diff(newBirthday, "years");
  if (years < 18) {
    return false;
  }
  return true;
};

export const validatePixRandomKey = (key = "") => {
  const reg = new RegExp("^[0-9]+$");
  const onlyNumber = reg.test(key);
  if (key.length < 36) {
    return false;
  }

  if (onlyNumber) {
    return false;
  }

  const keySplit = key.split("-");
  if (keySplit.length !== 5) {
    return false;
  }

  return true;
};

export const validateCellPhone = (phone = "") => {
  const reg = new RegExp("^[0-9]+$");
  const onlyNumber = reg.test(phone);
  if (!onlyNumber) {
    return false;
  }

  if (phone.length !== 11) {
    return false;
  }
  return true;
};
