/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { RecoilRoot } from 'recoil'
import Preloader from "./Preloader"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
  const [loader, setLoader] = React.useState(true)

  React.useEffect(() => {
      setTimeout(() => setLoader(false), 1500);
  }, [])

  return (
    <RecoilRoot>
      {children}
      {loader ? <Preloader /> : null}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </RecoilRoot>
  )
}

export default Layout
