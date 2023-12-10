function shift() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
function show(contentId) {
    const allContentDivs = document.querySelectorAll('.content');
    allContentDivs.forEach((div) => {
      div.style.display = 'none';
    });
  
    const selectedContentDiv = document.getElementById(contentId);
    if (selectedContentDiv) {
      selectedContentDiv.style.display = 'block';
    }
  }