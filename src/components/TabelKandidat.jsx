import { backwardChaining } from "../utils/backwardChaining";

function TabelKandidat({ kandidatData, hapusKandidat, bukaModal }) {
  const getStatusBadge = (status) => {
    if (status === "layak") {
      return <span className="status-layak">✅ Layak</span>;
    }

    if (status === "dipertimbangkan") {
      return (
        <span className="status-dipertimbangkan">
          ⚠ Dipertimbangkan
        </span>
      );
    }

    return <span className="status-tidak">❌ Tidak Layak</span>;
  };

  if (kandidatData.length === 0) {
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

          const { status, proses } =
            backwardChaining(kandidat);

          return (

            <div className="candidate-card" key={index}>

              <div className="candidate-header">

                <div>

                  <h3>👤 {kandidat.nama}</h3>

                  <small>
                    Kandidat #{index + 1}
                  </small>

                </div>

                {getStatusBadge(status)}

              </div>

              <div className="candidate-body">

                <p>
                  <strong>📚 IPK</strong>
                  <span>{kandidat.ipk}</span>
                </p>

                <p>
                  <strong>🏛 Organisasi</strong>
                  <span>{kandidat.aktif_organisasi}</span>
                </p>

                <p>
                  <strong>🏆 Prestasi</strong>
                  <span>{kandidat.prestasi}</span>
                </p>

                <p>
                  <strong>💰 Ekonomi</strong>
                  <span>{kandidat.kondisi_ekonomi}</span>
                </p>

              </div>

              <div className="candidate-footer">

                <button
                  className="btn-detail"
                  onClick={() => bukaModal(proses)}
                >
                  🔍 Detail
                </button>

                <button
                  className="btn-delete"
                  onClick={() => hapusKandidat(index)}
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