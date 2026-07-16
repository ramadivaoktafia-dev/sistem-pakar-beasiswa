function DataPrestasi({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Prestasi</h3>

        <p>
          Informasi prestasi akademik maupun non-akademik yang dimiliki
          mahasiswa.
        </p>

      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Memiliki Prestasi Akademik</label>

          <select
            id="prestasi_akademik"
            value={formData.prestasi_akademik}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Memiliki Prestasi Non Akademik</label>

          <select
            id="prestasi_nonakademik"
            value={formData.prestasi_nonakademik}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Juara Tingkat Kampus</label>

          <select
            id="juara_kampus"
            value={formData.juara_kampus}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">Juara 1</option>
            <option value="2">Juara 2</option>
            <option value="3">Juara 3</option>
            <option value="tidak">Tidak Ada</option>
          </select>
        </div>

        <div className="form-group">
          <label>Juara Tingkat Provinsi</label>

          <select
            id="juara_provinsi"
            value={formData.juara_provinsi}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">Juara 1</option>
            <option value="2">Juara 2</option>
            <option value="3">Juara 3</option>
            <option value="tidak">Tidak Ada</option>
          </select>
        </div>

        <div className="form-group">
          <label>Juara Tingkat Nasional</label>

          <select
            id="juara_nasional"
            value={formData.juara_nasional}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">Juara 1</option>
            <option value="2">Juara 2</option>
            <option value="3">Juara 3</option>
            <option value="tidak">Tidak Ada</option>
          </select>
        </div>

        <div className="form-group">
          <label>Juara Tingkat Internasional</label>

          <select
            id="juara_internasional"
            value={formData.juara_internasional}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">Juara 1</option>
            <option value="2">Juara 2</option>
            <option value="3">Juara 3</option>
            <option value="tidak">Tidak Ada</option>
          </select>
        </div>

        <div className="form-group">
          <label>Jumlah Sertifikat</label>

          <input
            type="number"
            id="jumlah_sertifikat"
            value={formData.jumlah_sertifikat}
            onChange={handleChange}
            placeholder="Contoh : 8"
          />
        </div>

        <div className="form-group">
          <label>Mengikuti Seminar</label>

          <select
            id="seminar"
            value={formData.seminar}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mengikuti Pelatihan</label>

          <select
            id="pelatihan"
            value={formData.pelatihan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Memiliki Sertifikat Kompetensi</label>

          <select
            id="sertifikat"
            value={formData.sertifikat}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

      </div>

    </section>
  );
}

export default DataPrestasi;