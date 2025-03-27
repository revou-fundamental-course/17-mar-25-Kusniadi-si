// Ini adalah file JavaScript untuk kalkulator matematik

// Fungsi untuk menghitung luas persegi
function calculateArea() {
    const side = parseFloat(document.getElementById('sideInput').value);
    if (isNaN(side) || side <= 0) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }
    const area = side * side;
    document.getElementById('areaResult').innerHTML = `
        <p>L = S x S</p>
        <p>L = ${side} x ${side}</p>
        <p class="font-bold">L = ${area}</p>
    `;
}

// Fungsi untuk menghitung keliling persegi
function calculatePerimeter() {
    const side = parseFloat(document.getElementById('sideInputPerimeter').value);
    if (isNaN(side) || side <= 0) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }
    const perimeter = 4 * side;
    document.getElementById('perimeterResult').innerHTML = `
        <p>K = 4 x S</p>
        <p>K = 4 x ${side}</p>
        <p class="font-bold">K = ${perimeter}</p>
    `;
}

// Fungsi untuk mereset form input
function resetForm() {
    document.getElementById('sideInput').value = '';
    document.getElementById('sideInputPerimeter').value = '';
    document.getElementById('areaResult').innerHTML = '';
    document.getElementById('perimeterResult').innerHTML = '';
    clearErrorMessages();
}

// Fungsi untuk menampilkan bagian yang dipilih
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        button.classList.add('inactive');
    });
    document.getElementById(sectionId + 'Button').classList.add('active');
    document.getElementById(sectionId + 'Button').classList.remove('inactive');
}

// Fungsi untuk menghitung luas persegi panjang
function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('lengthInput').value);
    const width = parseFloat(document.getElementById('widthInput').value);
    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        alert("Masukkan nilai panjang dan lebar yang valid.");
        return;
    }
    const area = length * width;
    document.getElementById('rectangleAreaResult').innerHTML = `
        <p>L = P x L</p>
        <p>L = ${length} x ${width}</p>
        <p class="font-bold">L = ${area}</p>
    `;
}

// Fungsi untuk menghitung keliling persegi panjang
function calculateRectanglePerimeter() {
    const length = parseFloat(document.getElementById('lengthInputPerimeter').value);
    const width = parseFloat(document.getElementById('widthInputPerimeter').value);
    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        alert("Masukkan nilai panjang dan lebar yang valid.");
        return;
    }
    const perimeter = 2 * (length + width);
    document.getElementById('rectanglePerimeterResult').innerHTML = `
        <p>K = 2 x (P + L)</p>
        <p>K = 2 x (${length} + ${width})</p>
        <p class="font-bold">K = ${perimeter}</p>
    `;
}

// Fungsi untuk mereset form input persegi panjang
function resetRectangleForm() {
    document.getElementById('lengthInput').value = '';
    document.getElementById('widthInput').value = '';
    document.getElementById('lengthInputPerimeter').value = '';
    document.getElementById('widthInputPerimeter').value = '';
    document.getElementById('rectangleAreaResult').innerHTML = '';
    document.getElementById('rectanglePerimeterResult').innerHTML = '';
    clearErrorMessages();
}

// Fungsi untuk menghapus pesan kesalahan
function clearErrorMessages() {
    document.querySelectorAll('.error-message').forEach(el => el.innerHTML = '');
}

// Fungsi untuk menambahkan animasi klik pada tombol
function addClickAnimation(event) {
    if (event.target.classList.contains('nav-button')) {
        event.target.classList.add('click-animation');
        setTimeout(() => {
            event.target.classList.remove('click-animation');
        }, 200);
    }
}

// Fungsi untuk menukar warna tombol
function swapButtonColors() {
    const persegiButton = document.getElementById('persegiSectionButton');
    const persegiPanjangButton = document.getElementById('persegiPanjangSectionButton');

    const persegiButtonClasses = persegiButton.className;
    const persegiPanjangButtonClasses = persegiPanjangButton.className;

    persegiButton.className = persegiPanjangButtonClasses;
    persegiPanjangButton.className = persegiButtonClasses;
}

// Fungsi untuk memvalidasi input
function validateInput(event) {
    const input = event.target;
    const value = input.value;
    const errorMessage = input.nextElementSibling;
    if (isNaN(value) || value.includes(' ') || value <= 0) {
        input.value = '';
        errorMessage.innerHTML = 'Masukkan angka saja';
    } else {
        errorMessage.innerHTML = '';
    }
}