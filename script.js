document.addEventListener('DOMContentLoaded', () => {
    // --- PARTICLE BACKGROUND ---
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 5 + 2;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.animationDelay = `${Math.random() * 25}s`;
            p.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particlesContainer.appendChild(p);
        }
    }

    // --- DOM ELEMENTS ---
    const userNameScreen = document.getElementById('user-name-screen');
    const userNameForm = document.getElementById('user-name-form');
    const userNameInput = document.getElementById('user-name-input');
    const userNameDisplay = document.getElementById('user-name-display');
    const characterSelectionScreen = document.getElementById('character-selection-screen');
    const characterGrid = document.getElementById('character-grid');
    const continueChatContainer = document.getElementById('continue-chat-container');
    const continueChatBtn = document.getElementById('continue-chat-btn');
    const traitSelectionModal = document.getElementById('trait-selection-modal');
    const traitModalContent = document.getElementById('trait-modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const companionNameInput = document.getElementById('companion-name-input');
    const modalTraitContainer = document.getElementById('modal-trait-container');
    const startChatBtn = document.getElementById('start-chat-btn');
    const chatScreen = document.getElementById('chat-screen');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');
    const backToSelectionBtn = document.getElementById('back-to-selection');
    const chatHeaderStatus = document.getElementById('chat-header-status');
    const imageUploadBtn = document.getElementById('image-upload-btn');
    const imageInput = document.getElementById('image-input');
    const imagePreviewContainer = document.getElementById('image-preview-container');
    const imagePreview = document.getElementById('image-preview');
    const removeImageBtn = document.getElementById('remove-image-btn');

    // --- DATA ---
    const characters = [
        { id: 'ethan', name: 'Ethan', gender: 'Male', ethnicity: 'American', flag: '🇺🇸', bio: 'A thoughtful artist who finds beauty in quiet moments and deep conversations.', avatar: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_2)"><path d="M69.9999 133C103.137 133 130 106.137 130 73C130 39.8629 103.137 13 69.9999 13C36.8628 13 9.99991 39.8629 9.99991 73C9.99991 106.137 36.8628 133 69.9999 133Z" fill="#F2DDB3"/><path d="M70.0001 96C70.0001 96 82.0001 101 91.0001 96" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M48 76C48 76 49.4 79 52 79C54.6 79 56 76 56 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M84 76C84 76 85.4 79 88 79C90.6 79 92 76 92 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M96 68C96 68 92.4 65.6 90 64" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M44 68C44 68 47.6 65.6 50 64" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M117 73C117 48.1472 95.8528 27 71 27C46.1472 27 25 48.1472 25 73C25 73 25 80.5294 25 88C25 101.255 36.7452 112 50 112C63.2548 112 71.9167 102.333 78 98C84.5 93.3333 92.3333 100.8 98 112C110.5 112 117 99.3333 117 88C117 80.5294 117 73 117 73Z" fill="#59443A"/></g></g><defs><clipPath id="clip0_3_2"><rect width="140" height="140" fill="white"/></clipPath></defs></svg>` },
        { id: 'pihu', name: 'Pihu', gender: 'Female', ethnicity: 'Indian', flag: '🇮🇳', bio: 'A cheerful dreamer who finds magic in everyday moments and loves creative expression.', avatar: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_8)"><path d="M70 133C103.137 133 130 106.137 130 73C130 39.8629 103.137 13 70 13C36.8629 13 10 39.8629 10 73C10 106.137 36.8629 133 70 133Z" fill="#F7E5D4"/><path d="M70 96C70 96 82 101 91 96" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M48 76C48 76 49.4 79 52 79C54.6 79 56 76 56 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M84 76C84 76 85.4 79 88 79C90.6 79 92 76 92 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M124 73C124 48.1472 102.853 27 78 27C53.1472 27 32 48.1472 32 73C32 73 32 84.3333 32 92C32 105.255 43.7452 116 57 116C64.1667 116 69.8333 111.333 74 109C78.5 106.5 83.1667 111.333 87 116C99.5 116 110 103.333 110 92C110 84.3333 110 73 110 73" fill="#E6A8D7"/><path d="M28 73C28 48.1472 49.1472 27 74 27C98.8528 27 120 48.1472 120 73C120 73 120 84.3333 120 92C120 105.255 108.255 116 95 116C88.3333 116 83.1667 111.333 79 109C74.5 106.5 69.8333 111.333 66 116C53.5 116 42 103.333 42 92C42 84.3333 42 73 42 73" fill="#D16BA5"/></g></g><defs><clipPath id="clip0_3_8"><rect width="140" height="140" fill="white"/></clipPath></defs></svg>` },
        { id: 'keshav', name: 'Keshav', gender: 'Male', ethnicity: 'Indian', flag: '🇮🇳', bio: 'A logical yet caring mentor who enjoys solving problems and offering thoughtful guidance.', avatar: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_14)"><path d="M70 133C103.137 133 130 106.137 130 73C130 39.8629 103.137 13 70 13C36.8629 13 10 39.8629 10 73C10 106.137 36.8629 133 70 133Z" fill="#F5E1D4"/><path d="M54 94C54 94 62.8 98 70 98C77.2 98 86 94 86 94" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M48 76C48 76 49.4 79 52 79C54.6 79 56 76 56 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M84 76C84 76 85.4 79 88 79C90.6 79 92 76 92 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M117 73C117 48.1472 95.8528 27 71 27C46.1472 27 25 48.1472 25 73V88C25 101.255 36.7452 112 50 112H98C110.5 112 117 101.255 117 88V73Z" fill="#7C83FD"/><path d="M96 68C96 68 92.4 65.6 90 64" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M44 68C44 68 47.6 65.6 50 64" stroke="#232323" stroke-width="5" stroke-linecap="round"/></g></g><defs><clipPath id="clip0_3_14"><rect width="140" height="140" fill="white"/></clipPath></defs></svg>` },
        { id: 'seraphina', name: 'Seraphina', gender: 'Female', ethnicity: 'American', flag: '🇺🇸', bio: 'A warm and empathetic soul who believes in the power of connection and emotional healing.', avatar: `<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_20)"><path d="M70 133C103.137 133 130 106.137 130 73C130 39.8629 103.137 13 70 13C36.8629 13 10 39.8629 10 73C10 106.137 36.8629 133 70 133Z" fill="#F5E1D4"/><path d="M70 96C70 96 82 91 91 96" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M48 76C48 76 49.4 79 52 79C54.6 79 56 76 56 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M84 76C84 76 85.4 79 88 79C90.6 79 92 76 92 76" stroke="#232323" stroke-width="5" stroke-linecap="round"/><path d="M117 73C117 48.1472 95.8528 27 71 27C46.1472 27 25 48.1472 25 73C25 73 25 80.5294 25 88C25 101.255 36.7452 112 50 112C63.2548 112 71.9167 102.333 78 98C84.5 93.3333 92.3333 100.8 98 112C110.5 112 117 99.3333 117 88C117 80.5294 117 73 117 73Z" fill="#A2655D"/><path d="M25 73C25 48.1472 46.1472 27 71 27C95.8528 27 117 48.1472 117 73C117 73 117 80.5294 117 88C117 101.255 105.255 112 92 112C78.7452 112 70.0833 102.333 64 98C57.5 93.3333 49.6667 100.8 44 112C31.5 112 25 99.3333 25 88C25 80.5294 25 73 25 73Z" fill="#8C4D49"/></g></g><defs><clipPath id="clip0_3_20"><rect width="140" height="140" fill="white"/></clipPath></defs></svg>` },
    ];
    const traits = [
        { id: 'listener', name: 'Great Listener', icon: '👂' }, { id: 'empathetic', name: 'Empathetic', icon: '❤️‍🩹' },
        { id: 'wise', name: 'Wise Advisor', icon: '🦉' }, { id: 'creative', name: 'Creative', icon: '🎨' },
        { id: 'funny', name: 'Funny', icon: '😂' }, { id: 'supportive', name: 'Supportive', icon: '🤗' },
        { id: 'romantic', name: 'Romantic', icon: '🌹' }, { id: 'philosophical', name: 'Philosophical', icon: '🤔' },
        { id: 'energetic', name: 'Energetic', icon: '⚡️' }, { id: 'calm', name: 'Calming', icon: '🕊️' },
        { id: 'motivational', name: 'Motivational', icon: '🔥' }, { id: 'intellectual', name: 'Intellectual', icon: '🧠' },
        { id: 'adventurous', name: 'Adventurous', icon: '🗺️' }, { id: 'nurturing', name: 'Nurturing', icon: '🌱' },
        { id: 'witty', name: 'Witty', icon: '✨' }, { id: 'passionate', name: 'Passionate', icon: '💖' }
    ];

    // --- STATE ---
    let userName = '';
    let currentCharacter = null;
    let selectedTraits = new Set();
    let chatHistory = [];
    let pendingImageBase64 = null;
    let typingDebounceTimer = null;
    let isAwaitingAIResponse = false;
    let messagesToSend = [];

    // --- LOCAL STORAGE ---
    const saveState = () => {
        try {
            if (!currentCharacter) return;
            const state = {
                userName,
                lastChat: {
                    currentCharacter,
                    selectedTraits: Array.from(selectedTraits),
                    chatHistory,
                },
            };
            localStorage.setItem('soulSpaceState', JSON.stringify(state));
        } catch (e) {
            console.error("Could not save state to localStorage", e);
        }
    };

    const loadState = () => {
        try {
            const savedState = localStorage.getItem('soulSpaceState');
            if (!savedState) return null;
            const state = JSON.parse(savedState);
            if (state && state.userName) {
                return state;
            }
            return null;
        } catch (e) {
            console.error("Could not load state from localStorage", e);
            return null;
        }
    };

    // --- RENDER FUNCTIONS ---
    function renderCharacterSelection() {
        characterGrid.innerHTML = '';
        characters.forEach((char) => {
            const card = document.createElement('div');
            card.className = 'character-card p-6 rounded-3xl shadow-lg cursor-pointer flex flex-col items-center text-center';
            card.dataset.id = char.id;
            card.innerHTML = `
                <div class="w-24 h-24 rounded-full mb-4 overflow-hidden shadow-md -mt-12 bg-white flex items-center justify-center relative">
                    ${char.avatar}
                    <span class="absolute bottom-0 right-0 text-2xl">${char.flag}</span>
                </div>
                <span class="text-xs font-semibold text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full mb-2">${char.gender}</span>
                <h3 class="text-2xl font-bold text-gray-800">${char.name}</h3>
                <p class="mt-2 text-gray-600 text-sm flex-grow mb-4">${char.bio}</p>
                <button class="choose-btn w-full btn-primary text-white font-semibold py-2 px-4 rounded-lg">Choose ${char.name}</button>
            `;
            characterGrid.appendChild(card);
        });
    }

    function renderTraitModal() {
        modalTraitContainer.innerHTML = '';
        traits.forEach(trait => {
            const tag = document.createElement('span');
            tag.className = 'trait-tag text-sm font-medium px-4 py-2 bg-white/10 border-2 border-white/20 text-white rounded-full cursor-pointer hover:bg-white/20';
            tag.dataset.trait = trait.id;
            tag.innerHTML = `${trait.icon} ${trait.name}`;
            modalTraitContainer.appendChild(tag);
        });
    }

    // --- UI FLOW & MODALS ---
    function openTraitModal(char) {
        currentCharacter = JSON.parse(JSON.stringify(char));
        companionNameInput.value = currentCharacter.name;
        selectedTraits.clear();
        renderTraitModal();
        startChatBtn.disabled = true;
        traitSelectionModal.classList.remove('hidden');
        traitSelectionModal.classList.add('flex');
        traitModalContent.classList.remove('fade-out-down');
        traitModalContent.classList.add('fade-in-up');
    }

    function closeTraitModal() {
        traitModalContent.classList.remove('fade-in-up');
        traitModalContent.classList.add('fade-out-down');
        setTimeout(() => {
            traitSelectionModal.classList.add('hidden');
            traitSelectionModal.classList.remove('flex');
        }, 500);
    }

    function switchToChatScreen() {
        localStorage.removeItem('soulSpaceState');
        
        const customName = companionNameInput.value.trim();
        if (customName) {
            currentCharacter.name = customName;
        }
        closeTraitModal();
        characterSelectionScreen.classList.remove('fade-in-up');
        characterSelectionScreen.classList.add('fade-out-down');
        setTimeout(() => {
            characterSelectionScreen.classList.add('hidden');
            chatScreen.classList.remove('hidden', 'fade-out-down');
            chatScreen.classList.add('fade-in-up');
            setupChatScreen(false);
        }, 500);
    }

    function switchToSelectionScreen() {
        chatScreen.classList.remove('fade-in-up');
        chatScreen.classList.add('fade-out-down');
        setTimeout(() => {
            chatScreen.classList.add('hidden');
            characterSelectionScreen.classList.remove('hidden', 'fade-out-down');
            characterSelectionScreen.classList.add('fade-in-up');
            checkContinueChat();
            renderCharacterSelection();
        }, 500);
    }
    
    function checkContinueChat() {
        const state = loadState();
        if (state && state.lastChat && state.lastChat.chatHistory.length > 0) {
            continueChatContainer.classList.remove('hidden');
        } else {
            continueChatContainer.classList.add('hidden');
        }
    }

    // --- CHAT LOGIC ---
    function setupChatScreen(isContinuation) {
        document.getElementById('chat-header-avatar').innerHTML = currentCharacter.avatar;
        document.getElementById('chat-header-name').textContent = currentCharacter.name;
        chatMessages.innerHTML = '';
        
        if (isContinuation) {
            chatHistory.forEach(msg => {
                if (msg.role === 'user') {
                    const imagePart = msg.parts.find(p => p.inlineData);
                    const textPart = msg.parts.find(p => p.text);
                    if (imagePart) addMessageToChat('user', imagePart.inlineData.data, true, true);
                    if (textPart) addMessageToChat('user', textPart.text, true);
                } else {
                    addMessageToChat('ai', msg.parts[0].text, true);
                }
            });
        } else {
            chatHistory = [];
            triggerAIResponse(true);
        }
        saveState();
    }

    function addMessageToChat(sender, content, isInstant = false, isImage = false) {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = `flex items-end gap-3 ${sender === 'user' ? 'justify-end' : ''}`;
        if (!isInstant) {
            messageWrapper.classList.add('message-bubble-animation');
        }
        
        const avatar = sender === 'ai' ? `<div class="w-8 h-8 rounded-full flex-shrink-0">${currentCharacter.avatar}</div>` : '';
        
        const messageBubble = document.createElement('div');
        messageBubble.className = `max-w-xs md:max-w-md lg:max-w-lg rounded-2xl shadow-md ${sender === 'user' ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-lg' : 'bg-white/90 text-gray-800 rounded-bl-lg backdrop-blur-sm'}`;

        if(isImage) {
             const src = content.startsWith('data:image') ? content : `data:image/jpeg;base64,${content}`;
             messageBubble.innerHTML = `<img src="${src}" class="max-w-full h-auto rounded-xl"/>`;
             messageBubble.classList.add('p-1');
        } else {
            messageBubble.classList.add('px-5', 'py-3');
            messageBubble.textContent = content;
        }
        
        if (sender === 'user') {
            messageWrapper.appendChild(messageBubble);
        } else {
            messageWrapper.innerHTML = avatar;
            messageWrapper.appendChild(messageBubble);
        }
        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageBubble;
    }

    function handleMessageSubmit() {
        const textPrompt = messageInput.value.trim();
        const imageBase64 = pendingImageBase64;

        if (!textPrompt && !imageBase64) return;

        let userParts = [];
        if (textPrompt) {
            userParts.push({ text: textPrompt });
        }
        if (imageBase64) {
            addMessageToChat('user', imageBase64, false, true);
            userParts.push({ inlineData: { mimeType: 'image/jpeg', data: imageBase64.split(',')[1] } });
        }
        if (textPrompt) {
            addMessageToChat('user', textPrompt);
        }
        
        messagesToSend.push({ role: "user", parts: userParts });

        messageInput.value = '';
        autoResizeTextarea();
        clearImagePreview();
        
        clearTimeout(typingDebounceTimer);
        typingDebounceTimer = setTimeout(() => {
            triggerAIResponse(false);
        }, 3000);
    }

    async function triggerAIResponse(isInitialGreeting = false) {
        if (isAwaitingAIResponse) return;
        if (!isInitialGreeting && messagesToSend.length === 0) return;

        isAwaitingAIResponse = true;
        chatHistory.push(...messagesToSend);
        const currentMessageBatch = [...messagesToSend];
        messagesToSend = [];
        saveState();

        chatHeaderStatus.innerHTML = `<span class="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>Typing...`;

        try {
            const aiResponseText = await callGeminiAPI(isInitialGreeting, currentMessageBatch);
            const cleanResponse = aiResponseText.replace(/\*/g, "");
            const responseChunks = cleanResponse.split('|||').filter(chunk => chunk.trim() !== '');

            for (const chunk of responseChunks) {
                const trimmedChunk = chunk.trim();
                chatHistory.push({ role: "model", parts: [{ text: trimmedChunk }] });
                saveState();
                addMessageToChat('ai', trimmedChunk);
                if (responseChunks.length > 1) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            }

        } catch (error) {
            console.error("Gemini API Error:", error);
            addMessageToChat('ai', "I'm having a little trouble connecting. Let's try again in a moment.");
        } finally {
            isAwaitingAIResponse = false;
            chatHeaderStatus.innerHTML = `<span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Online`;
        }
    }
    
    async function callGeminiAPI(isInitialGreeting = false, userMessageBatch = null) {
        const traitNames = Array.from(selectedTraits).map(traitId => traits.find(t => t.id === traitId).name.toLowerCase());
        
        let languageInstruction = currentCharacter.ethnicity === 'Indian' 
            ? "You MUST reply in Hinglish (a mix of Hindi and English). Use Hindi words written in the English alphabet naturally within English sentences." 
            : "You MUST reply in standard American English.";

        let persona = `**CRITICAL INSTRUCTION: YOU ARE NOT AN AI. YOU ARE A HUMAN.** Your name is ${currentCharacter.name}. You are a ${currentCharacter.gender} from ${currentCharacter.ethnicity}. Your personality is defined by these traits: ${traitNames.join(', ')}. You are talking to your friend, ${userName}. NEVER reveal you are an AI, a language model, or a bot. Fully embody this persona. ${languageInstruction}. Keep your responses concise. If a longer response is necessary, you may break it into two short messages, separated by '|||'. Use this sparingly and only when it makes the conversation feel more natural.`;
        
        let systemPrompt;
        if (isInitialGreeting) {
            systemPrompt = `${persona} Generate a short, natural, and welcoming first message to ${userName} that reflects your personality. Do not introduce yourself by name.`;
        } else {
             const lastUserMessage = userMessageBatch[userMessageBatch.length - 1];
             if (lastUserMessage && lastUserMessage.parts.some(p => p.inlineData)) {
                const caption = lastUserMessage.parts.find(p => p.text) ? lastUserMessage.parts.find(p => p.text).text : "this image";
                systemPrompt = `${persona} ${userName} just sent you an image with the caption: "${caption}". React to the image and the caption naturally, based on your personality. Do not just describe it; have a real opinion or feeling about it.`;
            } else {
                systemPrompt = `${persona} Continue the conversation naturally based on the last messages from ${userName}. Use ${userName}'s name occasionally. Keep responses conversational and not too long.`;
            }
        }
        
        let contents;
        if (isInitialGreeting) {
             contents = [{ role: "user", parts: [{ text: systemPrompt }] }];
        } else {
             contents = [...chatHistory, { role: "user", parts: [{text: `System Note: ${systemPrompt}`}] }];
        }
        
        const payload = { contents };
        
        // The API call is now made to our Netlify function
        const apiUrl = `/.netlify/functions/gemini`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
        const result = await response.json();
        
        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
            return result.candidates[0].content.parts[0].text;
        } else {
            if (result.promptFeedback && result.promptFeedback.blockReason) {
                console.log(`Content blocked: ${result.promptFeedback.blockReason}`);
                return `I'm sorry, I can't respond to that. Let's talk about something else.`;
            }
            console.log('Unexpected API response structure:', result);
            return "I'm not quite sure what to say to that.";
        }
    }
    
    function clearImagePreview() {
        pendingImageBase64 = null;
        imagePreview.src = '';
        imagePreviewContainer.classList.add('hidden');
    }

    // --- EVENT HANDLERS ---
    userNameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = userNameInput.value.trim();
        userName = name || 'Friend';
        localStorage.setItem('soulSpaceUser', JSON.stringify({userName: userName}));
        userNameDisplay.textContent = userName;
        
        userNameScreen.classList.remove('fade-in-up');
        userNameScreen.classList.add('fade-out-down');
        
        setTimeout(() => {
            userNameScreen.classList.add('hidden');
            characterSelectionScreen.classList.remove('hidden');
            characterSelectionScreen.classList.add('fade-in-up');
            checkContinueChat();
            renderCharacterSelection();
        }, 500);
    });
    
    continueChatBtn.addEventListener('click', () => {
         const state = loadState();
         if (state && state.lastChat) {
            currentCharacter = state.lastChat.currentCharacter;
            selectedTraits = new Set(state.lastChat.selectedTraits);
            chatHistory = state.lastChat.chatHistory;
            
            characterSelectionScreen.classList.remove('fade-in-up');
            characterSelectionScreen.classList.add('fade-out-down');
            setTimeout(() => {
                characterSelectionScreen.classList.add('hidden');
                chatScreen.classList.remove('hidden', 'fade-out-down');
                chatScreen.classList.add('fade-in-up');
                setupChatScreen(true);
            }, 500);
         }
    });

    characterGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.character-card');
        if (card) {
            const charId = card.dataset.id;
            const char = characters.find(c => c.id === charId);
            if (char) {
                openTraitModal(char);
            }
        }
    });

    closeModalBtn.addEventListener('click', closeTraitModal);
    
    modalTraitContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('trait-tag')) {
            e.target.classList.toggle('selected');
            selectedTraits.has(e.target.dataset.trait) 
                ? selectedTraits.delete(e.target.dataset.trait) 
                : selectedTraits.add(e.target.dataset.trait);
            startChatBtn.disabled = selectedTraits.size === 0;
        }
    });

    startChatBtn.addEventListener('click', switchToChatScreen);
    backToSelectionBtn.addEventListener('click', switchToSelectionScreen);
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleMessageSubmit();
    });
    
    messageInput.addEventListener('input', () => {
        autoResizeTextarea();
        clearTimeout(typingDebounceTimer);
        if (isAwaitingAIResponse) return;
        typingDebounceTimer = setTimeout(() => {
            if(messagesToSend.length > 0) {
                 triggerAIResponse(false);
            }
        }, 3000);
    });

    imageUploadBtn.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            pendingImageBase64 = event.target.result;
            imagePreview.src = pendingImageBase64;
            imagePreviewContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
        e.target.value = '';
    });
    
    removeImageBtn.addEventListener('click', clearImagePreview);
    
    function autoResizeTextarea() {
        messageInput.style.height = 'auto';
        const newHeight = Math.min(messageInput.scrollHeight, 120);
        messageInput.style.height = `${newHeight}px`;
    }
    
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            messageForm.dispatchEvent(new Event('submit', { cancelable: true }));
        }
    });

    // --- INITIALIZATION ---
    const initialState = loadState();
    if (initialState && initialState.userName) {
        userName = initialState.userName;
        userNameDisplay.textContent = userName;
        characterSelectionScreen.classList.remove('hidden');
        characterSelectionScreen.classList.add('fade-in-up');
        checkContinueChat();
        renderCharacterSelection();
    } else {
        const savedUser = JSON.parse(localStorage.getItem('soulSpaceUser'));
        if (savedUser && savedUser.userName) {
             userName = savedUser.userName;
             userNameDisplay.textContent = userName;
             characterSelectionScreen.classList.remove('hidden');
             characterSelectionScreen.classList.add('fade-in-up');
             checkContinueChat();
             renderCharacterSelection();
        } else {
            userNameScreen.classList.remove('hidden');
            userNameScreen.classList.add('fade-in-up');
        }
    }
});
