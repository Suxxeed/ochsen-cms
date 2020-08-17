import React, { useState } from "react"
import { Document, Page } from "react-pdf"

import MenuPDF from "../../content/assets/Speisekarte.pdf"

function MyApp() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  console.log("PDF:" + MenuPDF)

  return (
    <div>
      <Document file="../../content/assets/Speisekarte.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default MenuPDF
