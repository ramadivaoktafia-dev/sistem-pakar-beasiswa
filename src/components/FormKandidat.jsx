import { useState } from "react";

import Stepper from "./Stepper";

import DataPribadi from "./form/DataPribadi";
import DataAkademik from "./form/DataAkademik";
import DataEkonomi from "./form/DataEkonomi";
import DataPrestasi from "./form/DataPrestasi";
import DataOrganisasi from "./form/DataOrganisasi";
import DataKarakter from "./form/DataKarakter";
import DataDokumen from "./form/DataDokumen";
import Pernyataan from "./form/Pernyataan";

function FormKandidat({ tambahKandidat }) {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    /* ===========================
       DATA PRIBADI
    =========================== */
    nama: "",
    nim: "",
    prodi: "",
    fakultas: "",
    semester: "",
    jk: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    alamat: "",
    nohp: "",
    email: "",

    /* ===========================
       AKADEMIK
    =========================== */
    ipk: "",
    sks: "",
    kehadiran: "",
    mengulang: "",
    peringkat: "",
    skripsi: "",
    bahasa_inggris: "",
    praktikum: "",
    pernah_beasiswa: "",
    status_mahasiswa: "",

    /* ===========================
       EKONOMI
    =========================== */
    pekerjaan_ayah: "",
    pekerjaan_ibu: "",
    penghasilan_ayah: "",
    penghasilan_ibu: "",
    tanggungan: "",
    status_rumah: "",
    kip: "",
    bansos: "",
    biaya_kuliah: "",
    kendaraan: "",

    /* ===========================
       PRESTASI
    =========================== */
    prestasi_akademik: "",
    prestasi_nonakademik: "",
    juara_kampus: "",
    juara_provinsi: "",
    juara_nasional: "",
    juara_internasional: "",
    jumlah_sertifikat: "",
    seminar: "",
    pelatihan: "",
    sertifikat: "",

    /* ===========================
       ORGANISASI
    =========================== */
    aktif_organisasi: "",
    nama_organisasi: "",
    jabatan: "",
    lama_organisasi: "",
    ukm: "",
    panitia: "",
    pengabdian: "",
    relawan: "",
    kegiatan_kampus: "",
    rekomendasi: "",

    /* ===========================
       KARAKTER
    =========================== */
    disiplin: "",
    kejujuran: "",
    tanggung_jawab: "",
    kepemimpinan: "",
    komunikasi: "",
    kerjasama: "",
    kemandirian: "",
    etika: "",
    kreativitas: "",
    problem_solving: "",

    /* ===========================
       DOKUMEN
    =========================== */
    ktm: null,
    ktp: null,
    kk: null,
    khs: null,
    krs: null,
    slip_gaji: null,
    surat_penghasilan: null,
    sertifikat_file: null,
    rekomendasi_file: null,
    foto: null,

    /* ===========================
       PERNYATAAN
    =========================== */
    setuju_data: false,
    setuju_verifikasi: false,
    setuju_hasil: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));

    setError("");
  };

  const handleSubmit = () => {
    if (!formData.nama.trim()) {
      setError("Nama kandidat wajib diisi.");
      return;
    }

    if (!formData.nim.trim()) {
      setError("NIM wajib diisi.");
      return;
    }

    if (!formData.ipk) {
      setError("IPK wajib diisi.");
      return;
    }

    if (
      isNaN(parseFloat(formData.ipk)) ||
      parseFloat(formData.ipk) < 0 ||
      parseFloat(formData.ipk) > 4
    ) {
      setError("IPK harus berada pada rentang 0.00 - 4.00.");
      return;
    }

    if (!formData.setuju_data) {
      setError("Silakan menyetujui pernyataan.");
      return;
    }

    tambahKandidat(formData);

    alert("Data kandidat berhasil disimpan.");
  };

  return (
    <div className="card-custom">
      <div className="form-header">
        <h2>Form Penilaian Calon Penerima Beasiswa</h2>

        <p>
          Lengkapi seluruh data berikut sebagai dasar proses evaluasi
          menggunakan <strong>Backward Chaining</strong>.
        </p>
      </div>

      {/* =========================
          STEPPER
      ========================== */}

      <Stepper step={step} />

      {/* =========================
          FORM BERDASARKAN STEP
      ========================== */}

      {step === 0 && (
        <DataPribadi
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 1 && (
        <DataAkademik
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 2 && (
        <DataEkonomi
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 3 && (
        <DataPrestasi
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 4 && (
        <DataOrganisasi
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 5 && (
        <DataKarakter
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 6 && (
        <DataDokumen
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 7 && (
        <Pernyataan
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {/* =========================
          ERROR
      ========================== */}

      {error && (
        <div className="alert-error">
          {error}
        </div>
      )}

      {/* =========================
          NAVIGASI STEP
      ========================== */}

      <div className="step-button">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
          >
            ← Sebelumnya
          </button>
        )}

        {step < 7 ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
          >
            Selanjutnya →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
          >
            Proses Penilaian
          </button>
        )}
      </div>
    </div>
  );
}

export default FormKandidat;