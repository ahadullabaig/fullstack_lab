# Lab Test Cheat Sheet — q1 to q7

> Memorize the **shared shells** once. Then for each question only memorize the **unique bits**.

---

## Part 0 — The shared shells (memorize ONCE)

### HTML skeleton (every q is this + a body)
```html
<!DOCTYPE html>
<html>
<head>
    <title>TITLE</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- unique content here -->
    <script src="script.js"></script>
</body>
</html>
```

### CSS body reset (paste in every styles.css)
```css
body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}
```

### CSS white card container (q1, q3, q4, q6, q7 all use this)
```css
.card-name {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
```

### JS pattern (every vanilla JS file)
```js
const x = document.getElementById('x');

x.addEventListener('event', () => {
    // logic
});
```

**No `DOMContentLoaded` wrapper** — script tag is at end of `<body>`, so the DOM is already loaded by the time the script runs.

---

## q1 — User Profile (Follow Button)

**Unique HTML body** (header + flex row with profile pic next to a details table + hobbies list):
```html
<div id="main-container">
    <div class="header">
        <h1>CS-302 Web Technologies Lab</h1>
        <p>User Profile Page</p>
    </div>

    <div class="profile-section">
        <img alt="Profile Picture" class="profile-picture">

        <div class="info-section">
            <h2>Student Details</h2>
            <table>
                <tr><th>Name</th><td>John Doe</td></tr>
                <tr><th>Registration No.</th><td>123456789</td></tr>
                <tr><th>Course</th><td>B.Tech Computer Science</td></tr>
                <tr><th>Semester</th><td>6th Semester</td></tr>
                <tr><th>Email</th><td>johndoe@student.edu</td></tr>
            </table>
            <button id="followBtn">Follow</button>
        </div>
    </div>

    <h3 class="section-title">My Hobbies</h3>
    <ul>
        <li>Programming in C++ and Java</li>
        <li>Playing Cricket</li>
        <li>Listening to Music</li>
        <li>Browsing the Internet</li>
    </ul>
</div>
```

**Unique JS:**
```js
const followBtn = document.getElementById('followBtn');

followBtn.addEventListener('click', () => {
    if (followBtn.innerText === 'Follow') {
        followBtn.innerText = 'Following';
        followBtn.classList.add('following');
    } else {
        followBtn.innerText = 'Follow';
        followBtn.classList.remove('following');
    }
});
```

**Unique CSS bits** (on top of shared shells — flex row inside the card):
```css
#main-container { background: white; padding: 40px; border-radius: 12px;
                  box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 700px; }

.header { text-align: center; margin-bottom: 30px; }

.profile-section { display: flex; gap: 30px; margin-bottom: 30px; }
.profile-picture { width: 150px; height: 150px; border-radius: 8px; background: #ecf0f1; }
.info-section    { flex: 1; }

table  { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
th     { background: #f9f9f9; width: 150px; }

button { margin-top: 15px; padding: 10px 25px; background: #007bff;
         color: white; border: none; border-radius: 5px; cursor: pointer; }
button.following { background: #27ae60; }

.section-title { color: #34495e; border-bottom: 2px solid #007bff; padding-bottom: 5px; }
ul { line-height: 1.8; }
```

**2 things to remember:**
1. Toggle text + toggle class on the button — that's the whole JS trick.
2. `.profile-section` is `display: flex` with `gap: 30px`, and `.info-section` uses `flex: 1` to fill the rest.

---

## q2 — Calculator

**Unique HTML body** (button grid uses inline `onclick` because 16 buttons):
```html
<div class="calculator">
    <input type="text" id="display" readonly>
    <div class="buttons">
        <button class="btn clear" onclick="clearDisplay()">C</button>
        <button class="btn operator" onclick="appendToDisplay('/')">÷</button>
        <button class="btn operator" onclick="appendToDisplay('*')">×</button>
        <button class="btn delete" onclick="deleteLast()">DEL</button>

        <button class="btn" onclick="appendToDisplay('7')">7</button>
        <!-- 8, 9 -->
        <button class="btn operator" onclick="appendToDisplay('-')">-</button>

        <button class="btn" onclick="appendToDisplay('4')">4</button>
        <!-- 5, 6 -->
        <button class="btn operator" onclick="appendToDisplay('+')">+</button>

        <button class="btn" onclick="appendToDisplay('1')">1</button>
        <!-- 2, 3 -->
        <button class="btn equal" onclick="calculate()">=</button>

        <button class="btn zero" onclick="appendToDisplay('0')">0</button>
        <button class="btn" onclick="appendToDisplay('.')">.</button>
    </div>
</div>
```

