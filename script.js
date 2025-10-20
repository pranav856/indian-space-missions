// Timeline events for timeline.html
document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');
    const timelineDetails = document.getElementById('timeline-details');
    if (!timelineContainer || !timelineDetails) return;

    // Timeline data (add more as needed)
    const events = [
        {
            title: "ISRO Founded",
            date: "1969",
            description: "Indian Space Research Organisation (ISRO) was established, marking the beginning of India's organized space program."
        },
        {
            title: "Aryabhata Launched",
            date: "1975",
            description: "India's first satellite, Aryabhata, was launched into space, starting India's satellite journey."
        },
        {
            title: "PSLV First Launch",
            date: "1993",
            description: "Polar Satellite Launch Vehicle (PSLV), ISRO's workhorse launcher, had its maiden flight."
        },
        {
            title: "Chandrayaan-1",
            date: "2008",
            description: "India's first lunar probe, Chandrayaan-1, discovered water molecules on the Moon."
        },
        {
            title: "Mangalyaan (Mars Orbiter Mission)",
            date: "2013",
            description: "India became the first Asian nation to reach Mars orbit, and the first in the world to do so on its maiden attempt."
        },
        {
            title: "Chandrayaan-2",
            date: "2019",
            description: "Second lunar mission; orbiter continues to send valuable data about the Moon."
        },
        {
            title: "Chandrayaan-3",
            date: "2023",
            description: "India became the first country to land near the lunar south pole with Chandrayaan-3."
        },
        {
            title: "Aditya-L1",
            date: "2023",
            description: "India's first dedicated solar mission launched to study the Sun."
        },
        {
            title: "Gaganyaan (Planned)",
            date: "2025",
            description: "India aims to launch its first crewed spaceflight with the Gaganyaan mission."
        }
    ];

    // Render timeline events
    timelineContainer.innerHTML = events.map((ev, idx) => `
        <div class="timeline-event" data-idx="${idx}">
            <div class="timeline-dot"></div>
            <span>${ev.date}<br>${ev.title}</span>
        </div>
    `).join("");

    // Handle clicks
    const eventEls = timelineContainer.querySelectorAll('.timeline-event');
    function showDetails(idx) {
        eventEls.forEach(el => el.classList.remove('active'));
        eventEls[idx].classList.add('active');
        const ev = events[idx];
        timelineDetails.innerHTML = `
            <h3>${ev.title} (${ev.date})</h3>
            <p>${ev.description}</p>
        `;
    }
    eventEls.forEach((el, idx) => {
        el.addEventListener('click', () => showDetails(idx));
        el.addEventListener('mouseover', () => showDetails(idx));
    });

    // Show latest event by default
    showDetails(events.length - 1);
});


// Lightbox for gallery images
document.addEventListener('DOMContentLoaded', () => {
    // Existing timeline code...

    // Lightbox code
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let lightbox = document.querySelector('.lightbox');

    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img src="" alt="">
            <div class="caption"></div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            const caption = this.parentElement.querySelector('.caption');
            lightboxCaption.textContent = caption ? caption.textContent : '';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});