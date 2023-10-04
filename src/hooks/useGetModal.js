import { useEffect, useState } from "react";
import { API_URL, VACANCY_URL } from "../api/api";

export const useGetModal = (id, setErrorGetDataModal) => {
  const [dataModat, setDataModal] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}${VACANCY_URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setDataModal(data);
        setErrorGetDataModal("");
      })
      .catch((error) => {
        setErrorGetDataModal(error.message);
        setDataModal([]);
      });
  }, [id]);
  return { dataModat };
};
