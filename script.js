document.getElementById("contactForm").addEventListener("submit", function (e) {
  // Prevent form from submitting normally
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Populate modal with form data
  document.getElementById("modalName").textContent = name;
  document.getElementById("modalEmail").textContent = email;
  document.getElementById("modalMessage").textContent = message;

  // Show the modal using Bootstrap's Modal API
  const modal = new bootstrap.Modal(
    document.getElementById("confirmationModal")
  );
  modal.show();

  // Reset form fields
  this.reset();
});
