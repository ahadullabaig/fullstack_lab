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
    <input type="text" id="display" readonly placeholder="0">
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
.calculator { background: white; padding: 20px; border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
#display { width: 100%; font-size: 2em; text-align: right; margin-bottom: 20px;
           padding: 10px; box-sizing: border-box; border: none; background: whitesmoke; }
.buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.btn { padding: 20px; font-size: 1.2em; border: 1px solid; border-radius: 5px; cursor: pointer; }
.operator { background: #f39c12; color: white; }
.clear    { background: #e74c3c; color: white; }
.delete   { background: #7f8c8d; color: white; }
.equal    { background: #27ae60; color: white; grid-row: span 2; }
.zero     { grid-column: span 2; }
```

---

## q3 — Student Timetable (static, HTML + CSS only)

> No JS for this one — the table is just colored by `class` on each `<td>`.

**Unique HTML body:**
```html
<div class="container">
    <h1>Weekly Schedule</h1>
    <table>
        <thead>
            <tr><th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></tr>
        </thead>
        <tbody>
            <tr><td class="time">09:00 - 10:00</td>
                <td class="math">Mathematics</td><td class="physics">Physics</td>
                <td class="math">Mathematics</td><td class="cs">Computer Science</td>
                <td class="physics">Physics</td></tr>
            <!-- 2 more rows of the same shape, varying subjects per slot -->
        </tbody>
    </table>
</div>
```

**Unique CSS bits** (named colors keep it short):
```css
.container { background: white; padding: 30px; border-radius: 12px;
             box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; }
th, td { border: 1px solid white; padding: 12px 20px; text-align: center; }
th { background: navy; color: white; }
.time    { background: lightgray;   font-weight: bold; }
.math    { background: lightyellow; }
.physics { background: lightblue; }
.cs      { background: lightgreen; }
.english { background: pink; }
```

---

## q4 — Course Registration Form

**Unique HTML body** (text + email + select — minimal form):
```html
<div class="form-container">
    <h2>Student Course Registration</h2>
    <form id="registrationForm">
        <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required>
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="example@college.com" required>
        </div>
        <div class="form-group">
            <label for="course">Select Course</label>
            <select id="course" required>
                <option value="">-- Choose a Course --</option>
                <option value="cs">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ds">Data Science</option>
            </select>
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

    messageDiv.innerHTML = `
        <strong>Registration Successful!</strong><br>
        Student: ${name}<br>
        Email: ${email}<br>
        Course: ${course.toUpperCase()}<br>
    `;
    messageDiv.classList.remove('hidden');
});
```

**3 key tricks:**
1. `event.preventDefault()` — stop page refresh on submit.
2. Read input/select values with `.value`.
3. `.classList.remove('hidden')` to reveal the success box (`.hidden { display: none }`).

> If a question also asks for radio buttons or checkboxes:
> - radios → `<input type="radio" name="group" value="X">`; read with `document.querySelector('input[name="group"]:checked').value`
> - checkbox → `<input type="checkbox" required>` inside the label

**Unique CSS bits:**
```css
.form-container { background: white; padding: 30px; border-radius: 12px;
                  box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 400px; }
h2 { text-align: center; margin-bottom: 20px; }
.form-group { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; font-weight: 600; }
input[type="text"], input[type="email"], select {
    width: 100%; padding: 10px; border: 1px solid #ccc;
    border-radius: 4px; box-sizing: border-box;
}
button { width: 100%; padding: 12px; background: #007bff; color: white;
         border: none; border-radius: 4px; cursor: pointer; }
#message { margin-top: 20px; padding: 10px; border-radius: 4px;
           background: #d4edda; color: #155724; text-align: center; }
.hidden { display: none; }
```

---

## q5 — Text Animation (the tiny one)

**Unique HTML body** (heading starts empty — JS fills it):
```html
<h1 id="text"></h1>
```

**Unique JS** (toggle a boolean on a timer):
```js
const text = document.getElementById('text');
let isEnlarged = false;

function toggle() {
    if (isEnlarged) {
        text.style.transform = 'scale(0.75)';
        text.style.color = '#6f42c1';
        text.innerText = 'Shrinking...';
    } else {
        text.style.transform = 'scale(1.5)';
        text.style.color = '#dc3545';
        text.innerText = 'Enlarging...';
    }
    isEnlarged = !isEnlarged;
}

setInterval(toggle, 1500);
toggle();
```

**Key APIs:** `setInterval(fn, ms)`, `element.style.transform`, `element.style.color`.

**Unique CSS bits** (the `transition` is what makes it smooth, not JS):
```css
#text {
    font-size: 3rem;
    transition: transform 1s ease, color 1s ease;
}
```

---

## q6 — Password Strength Checker

**Unique HTML body:**
```html
<div class="card">
    <h2>Security Check</h2>
    <p>Enter a password to test its strength.</p>

    <div class="input">
        <input type="text" id="password" placeholder="Type your password...">
    </div>

    <div class="meter">
        <div id="bar"></div>
    </div>

    <p id="feedback">Strength: <span>None</span></p>

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
const password = document.getElementById('password');
const bar = document.getElementById('bar');
const feedback = document.querySelector('#feedback span');

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

password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    checks.forEach(c => {
        const valid = c.test(val);
        document.getElementById(c.id).classList.toggle('valid', valid);
        if (valid) score++;
    });

    const s = states[score];
    bar.style.width = s.width;
    bar.style.backgroundColor = s.color;
    feedback.innerText = s.text;
    feedback.style.color = s.color;
});
```

**4 regexes to memorize:**
- length: `v.length >= 8`
- upper: `/[A-Z]/`
- number: `/[0-9]/`
- special: `/[^A-Za-z0-9]/` (anything not alphanumeric)

**Unique CSS bits:**
```css
.card { background: white; padding: 30px; border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 350px; }
.input { position: relative; margin-bottom: 15px; }
input { width: 100%; padding: 12px; border: 1px solid #ccc;
        border-radius: 5px; box-sizing: border-box; }
