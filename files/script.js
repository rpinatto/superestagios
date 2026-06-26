// Navegação entre telas
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    // Scroll to top on content areas
    const scroll = target.querySelector('.content-scroll');
    if (scroll) scroll.scrollTop = 0;
  }
}

// Tabs na tela de vaga
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.tab-bar').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Chips de escolaridade
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.closest('.chips-row').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Address options
  document.querySelectorAll('.address-option').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.closest('.address-options').querySelectorAll('.address-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Range slider - atualizar valor exibido
  const slider = document.querySelector('.range-slider');
  const timeVal = document.querySelector('.time-value');
  if (slider && timeVal) {
    slider.addEventListener('input', () => {
      timeVal.textContent = slider.value + ' min';
    });
  }
});
