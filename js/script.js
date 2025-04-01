// Ini file JavaScript Katik

// Event listener untuk tombol persegi
document.getElementById('persegiButton').addEventListener('click', function() {
    document.getElementById('persegiButton').classList.add('active');
    document.getElementById('persegiButton').classList.remove('secondary');
    document.getElementById('panjangButton').classList.remove('active');
    document.getElementById('panjangButton').classList.add('secondary');
    document.getElementById('persegiSection').style.display = 'block';
    document.getElementById('panjangSection').style.display = 'none';
});

// Event listener untuk tombol persegi panjang
document.getElementById('panjangButton').addEventListener('click', function() {
    document.getElementById('panjangButton').classList.add('active');
    document.getElementById('panjangButton').classList.remove('secondary');
    document.getElementById('persegiButton').classList.remove('active');
    document.getElementById('persegiButton').classList.add('secondary');
    document.getElementById('persegiSection').style.display = 'none';
    document.getElementById('panjangSection').style.display = 'block';
});

// Fungsi untuk validasi input
function validateInput(inputElement, resultDiv) {
    const value = inputElement.value;
    if (isNaN(value) || value.trim() === '') {
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    } else {
        resultDiv.innerHTML = '';
    }
}

// Fungsi untuk menghitung luas persegi
function calculateSquareArea() {
    const sisi = document.getElementById('sisiInput').value;
    const resultDiv = document.getElementById('result');
    if (sisi.trim() === '') {
        resultDiv.innerHTML = '';
    } else if (isNaN(sisi)) {
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    } else {
        const luas = sisi * sisi;
        resultDiv.innerHTML = `L = S x S <br><br> L = ${sisi} x ${sisi} <br><br> <strong>L = ${luas}</strong>`;
    }
}

// Fungsi untuk menghitung keliling persegi
function calculateSquarePerimeter() {
    const sisi = document.getElementById('sisiInputKeliling').value;
    const resultDiv = document.getElementById('resultKeliling');
    if (sisi.trim() === '') {
        resultDiv.innerHTML = '';
    } else if (isNaN(sisi)) {
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    } else {
        const keliling = 4 * sisi;
        resultDiv.innerHTML = `K = 4 x S <br><br> K = 4 x ${sisi} <br><br> <strong>K = ${keliling}</strong>`;
    }
}

// Fungsi untuk menghitung luas persegi panjang
function calculateRectangleArea() {
    const panjang = document.getElementById('panjangInput').value;
    const lebar = document.getElementById('lebarInput').value;
    const resultDiv = document.getElementById('resultPanjang');
    if (panjang.trim() === '' || lebar.trim() === '') {
        resultDiv.innerHTML = '';
    } else if (isNaN(panjang) || isNaN(lebar)) {
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    } else {
        const luas = panjang * lebar;
        resultDiv.innerHTML = `L = P x L <br><br> L = ${panjang} x ${lebar} <br><br> <strong>L = ${luas}</strong>`;
    }
}

// Fungsi untuk menghitung keliling persegi panjang
function calculateRectanglePerimeter() {
    const panjang = document.getElementById('panjangInputKeliling').value;
    const lebar = document.getElementById('lebarInputKeliling').value;
    const resultDiv = document.getElementById('resultKelilingPanjang');
    if (panjang.trim() === '' || lebar.trim() === '') {
        resultDiv.innerHTML = '';
    } else if (isNaN(panjang) || isNaN(lebar)) {
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    } else {
        const keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
        resultDiv.innerHTML = `K = 2 x (P + L) <br><br> K = 2 x (${panjang} + ${lebar}) <br><br> <strong>K = ${keliling}</strong>`;
    }
}

// Event listener untuk input sisi persegi
document.getElementById('sisiInput').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('result'));
});

// Event listener untuk tombol Enter pada input sisi persegi
document.getElementById('sisiInput').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateSquareArea();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol hitung luas persegi
document.getElementById('hitungButton').addEventListener('click', calculateSquareArea);

// Event listener untuk tombol reset input sisi persegi
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('sisiInput').value = '';
    document.getElementById('result').innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input sisi persegi
document.getElementById('sisiInput').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input sisi persegi
document.getElementById('sisiInput').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input sisi persegi
document.getElementById('sisiInput').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
});

// Event listener untuk input sisi keliling persegi
document.getElementById('sisiInputKeliling').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('resultKeliling'));
});

// Event listener untuk tombol Enter pada input sisi keliling persegi
document.getElementById('sisiInputKeliling').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateSquarePerimeter();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('resultKeliling');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol hitung keliling persegi
document.getElementById('hitungButtonKeliling').addEventListener('click', calculateSquarePerimeter);

