import React, { useEffect, useState } from 'react'
import TableUser from '../../components/TableUser';

const MyDonations = () => {

  const [donationData, setDonationData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchSponsorships() {
      const response = await fetch(`http://localhost:8081/donation/${page}`);
      const data = await response.json();
      setDonationData(data);
    }
    fetchSponsorships();
  }, [page])
  

  return (
    <div className="background">
      <div className="container p-4">
        {page >= 2 ? (
          <div className="container">
            {donationData.length === 0 ? (
              <>
                <TableUser data={donationData} dataType={"donations"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay donaciones.
                </p>
              </>
            ) : (
              <TableUser data={donationData} dataType={"donations"} />
            )}
            <div className="row">
              <div className="col text-end">
                <button
                  className="btn border-0 bg-transparent"
                  type="button"
                  onClick={() => setPage(page - 1)}
                >
                  <i
                    className="bi bi-caret-left-square"
                    style={{ fontSize: 35 }}
                  ></i>
                </button>
              </div>
              <div className="col text-center pt-2">
                <p className="fs-3">{page}</p>
              </div>
              <div className="col text-start">
                {donationData.length < 6 ? (
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    disabled
                  >
                    <i
                      className="bi bi-caret-right-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                ) : (
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    onClick={() => setPage(page + 1)}
                  >
                    <i
                      className="bi bi-caret-right-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            {donationData.length === 0 ? (
              <>
                <TableUser data={donationData} dataType={"donations"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay donaciones.
                </p>
              </>
            ) : (
              <TableUser data={donationData} dataType={"donations"} />
            )}
            <div className="row">
              <div className="col text-end">
                {page === 1 ? (
                  <div>
                    <button
                      className="btn border-0 bg-transparent"
                      type="button"
                      disabled
                    >
                      <i
                        className="bi bi-caret-left-square"
                        style={{ fontSize: 35 }}
                      ></i>
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    onClick={() => setPage(page - 1)}
                  >
                    <i
                      className="bi bi-caret-left-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                )}
              </div>
              <div className="col text-center pt-2">
                <p className="fs-3">{page}</p>
              </div>
              <div className="col text-start">
                {donationData.length < 6 ? (
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    disabled
                  >
                    <i
                      className="bi bi-caret-right-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                ) : (
                  <button
                    className="btn border-0 bg-transparent"
                    type="button"
                    onClick={() => setPage(page + 1)}
                  >
                    <i
                      className="bi bi-caret-right-square"
                      style={{ fontSize: 35 }}
                    ></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyDonations