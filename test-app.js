// Test data - все вопросы и правильные ответы
const testData = {
    title: "Тест на определение уровня английского языка",
    duration: 35,
    totalQuestions: 40,
    questions: [
        { id: 1, text: "She doesn't mind ___ early.", options: ["get up", "to get up", "getting up", "get"], correct: 2 },
        { id: 2, text: "He's responsible ___ the budget.", options: ["of", "for", "about", "with"], correct: 1 },
        { id: 3, text: "They ___ lunch when I called.", options: ["had", "were having", "have", "are having"], correct: 1 },
        { id: 4, text: "I ___ to the cinema last weekend.", options: ["go", "have gone", "went", "was going"], correct: 2 },
        { id: 5, text: "Opposite of \"polite\":", options: ["rude", "proud", "loud", "brave"], correct: 0 },
        { id: 6, text: "If it ___, we'll cancel the picnic.", options: ["will rain", "rains", "rained", "is raining"], correct: 1 },
        { id: 7, text: "This is the ___ movie I've ever seen.", options: ["more exciting", "most exciting", "excitingest", "very exciting"], correct: 1 },
        { id: 8, text: "We've known each other ___ years.", options: ["since", "for", "from", "by"], correct: 1 },
        { id: 9, text: "A ___ of paper.", options: ["sheet", "piece", "slice", "drop"], correct: 0 },
        { id: 10, text: "The meeting ___ at 3 p.m. yesterday.", options: ["starts", "started", "was start", "had start"], correct: 1 },
        { id: 11, text: "There aren't ___ chairs in the room.", options: ["much", "many", "a little", "plenty"], correct: 1 },
        { id: 12, text: "You ___ see a doctor.", options: ["should", "mustn't", "might", "would"], correct: 0 },
        { id: 13, text: "He suggested ___ earlier.", options: ["to leave", "leaving", "leave", "we leaving"], correct: 1 },
        { id: 14, text: "If I ___ more money, I'd save some.", options: ["have", "had", "will have", "would have"], correct: 1 },
        { id: 15, text: "She's better ___ math than me.", options: ["in", "at", "on", "for"], correct: 1 },
        { id: 16, text: "By the time we got there, the show ___.", options: ["has begun", "had begun", "began", "was begin"], correct: 1 },
        { id: 17, text: "I'm used ___ in a small town.", options: ["to live", "living", "to living", "live"], correct: 2 },
        { id: 18, text: "The opposite of \"borrow\" is ___.", options: ["lend", "give", "take", "owe"], correct: 0 },
        { id: 19, text: "There's too ___ noise here.", options: ["much", "many", "few", "several"], correct: 0 },
        { id: 20, text: "She denied ___ the window.", options: ["to break", "breaking", "break", "that break"], correct: 1 },
        { id: 21, text: "We're short ___ time.", options: ["of", "on", "in", "at"], correct: 0 },
        { id: 22, text: "I prefer walking ___ driving.", options: ["than", "rather", "to", "over than"], correct: 2 },
        { id: 23, text: "You'd better ___ now.", options: ["to leave", "leave", "leaving", "left"], correct: 1 },
        { id: 24, text: "Scarcely ___ the bus when it began to snow.", options: ["we had caught", "had we caught", "we caught", "did we caught"], correct: 1 },
        { id: 25, text: "It's high time you ___ to bed.", options: ["go", "went", "had gone", "would go"], correct: 1 },
        // Чтение
        { 
            id: 26, 
            context: "Nora recently switched to a hybrid work schedule, spending three days in the office and two at home. She says the change improved her focus and allowed more time for exercise. However, coordinating meetings across teams has become slightly more complicated.",
            text: "How many days does Nora work from home?", 
            options: ["One", "Two", "Three", "Four"], 
            correct: 1 
        },
        { 
            id: 27, 
            context: "Nora recently switched to a hybrid work schedule, spending three days in the office and two at home. She says the change improved her focus and allowed more time for exercise. However, coordinating meetings across teams has become slightly more complicated.",
            text: "What improved due to the change?", 
            options: ["Salary", "Focus", "Commute time", "Office space"], 
            correct: 1 
        },
        { 
            id: 28, 
            context: "Nora recently switched to a hybrid work schedule, spending three days in the office and two at home. She says the change improved her focus and allowed more time for exercise. However, coordinating meetings across teams has become slightly more complicated.",
            text: "What became more complicated?", 
            options: ["Writing reports", "Coordinating meetings", "Using software", "Booking holidays"], 
            correct: 1 
        },
        { 
            id: 29, 
            context: "The museum's new exhibition explores climate solutions, highlighting renewable energy projects and urban green spaces. Interactive displays let visitors simulate reducing emissions by changing transport choices and household habits.",
            text: "What does the exhibition explore?", 
            options: ["Climate solutions", "Ancient history", "Space travel", "Ocean art"], 
            correct: 0 
        },
        { 
            id: 30, 
            context: "The museum's new exhibition explores climate solutions, highlighting renewable energy projects and urban green spaces. Interactive displays let visitors simulate reducing emissions by changing transport choices and household habits.",
            text: "What can visitors do at the displays?", 
            options: ["Build a turbine", "Simulate reducing emissions", "Watch a film only", "Plant trees"], 
            correct: 1 
        },
        { 
            id: 31, 
            context: "The museum's new exhibition explores climate solutions, highlighting renewable energy projects and urban green spaces. Interactive displays let visitors simulate reducing emissions by changing transport choices and household habits.",
            text: "Which solutions are highlighted?", 
            options: ["Fossil fuels", "Renewable energy and green spaces", "Nuclear waste storage", "Geoengineering only"], 
            correct: 1 
        },
        { 
            id: 32, 
            context: "The museum's new exhibition explores climate solutions, highlighting renewable energy projects and urban green spaces. Interactive displays let visitors simulate reducing emissions by changing transport choices and household habits.",
            text: "What choices affect emissions in the simulation?", 
            options: ["Clothing", "Transport and household habits", "Music", "Sports"], 
            correct: 1 
        },
        // Use of English
        { id: 33, text: "I look forward ___ your reply.", options: ["to hear", "hearing", "to hearing", "hear"], correct: 2 },
        { id: 34, text: "Choose the correct sentence:", options: ["The news are interesting.", "The news is interesting.", "The news were interesting.", "News is interesting thing."], correct: 1 },
        { id: 35, text: "Phrasal verb: \"Can you ___ the lights?\"", options: ["turn off", "put up", "come across", "get over"], correct: 0 },
        { id: 36, text: "Collocation: \"widely ___\"", options: ["spreaded", "spread", "spreading", "widespread"], correct: 1 },
        { id: 37, text: "Fixed expression: \"sooner or ___\"", options: ["late", "later", "latest", "latter"], correct: 1 },
        { id: 38, text: "Preposition: \"___ average, prices rose by 2%.\"", options: ["In", "On", "At", "By"], correct: 1 },
        { id: 39, text: "Word formation: \"Her speech was very ___ (persuade).\"", options: ["persuasion", "persuasive", "persuasively", "persuadable"], correct: 1 },
        { id: 40, text: "Error spotting: \"He explained me the rules.\" Which word is wrong?", options: ["explained", "me", "the", "rules"], correct: 1 }
    ],
    levels: {
        A1: { range: [0, 10], title: "A1 - Начальный уровень", description: "Элементарные конструкции и базовая лексика. Вы понимаете и можете использовать знакомые повседневные выражения." },
        A2: { range: [11, 20], title: "A2 - Базовый уровень", description: "Простые времена и повседневные темы. Можете общаться на знакомые темы, касающиеся работы, школы, досуга." },
        B1: { range: [21, 30], title: "B1 - Средний уровень", description: "Уверенная база грамматики, понимание коротких текстов. Можете справляться с большинством ситуаций во время путешествий." },
        B2: { range: [31, 36], title: "B2 - Продвинутый средний уровень", description: "Высокая точность, устойчивое чтение и коллокации. Понимаете основное содержание сложных текстов." },
        C1: { range: [37, 40], title: "C1 - Высокий уровень", description: "Гибкость и точность, редкие ошибки. Можете выражать идеи спонтанно и бегло, не испытывая затруднений в подборе слов." }
    }
};

