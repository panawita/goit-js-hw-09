const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const saveFormData = () => {
  const formData = {
    email: email.value.trim(),
    message: textarea.value.trim,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const loadSavedData = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    email.value = formData.email || '';
    textarea.value = formData.message || '';
  }
};

form.addEventListener('input', event => {
  if (event.target === email || event.target === textarea) {
    saveFormData();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value.trim() === '' || textarea.value.trim() === '') {
    alert('Please fill in both fields.');
    return;
  }

  const submittedData = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };

  console.log('Submitted Data:', submittedData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});

loadSavedData();