// Event listener untuk tombol reset input sisi keliling persegi
document.getElementById('resetButtonKeliling').addEventListener('click', function() {
    document.getElementById('sisiInputKeliling').value = '';
    document.getElementById('resultKeliling').innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input sisi keliling persegi
document.getElementById('sisiInputKeliling').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('resultKeliling');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input sisi keliling persegi
document.getElementById('sisiInputKeliling').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('resultKeliling');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input sisi keliling persegi
document.getElementById('sisiInputKeliling').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('resultKeliling');
    resultDiv.innerHTML = '';
});

// Event listener untuk input panjang persegi panjang
document.getElementById('panjangInput').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('resultPanjang'));
});

// Event listener untuk input lebar persegi panjang
document.getElementById('lebarInput').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('resultPanjang'));
});

// Event listener untuk tombol Enter pada input panjang persegi panjang
document.getElementById('panjangInput').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateRectangleArea();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol Enter pada input lebar persegi panjang
document.getElementById('lebarInput').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateRectangleArea();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol hitung luas persegi panjang
document.getElementById('hitungButtonPanjang').addEventListener('click', calculateRectangleArea);

// Event listener untuk tombol reset input panjang dan lebar persegi panjang
document.getElementById('resetButtonPanjang').addEventListener('click', function() {
    document.getElementById('panjangInput').value = '';
    document.getElementById('lebarInput').value = '';
    document.getElementById('resultPanjang').innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input panjang persegi panjang
document.getElementById('panjangInput').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input panjang persegi panjang
document.getElementById('panjangInput').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input panjang persegi panjang
document.getElementById('panjangInput').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('resultPanjang');
    resultDiv.innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input lebar persegi panjang
document.getElementById('lebarInput').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input lebar persegi panjang
document.getElementById('lebarInput').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('resultPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input lebar persegi panjang
document.getElementById('lebarInput').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('resultPanjang');
    resultDiv.innerHTML = '';
});

// Event listener untuk input panjang keliling persegi panjang
document.getElementById('panjangInputKeliling').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('resultKelilingPanjang'));
});

// Event listener untuk input lebar keliling persegi panjang
document.getElementById('lebarInputKeliling').addEventListener('input', function(e) {
    validateInput(e.target, document.getElementById('resultKelilingPanjang'));
});

// Event listener untuk tombol Enter pada input panjang keliling persegi panjang
document.getElementById('panjangInputKeliling').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateRectanglePerimeter();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol Enter pada input lebar keliling persegi panjang
document.getElementById('lebarInputKeliling').addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === 'Enter') {
        calculateRectanglePerimeter();
    } else if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Delete') {
        e.preventDefault();
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '<span class="error">Masukkan Angka Saja</span>';
    }
});

// Event listener untuk tombol hitung keliling persegi panjang
document.getElementById('hitungButtonKelilingPanjang').addEventListener('click', calculateRectanglePerimeter);

// Event listener untuk tombol reset input panjang dan lebar keliling persegi panjang
document.getElementById('resetButtonKelilingPanjang').addEventListener('click', function() {
    document.getElementById('panjangInputKeliling').value = '';
    document.getElementById('lebarInputKeliling').value = '';
    document.getElementById('resultKelilingPanjang').innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input panjang keliling persegi panjang
document.getElementById('panjangInputKeliling').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input panjang keliling persegi panjang
document.getElementById('panjangInputKeliling').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input panjang keliling persegi panjang
document.getElementById('panjangInputKeliling').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('resultKelilingPanjang');
    resultDiv.innerHTML = '';
});

// Event listener untuk tombol Backspace dan Delete pada input lebar keliling persegi panjang
document.getElementById('lebarInputKeliling').addEventListener('keyup', function(e) {
    const key = e.key;
    if (key === 'Backspace' || key === 'Delete') {
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk input lebar keliling persegi panjang
document.getElementById('lebarInputKeliling').addEventListener('input', function(e) {
    const key = e.inputType;
    if (key === 'deleteContentBackward' || key === 'deleteContentForward') {
        const resultDiv = document.getElementById('resultKelilingPanjang');
        resultDiv.innerHTML = '';
    }
});

// Event listener untuk fokus pada input lebar keliling persegi panjang
document.getElementById('lebarInputKeliling').addEventListener('focus', function(e) {
    const resultDiv = document.getElementById('resultKelilingPanjang');
    resultDiv.innerHTML = '';
});