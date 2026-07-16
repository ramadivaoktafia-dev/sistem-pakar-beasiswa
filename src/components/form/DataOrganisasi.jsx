function DataOrganisasi({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Organisasi</h3>

        <p>
          Informasi keaktifan mahasiswa dalam organisasi dan kegiatan kampus.
        </p>

      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Aktif Mengikuti Organisasi</label>

          <select
            id="aktif_organisasi"
            value={formData.aktif_organisasi}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nama Organisasi</label>

          <input
            type="text"
            id="nama_organisasi"
            value={formData.nama_organisasi}
            onChange={handleChange}
            placeholder="Contoh : HIMA Informatika"
          />
        </div>

        <div className="form-group">
          <label>Jabatan dalam Organisasi</label>

          <select
            id="jabatan"
            value={formData.jabatan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ketua">Ketua</option>
            <option value="wakil">Wakil Ketua</option>
            <option value="sekretaris">Sekretaris</option>
            <option value="bendahara">Bendahara</option>
            <option value="anggota">Anggota</option>
          </select>
        </div>

        <div className="form-group">
          <label>Lama Berorganisasi</label>

          <select
            id="lama_organisasi"
            value={formData.lama_organisasi}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="1">Kurang dari 1 Tahun</option>
            <option value="2">1 - 2 Tahun</option>
            <option value="3">Lebih dari 2 Tahun</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mengikuti Unit Kegiatan Mahasiswa (UKM)</label>

          <select
            id="ukm"
            value={formData.ukm}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pernah Menjadi Panitia Kegiatan</label>

          <select
            id="panitia"
            value={formData.panitia}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mengikuti Pengabdian Masyarakat</label>

          <select
            id="pengabdian"
            value={formData.pengabdian}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Menjadi Relawan</label>

          <select
            id="relawan"
            value={formData.relawan}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="ya">Ya</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>

        <div className="form-group">
          <label>Aktif Mengikuti Kegiatan Kampus</label>

          <select
            id="kegiatan_kampus"
            value={formData.kegiatan_kampus}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option value="aktif">Sangat Aktif</option>
            <option value="cukup">Cukup Aktif</option>
            <option value="kurang">Kurang Aktif</option>
          </select>
        </div>

        <div className="form-group">
          <label>Memiliki Surat Rekomendasi Organisasi</label>

          <select
            id="rekomendasi"
            value={formData.rekomendasi}
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

export default DataOrganisasi;