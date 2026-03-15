// =====================
// TIMELINE — timeline.html
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');
    const timelineDetails = document.getElementById('timeline-details');
    if (!timelineContainer) return;

    const events = [
        { year:"1969", title:"ISRO Founded", desc:"ISRO was established on August 15, 1969 under Dr. Vikram Sarabhai, replacing INCOSPAR and laying the foundation for India's self-reliant space program with a vision to harness space technology for national development." },
        { year:"1975", title:"Aryabhata Launched", desc:"India's first satellite, named after the ancient mathematician, launched April 19, 1975 on a Soviet rocket. It carried X-ray astronomy and solar physics experiments. Despite losing power after 4 days, it was a historic milestone." },
        { year:"1979", title:"SLV-3 First Launch", desc:"India's first indigenous Satellite Launch Vehicle, developed under Dr. A.P.J. Abdul Kalam. After a failed first attempt in 1979, the 1980 launch placed the Rohini satellite into orbit, making India the 7th country to develop its own launch capability." },
        { year:"1987", title:"ASLV Programme", desc:"The Augmented Satellite Launch Vehicle aimed to increase payload capacity. Though the first two launches failed, ASLV-D3 in 1992 succeeded and gave ISRO critical experience in strap-on booster technology used later in PSLV and GSLV." },
        { year:"1993", title:"PSLV First Launch", desc:"The Polar Satellite Launch Vehicle had its maiden flight on September 20, 1993. Despite a software error on the first attempt, PSLV became ISRO's most reliable workhorse — completing 60+ consecutive successful missions, carrying up to 1,750 kg to Sun-Synchronous Orbit." },
        { year:"2001", title:"GSLV First Launch", desc:"The Geosynchronous Satellite Launch Vehicle first flew in 2001 carrying GSAT-1. Designed for heavy communication satellites, GSLV uses a cryogenic upper stage — technology India had to develop indigenously after a technology transfer denial under US pressure." },
        { year:"2008", title:"Chandrayaan-1", desc:"India's first lunar probe, launched October 22, 2008 aboard PSLV-C11. It orbited the Moon at 100 km altitude with 11 payloads from ISRO, ESA, and NASA. Its most significant discovery was water ice molecules on the lunar surface using NASA's Moon Mineralogy Mapper." },
        { year:"2013", title:"Mangalyaan (MOM)", desc:"The Mars Orbiter Mission, launched November 5, 2013, made India the first Asian nation to reach Mars orbit — and the first country to succeed on its very first attempt. Built in 15 months at ₹450 crore (~$74M), it operated for over 7 years, far exceeding its 6-month design life." },
        { year:"2015", title:"AstroSat", desc:"India's first dedicated multi-wavelength space observatory, launched September 28, 2015. AstroSat simultaneously observes in UV, optical, and X-ray wavelengths — a capability possessed by very few telescopes globally. Used to study black holes, neutron stars, and distant galaxies." },
        { year:"2016", title:"RLV-TD", desc:"ISRO's Reusable Launch Vehicle Technology Demonstrator was tested May 23, 2016. This winged body — India's Space Shuttle — demonstrated hypersonic flight and autonomous landing. A stepping stone towards a fully reusable two-stage launch vehicle to drastically cut launch costs." },
        { year:"2017", title:"PSLV-C37 World Record", badge:"Record", desc:"On February 15, 2017, PSLV-C37 set a world record by launching 104 satellites in a single mission — surpassing Russia's record of 37. Among them was Cartosat-2D plus 101 international nano-satellites. The mission earned ISRO widespread global recognition." },
        { year:"2018", title:"GSAT-11", desc:"India's heaviest satellite at 5,854 kg, launched December 5, 2018 from French Guiana. Operating in Ka and Ku bands, it provides high-throughput broadband connectivity across India at over 16 Gbps, significantly boosting internet infrastructure in rural areas." },
        { year:"2018", title:"NavIC Constellation", desc:"Navigation with Indian Constellation — India's own GPS equivalent. By 2018 all 7 satellites were operational, providing accurate positioning over India and 1,500 km beyond its borders. NavIC offers a Standard service for civilians and Restricted service for military, now integrated into smartphones." },
        { year:"2019", title:"Chandrayaan-2", desc:"Launched July 22, 2019, comprising an orbiter, lander (Vikram), and rover (Pragyan). While the lander lost communication during descent, the orbiter continues excellently with 8 instruments, producing a detailed lunar atlas. NASA used its data to locate the Vikram crash site." },
        { year:"2023", title:"Chandrayaan-3", badge:"Historic", desc:"On August 23, 2023, India became the first country to land near the lunar south pole. The Vikram lander and Pragyan rover operated for 14 Earth days, confirming the presence of sulfur, oxygen, iron, and other elements — a region critical for future lunar bases." },
        { year:"2023", title:"Aditya-L1", desc:"India's first solar observatory, launched September 2, 2023 aboard PSLV-C57. Placed in a halo orbit around the Sun-Earth Lagrange Point 1 (1.5 million km away) in January 2024, it carries 7 payloads studying solar wind, coronal mass ejections, and space weather." },
        { year:"2024", title:"SPADEX Mission", desc:"The Space Docking Experiment made India the 4th country (after USA, Russia, China) to master orbital docking — critical for crewed missions, space stations, and sample-return missions. This technology is now essential for the Gaganyaan programme and India's planned space station." },
        { year:"2026", title:"Gaganyaan", badge:"Upcoming", desc:"India's first crewed spaceflight — a 3-member crew to Low Earth Orbit (400 km) for 3 days. The Vyommitra humanoid robot will fly first. Using GSLV Mk III, Gaganyaan will make India the 4th nation to independently launch humans into space." },
        { year:"2028", title:"Shukrayaan-1 (Planned)", badge:"Planned", desc:"India's first Venus orbiter mission, planned for around 2028, will carry a synthetic aperture radar and atmospheric instruments to study Venus's thick clouds, volcanic activity, and surface composition — investigating why Earth's twin evolved with 465°C surface temperatures." }
    ];

    // Render timeline — each event has its own inline details panel
    timelineContainer.innerHTML = events.map((ev, idx) => `
        <div class="timeline-event" data-idx="${idx}" tabindex="0" role="button" aria-label="${ev.title}, ${ev.year}">
            <div class="timeline-dot"></div>
            <span>
                <span style="font-size:12px;font-weight:600;color:#f96d00;min-width:36px;">${ev.year}</span>
                <span style="font-size:14px;font-weight:500;">${ev.title}</span>
                ${ev.badge ? `<span class="year-badge">${ev.badge}</span>` : ''}
            </span>
            <div class="timeline-details" id="details-${idx}">
                <p>${ev.desc}</p>
            </div>
        </div>
    `).join('');

    // Hide the old separate details box if it exists
    if (timelineDetails) {
        timelineDetails.style.display = 'none';
    }

    const eventEls = timelineContainer.querySelectorAll('.timeline-event');

    function toggleDetails(idx) {
        const el = eventEls[idx];
        const detailPanel = document.getElementById(`details-${idx}`);
        const isActive = el.classList.contains('active');

        // Close all
        eventEls.forEach((e, i) => {
            e.classList.remove('active');
            document.getElementById(`details-${i}`).classList.remove('visible');
        });

        // Open clicked one (unless it was already open)
        if (!isActive) {
            el.classList.add('active');
            detailPanel.classList.add('visible');
            // Smooth scroll into view on mobile
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    eventEls.forEach((el, idx) => {
        el.addEventListener('click', () => toggleDetails(idx));
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDetails(idx);
            }
        });
    });

    // Open SPADEX by default (second most recent confirmed mission)
    toggleDetails(16);
});


// =====================
// LIGHTBOX — gallery.html only
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    if (!galleryItems.length) return;

    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img src="" alt="">
            <div class="caption"></div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
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

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
