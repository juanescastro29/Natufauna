import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';

const AdminSponsorship = () => {

  const [sponsorshipData, setSponsorshipData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchSponsorships() {
      const response = await fetch(`http://localhost:8081/sponsorship/${page}`);
      const data = await response.json();
      setSponsorshipData(data);
    }
    fetchSponsorships();
  }, [page])
  

  return (
    <div className="background">
      <div className="container p-4">
        {page >= 2 ? (
          <div className="container">
            {sponsorshipData.length === 0 ? (
              <>
                <Table data={sponsorshipData} dataType={"sponsorships"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay apadrinamientos.
                </p>
              </>
            ) : (
              <Table data={sponsorshipData} dataType={"sponsorships"} />
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
                {sponsorshipData.length < 6 ? (
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
            {sponsorshipData.length === 0 ? (
              <>
                <Table data={sponsorshipData} dataType={"sponsorships"} />
                <p className="text-center fs-3 fw-bolder">
                  No hay apadrinamientos.
                </p>
              </>
            ) : (
              <Table data={sponsorshipData} dataType={"sponsorships"} />
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
                {sponsorshipData.length < 6 ? (
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

export default AdminSponsorship