
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <>
          <footer>
              <div className="container">
                  <div className={s.content}>
                      <h2>Сделано в цели обучения</h2>
                      <p>2024 ITC Bootcamp</p>
                  </div>
              </div>
          </footer>
        </>
    )
}

export default Footer;