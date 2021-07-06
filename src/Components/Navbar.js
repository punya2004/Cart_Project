import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          width="75"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart"
          title="Flipkart"
          class="_2xm1JU"
        />
      </Link>
      {/* <input type='text' placeholder='search' length='20px'/> */}
      <Link to="/">
        <div className="navbar-button">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </Link>
      <Link to="/checkout">
        <div>
          <button>
            cart <span>{basket.length}</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
