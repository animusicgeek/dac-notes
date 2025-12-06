import { useParams } from "react-router-dom";
import { notes } from "../data/notes";

function PdfViewer() {
  const { id } = useParams();
  
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return <div className="text-white text-center mt-20">Note not found</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] w-full mt-16 bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">{note.title}</h1>
        <a 
            href={note.pdfUrl} 
            download 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
            Download PDF
        </a>
      </div>

      {/* Native Iframe Viewer */}
      <div className="flex-grow w-full h-full">
        <iframe 
          src={note.pdfUrl} 
          className="w-full h-full border-none"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

export default PdfViewer;