import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PDFListView.css";

const PDFListView = ({ onSelect }) => {
    const [pdfs, setPdfs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://api.npoint.io/dee51ea017d20efdfcc8")
            .then((response) => setPdfs(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredPdfs = pdfs.filter((pdf) =>
        pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pdf-list-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search PDFs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul className="pdf-list">
                {filteredPdfs.map((pdf, index) => (
                    <li key={index} className="pdf-item" onClick={() => onSelect(pdf)}>
                        <img
                            src={`https://via.placeholder.com/60x60?text=PDF`}
                            alt="PDF Thumbnail"
                            className="thumbnail"
                        />
                        <div className="pdf-details">
                            <h4 className="pdf-title">{pdf.name}</h4>
                            <p className="pdf-author">Author: {pdf.author || "Unknown"}</p>
                            <p className="pdf-published">Published: {pdf.published || "N/A"}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PDFListView;