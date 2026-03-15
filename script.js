// =====================
// TIMELINE — timeline.html
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');
    const timelineDetails = document.getElementById('timeline-details');
    if (!timelineContainer || !timelineDetails) return;

    const events = [
        {
            title: "ISRO Founded",
            date: "1969",
            description: "The Indian Space Research Organisation (ISRO) was established on August 15, 1969 under the leadership of Dr. Vikram Sarabhai. It replaced INCOSPAR and set the foundation for India's self-reliant space program. ISRO's vision was to harness space technology for national development."
        },
        {
            title: "Aryabhata Launched",
            date: "1975",
            description: "India's first satellite, Aryabhata, was launched on April 19, 1975 aboard a Soviet Kosmos-3M rocket from Kapustin Yar. Named after the ancient Indian mathematician, it carried experiments in X-ray astronomy, aeronomics, and solar physics. Though it lost power after 4 days, it was a historic milestone for India."
        },
        {
            title: "SLV-3 First Launch",
            date: "1979",
            description: "India's first indigenous Satellite Launch Vehicle (SLV-3) was developed under Dr. A.P.J. Abdul Kalam. The first launch in 1979 failed, but the 1980 launch successfully placed the Rohini satellite into orbit, making India the 7th nation to develop its own launch capability."
        },
        {
            title: "ASLV Programme",
            date: "1987",
            description: "The Augmented Satellite Launch Vehicle (ASLV) was developed to increase payload capacity. Though the first two launches (1987, 1988) failed, ASLV-D3 in 1992 succeeded and helped ISRO gain critical experience in strap-on booster technology used later in PSLV and GSLV."
        },
        {
            title: "PSLV First Launch",
            date: "1993",
            description: "The Polar Satellite Launch Vehicle (PSLV) had its maiden flight on September 20, 1993. Though the first launch failed due to a software error, PSLV went on to become ISRO's most reliable workhorse — completing over 60 consecutive successful missions. It can carry up to 1,750 kg to Sun-Synchronous Orbit."
        },
        {
            title: "GSLV First Launch",
            date: "2001",
            description: "The Geosynchronous Satellite Launch Vehicle (GSLV) launched for the first time in 2001, carrying GSAT-1. Designed to launch heavier communication satellites into geostationary orbits, GSLV uses a cryogenic upper stage — a technology India had to develop indigenously after denial of technology transfer from Russia under US pressure."
        },
        {
            title: "Chandrayaan-1",
            date: "2008",
            description: "India's first lunar probe was launched on October 22, 2008 aboard PSLV-C11. It orbited the Moon at 100 km altitude and carried 11 scientific payloads from ISRO, ESA, and NASA. Its most significant discovery was the confirmation of water ice molecules on the lunar surface using NASA's Moon Mineralogy Mapper (M3). The mission operated until August 2009."
        },
        {
            title: "PSLV-C37 Record Launch",
            date: "2017",
            description: "On February 15, 2017, PSLV-C37 set a world record by launching 104 satellites in a single mission — surpassing Russia's previous record of 37. Among them was Cartosat-2D along with 101 international nano-satellites. The mission demonstrated ISRO's efficiency and earned widespread global recognition."
        },
        {
            title: "Mangalyaan (MOM)",
            date: "2013",
            description: "The Mars Orbiter Mission (MOM), launched November 5, 2013 aboard PSLV-C25, made India the first Asian nation to reach Martian orbit — and the first country in the world to succeed on its very first attempt. Built in just 15 months at a cost of ₹450 crore (~$74M), it was far cheaper than NASA's MAVEN mission. MOM carried 5 instruments and operated for over 7 years, far exceeding its 6-month design life."
        },
        {
            title: "AstroSat",
            date: "2015",
            description: "India's first dedicated multi-wavelength space observatory was launched on September 28, 2015. AstroSat can simultaneously observe celestial objects in UV, optical, low and high energy X-ray wavelengths — a capability possessed by very few telescopes in the world. It has been used to study black holes, neutron stars, and distant galaxies."
        },
        {
            title: "RLV-TD",
            date: "2016",
            description: "ISRO's Reusable Launch Vehicle Technology Demonstrator (RLV-TD) was successfully tested on May 23, 2016. This winged body vehicle — nicknamed India's Space Shuttle — demonstrated hypersonic flight, autonomous landing, and powered cruise flight. It is a stepping stone towards a fully reusable two-stage launch vehicle that will drastically cut launch costs."
        },
        {
            title: "NavIC Constellation",
            date: "2018",
            description: "Navigation with Indian Constellation (NavIC), formerly IRNSS, is India's own regional satellite navigation system — similar to GPS. By 2018, all 7 satellites were operational, providing accurate position data over India and up to 1,500 km beyond its borders. NavIC provides two services: Standard Positioning (civilians) and Restricted Service (military), and is now being integrated into smartphones."
        },
        {
            title: "Chandrayaan-2",
            date: "2019",
            description: "Launched on July 22, 2019, Chandrayaan-2 consisted of an orbiter, lander (Vikram), and rover (Pragyan). While the lander lost communication during descent on September 7, 2019, the orbiter continues to function excellently. It carries 8 instruments and has produced a detailed atlas of the lunar surface. NASA later used Chandrayaan-2's orbiter data to locate the Vikram lander crash site."
        },
        {
            title: "GSAT-11",
            date: "2018",
            description: "GSAT-11, launched December 5, 2018 from French Guiana, is India's heaviest satellite at 5,854 kg. It operates in Ka and Ku bands and provides high-throughput broadband connectivity across India at over 16 Gbps — significantly boosting India's internet infrastructure, especially in rural areas."
        },
        {
            title: "Chandrayaan-3",
            date: "2023",
            description: "On August 23, 2023, India made history by becoming the first country to land near the lunar south pole. The Vikram lander and Pragyan rover successfully touched down and conducted 14 Earth days of surface experiments. Pragyan confirmed the presence of sulfur, oxygen, iron, and other elements near the south pole — a region of immense scientific and strategic importance for future lunar bases."
        },
        {
            title: "Aditya-L1",
            date: "2023",
            description: "India's first dedicated solar observatory was launched on September 2, 2023 aboard PSLV-C57. It was placed in a halo orbit around the Sun-Earth Lagrange Point 1 (L1) — 1.5 million km from Earth — in January 2024. Carrying 7 payloads, Aditya-L1 studies solar wind, coronal mass ejections, and space weather, helping protect satellites and infrastructure on Earth from solar storms."
        },
        {
            title: "SPADEX Mission",
            date: "2024",
            description: "The Space Docking Experiment (SPADEX) demonstrated India's capability to dock two spacecraft in orbit — a critical technology for future crewed missions, space stations, and lunar sample return missions. India became only the 4th country in the world (after USA, Russia, and China) to master orbital docking. This technology is essential for the Gaganyaan programme and India's planned space station."
        },
        {
            title: "Gaganyaan",
            date: "2026",
            description: "India's first crewed spaceflight programme aims to send a 3-member crew to Low Earth Orbit (400 km) for 3 days. Unmanned test flights are ongoing, including the Crew Escape System test. Vyommitras — a humanoid space robot — will fly first. The mission uses the GSLV Mk III rocket and a crew module designed to withstand reentry and splash down safely. Gaganyaan will make India the 4th nation to independently launch humans into space."
        },
        {
            title: "Shukrayaan-1 (Planned)",
            date: "2028",
            description: "India's first Venus orbiter mission, Shukrayaan-1, is being planned for launch around 2028. It will carry a synthetic aperture radar and atmospheric study instruments to investigate Venus's thick cloud cover, volcanic activity, and surface composition. The mission aims to understand why Venus — Earth's twin in size — evolved so differently, with surface temperatures of 465°C and crushing atmospheric pressure."
        }
    ];

    // Render timeline
    timelineContainer.innerHTML = events.map((ev, idx) => `
        <div class="timeline-event" data-idx="${idx}" tabindex="0" role="button" aria-label="${ev.title}, ${ev.date}">
            <div class="timeline-dot"></div>
            <span>${ev.date}<br>${ev.title}</span>
        </div>
    `).join("");

    const eventEls = timelineContainer.querySelectorAll('.timeline-event');

    function showDetails(idx) {
        eventEls.forEach(el => el.classList.remove('active'));
        eventEls[idx].classList.add('active');
        const ev = events[idx];
        // Fade effect
        timelineDetails.style.opacity = '0';
        setTimeout(() => {
            timelineDetails.innerHTML = `
                <h3>${ev.title} <span class="year-badge">${ev.date}</span></h3>
                <p>${ev.description}</p>
            `;
            timelineDetails.style.opacity = '1';
        }, 150);
    }

    eventEls.forEach((el, idx) => {
        el.addEventListener('click', () => showDetails(idx));
        // Keyboard accessibility
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') showDetails(idx);
        });
    });

    // Show most recent event by default
    showDetails(events.length - 1);
});


// =====================
// LIGHTBOX — gallery.html only
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    if (!galleryItems.length) return; // Don't run on non-gallery pages

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

    // Close lightbox with Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