**Layout trick:** 4-column grid. Equals spans 2 rows, zero spans 2 columns.

**Unique JS** (4 tiny functions, `eval` does the math):
```js
const display = document.getElementById('display');

function appendToDisplay(input) { display.value += input; }
function clearDisplay()          { display.value = ''; }
function deleteLast()            { display.value = display.value.slice(0, -1); }
function calculate() {
    try { display.value = eval(display.value); }
    catch { display.value = 'Error'; }
}
```

**Unique CSS bits:**
```css
.calculator { background: #fff; padding: 20px; border-radius: 12px; width: 320px; }
#display { width: 100%; height: 60px; font-size: 2em; text-align: right;
           margin-bottom: 20px; padding: 10px; box-sizing: border-box;
           border: none; background: #ecf0f1; border-radius: 5px; }
.buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.btn { padding: 20px; font-size: 1.2em; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; background: #fff; }
.operator { background: #f39c12; color: white; }
.clear    { background: #e74c3c; color: white; }
.delete   { background: #7f8c8d; color: white; }
.equal    { background: #27ae60; color: white; grid-row: span 2; }
.zero     { grid-column: span 2; }
```

---

## q3 — Student Timetable (highlight today's column)

**Unique HTML body:**
```html
<div class="container">
    <h1>Weekly Schedule</h1>
    <p id="current-day"></p>
    <table id="timetable">
        <thead>
            <tr><th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></tr>
        </thead>
        <tbody>
            <tr><td class="time">09:00 - 10:00</td>
                <td class="math">Mathematics</td><td class="physics">Physics</td>
                <td class="math">Mathematics</td><td class="cs">Computer Science</td>
                <td class="physics">Physics</td></tr>
            <!-- 2 more rows like this -->
        </tbody>
    </table>
</div>
```

