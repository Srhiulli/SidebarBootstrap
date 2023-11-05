
import ToggleButton from "./store-state.jsx"




export default function Sidebar() {

    function qualquer() {
        alert("mudou o estado do botão")
    }


    return (
        <div>
            <nav className="sidebar">

                <div className="open-close">
                    <ToggleButton action={qualquer} />
                </div>

                <div className="logo">
                    <h3><a href="index.html">Menu</a></h3>
                </div>

                <ul className="list-styled ">
                    <li className="active li-styled">
                        <a className="scroll-link" href="#top-content"><i className="bi bi-house-fill"></i> Home</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-1"><i className="bi bi-person-fill"></i> About me</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-5"><i className="bi bi-bookmark-fill"></i> Portfolio</a>
                    </li>
                    <li>
                        <a className="scroll-link" href="#section-6"><i className="bi bi-telephone-fill"></i> Contact us</a>
                    </li>
                </ul>

                <div className="to-top">
                    <a className="btn btn-primary btn-customized-3" href="#" role="button">
                        <i className="fas fa-arrow-up"></i> Top
                    </a>
                </div>

                <div className="dark-light-buttons">
                    <a className="btn btn-primary btn-customized-4 btn-customized-dark" href="#" role="button">Dark</a>
                    <a className="btn btn-primary btn-customized-4 btn-customized-light" href="#" role="button">Light</a>
                </div>

            </nav>
        </div >
    )
}