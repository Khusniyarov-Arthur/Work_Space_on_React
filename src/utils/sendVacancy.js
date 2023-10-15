import { API_URL, VACANCY_URL } from "../api/api";

export const sendVacancy = (data) => {
  fetch(`${API_URL}${VACANCY_URL}`, {
    method: "POST",
    body: data,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка ${res.status}`);
      }
      return res.json();
    })

    .catch((e) => console.log(e.message));
};
