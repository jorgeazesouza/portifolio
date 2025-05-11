document.getElementById("baixarCurriculo").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "arquivos/cv-jorge-azevedo.pdf";
    link.download = "cv-jorge-azevedo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });