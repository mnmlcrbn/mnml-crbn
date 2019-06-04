import React, {Fragment} from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fragment>
      
     <div className='child'>
     <Image />
     </div>
    </Fragment>
  </Layout>
)

export default IndexPage
