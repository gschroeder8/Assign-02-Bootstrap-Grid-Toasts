document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = 'Discount Title: ' + e.target.dataset['product'];
      document.getElementById('discount-code').innerHTML = 'Discount Code: ' + e.target.dataset['code'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });

  const toastElement = document.getElementById('liveToast');
  const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      toastInstance.hide();
    }
  });
});
