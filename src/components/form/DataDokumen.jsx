function DataDokumen({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Dokumen Pendukung</h3>

        <p>
          Unggah dokumen yang diperlukan untuk proses seleksi beasiswa.
        </p>

      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Kartu Tanda Mahasiswa (KTM)</label>

          <input
            type="file"
            id="ktm"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>

        <div className="form-group">
          <label>Kartu Tanda Penduduk (KTP)</label>

          <input
            type="file"
            id="ktp"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>

        <div className="form-group">
          <label>Kartu Keluarga</label>

          <input
            type="file"
            id="kk"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>

        <div className="form-group">
          <label>Kartu Hasil Studi (KHS)</label>

          <input
            type="file"
            id="khs"
            onChange={handleChange}
            accept=".pdf"
          />
        </div>

        <div className="form-group">
          <label>Kartu Rencana Studi (KRS)</label>

          <input
            type="file"
            id="krs"
            onChange={handleChange}
            accept=".pdf"
          />
        </div>

        <div className="form-group">
          <label>Slip Gaji Orang Tua</label>

          <input
            type="file"
            id="slip_gaji"
            onChange={handleChange}
            accept=".pdf,.jpg,.png"
          />
        </div>

        <div className="form-group">
          <label>Surat Keterangan Penghasilan</label>

          <input
            type="file"
            id="surat_penghasilan"
            onChange={handleChange}
            accept=".pdf,.jpg,.png"
          />
        </div>

        <div className="form-group">
          <label>Sertifikat Prestasi</label>

          <input
            type="file"
            id="sertifikat"
            onChange={handleChange}
            accept=".pdf,.jpg,.png"
          />
        </div>

        <div className="form-group">
          <label>Surat Rekomendasi Dosen</label>

          <input
            type="file"
            id="rekomendasi"
            onChange={handleChange}
            accept=".pdf"
          />
        </div>

        <div className="form-group">
          <label>Foto Formal</label>

          <input
            type="file"
            id="foto"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png"
          />
        </div>

      </div>

    </section>
  );
}

export default DataDokumen;