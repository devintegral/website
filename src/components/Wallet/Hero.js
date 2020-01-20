import React from "react"
import WOW from "wowjs"

class Hero extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      offset: 100,
    })
    wow.init()
  }
  render() {
    const { toggle } = this.props
    return (
      <div className="hero-section wallet-hero">
        <div className="container">
          <div className="hero-content">
            <div className="content">
              <h1 className="wow fadeInUp" data-wow-duration="600">
                Fantom wallet
              </h1>
              <h4 className="wow fadeInUp" data-wow-duration="600">
                {toggle
                  ? "Your FTM, always with you."
                  : "Store, send, receive and stake your FTM."}
              </h4>
              {!toggle ? (
                <div
                  className="buttons-wrapper wow fadeInUp"
                  data-wow-duration="600"
                >
                  <a href="" className="button light-btn">
                    Open Web Wallet
                  </a>
                  <a href="" className="button dark-btn">
                    Download Wallet
                  </a>
                </div>
              ) : (
                <div
                  className="buttons-wrapper wow fadeInUp"
                  data-wow-duration="600"
                >
                  <a href="" className="apple-icon">
                    <img src="/images/wallet/app-store.png" alt="Apply Store" />
                  </a>
                  <a href="">
                    <img
                      src="/images/wallet/google-play.png"
                      alt="Google Play"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
