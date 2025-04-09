        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Modal Functionality
        const modal = document.getElementById('appointment-modal');
        const appointmentBtn = document.getElementById('appointment-btn');
        const closeBtn = document.querySelector('.close-modal');

        appointmentBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
        });

        // --- Simple Chat Widget Logic ---
        const chatWindow = document.getElementById('chat-window');
        const chatToggleBtn = document.getElementById('chat-toggle-btn');
        const chatCloseBtn = document.getElementById('chat-close-btn');
        const chatBody = document.getElementById('chat-body');
        const chatInput = document.getElementById('chat-input');
        const chatSendBtn = document.getElementById('chat-send-btn');

        // Toggle chat window visibility
        chatToggleBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
        });

        chatCloseBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });

        // Function to add a message to the chat body
        function addChatMessage(message, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', sender); // 'user' or 'bot'
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            // Scroll to the bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        // Function to get a simple bot response
        function getBotResponse(userInput) {
            const lowerInput = userInput.toLowerCase();

            if (lowerInput.includes('hola') || lowerInput.includes('buenos días') || lowerInput.includes('buenas tardes')) {
                return '¡Hola! 👋 ¿En qué puedo ayudarte?';
            } else if (lowerInput.includes('horario')) {
                return 'Nuestro horario es: ⏰ Lunes - Viernes: 8:00 AM - 8:00 PM, Sábados: 9:00 AM - 6:00 PM, Domingos: 10:00 AM - 2:00 PM. ¡Emergencias 24/7! 🚨';
            } else if (lowerInput.includes('teléfono') || lowerInput.includes('numero') || lowerInput.includes('contacto')) {
                return 'Puedes contactarnos al 📞 921431540.';
            } else if (lowerInput.includes('dirección') || lowerInput.includes('ubicación') || lowerInput.includes('dónde están')) {
                return 'Nos encontramos en 📍 Av. Fonavi D-23, Talara.';
            } else if (lowerInput.includes('servicios')) {
                return 'Ofrecemos Consulta Médica 🩺, Vacunación 💉, Cirugía 🏥, Cuidado Dental🦷, Grooming 🛁 y Emergencias 🚑. Puedes ver más detalles en la sección Servicios.';
            } else if (lowerInput.includes('cita')) {
                return 'Puedes agendar una cita 📅 haciendo clic en el botón "Agendar cita" en la parte superior o contactándonos por teléfono 📞.';
            } else if (lowerInput.includes('adiós') || lowerInput.includes('gracias')) {
                return '¡Gracias por contactarnos! 😊 Que tengas un buen día. ✨';
            } else {
                return 'Lo siento, no entendí eso 🤔. Puedes preguntarme sobre horarios ⏰, teléfono 📞, dirección 📍 o servicios 🩺.';
            }
        }

        // Handle sending messages
        function handleSendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage(message, 'user');
                chatInput.value = '';

                // Get and display bot response after a short delay
                setTimeout(() => {
                    const botResponse = getBotResponse(message);
                    addChatMessage(botResponse, 'bot');
                }, 500); // Delay in milliseconds
            }
        }

        // Event listeners for sending
        chatSendBtn.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
        // --- End Simple Chat Widget Logic ---
