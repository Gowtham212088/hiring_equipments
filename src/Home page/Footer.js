import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <div id="com-sum">
        <h3 id="info" className="text-primary">
          {" "}
          Company Information <hr />{" "}
        </h3>
        <h5 id="sum" className="text-dark">
          {" "}
          <b>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum scrambled it to make a type specimen book.
          </b>{" "}
        </h5>
      </div>

      <div id="follow-us">
        <div id="follo" className="text-primary">
          {" "}
          Follow Us On{" "}
        </div>{" "}
        <hr />
        <div id="social">
          <InstagramIcon color="warning" />
          <FacebookIcon color="primary" />
          <GoogleIcon color="error" />
          <MarkEmailUnreadOutlinedIcon color="error" />
        </div>
      </div>

      <div id="cont-info">
        <h3 id="cont" className="text-primary">
          Contact Information
          <hr />
        </h3>
        <div id="add">
          <h5 id="address" className="text-dark">
            {" "}
            <b>
              #95, South street, 70th Avenue, near jain collage, adayar, Old
              Mahapallipuram Road, Chennai 600028{" "}
            </b>
          </h5>
        </div>
      </div>
    </div>
  );
}
