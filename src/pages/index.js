import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Let us find home care service for YOU!</h1>
    <p>Here are some questions we need to find the best home care.</p>
    <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, position: `relative` }}>
      <Image />
      <div style={{ position: `absolute`, width: `300px`, height: `300px`, backgroundColor: `rgba(255, 255, 255, 0.75)`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, padding: `15px`, borderRadius: `5px`, border: `1px solid purple` }}>
        <p>What kind of insurance do you have?</p>
        <input type='radio' name='insurance' value='medicare' /> Medicare <br></br>
        <input type='radio' name='insurance' value='healthcare' /> Healthcare <br></br>
        <input type='radio' name='insurance' value='medicaid' /> Medicaid <br></br>
        <button style={{ width: `200px`, height: `30px`, backgroundColor: `purple`, margin: `0 auto`, borderRadius: `5px`, borderStyle: `outline`, display: `block`, textDecoration: `none`, color: `white`}}>
          Submit
        </button>
      </div>
    </div>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/page-3/">Go to page 3</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
