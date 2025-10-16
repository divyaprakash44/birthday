document.addEventListener('DOMContentLoaded', () => {
    // --- 1. COUNTDOWN TIMER ---
    // 🎯 SET YOUR TARGET DATE AND TIME HERE
    const targetDate = new Date('Nov 29, 2025 00:00:00').getTime();

    // Get elements for each individual digit
    const daysEl1 = document.getElementById('days1');
    const daysEl2 = document.getElementById('days2');
    const hoursEl1 = document.getElementById('hours1');
    const hoursEl2 = document.getElementById('hours2');
    const minutesEl1 = document.getElementById('minutes1');
    const minutesEl2 = document.getElementById('minutes2');
    const secondsEl1 = document.getElementById('seconds1');
    const secondsEl2 = document.getElementById('seconds2');

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference < 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').innerHTML = "<h2 data-lang-key='launched'>We have launched!</h2>";
            setLanguage(currentLanguage); // Re-translate the new content
            return;
        }

        const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

        // Update each digit box separately
        daysEl1.textContent = days[0];
        daysEl2.textContent = days[1];
        hoursEl1.textContent = hours[0];
        hoursEl2.textContent = hours[1];
        minutesEl1.textContent = minutes[0];
        minutesEl2.textContent = minutes[1];
        secondsEl1.textContent = seconds[0];
        secondsEl2.textContent = seconds[1];
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- 2. MULTI-LANGUAGE SUPPORT ---
    const translations = {
        en: {
            company_name: "Company Name",
            nav_home: "Home",
            nav_about: "About",
            nav_contact: "Contact",
            nav_signup: "Sign Up",
            coming_soon: "COMING SOON",
            time_days: "Days",
            time_hours: "Hours",
            time_minutes: "Minutes",
            time_seconds: "Seconds",
            subscribe: "SUBSCRIBE",
            launched: "We have launched!"
        },
        de: {
            company_name: "Firmenname",
            nav_home: "Start",
            nav_about: "Über uns",
            nav_contact: "Kontakt",
            nav_signup: "Anmelden",
            coming_soon: "BALD VERFÜGBAR",
            time_days: "Tage",
            time_hours: "Stunden",
            time_minutes: "Minuten",
            time_seconds: "Sekunden",
            subscribe: "ABONNIEREN",
            launched: "Wir sind gestartet!"
        },
        ti: { // Note: Proper Tibetan translation and font support is crucial. These are placeholders.
            company_name: "ក្រុមហ៊ុន",
            nav_home: "ទំព័រដើម",
            nav_about: "អំពី​ពួក​យើង",
            nav_contact: "ទំនាក់ទំនង",
            nav_signup: "ចុះឈ្មោះ",
            coming_soon: "ឆាប់ໆនេះ",
            time_days: "ថ្ងៃ",
            time_hours: "ម៉ោង",
            time_minutes: "នាទី",
            time_seconds: "វិនាទី",
            subscribe: "ជាវ",
            launched: "យើងបានចាប់ផ្តើមហើយ!"
        },
        fr: {
            company_name: "Nom de l'entreprise",
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_contact: "Contact",
            nav_signup: "S'inscrire",
            coming_soon: "BIENTÔT DISPONIBLE",
            time_days: "Jours",
            time_hours: "Heures",
            time_minutes: "Minutes",
            time_seconds: "Secondes",
            subscribe: "S'ABONNER",
            launched: "Nous avons lancé !"
        }
    };

    let currentLanguage = 'en';
    const langButtons = document.querySelectorAll('.lang-btn');

    const setLanguage = (lang) => {
        currentLanguage = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update active button style
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // --- 3. DAILY LOVE QUOTE ---
    // ✨ Add your own beautiful quotes to this array!
    // --- 3. DAILY LOVE QUOTE (INDEX LOOPING) ---
    const quotes = [
        "In your light, I learn how to love. - Rumi",
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "You are my sun, my moon, and all my stars. - E.E. Cummings",
        "If I know what love is, it is because of you. - Hermann Hesse",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "My heart is and always will be yours. - Jane Austen",
        "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you. - A. A. Milne",
        "You make me want to be a better man. - Melvin Udall",
        "Take my hand, take my whole life too. For I can't help falling in love with you. - Elvis Presley",
        "I need you like a heart needs a beat. - One Republic",
        "I'll be loving you, always with a love that's true - Patsy Cline",
        "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. - Maya Angelou",
        "Loved you yesterday, love you still, always have, always will. - Elaine Davis"
        // Add as many quotes as you like...
    ];

    const displayDailyQuote = () => {
        const quoteElement = document.getElementById('daily-quote');
        
        // Calculate the current day of the year (1-366)
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const currentDayOfYear = Math.floor(diff / oneDay);

        // Get saved data from the browser's storage
        let lastIndex = parseInt(localStorage.getItem('lastQuoteIndex') || '0');
        let lastUpdateDay = parseInt(localStorage.getItem('lastUpdateDay') || '0');
        
        // Check if the current day is different from the last day the quote was updated
        if (currentDayOfYear !== lastUpdateDay) {
            // It's a new day, so we move to the next quote
            let nextIndex = (lastIndex + 1) % quotes.length;
            
            // Display the new quote
            quoteElement.textContent = `"${quotes[nextIndex]}"`;
            
            // Save the new index and today's day number for tomorrow
            localStorage.setItem('lastQuoteIndex', nextIndex);
            localStorage.setItem('lastUpdateDay', currentDayOfYear);
        } else {
            // It's the same day, so show the same quote as before
            quoteElement.textContent = `"${quotes[lastIndex]}"`;
        }
    };

    displayDailyQuote();
    
    // Set initial language on page load
    setLanguage('en');

    const title = document.querySelector('.main-title');
    if (title) {
        const text = title.textContent;
        title.innerHTML = text.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');
    }
});