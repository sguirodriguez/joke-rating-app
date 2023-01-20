import {
  validateCellPhone,
  validateCnpj,
  validateCpf,
  validateEmail,
  validatePixRandomKey,
} from "./validator.utils";

export function ignoreCase(str: string) {
  return str.toLowerCase();
}

export const maskCPF = (cpf: string) => {
  try {
    if (cpf === undefined || cpf === null || cpf === "") return cpf;
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  } catch (error) {}
};

export const maskCep = (cep: string) => {
  try {
    if (cep === undefined || cep === null || cep === "") return "";
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/(\d{3})(\d{1,3})$/, "$1-$2");
    return cep;
  } catch (error) {}
};

export function maskDate(date: string) {
  try {
    date = date.replace(/\D/g, "").slice(0, 10);
    date = date.replace(/(\d{2})(\d)/, "$1/$2");
    date = date.replace(/(\d{2})(\d)/, "$1/$2");
    return date;
  } catch (error) {}
}

export const formatPhone = (phone = "") => {
  try {
    if (phone === null || phone === undefined || phone.includes("null"))
      return "";

    phone = phone.replace(/\D/g, "");
    phone = phone.replace(/(\d{0})(\d)/, "($1$2");
    phone = phone.replace(/(\d{2})(\d)/, "$1) $2");
    phone = phone.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    return phone;
  } catch (error) {}
};

export function maskOnlyNumber(text: string) {
  return text.replace(/\D/g, "");
}

export function handleMonetaryMask(value: any) {
  try {
    const isNegative = value.toString().substring(0, 1) == "-" ? "-" : "";
    let monetary = value.replace(/\D/g, "");
    monetary = (monetary / 100).toFixed(2) + "";
    monetary = monetary.replace(".", ",");
    monetary = monetary.replace(/(\d)(\d{3})(\d{3})(\d{3}),/g, "$1.$2.$3.$4,");
    monetary = monetary.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    monetary = monetary.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return `R$ ${isNegative}${monetary}`;
  } catch (error) {}
}

export function handleMonetaryMaskWithRS(value: any) {
  try {
    const isNegative = value.substring(0, 1) == "-" ? "-" : "";
    if (value == "0") {
      return { data: "R$ 0,00", error: null };
    }
    let monetary = value.replace(/\D/g, "");
    monetary = (parseInt(monetary) / 100).toFixed(2);
    monetary = monetary.replace(".", ",");
    monetary = monetary.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    monetary = monetary.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return { data: `R$ ${isNegative}${monetary}`, error: null };
  } catch (error) {
    return { data: "R$ 0,00", error };
  }
}

export function handleMonetaryMaskWithSymbol(value: any, symbol: string) {
  try {
    const isNegative = value.toString().substring(0, 1) == "-" ? "-" : "";
    let monetary = value.toString().replace(/\D/g, "");
    monetary = (parseInt(monetary) / 100).toFixed(2);
    monetary = monetary.replace(".", ",");
    monetary = monetary.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    monetary = monetary.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return `${symbol} ${isNegative}${monetary}`;
  } catch (error) {
    return { error };
  }
}

export function maskCPFeCNPJ(number: string) {
  number = number.replace(/\D/g, "");
  if (number.length > 11) {
    number = number.replace(/^(\d{2})(\d)/, "$1.$2");
    number = number.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    number = number.replace(/\.(\d{3})(\d)/, ".$1/$2");
    number = number.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    number = number.replace(/\D/g, "");
    number = number.replace(/(\d{3})(\d)/, "$1.$2");
    number = number.replace(/(\d{3})(\d)/, "$1.$2");
    number = number.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return number;
}

export function cellsValidate(cells: any, amount: any) {
  let withdrawValid = false;

  try {
    let cellsCalculate: any = [];

    cells.map((cell: any) => {
      if (amount % cell == 0) withdrawValid = true;

      cellsCalculate.push(amount % cell);
    });

    if (cellsCalculate.every((v: any) => v === cellsCalculate[0]))
      withdrawValid = true;

    cellsCalculate.map((value: any) => {
      cells.map((cell: any) => {
        if (value % cell == 0) withdrawValid = true;
      });
    });

    return withdrawValid;
  } catch (error) {
    return withdrawValid;
  }
}

export function solvingBigNumbers(number: number) {
  if (typeof number !== "string") {
    return Number(number / 100).toFixed(2);
  }
  const newValue = number / 100;
  return newValue.toFixed(2);
}

export function maskCardExpiresDate(date: any) {
  try {
    date = date.replace(/\D/g, "").slice(0, 4);
    date = date.replace(/(\d{2})(\d)/, "$1/$2");
    return date;
  } catch (error) {}
}

export function onlyLetters(text: string) {
  try {
    text = text.replace(/([^a-zà-úA-ZÀ-Ú ])/, "");
    return text;
  } catch (error) {}
}

export function onKeyUpSpace(text: string) {
  try {
    text = text.toLowerCase();
    text = text.replace(/\s/g, "");
    text = text.replace(/['"`:;,?/\|!˜#$%ˆ&*()+={}]/g, "");
    text = text.replace(/[àáâãäå]/g, "a");
    text = text.replace(/[èéêë]/g, "e");
    text = text.replace(/[ìíîï]/g, "i");
    text = text.replace(/[òóôõö]/g, "o");
    text = text.replace(/[ùúûü]/g, "u");
    text = text.replace(/[ýÿ]/g, "y");
    text = text.replace(/ñ/g, "n");
    text = text.replace(/æ/g, "ae");
    text = text.replace(/œ/g, "oe");
    return text;
  } catch (error) {}
}

export function onKeyUpSpacePassword(text: string) {
  try {
    text = text.replace(/\s/g, "");
    return text;
  } catch (error) {}
}

export const maskPixKey = (key = "") => {
  const isCpf = validateCpf(key);
  const isCnpj = validateCnpj(key);
  const isEmail = validateEmail(key);
  const isRandomKey = validatePixRandomKey(key);
  const isPhone = validateCellPhone(key);

  if (isCpf) {
    return { key: maskCPF(key), type: "Cpf" };
  }

  if (isCnpj) {
    return { key: maskCPFeCNPJ(key), type: "Cnpj" };
  }

  if (isEmail) {
    return { key, type: "Email" };
  }

  if (isPhone) {
    return { key: formatPhone(key), type: "Phone" };
  }

  if (isRandomKey) {
    return { key, type: "Evp" };
  }

  return { key, type: "" };
};
