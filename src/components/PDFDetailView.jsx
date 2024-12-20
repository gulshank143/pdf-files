import React from "react";
import "./PDFDetailView.css";

const PDFDetailView = ({ pdf }) => {
    if (!pdf) return <p className="no-selection">Select a PDF to view details</p>;

    return (
        <div className="pdf-detail-container">
            <h2 className="pdf-title">{pdf.name}</h2>
            <p className="pdf-author">Author: {pdf.author}</p>
            <p className="pdf-published">Published: {pdf.published || "Unknown"}</p>
            <a
                href={pdf.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link"
            >
                Open PDF
            </a>
        </div>
    );
};

export default PDFDetailView;