**Unique JS** (find today's column header → border every cell in that column):
```js
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const now = new Date();
const dayName = days[now.getDay()];

document.getElementById('current-day').innerText = `Today is ${dayName}, ${now.toLocaleDateString()}`;

const headers = document.querySelectorAll('#timetable th');
headers.forEach((header, index) => {
    if (header.innerText === dayName) {
        header.style.backgroundColor = '#27ae60';
        const rows = document.querySelectorAll('#timetable tbody tr');
        rows.forEach(row => {
            row.cells[index].style.border = '2px solid #27ae60';
        });
    }
});
```

**Key JS APIs:** `new Date().getDay()` → 0-6 (Sun=0). `row.cells[index]` gets nth `<td>`.

**Unique CSS bits:**
```css
.container { background: white; padding: 30px; border-radius: 12px; text-align: center; }
table { border-collapse: collapse; margin: 0 auto; }
th, td { border: 1px solid #ddd; padding: 12px 20px; text-align: center; }
th { background: #34495e; color: white; }
.time    { background: #f9f9f9; font-weight: bold; }
.math    { background: #d1e7dd; }
.physics { background: #cfe2ff; }
.cs      { background: #f8d7da; }
.english { background: #fff3cd; }
```

---

## q4 — Course Registration Form

**Unique HTML body** (text + email + select + radio + checkbox = covers every form element):
```html
<div class="form-container">
    <h2>Student Course Registration</h2>
    <form id="registrationForm">
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required>
        </div>
        <div class="form-group">
            <label for="course">Select Course</label>
            <select id="course" required>
                <option value="">-- Choose --</option>
                <option value="cs">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="ai">Artificial Intelligence</option>
            </select>
        </div>
        <div class="form-group">
            <label>Semester</label>
            <div class="radio-group">
                <input type="radio" name="semester" value="Fall" id="fall" checked>
                <label for="fall">Fall</label>
                <input type="radio" name="semester" value="Spring" id="spring">
                <label for="spring">Spring</label>
            </div>
        </div>
        <div class="form-group">
            <label><input type="checkbox" required> I agree to the terms</label>
        </div>
        <button type="submit">Register Now</button>
    </form>
    <div id="message" class="hidden"></div>
</div>
```

**Unique JS:**
```js
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const semester = document.querySelector('input[name="semester"]:checked').value;

    messageDiv.innerHTML = `
        <strong>Registration Successful!</strong><br>
        Student: ${name}<br>
        Email: ${email}<br>
        Course: ${course.toUpperCase()}<br>
        Term: ${semester}
    `;
    messageDiv.classList.remove('hidden');
});
```

**3 key tricks:**
1. `event.preventDefault()` — stop page refresh
2. Get text/email/select: `.value`
3. Get checked radio: `querySelector('input[name="semester"]:checked').value`

**Unique CSS bits:**
```css
.form-container { background: white; padding: 30px; border-radius: 12px; width: 400px; }
.form-group { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; font-weight: 600; }
input[type="text"], input[type="email"], select {
    width: 100%; padding: 10px; border: 1px solid #ccc;
    border-radius: 4px; box-sizing: border-box;
}
.radio-group { display: flex; gap: 15px; }
button { width: 100%; padding: 12px; background: #007bff; color: white;
         border: none; border-radius: 4px; cursor: pointer; }
#message { margin-top: 20px; padding: 10px; border-radius: 4px;
           background: #d4edda; color: #155724; text-align: center; }
.hidden { display: none; }
```

---

## q5 — Text Animation (the tiny one)

**Unique HTML body:**
```html
<h1 id="animatedText">Color Changing Text</h1>
```

**Unique JS** (toggle a boolean every second):
```js
const textElement = document.getElementById('animatedText');
let isEnlarged = false;

function toggleAnimation() {
    if (isEnlarged) {
        textElement.style.transform = 'scale(0.75)';
        textElement.style.color = '#6f42c1';
        textElement.innerText = 'Shrinking...';
    } else {
        textElement.style.transform = 'scale(1.5)';
        textElement.style.color = '#dc3545';
        textElement.innerText = 'Enlarging...';
    }
    isEnlarged = !isEnlarged;
}

setInterval(toggleAnimation, 1000);
toggleAnimation();
```

**Key APIs:** `setInterval(fn, ms)`, `element.style.transform`, `element.style.color`.

**Unique CSS bits** (the `transition` is what makes it smooth, not JS):
```css
#animatedText {
    font-size: 3rem;
    display: inline-block;
    transition: transform 1s ease, color 1s ease;
}
```

---

## q6 — Password Strength Checker

**Unique HTML body:**
```html
<div class="card">
    <h2>Security Check</h2>
    <div class="input-wrapper">
        <input type="password" id="password" placeholder="Type your password...">
        <span id="toggleText">Show</span>
    </div>
    <div class="meter-container">
        <div id="strengthBar"></div>
    </div>
    <p id="feedbackText">Strength: <span>None</span></p>
    <ul class="requirements">
        <li id="length">At least 8 characters</li>
        <li id="upper">At least one uppercase letter</li>
        <li id="number">At least one number</li>
        <li id="special">At least one special character</li>
    </ul>
</div>
```

**Unique JS** (array of checks → loop counts score → score indexes into states):
```js
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const feedbackText = document.querySelector('#feedbackText span');
const toggleText = document.getElementById('toggleText');

const checks = [
    { id: 'length',  test: v => v.length >= 8 },
    { id: 'upper',   test: v => /[A-Z]/.test(v) },
    { id: 'number',  test: v => /[0-9]/.test(v) },
    { id: 'special', test: v => /[^A-Za-z0-9]/.test(v) }
];

const states = [
    { width: '0%',   color: 'transparent', text: 'None' },
    { width: '25%',  color: '#e94560',     text: 'Weak' },
    { width: '50%',  color: '#f39c12',     text: 'Medium' },
    { width: '75%',  color: '#3498db',     text: 'Strong' },
    { width: '100%', color: '#27ae60',     text: 'Very Strong' }
];

toggleText.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleText.innerText = isPassword ? 'Hide' : 'Show';
});

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;
    checks.forEach(c => {
        const valid = c.test(val);
        document.getElementById(c.id).classList.toggle('valid', valid);
        if (valid) score++;
    });
    const s = states[score];
    strengthBar.style.width = s.width;
    strengthBar.style.backgroundColor = s.color;
    feedbackText.innerText = s.text;
    feedbackText.style.color = s.color;
});
```

**4 regexes to memorize:**
- length: `v.length >= 8`
- upper: `/[A-Z]/`
- number: `/[0-9]/`
- special: `/[^A-Za-z0-9]/` (anything not alphanumeric)

**Unique CSS bits:**
```css
.card { background: white; padding: 30px; border-radius: 12px; width: 350px; }
.input-wrapper { position: relative; margin-bottom: 15px; }
input { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
#toggleText { position: absolute; right: 10px; top: 50%;
              transform: translateY(-50%); cursor: pointer; color: #007bff; font-size: 0.8rem; }
.meter-container { height: 8px; background: #eee; border-radius: 4px; overflow: hidden; margin-bottom: 10px; }
#strengthBar { height: 100%; width: 0%; transition: width 0.4s, background-color 0.4s; }
.requirements { list-style: none; padding: 0; font-size: 0.85rem; color: #888; }
.requirements li.valid { color: #27ae60; }
.requirements li.valid::before { content: "✓ "; }
```

---

## q7 — jQuery Star Rating

**Don't forget the jQuery CDN in `<head>`:**
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

**Unique HTML body:**
```html
<div class="rating-container">
    <h2>Rate your experience</h2>
    <div class="stars">
        <span class="star" data-value="1">&#9733;</span>
        <span class="star" data-value="2">&#9733;</span>
        <span class="star" data-value="3">&#9733;</span>
        <span class="star" data-value="4">&#9733;</span>
        <span class="star" data-value="5">&#9733;</span>
    </div>
    <p id="rating-message">Click a star to rate!</p>
    <button id="reset-btn">Reset</button>
</div>
```

`&#9733;` is the ★ entity. `data-value` stores the rating number on each star.

**Unique JS** (jQuery, not vanilla):
```js
$(document).ready(function() {
    let currentRating = 0;

    $('.star').on('mouseenter', function() {
        highlight($(this).data('value'), 'hovered');
    });

    $('.star').on('mouseleave', function() {
        $('.star').removeClass('hovered');
    });

    $('.star').on('click', function() {
        currentRating = $(this).data('value');
        highlight(currentRating, 'selected');
        $('#rating-message').text('You rated this ' + currentRating + ' stars!');
    });

    $('#reset-btn').on('click', function() {
        currentRating = 0;
        $('.star').removeClass('selected hovered');
        $('#rating-message').text('Click a star to rate!');
    });

    function highlight(value, className) {
        $('.star').removeClass(className);
        $('.star').each(function() {
            if ($(this).data('value') <= value) {
                $(this).addClass(className);
            }
        });
    }
});
```

**jQuery cheats:**
- `$(selector)` instead of `document.querySelector`
- `.on('event', fn)` instead of `addEventListener`
- `$(this).data('value')` reads `data-value` attribute
- `.addClass / .removeClass / .text(...)` are the workhorses

**Unique CSS bits:**
```css
.rating-container { background: white; padding: 40px; border-radius: 12px; text-align: center; }
.stars { font-size: 3rem; cursor: pointer; margin-bottom: 15px; }
.star { color: #ccc; transition: color 0.2s; }
.star.hovered, .star.selected { color: #f1c40f; }
#rating-message { color: #555; font-weight: bold; margin-bottom: 20px; }
#reset-btn { padding: 8px 15px; border: 1px solid #ddd; background: white; cursor: pointer; border-radius: 5px; }
```

---

## Universal exam strategy

1. **Type the HTML skeleton + body reset CSS first** (shared shells — same in every q).
2. **Then the unique HTML body.**
3. **Then `const` refs at top of JS**, handlers below.
4. **Then the unique CSS bits.**
5. **Run it in the browser** before moving on — the test is graded on it working.

## DOM/JS APIs you'll reuse across questions

| Need to... | Use |
|---|---|
| Grab one element by id | `document.getElementById('id')` |
| Grab one element by selector | `document.querySelector('...')` |
| Grab many | `document.querySelectorAll('...')` |
| Read input value | `el.value` |
| Read text | `el.innerText` |
| Set HTML | `el.innerHTML = ...` |
| Add/remove class | `el.classList.add/remove/toggle('x')` |
| Inline style | `el.style.color = ...` |
| Listen for event | `el.addEventListener('event', fn)` |
| Stop form refresh | `event.preventDefault()` |
| Get checked radio | `document.querySelector('input[name="x"]:checked').value` |
| Repeat every N ms | `setInterval(fn, ms)` |
| Today | `new Date().getDay()` (0=Sun) |

## Common HTML form/element attributes

| Attribute | Where | Why |
|---|---|---|
| `required` | input/select | browser-enforced validation |
| `type="email"` | input | email validation |
| `name="x"` | radio | groups radios together |
| `value="..."` | option/radio | what gets submitted |
| `data-value="..."` | any element | read via `.dataset.value` or jQuery `.data('value')` |
| `readonly` | input | display-only |
| `placeholder` | input | grey hint text |
