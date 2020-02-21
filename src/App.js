import { Helmet } from 'react-helmet'
import LayoutContainer from './containers/LayoutContainer'
import React from 'react'
import RouteContainer from './containers/RouteContainer'

export default () => {
  return (
    <LayoutContainer>
      <Helmet>
        <meta charset='utf-8'/>
        <meta name="description" content="Dustin Saunders Blog Website"/>
        {
          /* 
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          */
        }
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
        <title>Thoughtful Brew</title>
      </Helmet>
      <RouteContainer/>
    </LayoutContainer>
  )
}
