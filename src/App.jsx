import React, { useState } from "react";
import PDFListView from "./components/PDFListView";
import PDFDetailView from "./components/PDFDetailView";
import "./App.css";

const App = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    return (
        <div className="app">
            <div className="list-view">
                <PDFListView onSelect={(pdf) => setSelectedPdf(pdf)} />
            </div>
            <div className="detail-view">
                <PDFDetailView pdf={selectedPdf} />
            </div>
        </div>
    );
};

export default App;