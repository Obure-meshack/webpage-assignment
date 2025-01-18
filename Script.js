document.addEventListener("DOMContentLoaded", () => {
    // Search form submission handling
    const searchForm = document.querySelector("#search-doctor form");
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const location = document.querySelector("#location").value;
        const doctorName = document.querySelector("#doctor-name").value;
        alert(`Searching for doctors in ${location} named ${doctorName}`);
    });

    // Subscribe to newsletter form handling
    const newsletterForm = document.querySelector("#newsletter form");
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector("input[type='email']").value;
        alert(`Thank you for subscribing with ${email}`);
    });

    // Highlighting active navigation link on click
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            navLinks.forEach((link) => link.classList.remove("active"));
            e.target.classList.add("active");
        });
    });

    // Dynamic testimonials update (example)
    const testimonials = [
        {
            text: "This platform is a game-changer! I found the best doctor near me.",
            author: "John Doe, 1/2/24"
        },
        {
            text: "Very professional service. Highly recommended!",
            author: "Anna Smith, 3/5/23"
        }
    ];
    const testimonialContainer = document.querySelector("#testimonials blockquote");
    let currentTestimonialIndex = 0;

    const updateTestimonial = () => {
        const testimonial = testimonials[currentTestimonialIndex];
        testimonialContainer.querySelector("p").innerText = testimonial.text;
        testimonialContainer.querySelector("footer").innerText = `— ${testimonial.author}`;
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    };

    setInterval(updateTestimonial, 5000); // Change testimonial every 5 seconds
});￼Enter
