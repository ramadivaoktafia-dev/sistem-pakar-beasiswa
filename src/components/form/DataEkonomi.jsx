function DataEkonomi({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Kondisi Ekonomi</h3>
        <p>
          Lengkapi informasi kondisi ekonomi keluarga untuk mendukung
          proses seleksi beasiswa.
        </p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Pekerjaan Ayah</label>
          <input
            type="text"
            id="pekerjaan_ayah"
            value={formData.pekerjaan_ayah}
            onChange={handleChange}
            placeholder="Contoh : Petani"
          />
        </div>

        <div className="form-group">
          <label>Pekerjaan Ibu</label>
          <input
            type="text"
            id="pekerjaan_ibu"
            value={formData.pekerjaan_ibu}
            onChange={handleChange}
            placeholder="Contoh : Ibu Rumah Tangga"
          />
        </div>

        <div className="form-group">
          <label>Penghasilan Ayah</label>
          <select
            id="penghasilan_ayah"
            value={formData.penghasilan_ayah}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="<2000000">Kurang dari Rp2.000.000</option>
            <option value="2000000-4000000">Rp2.000.000 - Rp4.000.000</option>
            <option value="4000000-6000000">Rp4.000.000 - Rp6.000.000</option>
            <option value=">6000000">Lebih dari Rp6.000.000</option>
          </select>
        </div>

        <div className="form-group">
          <label>Penghasilan Ibu</label>
          <select
            id="penghasilan_ibu"
            value={formData.penghasilan_ibu}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="<2000000">Kurang dari Rp2.000.000</option>
            <option value="2000000-4000000">Rp2.000.000 - Rp4.000.000</option>
            <option value="4000000-6000000">Rp4.000.000 - Rp6.000.000</option>
            <option value=">6000000">Lebih dari Rp6.000.000</option>
          </select>
        </div>

        <div className="form-group">
          <label>Jumlah Tanggungan Orang Tua</label>
          <select
            id="tanggungan"
            value={formData.tanggungan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">1 Orang</option>
            <option value="2">2 Orang</option>
            <option value="3">3 Orang</option>
            <option value="4">4 Orang</option>
            <option value=">4">Lebih dari 4 Orang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status Rumah</label>
          <select
            id="status_rumah"
            value={formData.status_rumah}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="milik">Milik Sendiri</option>
            <option value="kontrak">Kontrak</option>
            <option value="sewa">Sewa</option>
            <option value="menumpang">Menumpang</option>
          </select>
        </div>

        <div className="form-group">
          <label>Memiliki KIP / KKS</label>
          <select
            id="kip"
            value={formData.kip}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Menerima Bantuan Sosial</label>
          <select
            id="bansos"
            value={formData.bansos}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Biaya Kuliah Ditanggung Oleh</label>
          <select
            id="biaya_kuliah"
            value={formData.biaya_kuliah}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="orang_tua">Orang Tua</option>
            <option value="sendiri">Diri Sendiri</option>
            <option value="wali">Wali</option>
            <option value="beasiswa">Beasiswa Lain</option>
          </select>
        </div>

        <div className="form-group">
          <label>Memiliki Kendaraan Pribadi</label>
          <select
            id="kendaraan"
            value={formData.kendaraan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="tidak">Tidak Ada</option>
            <option value="motor">Motor</option>
            <option value="mobil">Mobil</option>
          </select>
        </div>

      </div>

    </section>
  );
}

export default DataEkonomi;