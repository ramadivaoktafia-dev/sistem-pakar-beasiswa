function ModalProses({ show, proses, tutupModal }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-card">

        <div className="modal-header">

          <div>

            <h2>🧠 Proses Inferensi Backward Chaining</h2>

            <p>
              Berikut langkah-langkah sistem dalam menentukan
              kelayakan penerima beasiswa.
            </p>

          </div>

        </div>

        <div className="modal-body">

          {proses.length === 0 ? (

            <div className="empty-process">

              📂 Belum ada proses yang dapat ditampilkan.

            </div>

          ) : (

            proses.map((step, index) => (

              <div
                className="timeline-item"
                key={index}
              >

                <div className="timeline-number">

                  {index + 1}

                </div>

                <div className="timeline-content">

                  {step}

                </div>

              </div>

            ))

          )}

        </div>

        <div className="modal-footer">

          <button
            className="btn-close"
            onClick={tutupModal}
          >
            ✖ Tutup
          </button>

        </div>

      </div>

    </div>
  );
}

export default ModalProses;