"use client";
import GoogleDrivePDFViewer from "@/components/GoogleDrivePDFViewer";

interface Nivel {
  key: string;
  title: string;
  pdf: string;
  video: string;
}

interface Props {
  niveles: Nivel[];
}

export default function ClientPDFSection({ niveles }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10">
      {niveles.map((nivel) => (
        <div
          key={nivel.key}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 min-h-[400px]"
        >
          <div className="flex-1 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">{nivel.title}</h2>
            <div className="w-full flex flex-col items-center">
              <GoogleDrivePDFViewer pdfUrl={nivel.pdf} title={`Enunciado ${nivel.title}`} />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center w-full">
            <iframe
              width="100%"
              height="400"
              style={{ maxWidth: "700px" }}
              src={nivel.video}
              title={`Resolución ${nivel.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow mb-4 w-full"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
} 