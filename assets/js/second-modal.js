function openSecondModal() {
    var modal = document.getElementById('second-terms-modal');
    modal.style.display = 'block';
}

function closeModal(modalId) {
    var overlay = document.getElementById(modalId);
    
    if (overlay) {
        overlay.style.display = 'none';
    }
}
