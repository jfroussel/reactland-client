import React from 'react'

const Overview = () => {
    return (
        <section className="overview overview--bg">
        <div className="container">
          <div className="page-section">
            <div className="overview__wrapper text-center">
              <ul>
                <li>
                  <h1 className="overview__number">550</h1>
                  <p className="overview__title">CUP OF COFFEE</p>
                </li>
                <li>
                  <h1 className="overview__number">800</h1>
                  <p className="overview__title">PROJECT DONE</p>
                </li>
                <li>
                  <h1 className="overview__number">400</h1>
                  <p className="overview__title">HAPPY CLIENT</p>
                </li>
                <li>
                  <h1 className="overview__number">3550</h1>
                  <p className="overview__title">AWARDS WIN</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Overview