import React from "react"
import { Document, Page, pdfjs } from "react-pdf"

import Layout from "../components/layout"

import PDF from "../../content/assets/Speisekarte.pdf"

const MenuPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const [numPages, setNumPages] = React.useState(null)
  //const [pageNumber, setPageNumber] = React.useState(1)
  const screenWidth = window.screen.width

  var pages = []

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  for (var i = 1; i < numPages + 1; i++) {
    pages.push(<Page key={i} pageNumber={i} width={screenWidth} />)
  }

  return (
    <Layout title="Speisekarte">
      <div id="pdf">
        <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
          {pages}
        </Document>
      </div>
    </Layout>
  )
}

export default MenuPage
