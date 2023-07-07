import React, { useState } from "react";
import getRandomDigits from "../../components/getRandomDigits";
import angaTerakhirData from "../../components/angaTerakhirData";

function TogelPage() {
  const [angkaTerakhir, setAngkaTerakhir] = useState("");
  const [berapaDigit, setBerapaDigit] = useState("");
  const [berapaGenerate, setBerapaGenerate] = useState("");
  const [hasilGenerate, setHasilGenerate] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [pasaran, setPasaran] = useState("");
  const [hasilPasaran, setHasilPasaran] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);

  const handleAngkaTerakhirChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "" || (inputValue >= 0 && inputValue <= 9)) {
      setAngkaTerakhir(inputValue);
    }
  };

  const handleBerapaDigitChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue >= 0 && inputValue <= 7) {
      setBerapaDigit(inputValue);
    }
  };

  const handleBerapaGenerateChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue >= 0 && inputValue <= 1000) {
      setBerapaGenerate(inputValue);
    }
  };

  const handlePasaranChange = (event) => {
    const inputValue = event.target.value;
    const isValidInput = /^[a-zA-Z]*$/.test(inputValue);
    if (isValidInput) {
      setPasaran(inputValue);
    }
  };

  const handleGenerateClick = (event) => {
    event.preventDefault();
    if (angkaTerakhir in angaTerakhirData) {
      if (pasaran.trim() === "") {
        setErrorMessage("Pasaran tidak boleh kosong");
        setHasilGenerate([]);
        setHasilPasaran("");
        setDownloadLink(null);
      } else {
        const selectedNumber = angaTerakhirData[angkaTerakhir];
        const generatedResults = [];
        for (let i = 0; i < berapaGenerate; i++) {
          const randomDigits = getRandomDigits(selectedNumber, berapaDigit);
          generatedResults.push(randomDigits);
        }
        setHasilGenerate(generatedResults);
        setErrorMessage("");
        setHasilPasaran(pasaran.toUpperCase());

        // Membuat isi file teks
        let isiContentDate = new Date().toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        let footerIsi;
        if (berapaDigit >= 1 && berapaDigit <= 4) {
          footerIsi = `${berapaDigit}D ${pasaran.toUpperCase()} ${isiContentDate}`;
        } else {
          footerIsi = `BBFS${berapaDigit} ${pasaran.toUpperCase()} ${isiContentDate}`;
        }
        let isiContent = `${footerIsi}`;
        let fileContent = `Prediksi ${pasaran.toUpperCase()} Hari ini\n\nNo\tPrediksi\n`;
        generatedResults.forEach((hasil, index) => {
          fileContent += `${index + 1}\t${hasil}\n`;
        });
        fileContent += `\n\nPrediksi mata elang ${isiContent} by dcmedia`;
        fileContent += `\nJangan Lupa Pajaknya https://saweria.co/dwicakra`;

        // Membuat file teks dari hasil prediksi
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        let fileName;
        if (berapaDigit >= 1 && berapaDigit <= 4) {
          fileName = `${berapaDigit}D_prediksi_${pasaran.toLowerCase()}_${dateString}.txt`;
        } else {
          fileName = `BBFS${berapaDigit}_prediksi_${pasaran.toLowerCase()}_${dateString}.txt`;
        }

        const blob = new Blob([fileContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        setDownloadLink({ url, fileName });
      }
    } else {
      setHasilGenerate([]);
      setErrorMessage("Data Kosong");
      setDownloadLink(null);
    }
  };

  return (
    <div className="togel">
      <div className="form-body">
        <div className="container">
          <div className="row overflow-x-auto">
            <div className="col-md-6 overflow-x-auto">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Prediksi Masa depan</h3>
                    <p>
                      Jangan lupa pajak&nbsp;
                      <a
                        href="https://saweria.co/dwicakra"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#32CD32" }}
                      >
                        Saweria
                      </a>
                    </p>
                    <form>
                      <b style={{ color: "#FFED00" }}>Masukan Hanya Huruf</b>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="pasaran"
                          placeholder="Masukan Pasaran"
                          value={pasaran}
                          onChange={handlePasaranChange}
                          required
                        />
                      </div>
                      <b style={{ color: "#FFED00" }}>Masukan Hanya Angka</b>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="angkaTerakhir"
                          placeholder="Masukan Angka Ekor Sebelum"
                          value={angkaTerakhir}
                          onChange={handleAngkaTerakhirChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="berapaDigit"
                          placeholder="Berapa D"
                          value={berapaDigit}
                          onChange={handleBerapaDigitChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="berapaGenerate"
                          placeholder="Prediksi Berapa?"
                          value={berapaGenerate}
                          onChange={handleBerapaGenerateChange}
                          required
                        />
                      </div>
                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleGenerateClick}
                        >
                          Prediksi
                        </button>
                        {downloadLink && (
                          <a
                            href={downloadLink.url}
                            download={downloadLink.fileName}
                            className="btn btn-success"
                            style={{ marginLeft: "4px" }}
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 overflow-x-auto">
              <div className="result">
                <h3>Prediksi {hasilPasaran.toUpperCase()} Hari ini</h3>
                <table className="table mt-2">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Prediksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {errorMessage ? (
                      <tr>
                        <td colSpan="2">{errorMessage}</td>
                      </tr>
                    ) : (
                      hasilGenerate.map((hasil, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{hasil}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogelPage;
