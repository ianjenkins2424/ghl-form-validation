
const checkForTargetForm = () => {
  const allForms = document.querySelectorAll('form');

  allForms.forEach((form) => {
    const kidInput = form.querySelector('input[name="contact.phone"]');
    const parentInput = form.querySelector('input[name="contact.parent_guardian_phone_number"]');

    if (kidInput && parentInput && !form.dataset.validationAttached) {
      form.dataset.validationAttached = "true";

      form.addEventListener('submit', function (e) {
        const kidPhone = kidInput.value.replace(/\D/g, '').slice(-10);
        const parentPhone = parentInput.value.replace(/\D/g, '').slice(-10);

        console.log("Player:", kidPhone, "Parent:", parentPhone); // Debug log

        if (kidPhone && parentPhone && kidPhone === parentPhone) {
          e.preventDefault();
          alert("Please enter a different number for your parent. These cannot be the same.");
        }
      });

      console.log("Validation attached to correct form");
    }
  });
};

const observer = new MutationObserver(checkForTargetForm);
observer.observe(document.body, { childList: true, subtree: true });

checkForTargetForm();
