type CollectionType = {
  createdAt: string;
  temperature: number;
  oxygen: number;
  salinity: number;
  acidity: number;
};

function generateCSVFromCollections(collections: CollectionType[]) {
  let csvData = "Waktu,Suhu,Oksigen,Salinitas,pH\n";

  for (const record of collections) {
    const rowData = [new Date(record.createdAt).toLocaleTimeString(), record.temperature.toString(), record.oxygen.toString(), record.salinity.toString(), record.acidity.toString()];
    csvData += rowData + "\n";
  }

  return csvData;
}

function downloadGeneratedCsv(csvData: string, filename: string) {
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvData));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export { generateCSVFromCollections, downloadGeneratedCsv };
