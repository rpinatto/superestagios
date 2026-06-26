// ============================================================
// Navegação
// ============================================================
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    const scroll = target.querySelector('.content-scroll');
    if (scroll) scroll.scrollTop = 0;
  }
  closeSidebar();
}

// ============================================================
// Sidebar
// ============================================================
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function navTo(screenId) {
  closeSidebar();
  setTimeout(() => goTo(screenId), 200);
}

// ============================================================
// Carregamento das telas
// Cada tela fica em seu próprio arquivo HTML.
// ============================================================
const SCREENS = [
  'login.html',
  'home.html',
  'filtros.html',
  'vaga.html',
  'estudos.html',
  'salvos.html',
  'perfil.html',
];

async function loadScreens() {
  const container = document.getElementById('screens-container');

  for (const file of SCREENS) {
    const res = await fetch(file);
    const html = await res.text();
    container.insertAdjacentHTML('beforeend', html);
  }

  initInteractions();
}

// ============================================================
// Interações (chamado após todas as telas serem injetadas)
// ============================================================
function initInteractions() {
  // Tabs na tela de vaga
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.tab-bar').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Chips de escolaridade / salvos
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.closest('.chips-row').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Opções de endereço
  document.querySelectorAll('.address-option').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.closest('.address-options').querySelectorAll('.address-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Range slider
  const slider = document.querySelector('.range-slider');
  const timeVal = document.querySelector('.time-value');
  if (slider && timeVal) {
    slider.addEventListener('input', () => {
      timeVal.textContent = slider.value + ' min';
    });
  }
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', loadScreens);
