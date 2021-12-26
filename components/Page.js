import Link from "next/link";
import { connect } from "react-redux";
import Clock from "./Clock";

const Page = ({ title, linkTo, tick }) => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <h1>{title}</h1>
    <Clock />
    <nav>
      <Link href={linkTo}>
        <a style={{"fontSize":20}}>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default connect((state) => state)(Page);
