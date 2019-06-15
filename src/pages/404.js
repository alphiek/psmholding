import React from "react"
import Layout from '../components/Layout'
import Helmet from "react-helmet"
import PageWrapper from '../components/PageWrapper'


const NotFoundPage = () => (
  <Layout>
  <Helmet>
    <html lang="en"/>
    <title>Error Not Found</title>
    <meta name="description" content="404 Page"></meta>
  </Helmet>
    <PageWrapper>
      <p style={{ marginTop: '0em', paddingTop: '0em'}}>404</p>
      <h1 style={{ marginBottom: '1em'}}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
