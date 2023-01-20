import { request } from "../config/request";

export const signIn = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        token: "219321hijsndu2ub23iu2j1b312321",
        investor: {
          name: "Samuel Ribeiro",
          email: "guilherme.engr@gmail.com",
        },
        twoFactor: false,
        investorPlan: "basic",
      },
    });
  });
};

export const getBanks = async () => {
  const { data, error } = await request({
    method: "GET",
    path: "investor/banks",
  });
  console.log("o que ta vindo", data, error);
};
