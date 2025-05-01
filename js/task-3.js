const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', () => {
    const value = inputEl.value.trim();
    document.querySelector('#name-output').textContent = value || 'Anonymous';
});
