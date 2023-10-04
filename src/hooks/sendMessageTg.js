import { BOT_TOKEN, USER_ID } from "../api/api";

export const sendMessageTg = (text) => {
  const urlBot = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&`;

  fetch(urlBot)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e.message));
};
