import React, { useRef, useState } from "react";

function Bebaiosi(props) {
  // const [data, setdata] = useState([]);

  const nameRef = useRef();
  const dayRef = useRef();
  const apodixiRef = useRef();
  const amkaRef = useRef();
  const asfalismenosRef = useRef();
  const doctorRef = useRef();
  const tameioRef = useRef();
  const posoRef = useRef();
  const selectedRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredDay = dayRef.current.value;
    const enteredApodixi = apodixiRef.current.value;
    const enteredPoso = posoRef.current.value;
    const enteredAMKA = amkaRef.current.value;
    const enteredAsfalismenos = asfalismenosRef.current.value;
    const enteredDoctor = doctorRef.current.value;
    const enteredTameio = tameioRef.current.value;
    const clickedSelectedRef = selectedRef.current.value;

    const data = {
      optikos: enteredName,
      day: enteredDay,
      doctor: enteredDoctor,
      asfalismenos: enteredAsfalismenos,
      amka: enteredAMKA,
      apodeixi: enteredApodixi,
      poso: enteredPoso,
      tameio: enteredTameio,
      selected: clickedSelectedRef,
    };
    // setdata(data);
    props.onAddData(data);
    // window.print();

    // console.table(bebaiosi);
    // alert(JSON.stringify(bebaiosi));
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            ref={nameRef}
            placeholder="όνομα οπτικού"
          />
          <input
            type="text"
            name="day"
            ref={dayRef}
            placeholder="ημερομηνία-γνωμάτευσης"
          />
          <input
            type="text"
            name="doctor"
            ref={doctorRef}
            placeholder="ιατρός"
          />
          <input
            type="text"
            name="asfalismenos"
            ref={asfalismenosRef}
            placeholder="ασφαλισμένος "
          />
          <input
            type="text"
            name="tameio"
            ref={tameioRef}
            placeholder=" ασφαλιστικό ταμείο "
          />
          <input type="number" name="amka" ref={amkaRef} placeholder="AMKA " />
          <select ref={selectedRef}>
            <option value="1">Γυαλιά Οράσεως Μακρινά</option>
            <option value="2">Γυαλιά Οράσεως Κοντινά</option>
            <option value="3">Φακοί Επαφής</option>
          </select>
          <input
            type="number"
            name="a.apodixis"
            ref={apodixiRef}
            placeholder="Aρ. Απόδειξης "
          />
          <input type="number" name="poso" ref={posoRef} placeholder="ποσό " />
          <input
            style={{ width: "80px", margin: "5px" }}
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </>
  );
}

export default Bebaiosi;
