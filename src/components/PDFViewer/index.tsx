import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { documentEndpoint } from "@/constants/URL_ENDPOINT";

export default function PDFViewer({ documentName }: { documentName: string }) {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
			<div style={{ height: "100%" }}>
				<Viewer
					fileUrl={
						documentEndpoint +
						documentName
					}
					plugins={[defaultLayoutPluginInstance]}
				/>
			</div>
		</Worker>
	);
}
