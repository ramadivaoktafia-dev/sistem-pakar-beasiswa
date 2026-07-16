function Pernyataan({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Pernyataan</h3>

        <p>
          Bacalah pernyataan berikut sebelum mengirim data.
        </p>

      </div>

      <div className="checkbox-group">

        <label>

          <input
            type="checkbox"
            id="setuju_data"
            checked={formData.setuju_data}
            onChange={handleChange}
          />

          Saya menyatakan bahwa seluruh data yang saya isi adalah benar.

        </label>

        <label>

          <input
            type="checkbox"
            id="setuju_verifikasi"
            checked={formData.setuju_verifikasi}
            onChange={handleChange}
          />

          Saya bersedia apabila data diverifikasi oleh pihak kampus.

        </label>

        <label>

          <input
            type="checkbox"
            id="setuju_hasil"
            checked={formData.setuju_hasil}
            onChange={handleChange}
          />

          Saya menerima hasil seleksi sesuai keputusan sistem.

        </label>

      </div>

    </section>
  );
}

export default Pernyataan;