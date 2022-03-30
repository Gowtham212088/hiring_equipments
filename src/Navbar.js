import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-warning">
      <Link class="navbar-brand" to="/">
        <img
          style={{ width: "68px", height: "65px", borderRadius: "15px" }}
          src="https://as1.ftcdn.net/v2/jpg/02/14/94/46/1000_F_214944667_0hV02ZeKjAl7XqRPy2imHSELGbVfLyHC.jpg"
          alt="icon"
        />{" "}
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              {" "}
              <Link to="/"> Home </Link> <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/product" style={{}}>
                {" "}
                Products{" "}
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/about"> About </Link>{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              <Link to="/contact"> Contact Us </Link>{" "}
            </a>
          </li>
        </ul>

        <IconButton
          onClick={() => {
            history.push("/login");
          }}
        >
          <AdminPanelSettingsIcon color="error" />
        </IconButton>
        <Button>
          <Badge badgeContent={0}>
            {" "}
            <AddShoppingCartOutlinedIcon />{" "}
          </Badge>
        </Button>
      </div>
    </nav>
  );
}
