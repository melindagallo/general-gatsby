import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export default function App() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (isActive);
}

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  
    <div className="base">
    <button type="button" onClick={this.handleToggle} 
    className={this.isActive ? "active" : ""}>
      <span class="plus">+</span>
      <span class="minus">-</span>
    </button>
  </div>
  </Layout>
)

export default SecondPage