.meter { height: 8px; background: #eee; border-radius: 4px;
         overflow: hidden; margin-bottom: 10px; }
#bar { height: 100%; width: 0%; transition: width 0.4s, background-color 0.4s; }
.requirements { list-style: none; padding: 0; font-size: 0.85rem; color: #888; }
.requirements li.valid { color: #27ae60; }
```

---

## q7 — Star Rating (vanilla JS, one class)

**Unique HTML body:**
```html
<div class="rating-container">
    <h2>Rate your experience</h2>
    <div class="stars">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
    </div>
    <p id="rating-message">Click a star to rate!</p>
    <button id="reset-btn">Reset</button>
</div>
```

`&#9733;` is the ★ entity. The rating is derived from the star's **index** in the NodeList — no `data-value` needed.

**Unique JS** (one `.on` class, one `paint(n)` function):
```js
const stars = document.querySelectorAll('.star');
const message = document.getElementById('rating-message');
let rating = 0;

function paint(n) {
    stars.forEach((star, i) => star.classList.toggle('on', i < n));
}

stars.forEach((star, i) => {
    star.onmouseenter = () => paint(i + 1);
    star.onmouseleave = () => paint(rating);
    star.onclick = () => {
        rating = i + 1;
        paint(rating);
        message.textContent = `You rated ${rating} stars!`;
    };
});

document.getElementById('reset-btn').onclick = () => {
    rating = 0;
    paint(0);
    message.textContent = 'Click a star to rate!';
};
```

**Mental model:**
- `paint(n)` makes the first `n` stars yellow (`.on` class) and clears the rest. `classList.toggle('on', cond)` adds when `cond` is true, removes when false.
- Hover in → `paint(i+1)` previews the rating.
- Hover out → `paint(rating)` snaps back to the saved selection.
- Click → save `rating`, repaint.
- Reset → `rating = 0`, `paint(0)`.

**Unique CSS bits** (one yellow rule for the active class):
```css
.rating-container { background: white; padding: 40px; border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; }
.stars { font-size: 3rem; cursor: pointer; margin-bottom: 15px; }
.star { color: #ccc; }
.star.on { color: yellow; }
#rating-message { color: gray; font-weight: bold; margin-bottom: 20px; }
#reset-btn { padding: 8px 15px; border: 1px solid #ddd; background: white;
             cursor: pointer; border-radius: 5px; }
```

> If the question explicitly demands jQuery: include `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>` in `<head>`, wrap code in `$(document).ready(...)`, and swap `addEventListener` → `.on('event', fn)`, `classList` → `.addClass/.removeClass`, `.textContent` → `.text(...)`.

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
| Toggle class on condition | `el.classList.toggle('x', cond)` |
| Inline style | `el.style.color = ...` |
| Listen for event | `el.addEventListener('event', fn)` |
| Shorthand listener | `el.onclick = () => {...}` |
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
| `data-value="..."` | any element | read via `.dataset.value` (vanilla) or `.data('value')` (jQuery) |
| `readonly` | input | display-only |
| `placeholder` | input | grey hint text |
