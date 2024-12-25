// JavaScript for Full-Screen Modal

// Function to open the modal
function openFullScreen(image) {
    // Create a modal if it doesn't already exist
    let modal = document.getElementById('certificate-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'certificate-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);

        // Add modal content
        const modalContent = document.createElement('img');
        modalContent.id = 'modal-content';
        modalContent.className = 'modal-content';
        modal.appendChild(modalContent);

        // Add close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        modal.appendChild(closeBtn);

        // Close modal on clicking the close button
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        // Close modal on clicking outside the image
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    // Set the clicked image in the modal and show it
    const modalImg = document.getElementById('modal-content');
    modalImg.src = image.src;
    modal.style.display = 'block';
}