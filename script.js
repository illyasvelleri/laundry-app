document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navItems = document.querySelector('.nav-items');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Toggle the menu and icons
    toggler.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the document click event from triggering
        navItems.classList.toggle('show');
        openIcon.classList.toggle('d-none');
        closeIcon.classList.toggle('d-none');
    });

    // Close menu and reset icons when clicking outside
    document.addEventListener('click', (e) => {
        if (!navItems.contains(e.target)) {
            navItems.classList.remove('show');
            openIcon.classList.remove('d-none');
            closeIcon.classList.add('d-none');
        }
    });

    // Close menu and reset icons when clicking on a nav item
    navItems.addEventListener('click', () => {
        navItems.classList.remove('show');
        openIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
    });
});




/*step-list*/
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');

    // Function to handle step clicks
    function handleStepClick(stepIndex) {
        stepContents.forEach((content, index) => {
            content.classList.toggle('active', index === stepIndex);
        });
    }

    // Add click event listeners to steps
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            handleStepClick(index);
        });
    });

    // Set the default active step for smaller screens
    function setDefaultStep() {
        if (window.innerWidth <= 768) {
            handleStepClick(0); // Display the first step by default on small and medium screens
        }
    }

    // Initialize the default step on page load and resize
    window.addEventListener('resize', setDefaultStep);
    setDefaultStep();
});



//scrolling-wrapper dotes
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const scrollingWrapper = document.querySelector('.scrolling-wrapper');
const cardWidth = cards[0].offsetWidth + 10; // Adjust for margin

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function scrollToCard(index) {
    const offset = index * cardWidth;
    scrollingWrapper.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
    updateDots(index);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        scrollToCard(index);
    });
});

// Update dots as the user scrolls manually
scrollingWrapper.addEventListener('scroll', () => {
    const scrollPosition = scrollingWrapper.scrollLeft;
    currentIndex = Math.round(scrollPosition / cardWidth);
    updateDots(currentIndex);
});

// Auto scroll
setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    scrollToCard(currentIndex);
}, 2000);




// Select nearest point
// Handle modal actions
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('pickupModal');
    const pickupBtn = document.getElementById('openModal');
    const bookingBtn = document.querySelector('.booking-btn');
    const makeFirstOrder = document.getElementById('Make-your-first-order');
    const closeModalBtn = document.getElementById('closeModal');
    const links = document.querySelectorAll('.list-group-item a');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'flex'; // Use flex to center the modal
    }

    // Open modal when clicking either button
    pickupBtn.addEventListener('click', openModal);
    bookingBtn.addEventListener('click', openModal);
    makeFirstOrder.addEventListener('click', openModal);

    // Close modal when clicking the close button
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Hide modal when clicking outside the content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle link clicks to open WhatsApp
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const phoneNumber = this.getAttribute('data-number');
            const formattedNumber = phoneNumber.startsWith('971') ? phoneNumber : `971${phoneNumber}`;
            const whatsappUrl = `https://wa.me/${formattedNumber}`;
            window.open(whatsappUrl, '_blank');
            modal.style.display = 'none'; // Close modal after click
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelector('.testimonials');
    const containerWidth = testimonials.parentElement.offsetWidth;
    const testimonialsWidth = testimonials.scrollWidth;

    let currentOffset = 0;
    const scrollSpeed = 0.5; // Adjust this for speed, lower is faster

    function scrollTestimonials() {
        currentOffset += scrollSpeed;

        if (currentOffset >= testimonialsWidth / 2) {
            currentOffset = 0;
        }

        testimonials.style.transform = `translateX(-${currentOffset}px)`;
        requestAnimationFrame(scrollTestimonials);
    }

    scrollTestimonials();
});



//contact form submition

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const contact = document.getElementById('contactNumber').value;
    console.log(contact);
    const message = document.getElementById('message').value;

    // Format the message
    const whatsappMessage = `Hello! Here are my details:\n\nFull Name: ${name}\nPlace: ${place}\nContact Number: ${contact}\nMessage: ${message}`;

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/971559900160?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
});



document.addEventListener('DOMContentLoaded', function () {
    const viewAllButton = document.getElementById('view-all');

    viewAllButton.addEventListener('click', function () {
        window.location.href = 'service.html'; // Redirect to service.html page
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const viewPricingButton = document.getElementById('view-pricing');

    viewPricingButton.addEventListener('click', function () {
        window.location.href = 'pricing.html'; // Redirect to pricing.html page
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const backToHomeBtn = document.getElementById('back-to-home');

    backToHomeBtn.addEventListener('click', function () {
        window.location.href = 'index.html'; // Redirect to service.html page
    });
});





const customers = document.querySelectorAll('.customer');
let currentCustomerIndex = 0;
let shuffleInterval = 3000; // Time between shuffles (in milliseconds)

function showNextCustomer() {
    // Hide the current customer
    customers[currentCustomerIndex].classList.remove('visible');

    // Move to the next customer (loop back to the start if at the end)
    currentCustomerIndex = (currentCustomerIndex + 1) % customers.length;

    // Show the next customer
    customers[currentCustomerIndex].classList.add('visible');
}

// Initial display of the first customer
customers[currentCustomerIndex].classList.add('visible');

// Start the auto shuffle effect
setInterval(showNextCustomer, shuffleInterval);

/**/
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});
