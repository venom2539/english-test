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
            context: "Nora switched to a hybrid work schedule, spending three days in the office and two at home. She noted that the change improved her focus on work and brought a lot of benefits. However, the coordination of meetings between the teams has become more difficult recently.",
            text: "How many days does Nora work from home?", 
            options: ["One", "Two", "Three", "Four"], 
            correct: 1 
        },
        { 
            id: 27, 
            context: "Nora switched to a hybrid work schedule, spending three days in the office and two at home. She noted that the change improved her focus on work and brought a lot of benefits. However, the coordination of meetings between the teams has become more difficult recently.",
            text: "What has changed for the better in her workflow?", 
            options: ["Salary", "Focus on work", "Home-to-work travel time", "Office space"], 
            correct: 1 
        },
        { 
            id: 28, 
            context: "Nora switched to a hybrid work schedule, spending three days in the office and two at home. She noted that the change improved her focus on work and brought a lot of benefits. However, the coordination of meetings between the teams has become more difficult recently.",
            text: "What has become more difficult in the work process recently?", 
            options: ["Writing reports", "Coordinating meetings", "Software use", "Work-life balance"], 
            correct: 1 
        },
        { 
            id: 29, 
            context: "The new exhibition is dedicated to climate changes. There are some solutions in the field of fight against climate changes, such as renewable energy projects and urban greening. Interactive displays let visitors simulate reduction of emissions by changing transport and household habits.",
            text: "What is the exhibition dedicated to?", 
            options: ["Climate solutions", "Ancient history", "Space travel", "Ocean environment"], 
            correct: 0 
        },
        { 
            id: 30, 
            context: "The new exhibition is dedicated to climate changes. There are some solutions in the field of fight against climate changes, such as renewable energy projects and urban greening. Interactive displays let visitors simulate reduction of emissions by changing transport and household habits.",
            text: "What actions can be demonstrated on interactive displays?", 
            options: ["Construct a turbine", "Simulate reduction of emissions", "Watch a film only", "Plant trees"], 
            correct: 1 
        },
        { 
            id: 31, 
            context: "The new exhibition is dedicated to climate changes. There are some solutions in the field of fight against climate changes, such as renewable energy projects and urban greening. Interactive displays let visitors simulate reduction of emissions by changing transport and household habits.",
            text: "Which solutions are presented?", 
            options: ["Fossil fuels", "Renewable energy projects and green spaces", "Waste treatment", "Geoengineering only"], 
            correct: 1 
        },
        { 
            id: 32, 
            context: "The new exhibition is dedicated to climate changes. There are some solutions in the field of fight against climate changes, such as renewable energy projects and urban greening. Interactive displays let visitors simulate reduction of emissions by changing transport and household habits.",
            text: "What will reduce the effect of emissions using interactive displays?", 
            options: ["Using solar and wind power", "Changing transport and household habits", "Shift to renewable energy", "Implementing energy efficiency"], 
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
const warningModal = document.getElementById('warningModal');
const continueTestBtn = document.getElementById('continueTestBtn');
const finishAnywayBtn = document.getElementById('finishAnywayBtn');
const questionNavButtons = document.getElementById('questionNavButtons');

// Функции навигации
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (testPage && testPage.classList.contains('active')) {
      if (e.key === 'ArrowLeft') previousQuestion();
      if (e.key === 'ArrowRight') nextQuestion();
    }
  });
}

function initSwipeNavigation() {
  if (!testPage) return;
  let startX = 0, endX = 0, threshold = 50;
  testPage.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });
  testPage.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) previousQuestion();
      else nextQuestion();
    }
  }, { passive: true });
}

// Основной и единственный обработчик загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  // Обновляем общее число вопросов
  if (totalQuestionsSpan) {
    totalQuestionsSpan.textContent = testData.totalQuestions;
  }

  // Инициализируем навигацию стрелками и свайпами
  initKeyboardNavigation();
  initSwipeNavigation();

  // Обработчики кнопок
  if (startTestBtn) startTestBtn.addEventListener('click', startTest);
  if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  if (finishBtn) finishBtn.addEventListener('click', showFinishWarning);
  if (retakeBtn) retakeBtn.addEventListener('click', retakeTest);
  if (continueTestBtn) continueTestBtn.addEventListener('click', hideWarningModal);
  if (finishAnywayBtn) finishAnywayBtn.addEventListener('click', finishTestAnyway);

  // Загружаем состояние теста из sessionStorage
  loadSavedTest();
});

function startTest() {
    welcomePage.classList.remove('active');
    testPage.classList.add('active');
    
    testStartTime = new Date();
    startTimer();
    createQuestionNavigation();
    loadQuestion(0);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createQuestionNavigation() {
    const navContainer = document.getElementById('questionNavButtons');
    if (!navContainer) return;
    navContainer.innerHTML = '';
    
    for (let i = 0; i < testData.totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn unanswered';
        btn.textContent = i + 1;
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', `Вопрос ${i + 1}`);
        btn.addEventListener('click', () => loadQuestion(i));
        navContainer.appendChild(btn);
    }
}

function updateQuestionNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach((btn, index) => {
        const questionId = testData.questions[index].id;
        
        // Сброс всех классов
        btn.className = 'nav-btn';
        
        // Добавляем соответствующий класс
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (answers[questionId] !== undefined) {
            btn.classList.add('answered');
        } else {
            btn.classList.add('unanswered');
        }
    });
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishTestAnyway();
        }
        
        // Автосохранение каждые 30 секунд
        if (timeRemaining % 30 === 0) {
            saveTestState();
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (!timeRemainingSpan) return;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeRemainingSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Предупреждение о скором окончании времени
    if (timeRemaining <= 300) { // 5 минут
        timeRemainingSpan.classList.add('timer-warning');
    }
    if (timeRemaining <= 60) { // 1 минута
        timeRemainingSpan.classList.add('timer-danger');
    }
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
            const optionIndex = parseInt(item.dataset.option, 10);
            selectOption(question.id, optionIndex);
        });
    });
    
    updateNavigation();
    updateProgress();
    updateQuestionNavigation();
    saveTestState();
}

