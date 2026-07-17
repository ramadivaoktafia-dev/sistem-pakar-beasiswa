import { backwardChaining } from "../utils/backwardChaining";

function TabelKandidat({ kandidatData, hapusKandidat, bukaModal }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "layak":
        return <span className="status-layak">✅ Layak</span>;

      case "dipertimbangkan":
        return (
          <span className="status-dipertimbangkan">
            ⚠️ Dipertimbangkan
          </span>
        );

      case "tidak_layak":
      default:
        return <span className="status-tidak">❌ Tidak Layak</span>;
    }
  };

  if (!kandidatData || kandidatData.length === 0) {
    return (
      <div className="empty-data">
        <h3>📂 Belum Ada Data</h3>
        <p>Silakan tambahkan kandidat terlebih dahulu.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="section-title">
        📊 Hasil Evaluasi Kandidat
      </h2>

      <div className="candidate-grid">
        {kandidatData.map((kandidat, index) => {

          const hasil =
            kandidat.status && kandidat.proses
              ? kandidat
              : {
                  ...kandidat,
                  ...backwardChaining(kandidat),
                };

          return (
            <div
              className="candidate-card"
              key={kandidat.id ?? index}
            >
              <div className="candidate-header">
                <div>
                  <h3>👤 {hasil.nama}</h3>
                  <small>Kandidat #{index + 1}</small>
                </div>

                {getStatusBadge(hasil.status)}
              </div>

              <div className="candidate-body">

                <p>
                  <strong>📚 IPK</strong>
                  <span>{hasil.ipk}</span>
                </p>

                <p>
                  <strong>🏛 Organisasi</strong>
                  <span>{hasil.aktif_organisasi}</span>
                </p>

                <p>
                  <strong>🏆 Prestasi</strong>
                  <span>{hasil.prestasi}</span>
                </p>

                <p>
                  <strong>💰 Ekonomi</strong>
                  <span>{hasil.kondisi_ekonomi}</span>
                </p>

              </div>

              <div className="candidate-footer">

                <button
                  className="btn-detail"
                  onClick={() => bukaModal(hasil.proses)}
                >
                  🔍 Detail
                </button>

                <button
  className="btn-delete"
  onClick={() => {
    alert("Tombol Hapus diklik");
    console.log(kandidat);
    hapusKandidat(kandidat.id);
  }}
>
  🗑 Hapus
</button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabelKandidat;