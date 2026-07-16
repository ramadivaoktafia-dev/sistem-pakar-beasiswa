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

/* ======================================================
   DATA AWAL KANDIDAT
====================================================== */
const dataAwal = [
  {
    nama: "Ani",
    ipk: 3.8,
    aktif_organisasi: "ya",
    prestasi: "tidak",
    kondisi_ekonomi: "lemah",
  },
  {
    nama: "Budi",
    ipk: 3.2,
    aktif_organisasi: "tidak",
    prestasi: "ya",
    kondisi_ekonomi: "lemah",
  },
  {
    nama: "Chandra",
    ipk: 3.6,
    aktif_organisasi: "tidak",
    prestasi: "tidak",
    kondisi_ekonomi: "cukup",
  },
];

/* ======================================================
   HITUNG STATUS DATA AWAL
====================================================== */
const initialKandidat = dataAwal.map((item) => {
  const hasil = backwardChaining(item);
  return {
    ...item,
    status: hasil.status,
    proses: hasil.proses,
  };
});

/* ======================================================
   APP component
====================================================== */
function App() {
  /* ==========================
      DATA KANDIDAT
  ========================== */
  const [kandidatData, setKandidatData] = useState(() => {
    const simpan = localStorage.getItem("kandidat");

    if (!simpan) {
      localStorage.setItem("kandidat", JSON.stringify(initialKandidat));
      return initialKandidat;
    }

    const data = JSON.parse(simpan);

    return data.map((item) => {
      if (!item.status) {
        const hasil = backwardChaining(item);
        return {
          ...item,
          status: hasil.status,
          proses: hasil.proses,
        };
      }
      return item;
    });
  });

  /* ==========================
      SIMPAN KE LOCAL STORAGE
  ========================== */
  useEffect(() => {
    localStorage.setItem("kandidat", JSON.stringify(kandidatData));
  }, [kandidatData]);

  /* ==========================
      LOGIN STATE
  ========================== */
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  /* ==========================
      MENU STATE
  ========================== */
  const [menu, setMenu] = useState("dashboard");

  /* ==========================
      MODAL STATE
  ========================== */
  const [modalProses, setModalProses] = useState({
    show: false,
    proses: [],
  });

  /* ==========================
      CEK LOGIN (Kondisional)
  ========================== */
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

  /* ==========================
      LOGOUT HANDLER
  ========================== */
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    setIsLogin(false);
  };

  /* ==========================
      TAMBAH KANDIDAT
  ========================== */
  const tambahKandidat = (kandidatBaru) => {
    const hasil = backwardChaining(kandidatBaru);
    const dataBaru = {
      ...kandidatBaru,
      status: hasil.status,
      proses: hasil.proses,
    };
    setKandidatData((prev) => [...prev, dataBaru]);
  };

  /* ==========================
      HAPUS KANDIDAT
  ========================== */
  const hapusKandidat = (index) => {
    setKandidatData((prev) => prev.filter((_, i) => i !== index));
  };

  /* ==========================
      MODAL PROSES HANDLER
  ========================== */
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

  /* ==========================
      DASHBOARD DATA
  ========================== */
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

  return (
    <div className="layout">
      {/* ==========================
          SIDEBAR
      ========================== */}
      <Sidebar menu={menu} setMenu={setMenu} />

      {/* ==========================
          CONTENT
      ========================== */}
      <div className="main-content">
        <Navbar
          username={localStorage.getItem("username")}
          handleLogout={handleLogout}
        />

        <div className="container">
          {/* ==========================
              DASHBOARD PANEL
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
                  Hari ini : <strong> {tanggal} </strong>
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
              FORM KANDIDAT PANEL
          ========================== */}
          {menu === "kandidat" && (
            <section className="card-custom">
              <div className="section-title">📋 Form Penilaian Kandidat</div>
              <FormKandidat tambahKandidat={tambahKandidat} />
            </section>
          )}

          {/* ==========================
              HASIL EVALUASI PANEL
          ========================== */}
          {menu === "hasil" && (
            <section className="card-custom">
              <div className="section-title"></div>
              <TabelKandidat
                kandidatData={kandidatData}
                hapusKandidat={hapusKandidat}
                bukaModal={bukaModal}
              />
            </section>
          )}

          {/* ==========================
              GRAFIK PANEL
          ========================== */}
          {menu === "grafik" && (
            <section className="card-custom">
              <div className="section-title"></div>
              <DashboardChart
                totalLayak={totalLayak}
                totalDipertimbangkan={totalDipertimbangkan}
                totalTidakLayak={totalTidakLayak}
              />
            </section>
          )}

          {/* ==========================
              TENTANG PANEL
          ========================== */}
          {menu === "tentang" && (
            <section className="card-custom">
              <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
                🎓 Tentang SmartScholar
              </h2>
              <p style={{ lineHeight: "1.8" }}>
                <strong>SmartScholar</strong> merupakan aplikasi Sistem Pakar
                Penilaian Kelayakan Beasiswa yang dibangun menggunakan metode{" "}
                <b>Backward Chaining</b>.
              </p>

              <br />
              <h3>📌 Tujuan Sistem</h3>
              <ul style={{ lineHeight: "2" }}>
                <li>Membantu proses seleksi beasiswa.</li>
                <li>Mempercepat pengambilan keputusan.</li>
                <li>Memberikan penilaian secara objektif.</li>
                <li>Mengurangi kesalahan penilaian manual.</li>
              </ul>

              <br />
              <h3>🛠 Teknologi</h3>
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

              <br />
              <h3>👨‍💻 Pengembang</h3>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Diva Oktafia Ramadani</td>
                  </tr>
                  <tr>
                    <td>NIM</td>
                    <td>2407002</td>
                  </tr>
                  <tr>
                    <td>Program Studi</td>
                    <td>Informatika Kesehatan</td>
                  </tr>
                  <tr>
                    <td>Universitas</td>
                    <td>Universitas Mercu Bakti Jaya</td>
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
          <p>Sistem Pakar Penilaian Kelayakan Beasiswa yang di buat mengguanakan metod beckward Chaining</p>
          <small>© 2026 Universitas Mercu Bakti Jaya</small>
        </footer>
      </div>
    </div>
  );
}

export default App;