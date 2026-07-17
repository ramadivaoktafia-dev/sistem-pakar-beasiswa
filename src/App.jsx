import { useState, useEffect } from "react";

import FormKandidat from "./components/FormKandidat";
import TabelKandidat from "./components/TabelKandidat";
import ModalProses from "./components/ModalProses";
import DashboardChart from "./components/DashboardChart";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import { backwardChaining } from "./utils/backwardChaining";

import "./App.css";

function App() {

  /* =====================================================
      DATA KANDIDAT
  ====================================================== */
const [kandidatData, setKandidatData] = useState(() => {
  try {
    const simpan = localStorage.getItem("kandidat");

    if (!simpan) return [];

    const data = JSON.parse(simpan);

    return data.map((item, index) => ({
      id: item.id ?? Date.now() + index,
      ...item,
      status:
        item.status ?? backwardChaining(item).status,
      proses:
        item.proses ?? backwardChaining(item).proses,
    }));

  } catch (error) {
    console.error(error);
    return [];
  }
});
  
  /* =====================================================
      SIMPAN KE LOCAL STORAGE
  ====================================================== */

  useEffect(() => {
    localStorage.setItem("kandidat", JSON.stringify(kandidatData));
  }, [kandidatData]);

  /* =====================================================
      LOGIN
  ====================================================== */

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  /* =====================================================
      MENU
  ====================================================== */

  const [menu, setMenu] = useState("dashboard");

  /* =====================================================
      MODAL DETAIL
  ====================================================== */

  const [modalProses, setModalProses] = useState({
    show: false,
    proses: [],
  });

  /* =====================================================
      CEK LOGIN
  ====================================================== */

  if (!isLogin) {
    return (
      <Login
        onLogin={() => {
          localStorage.setItem("isLogin", "true");
          setIsLogin(true);
        }}
      />
    );
  }

  /* =====================================================
      LOGOUT
  ====================================================== */

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    setIsLogin(false);
  };

  /* =====================================================
      TAMBAH KANDIDAT
  ====================================================== */

  const tambahKandidat = (kandidatBaru) => {

    const hasil = backwardChaining(kandidatBaru);

    const dataBaru = {
      id: Date.now(),
      ...kandidatBaru,
      status: hasil.status,
      proses: hasil.proses,
    };

    setKandidatData((prev) => [...prev, dataBaru]);
  };

  /* =====================================================
      HAPUS KANDIDAT
  ====================================================== */

  const hapusKandidat = (id) => {
  alert("Masuk fungsi hapus");
  console.log("ID:", id);

  setKandidatData((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  /* =====================================================
      RESET SEMUA DATA
  ====================================================== */

  const resetSemuaData = () => {

    const konfirmasi = window.confirm(
      "Hapus seluruh data kandidat?"
    );

    if (!konfirmasi) return;

    localStorage.removeItem("kandidat");

    setKandidatData([]);
  };

  /* =====================================================
      MODAL
  ====================================================== */

  const bukaModal = (proses) => {
    setModalProses({
      show: true,
      proses,
    });
  };

  const tutupModal = () => {
    setModalProses({
      show: false,
      proses: [],
    });
  };

  /* =====================================================
      DASHBOARD
  ====================================================== */

  const totalKandidat = kandidatData.length;

  const totalLayak = kandidatData.filter(
    (item) => item.status === "layak"
  ).length;

  const totalDipertimbangkan = kandidatData.filter(
    (item) => item.status === "dipertimbangkan"
  ).length;

  const totalTidakLayak = kandidatData.filter(
    (item) => item.status === "tidak_layak"
  ).length;

  const tanggal = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (<div className="layout">

  {/* ==========================
      SIDEBAR
  ========================== */}
  <Sidebar menu={menu} setMenu={setMenu} />

  {/* ==========================
      MAIN CONTENT
  ========================== */}
  <div className="main-content">

    <Navbar
      username={localStorage.getItem("username")}
      handleLogout={handleLogout}
    />

    <div className="container">

      {/* ==========================
          DASHBOARD
      ========================== */}
      {menu === "dashboard" && (
        <>
          <section className="dashboard">

            <div className="dashboard-card">
              <h3>👨‍🎓</h3>
              <span>{totalKandidat}</span>
              <p>Total Kandidat</p>
            </div>

            <div className="dashboard-card success">
              <h3>✅</h3>
              <span>{totalLayak}</span>
              <p>Layak</p>
            </div>

            <div className="dashboard-card warning">
              <h3>⚠️</h3>
              <span>{totalDipertimbangkan}</span>
              <p>Dipertimbangkan</p>
            </div>

            <div className="dashboard-card danger">
              <h3>❌</h3>
              <span>{totalTidakLayak}</span>
              <p>Tidak Layak</p>
            </div>

          </section>

          <div className="welcome-card">
            <h2>Selamat Datang 👋</h2>
            <p>
              Hari ini <strong>{tanggal}</strong>
            </p>
          </div>

          <DashboardChart
            totalLayak={totalLayak}
            totalDipertimbangkan={totalDipertimbangkan}
            totalTidakLayak={totalTidakLayak}
          />
        </>
      )}

      {/* ==========================
          MENU KANDIDAT
      ========================== */}
      {menu === "kandidat" && (
        <section className="card-custom">

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >

            <h2>📋 Form Penilaian Kandidat</h2>

            <button
              className="btn-danger"
              onClick={resetSemuaData}
            >
              🗑 Reset Semua Data
            </button>

          </div>

          <FormKandidat
            tambahKandidat={tambahKandidat}
          />

        </section>
      )}

      {/* ==========================
          HASIL
      ========================== */}
      {menu === "hasil" && (
        <section className="card-custom">

          <h2 style={{ marginBottom: "20px" }}>
            📑 Hasil Evaluasi Kandidat
          </h2>

          <TabelKandidat
            kandidatData={kandidatData}
            hapusKandidat={hapusKandidat}
            bukaModal={bukaModal}
          />

        </section>
      )}

      {/* ==========================
          GRAFIK
      ========================== */}
      {menu === "grafik" && (
        <section className="card-custom">

          <h2 style={{ marginBottom: "20px" }}>
            📊 Statistik Kelayakan
          </h2>

          <DashboardChart
            totalLayak={totalLayak}
            totalDipertimbangkan={totalDipertimbangkan}
            totalTidakLayak={totalTidakLayak}
          />

        </section>
      )}

      {/* ==========================
          TENTANG
      ========================== */}
      {menu === "tentang" && (
        <section className="card-custom">

          <h2 style={{ color: "#2563eb" }}>
            🎓 Tentang SmartScholar
          </h2>

          <br />

          <p style={{ lineHeight: "1.8" }}>
            <strong>SmartScholar</strong> merupakan
            sistem pakar berbasis web yang digunakan
            untuk membantu proses penilaian
            kelayakan penerima beasiswa menggunakan
            metode <b>Backward Chaining</b>.
          </p>

          <br />

          <h3>🎯 Tujuan</h3>

          <ul style={{ lineHeight: "2" }}>
            <li>Membantu proses seleksi beasiswa.</li>
            <li>Mempercepat pengambilan keputusan.</li>
            <li>Penilaian lebih objektif.</li>
            <li>Mengurangi kesalahan manual.</li>
          </ul>

          <br />

          <h3>💻 Teknologi</h3>

          <table className="info-table">
            <tbody>

              <tr>
                <td>Framework</td>
                <td>React JS</td>
              </tr>

              <tr>
                <td>Metode</td>
                <td>Backward Chaining</td>
              </tr>

              <tr>
                <td>Visualisasi</td>
                <td>Chart.js</td>
              </tr>

              <tr>
                <td>Penyimpanan</td>
                <td>Local Storage</td>
              </tr>

            </tbody>
          </table>

        </section>
      )}

    </div>

    {/* ==========================
        MODAL
    ========================== */}

    <ModalProses
      show={modalProses.show}
      proses={modalProses.proses}
      tutupModal={tutupModal}
    />

    {/* ==========================
        FOOTER
    ========================== */}

    <footer className="footer">

      <h3>🎓 SmartScholar</h3>

      <p>
        Sistem Pakar Penilaian Kelayakan Beasiswa
        menggunakan metode Backward Chaining.
      </p>

      <small>
        © 2026 Universitas Mercu Bakti Jaya
      </small>

    </footer>

  </div>

</div>
  );
}

export default App;