// Состояние теста
let currentQuestionIndex = 0;
let answers = {};
let timeRemaining = testData.duration * 60; // в секундах
let timerInterval;
let testStartTime;

// Элементы DOM
const welcomePage = document.getElementById('welcomePage');
const testPage = document.getElementById('testPage');
const resultsPage = document.getElementById('resultsPage');
const startTestBtn = document.getElementById('startTestBtn');
const questionContent = document.getElementById('questionContent');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const timeRemainingSpan = document.getElementById('timeRemaining');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const retakeBtn = document.getElementById('retakeBtn');

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    totalQuestionsSpan.textContent = testData.totalQuestions;
    
    // Обработчики событий
    startTestBtn.addEventListener('click', startTest);
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    finishBtn.addEventListener('click', finishTest);
    retakeBtn.addEventListener('click', retakeTest);
    
    // Загружаем сохраненные данные
    loadSavedTest();
});

function startTest() {
    welcomePage.classList.remove('active');
    testPage.classList.add('active');
    
    testStartTime = new Date();
    startTimer();
    loadQuestion(0);
    updateProgress();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }
        
        // Автосохранение каждые 30 секунд
        if (timeRemaining % 30 === 0) {
            saveTestState();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeRemainingSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function loadQuestion(index) {
    const question = testData.questions[index];
    currentQuestionIndex = index;
    
    let html = `
        <div class="question-number">Вопрос ${index + 1} из ${testData.totalQuestions}</div>
    `;
    
    // Добавляем контекст если есть
    if (question.context) {
        html += `
            <div class="question-context">
                <h4>Прочитайте текст:</h4>
                <p>${question.context}</p>
            </div>
        `;
    }
    
    html += `
        <div class="question-text">${question.text}</div>
        <ul class="options-list">
    `;
    
    question.options.forEach((option, i) => {
        const letter = String.fromCharCode(65 + i); // A, B, C, D
        const isSelected = answers[question.id] === i;
        html += `
            <li class="option-item ${isSelected ? 'selected' : ''}" data-option="${i}">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${option}</div>
            </li>
        `;
    });
    
    html += '</ul>';
    questionContent.innerHTML = html;
    
    // Добавляем обработчики кликов для опций
    const optionItems = document.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        item.addEventListener('click', () => {
            const optionIndex = parseInt(item.dataset.option);
            selectOption(question.id, optionIndex);
        });
    });
    
    updateNavigation();
    updateProgress();
    saveTestState();
}