function selectOption(questionId, optionIndex) {
    answers[questionId] = optionIndex;
    
    // Обновляем визуальное состояние
    const optionItems = document.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        item.classList.remove('selected');
    });
    const selectedItem = document.querySelector(`.option-item[data-option="${optionIndex}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    // Обновляем навигацию
    updateQuestionNavigation();
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
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === testData.totalQuestions - 1;
}

function updateProgress() {
    if (currentQuestionSpan) currentQuestionSpan.textContent = currentQuestionIndex + 1;
    if (progressFill) {
        const progress = ((currentQuestionIndex + 1) / testData.totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

function showFinishWarning() {
    // Проверяем неотвеченные вопросы
    const unansweredQuestions = [];
    testData.questions.forEach(q => {
        if (answers[q.id] === undefined) {
            unansweredQuestions.push(q.id);
        }
    });
    
    if (unansweredQuestions.length === 0) {
        // Все вопросы отвечены, завершаем тест
        finishTestAnyway();
        return;
    }
    
    // Показываем предупреждение
    const warningText = document.getElementById('warningText');
    const unansweredList = document.getElementById('unansweredList');
    
    if (warningText) warningText.textContent = `Вы не ответили на ${unansweredQuestions.length} вопросов:`;
    if (unansweredList) unansweredList.textContent = unansweredQuestions.join(', ');
    
    if (warningModal) warningModal.classList.add('active');
}

function hideWarningModal() {
    if (warningModal) warningModal.classList.remove('active');
}

function finishTestAnyway() {
    if (timerInterval) clearInterval(timerInterval);
    hideWarningModal();
    showResults();
}

function calculateResults() {
    let correctCount = 0;
    let answeredCount = 0;
    
    testData.questions.forEach(question => {
        if (answers[question.id] !== undefined) {
            answeredCount++;
            if (answers[question.id] === question.correct) {
                correctCount++;
            }
        }
    });
    
    // Определяем уровень только по отвеченным вопросам
    // Если человек ответил меньше чем на половину, ограничиваем максимальный уровень
    let adjustedCorrectCount = correctCount;
    if (answeredCount < testData.totalQuestions / 2) {
        adjustedCorrectCount = Math.min(correctCount, 20);
    }
    
    let level = 'A1';
    for (const [levelKey, levelData] of Object.entries(testData.levels)) {
        const [min, max] = levelData.range;
        if (adjustedCorrectCount >= min && adjustedCorrectCount <= max) {
            level = levelKey;
            break;
        }
    }
    
    const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const testDuration = testStartTime ? (new Date() - testStartTime) : 0;
    const timeTaken = Math.floor(testDuration / 1000);
    const skippedCount = testData.totalQuestions - answeredCount;
    
    return {
        correctCount,
        answeredCount,
        percentage,
        level,
        timeTaken,
        skippedCount
    };
}

function showResults() {
    const results = calculateResults();
    
    welcomePage.classList.remove('active');
    testPage.classList.remove('active');
    resultsPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Заполняем результаты
    const scoreNumber = document.getElementById('scoreNumber');
    const correctAnswers = document.getElementById('correctAnswers');
    const percentage = document.getElementById('percentage');
    const skippedCount = document.getElementById('skippedCount');
    const timeTaken = document.getElementById('timeTaken');
    const levelBadge = document.getElementById('levelBadge');
    const levelTitle = document.getElementById('levelTitle');
    const levelDescription = document.getElementById('levelDescription');

    if (scoreNumber) scoreNumber.textContent = results.correctCount;
    if (correctAnswers) correctAnswers.textContent = `${results.correctCount} из ${results.answeredCount}`;
    if (percentage) percentage.textContent = `${results.percentage}%`;
    if (skippedCount) skippedCount.textContent = results.skippedCount;
    
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    if (timeTaken) timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const levelData = testData.levels[results.level] || testData.levels.A1;
    if (levelBadge) levelBadge.textContent = results.level;
    if (levelTitle) levelTitle.textContent = levelData.title;
    
    let description = levelData.description;
    if (results.skippedCount > 0) {
        description += ` Обратите внимание: ${results.skippedCount} вопросов были пропущены, что могло повлиять на точность оценки.`;
    }
    if (levelDescription) levelDescription.textContent = description;
    
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (timeRemainingSpan) {
        timeRemainingSpan.classList.remove('timer-warning', 'timer-danger');
    }
    
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
        try {
            const state = JSON.parse(saved);
            if (state && state.timeRemaining > 0) {
                const shouldContinue = confirm('У вас есть несохраненный тест. Хотите продолжить?');
                if (shouldContinue) {
                    currentQuestionIndex = state.currentQuestionIndex || 0;
                    answers = state.answers || {};
                    timeRemaining = state.timeRemaining || (testData.duration * 60);
                    testStartTime = state.testStartTime ? new Date(state.testStartTime) : new Date();
                    
                    welcomePage.classList.remove('active');
                    testPage.classList.add('active');
                    createQuestionNavigation();
                    startTimer();
                    loadQuestion(currentQuestionIndex);
                    return;
                }
            }
        } catch (e) {
            console.error('Error loading saved test:', e);
        }
        clearSavedTest();
    }
}

function clearSavedTest() {
    sessionStorage.removeItem('englishTest');
}
