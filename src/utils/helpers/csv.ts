type CollectionType = {
  createdAt: string;
  temperature: number;
  oxygen: number;
  salinity: number;
  acidity: number;
};

function generateCSVFromCollections(collections: CollectionType[]) {
  let csvData = "Waktu,Suhu,Oksigen,Salinitas,pH\n";

  for (const collection of collections) {
    const rowData = [new Date(collection.createdAt).toLocaleTimeString(), collection.temperature.toString(), collection.oxygen.toString(), collection.salinity.toString(), collection.acidity.toString()];
    csvData += rowData + "\n";
  }

  return csvData;
}

function downloadGeneratedCsv(csvData: string, filename: string) {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export { generateCSVFromCollections, downloadGeneratedCsv };
