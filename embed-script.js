(function() {
  const viewerContainer = document.getElementById('pdf-viewer');

  // Create an iframe to display the PDF
  const iframe = document.createElement('iframe');
  iframe.src = 'samplePDF.pdf';  // Replace with the path to your PDF file
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '600px';  // Adjust the height as needed

  // Append the iframe to the container
  viewerContainer.appendChild(iframe);
})();
