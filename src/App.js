import LayoutContainer from './containers/LayoutContainer'
import React from 'react'
import RouteContainer from './containers/RouteContainer'

export default () => {
  return (
    <LayoutContainer>
      <RouteContainer/>
    </LayoutContainer>
  )
}
