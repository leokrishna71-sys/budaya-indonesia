document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const loginButton = document.getElementById('menu-login');
    const ctaButton = document.querySelector('.cta-button');

    // --- 1. HEADER DINAMIS SAAT SCROLL ---
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 77, 64, 0.9)'; // Sedikit transparan
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            header.style.padding = '10px 50px';
        } else {
            header.style.backgroundColor = '#004d40'; // Warna solid asli
            header.style.boxShadow = 'none';
            header.style.padding = '15px 50px';
        }
    });

    // --- 2. SCROLL HALUS UNTUK TAUTAN NAVIGASI ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Hanya berlaku untuk link internal (yang punya #ID)
            if (targetId && targetId.startsWith('#') && document.querySelector(targetId)) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Kompensasi header
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. FUNGSI CTA & LOGIN Sederhana ---
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Fitur Autentikasi sedang dipersiapkan. Selamat datang!');
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Arahkan ke section destinasi saat CTA diklik
            const destinationSection = document.getElementById('destinations');
            window.scrollTo({
                top: destinationSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});