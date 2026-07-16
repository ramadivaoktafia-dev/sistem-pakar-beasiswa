function DataPribadi({ formData, handleChange }) {
  return (
    <section className="form-section">

      <div className="section-header">
        <h3>Data Pribadi</h3>
        <p>Lengkapi identitas calon penerima beasiswa.</p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div className="form-group">
          <label>NIM</label>
          <input
            type="text"
            id="nim"
            value={formData.nim}
            onChange={handleChange}
            placeholder="Contoh : 2407001"
          />
        </div>

        <div className="form-group">
          <label>Program Studi</label>
          <select
            id="prodi"
            value={formData.prodi}
            onChange={handleChange}
          >
            <option value="">Pilih Program Studi</option>
            <option>Informatika Kesehatan</option>
            <option>Rekam Medis</option>
            <option>Kebidanan</option>
            <option>Keperawatan</option>
            <option>Kesehatan Masyarakat</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fakultas</label>
          <input
            type="text"
            id="fakultas"
            value={formData.fakultas}
            onChange={handleChange}
            placeholder="Masukkan fakultas"
          />
        </div>

        <div className="form-group">
          <label>Semester</label>
          <select
            id="semester"
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="">Pilih Semester</option>
            {[1,2,3,4,5,6,7,8].map((item)=>(
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Jenis Kelamin</label>
          <select
            id="jk"
            value={formData.jk}
            onChange={handleChange}
          >
            <option value="">Pilih</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tempat Lahir</label>
          <input
            type="text"
            id="tempat_lahir"
            value={formData.tempat_lahir}
            onChange={handleChange}
            placeholder="Masukkan tempat lahir"
          />
        </div>

        <div className="form-group">
          <label>Tanggal Lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Nomor HP</label>
          <input
            type="text"
            id="nohp"
            value={formData.nohp}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@kampus.ac.id"
          />
        </div>

        <div className="form-group full-width">
          <label>Alamat</label>
          <textarea
            id="alamat"
            rows="3"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="Masukkan alamat lengkap"
          ></textarea>
        </div>

      </div>

    </section>
  );
}

export default DataPribadi;