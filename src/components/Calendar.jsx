import { useState, useEffect } from "react";
import { DayPicker } from "@daypicker/react";
import "../styles/Calendar.css";
import "@daypicker/react/style.css";

function Calendar() {
  // sélection actuelle
  const [selected, setSelected] = useState();

  // réservations sauvegardées
  const [reservations, setReservations] = useState([]);

  // reset de la sélection
  const resetSelection = () => {
    setSelected(undefined);
  };

  // sauvegarde de la réservation
  const saveReservation = () => {
    // vérifie qu'il y a une date début et fin
    if (!selected?.from || !selected?.to) return;

    const newReservation = {
      from: selected.from.toLocaleDateString(),
      to: selected.to.toLocaleDateString(),
    };
    setReservations((prev) => [...prev, newReservation]);

    resetSelection();
  };

  // console.log seulement quand reservations change
  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  return (
    <>
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
    </>
  );
}

export default Calendar;
