function DataKarakter({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Karakter</h3>

        <p>
          Penilaian karakter dan kepribadian calon penerima beasiswa.
        </p>

      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Disiplin</label>

          <select
            id="disiplin"
            value={formData.disiplin}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kejujuran</label>

          <select
            id="kejujuran"
            value={formData.kejujuran}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tanggung Jawab</label>

          <select
            id="tanggung_jawab"
            value={formData.tanggung_jawab}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kepemimpinan</label>

          <select
            id="kepemimpinan"
            value={formData.kepemimpinan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kemampuan Komunikasi</label>

          <select
            id="komunikasi"
            value={formData.komunikasi}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kerja Sama Tim</label>

          <select
            id="kerjasama"
            value={formData.kerjasama}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kemandirian</label>

          <select
            id="kemandirian"
            value={formData.kemandirian}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Etika</label>

          <select
            id="etika"
            value={formData.etika}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kreativitas</label>

          <select
            id="kreativitas"
            value={formData.kreativitas}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kemampuan Problem Solving</label>

          <select
            id="problem_solving"
            value={formData.problem_solving}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="sangat_baik">Sangat Baik</option>
            <option value="baik">Baik</option>
            <option value="cukup">Cukup</option>
            <option value="kurang">Kurang</option>
          </select>
        </div>

      </div>

    </section>
  );
}

export default DataKarakter;