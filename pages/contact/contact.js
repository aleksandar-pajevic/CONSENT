let form = document.getElementById('contactForm');
function submitForm() {
  console.log('form =>', form);
  form.submit();
  form.reset();
  return false;
}
