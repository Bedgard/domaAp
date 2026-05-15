import { useState, useEffect } from "react";
import { DayPicker } from "@daypicker/react";
import "../styles/Calendar.css";
import "@daypicker/react/style.css";

function Calendar({ datas }) {
  // sélection actuelle
  const [selected, setSelected] = useState();
  const [error, setError] = useState("");
  const [success, SetSucces] = useState(false);

  // réservations sauvegardées
  const [reservations, setReservations] = useState([]);

  //   vérifier que tout le formulaire est rempli

  const isFormInvalid = Object.values(datas).some((value) => value === "");

  // reset de la sélection
  const resetSelection = () => {
    setSelected(undefined);
  };

  // sauvegarde de la réservation
  const saveReservation = () => {
    // vérifie qu'il y a une date début et fin
    if (!selected?.from || !selected?.to) return;
    if (isFormInvalid) {
      setError("Veuillez remplir le formulaire d'inscription");
      setTimeout(() => setError(""), 3000);
      return;
    }

    const newReservation = {
      firstName: datas.firstName,
      lastName: datas.lastName,
      service: datas.service,
      from: selected.from.toLocaleDateString(),
      to: selected.to.toLocaleDateString(),
    };

    setReservations((prev) => [...prev, newReservation]);
    SetSucces(true);
    setTimeout(() => {
      SetSucces(false);
    }, 3000);
    resetSelection();
  };

  // console.log seulement quand reservations change
  useEffect(() => {
    console.table(reservations);
  }, [reservations]);

  return (
    <>
      {error && <p className="error-form">{error}</p>}
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={setSelected}
        navLayout="around"
      />

      <div className="button-calendar">
        <button onClick={resetSelection}>Reset</button>
        <button onClick={saveReservation}>Enregistrer</button>
      </div>
      {success && (
        <p className="registration-completed">
          Vous êtes un membre de l'équipe ! ✅
        </p>
      )}
    </>
  );
}

export default Calendar;