function selectOption(questionId, optionIndex) {
    answers[questionId] = optionIndex;
    
    // Обновляем визуальное состояние
    const optionItems = document.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        item.classList.remove('selected');
    });
    optionItems[optionIndex].classList.add('selected');
    
    saveTestState();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < testData.totalQuestions - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === testData.totalQuestions - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        finishBtn.style.display = 'none';
    }
}

function updateProgress() {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / testData.totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
}

function finishTest() {
    // Проверяем, что все вопросы отвечены
    const unansweredQuestions = [];
    testData.questions.forEach(q => {
        if (answers[q.id] === undefined) {
            unansweredQuestions.push(q.id);
        }
    });
    
    if (unansweredQuestions.length > 0) {
        alert(`Пожалуйста, ответьте на все вопросы. Неотвеченные вопросы: ${unansweredQuestions.join(', ')}`);
        return;
    }
    
    clearInterval(timerInterval);
    calculateResults();
    showResults();
}

function calculateResults() {
    let correctCount = 0;
    
    testData.questions.forEach(question => {
        if (answers[question.id] === question.correct) {
            correctCount++;
        }
    });
    
    // Определяем уровень
    let level = 'A1';
    for (const [levelKey, levelData] of Object.entries(testData.levels)) {
        const [min, max] = levelData.range;
        if (correctCount >= min && correctCount <= max) {
            level = levelKey;
            break;
        }
    }
    
    const percentage = Math.round((correctCount / testData.totalQuestions) * 100);
    const testDuration = new Date() - testStartTime;
    const timeTaken = Math.floor(testDuration / 1000);
    
    return {
        correctCount,
        percentage,
        level,
        timeTaken
    };
}

function showResults() {
    const results = calculateResults();
    
    testPage.classList.remove('active');
    resultsPage.classList.add('active');
    
    // Заполняем результаты
    document.getElementById('scoreNumber').textContent = results.correctCount;
    document.getElementById('correctAnswers').textContent = results.correctCount;
    document.getElementById('percentage').textContent = `${results.percentage}%`;
    
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const levelData = testData.levels[results.level];
    document.getElementById('levelBadge').textContent = results.level;
    document.getElementById('levelTitle').textContent = levelData.title;
    document.getElementById('levelDescription').textContent = levelData.description;
    
    // Очищаем сохраненные данные
    clearSavedTest();
}

function retakeTest() {
    // Сброс состояния
    currentQuestionIndex = 0;
    answers = {};
    timeRemaining = testData.duration * 60;
    
    resultsPage.classList.remove('active');
    welcomePage.classList.add('active');
    
    clearSavedTest();
}

function saveTestState() {
    const state = {
        currentQuestionIndex,
        answers,
        timeRemaining,
        testStartTime: testStartTime ? testStartTime.getTime() : null
    };
    sessionStorage.setItem('englishTest', JSON.stringify(state));
}

function loadSavedTest() {
    const saved = sessionStorage.getItem('englishTest');
    if (saved) {
        const state = JSON.parse(saved);
        
        // Проверяем, не истек ли тест
        if (state.timeRemaining > 0) {
            const shouldContinue = confirm('У вас есть несохраненный тест. Хотите продолжить?');
            if (shouldContinue) {
                currentQuestionIndex = state.currentQuestionIndex;
                answers = state.answers;
                timeRemaining = state.timeRemaining;
                testStartTime = new Date(state.testStartTime);
                
                welcomePage.classList.remove('active');
                testPage.classList.add('active');
                startTimer();
                loadQuestion(currentQuestionIndex);
                return;
            }
        }
        clearSavedTest();
    }
}

function clearSavedTest() {
    sessionStorage.removeItem('englishTest');
}