import React from 'react'
import Helmet from 'react-helmet'

export default (props) => {
  const absoluteUrl = (path) => `https://www.thoughtfulbrew.com${path}`
  return (
    <Helmet>
      <html lang='en'/>
      <title>{ props.title }</title>
      <meta name='viewpoint' content='minimum-scale=1, initial-scale=1, width=device-width'/>
      <meta name='description' content={ props.description }/>
      <link rel='canonical' href={ absoluteUrl(props.path) }/> 
    </Helmet>
  )
}

