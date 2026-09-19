# MCQ Master - Quiz & Study Platform 🚀

An interactive, responsive, high-performance web platform for practicing multiple-choice questions across **Basic** and **Intermediate** levels with over **1,140+ verified questions**.

![Platform Preview](https://img.shields.io/badge/Level-Basic%20%26%20Intermediate-indigo)
![Questions Count](https://img.shields.io/badge/Questions-1140%2B-emerald)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📚 Curriculum & Topic Structure

### 🌱 Basic Level
- **Data Structures & Algorithms**: 300 comprehensive questions covering arrays, linked lists, stacks, queues, trees, sorting, searching, and complexity analysis.
- **Profit & Loss**: 150 quantitative aptitude questions covering cost price, selling price, discounts, margins, and multi-step transactions.
- **Percentages**: 150 quantitative aptitude questions covering percentage changes, population growth, successive percentages, and fractions.
- **Ratio & Proportion**: 150 quantitative aptitude questions covering direct/inverse variation, partnerships, mixtures, and allegoric problems.

### ⚡ Intermediate Level
- **C Programming & Problem Solving**: 195 in-depth technical questions covering pointers, pointer arithmetic, memory layout, recursion, loops, conditionals, bitwise tricks, and algorithm tracing.
- **DS Programming**: 199 advanced algorithm design and theoretical computer science questions covering dynamic array amortized analysis, skip lists, persistent segment trees, wavelet trees, link-cut trees, sorting networks, Mo's algorithm, suffix automata, and bloom filters.

---

## ✨ Features

- **Interactive Quiz Mode**: Real-time feedback with color-coded answer validation and detailed explanations.
- **Study Read Mode**: Immediate reveal of correct answers and comprehensive explanations for rapid learning and review.
- **Dynamic Level Filtering**: Switching between Basic and Intermediate levels dynamically displays only the courses belonging to that level in the topic selector.
- **Question Palette & Navigator**: Jump directly to any question with answered/unanswered status indicators.
- **Full-Text Search & Filtering**: Instantly search questions and answer options across any topic.
- **Single & List Views**: Choose between focused single-question view or continuous list view.
- **Light & Dark Theme**: Sleek, modern design system built with custom CSS variables, glassmorphism, and responsive layouts.
- **Modular Architecture**: Clean separation of concerns with standalone CSS stylesheet and modular topic data files.
- **Zero Dependencies**: Pure HTML, CSS, and Vanilla JavaScript—runs locally in any browser with no build step required.

---

## 📁 Project Structure

```
mcq/
├── index.html               # Main application markup and controller
├── style.css                # Design system, themes, and UI styles
├── README.md                # Documentation and overview
└── topics/                  # Modular topic datasets
    ├── dsa.js               # Data Structures & Algorithms (300 Qs)
    ├── profit_loss.js       # Profit & Loss (150 Qs)
    ├── percentages.js       # Percentages (150 Qs)
    ├── ratio_proportion.js  # Ratio & Proportion (150 Qs)
    ├── intermediate_c.js    # C Programming & Problem Solving (195 Qs)
    └── ds_programming.js    # Advanced DS Programming (199 Qs)
```

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser:

```bash
# Clone the repository
git clone git@github.com:logeshwaranp1103/mcq.git

# Navigate to the folder
cd mcq

# Open index.html directly or with a lightweight HTTP server:
npx serve .
# or
python -m http.server 8000
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
