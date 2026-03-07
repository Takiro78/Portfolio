import Wave from "../../Components/wave/Wave";


export default function Home(){
    return (
      <>
        <Wave />


        <div className="page-contents">
        
          <div className="hero section">

              <h1>Welcom To Gabriel's Fabulous Portfolio</h1>
              <div className="banner" >
                <img className = "banner-img" src="Cayman4.png" style={{ width: "100%", height: "auto" }} />
              </div>
          </div>
        
        {/* <div className="spacer"></div> */}
        </div>

      </>
    )
}