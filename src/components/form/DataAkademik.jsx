function DataAkademik({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Akademik</h3>
        <p>
          Informasi akademik mahasiswa sebagai dasar penilaian kelayakan
          beasiswa.
        </p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>IPK</label>
          <input
            type="number"
            id="ipk"
            step="0.01"
            min="0"
            max="4"
            value={formData.ipk}
            onChange={handleChange}
            placeholder="Contoh : 3.85"
          />
        </div>

        <div className="form-group">
          <label>Jumlah SKS Lulus</label>
          <input
            type="number"
            id="sks"
            value={formData.sks}
            onChange={handleChange}
            placeholder="Contoh : 110"
          />
        </div>

        <div className="form-group">
          <label>Persentase Kehadiran</label>
          <select
            id="kehadiran"
            value={formData.kehadiran}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="100">100%</option>
            <option value="95">95 - 99%</option>
            <option value="90">90 - 94%</option>
            <option value="85">85 - 89%</option>
            <option value="80">80 - 84%</option>
            <option value="kurang">Kurang dari 80%</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pernah Mengulang Mata Kuliah</label>
          <select
            id="mengulang"
            value={formData.mengulang}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="tidak">Tidak Pernah</option>
            <option value="1">1 Mata Kuliah</option>
            <option value="2">2 Mata Kuliah</option>
            <option value="lebih">Lebih dari 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>Peringkat Akademik</label>
          <select
            id="peringkat"
            value={formData.peringkat}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="10">10 Besar</option>
            <option value="20">20 Besar</option>
            <option value="30">30 Besar</option>
            <option value="lain">Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status Skripsi/Tugas Akhir</label>
          <select
            id="skripsi"
            value={formData.skripsi}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="belum">Belum</option>
            <option value="sedang">Sedang Mengerjakan</option>
            <option value="selesai">Sudah Selesai</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nilai Bahasa Inggris</label>
          <select
            id="bahasa_inggris"
            value={formData.bahasa_inggris}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nilai Praktikum</label>
          <select
            id="praktikum"
            value={formData.praktikum}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pernah Mendapat Beasiswa</label>
          <select
            id="pernah_beasiswa"
            value={formData.pernah_beasiswa}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status Mahasiswa</label>
          <select
            id="status_mahasiswa"
            value={formData.status_mahasiswa}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="aktif">Aktif</option>
            <option value="cuti">Cuti</option>
            <option value="nonaktif">Nonaktif</option>
          </select>
        </div>

      </div>

    </section>
  );
}

export default DataAkademik;