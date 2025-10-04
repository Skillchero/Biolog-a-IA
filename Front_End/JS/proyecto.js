// proyecto.js

// Simular funcionalidad de arrastrar y soltar
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultArea = document.getElementById('resultArea');

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = '#e2e6ea';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.style.backgroundColor = '#f8f9fa';
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = '#f8f9fa';
  const files = e.dataTransfer.files;
  if (files.length) {
    fileInput.files = files;
    analyzeBtn.disabled = false;
  }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    analyzeBtn.disabled = false;
  }
});

analyzeBtn.addEventListener('click', () => {
  resultArea.classList.remove('d-none');
  analyzeBtn.textContent = 'Re-analizar';
});