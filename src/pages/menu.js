import React, { useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"

import Layout from "../components/layout"

import PDF from "../../static/assets/speisekarte.pdf"

const MenuPage = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const [numPages, setNumPages] = React.useState(null)
  //const [pageNumber, setPageNumber] = React.useState(1)
  let screenWidth = 0

  let pages = []

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  for (var i = 1; i < numPages + 1; i++) {
    pages.push(<Page key={i} pageNumber={i} width={screenWidth} />)
  }

  useEffect(() => {
    let screenWidth = window.screen.width
  })

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
