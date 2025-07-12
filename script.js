let selectedStore = '';
let quantity = 1;

function selectStore(storeName) {
  selectedStore = storeName;
  document.getElementById('selectedStore').innerText = storeName;

  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function backToStep1() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}

function changeQty(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById('qtyInput').value = quantity;
}

function goToCart() {
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');
}
