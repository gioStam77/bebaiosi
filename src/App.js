import { useState, useRef } from "react";
import "./App.css";
import Bebaiosi from "./components/Bebaiosi";
import { useReactToPrint } from "react-to-print";

function App() {
  const [dataloaded, setDataLoaded] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  function addDataHandler(data) {
    setDataLoaded(data);
  }

  return (
    <>
      <div>
        <Bebaiosi onAddData={addDataHandler} />
      </div>
      <button className="btn" onClick={handlePrint}>
        print
      </button>
      <div className="container" ref={componentRef}>
        <div className="bebaiosi">
          <h3>ΑΔΑ¨ΒΕΑ10Ξ7Μ-8Φ6</h3>
          <h2>ΒΕΒΑΙΩΣΗ</h2>
          <p>
            O κάτωθι υπογεγραμμένος οπτικός {dataloaded.optikos + " "}
            που διατηρώ κατάστημα οπτικών επί της οδού ΤΡΙΟΒΑΣΑΛΟΣ ΜΗΛΟΥ ,
            βεβαιώνω ότι εκτέλεσα επακριβώς την από {dataloaded.day} ιατρική
            γνωμάτευση του οφθαλμιάτρου {dataloaded.doctor} για τον ασφαλισμένο{" "}
            {dataloaded.asfalismenos} με ΑΜΚΑ {dataloaded.amka + " "} και
            παρέδωσα στον ανωτέρω ασφαλισμένο ΓΥΑΛΙΑ ΟΡΑΣΕΩΣ εκδίδοντας την
            Απόδειξη Παροχής Υπηρεσιών νούμερο {dataloaded.apodeixi}.<br />
            Βεβαιώνω ότι το ανωτέρω χορηγούμενο είδος φέρει πιστοποίηση
            καταλληλότητας CE.
            <h4 style={{ paddingLeft: "65px" }}>Ο ΟΠΤΙΚΟΣ</h4>
            <img src="/sfragida.png" alt="σφαραγίδα" width="200" />
          </p>
        </div>
        <div className="apodeixi">
          <img className="logo" src="/ocellus_logo.png" width="140"></img>
          <h2>ΑΠΟΔΕΙΞΗ ΕΙΣΠΡΑΞΗΣ</h2>
          <h4>ΗΜΕΡΟΜΗΝΙΑ {dataloaded.day}</h4>
          <p>
            Ο/Η {dataloaded.asfalismenos} ασφαλισμένος του {dataloaded.tameio}
            κατέβαλε το ποσό των {dataloaded.poso}{" "}
            €(......................................................................
            ) για την αγορά:
            <br />
          </p>
          <ul>
            {dataloaded.selected === "1" && (
              <li>
                Γυαλιά οράσεως μακρινά με σκελετό{" "}
                {parseInt(dataloaded.poso) / 2}€ και φακούς
                {parseInt(dataloaded.poso) / 2}€
              </li>
            )}
            {dataloaded.selected === "2" && (
              <li>
                Γυαλιά οράσεως κοντινά με σκελετό{" "}
                {parseInt(dataloaded.poso) / 2}€ και φακούς
                {parseInt(dataloaded.poso) / 2}€
              </li>
            )}
            {dataloaded.selected === "3" && (
              <li>Φακούς επαφής {dataloaded.poso}€</li>
            )}
            )
          </ul>
          Αριθμός Αποδειξης:
          {dataloaded.apodeixi}{" "}
          <div>
            <h3>Yπογραφή</h3>
            <img src="/sfragida.png" alt="σφαραγίδα" width="200" />
          </div>
          <h3>ΒΕΒΑΙΩΝΕΤΑΙ ΟΤΙ:</h3>{" "}
          <ul className="telos">
            <li>Η ΣΥΝΤΑΓΗ ΤΟΥ ΙΑΤΡΟΥ ΕΚΤΕΛΕΣΤΗΚΕ ΕΠΑΚΡΙΒΩΣ</li>
            <li>
              ΤΑ ΓΥΑΛΙΑ ΟΡΑΣΕΩΣ,ΣΚΕΛΕΤΟΣ ΚΑΙ ΟΦΘΑΛΜΙΚΟΙ ΦΑΚΟΙ,ΟΠΩΣ ΚΑΙ ΟΙ ΦΑΚΟΙ
              ΕΠΑΦΗΣ ΕΙΝΑΙ ΠΡΟΪΟΝΤΑ ΣΥΜΦΩΝΑ ΜΕ ΤΙΣ ΔΙΑΤΑΞΕΙΣ ΤΗΣ ΕΥΡΩΠΑΪΚΗΣ
              ΕΝΩΣΗΣ ΚΑΙ ΠΛΗΡΟΥΝ ΤΟΥ ΚΑΝΟΝΕΣ ΚΑΙ ΤΟΥΣ ΟΡΟΥΣ ΤΗΣ ΣΦΡΑΓΙΔΑΣ
              ΠΙΣΤΟΠΟΙΗΣΗΣ <span>CE</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
