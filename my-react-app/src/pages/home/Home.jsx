import Wave from "../../Components/wave/Wave";


export default function Home(){
    return (
      <>


          <div className="page-contents">
              <div className="hero section">
                  <h1>Welcom To Gabriel's Fabulous Portfolio</h1>
                  <div className="banner" >
                      <img className = "banner-img" src="Cayman4.png" style={{ width: "100%", height: "auto" }} />
                  </div>
              </div>

              <Wave />

              <div className={"about-me section"}>
                  <img src={"no_img.jpeg"} alt={"idk"}/>
                  <div className={"about-me-text"}>
                      <h2>Hello, I'm Gabriel Mathura</h2>
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
              </div>

          </div>



      </>
    )
}