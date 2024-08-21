document.addEventListener('DOMContentLoaded', function() {

    const userName = localStorage.getItem('UName');
    console.log("Retrieved userName:", userName);

    const nameElement = document.querySelector('.name_here');
    nameElement.textContent = `Welcome ` + userName + '!';

    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C+': 5,
        'C': 4,
        'U': 0
    };

    const semesterSubjects = {
        1: {
            subjects: [
                { name: "Communicative English", credits: 2 },
                { name: "Engineering Chemistry", credits: 3 },
                { name: "Matrices, Differential and Integral Calculus", credits: 4 },
                { name: "Programming for Problem Solving in C", credits: 3 },
                { name: "Engineering Graphics", credits: 4 }
            ],
            labs: [
                { name: "Chemistry Laboratory", credits: 1 },
                { name: "C Programming Laboratory", credits: 2 },
                { name: "Communicative English Laboratory", credits:1 }
            ]
        },
        2: {
            subjects: [
                { name: "Vector Calculus and Complex Functions", credits: 4 },
                { name: "Engineering Physics", credits: 3 },
                { name: "Programming for problem solving using Python", credits: 4 },
                { name: "Basic Electrical, Electronics and Communication Engineering ", credits: 3 },
                { name: "Introduction to Information and Computing Technology ", credits: 3 },
                { name: "Constitution of India ", credits: 0}
            ],
            labs: [
                { name: "Physics Laboratory", credits: 1 },
                { name: "Workshop Practice", credits: 2 },
                { name: "Basic Electrical, Electronics & Communication Engineering Laboratory ", credits: 1 },
                { name: "Quantitative Aptitude and VerbalReasoning ", credits: 1 }
            ]
        },
        3: {
            subjects: [
                { name: "Data Structures", credits: 3 },
                { name: "Digital Logic Circuits", credits: 4 },
                { name: "Object Oriented Programming", credits: 3 },
                { name: "Computer Architecture", credits: 3 },
                { name: "Discrete Mathematics", credits: 4 },
                { name: "Fundamentals of Nano Science", credits: 0 }
            ],
            labs: [
                { name: "Data Structures Laboratory", credits: 1 },
                { name: "Object Oriented Programming Laboratory", credits: 1 },
                { name: "Personality & Character Development", credits: 0 },
                { name: "Quantitative Aptitude & Behavioral Skills", credits: 1 }
            ]
        },
        4: {
            subjects: [
                { name: "Operating system", credits: 3 },
                { name: "Design and Analysis of Algorithms", credits: 4 },
                { name: "Object Oriented Software Engineering", credits: 3 },
                { name: "Database Management Systems", credits: 3 },
                { name: "Java Programming", credits: 3 },
                { name: "Probability and Queueing Theory", credits: 4 },
                { name: "Environmental Science and Engineering", credits: 0 }
            ],
            labs: [
                { name: "Operating system Laboratory", credits: 1 },
                { name: "Programming in JAVA Laboratory", credits: 1 },
                { name: "Database Management Systems Laboratory", credits: 1 },
                { name: "Quantitative Aptitude & Communication Skills", credits: 1 }
            ]
        },
        5: {
            subjects: [
                { name: "Internet Programming", credits: 3 },
                { name: "Theory of Computation", credits: 4 },
                { name: "Computer Networks", credits: 3 },
                { name: "Professional Ethics and Human Values", credits: 3 },
                { name: "Professional Elective-I", credits: 3 },
                { name: "Open Elective - I", credits: 3 }
            ],
            labs: [
                { name: "Internet Programming Laboratory", credits: 1 },
                { name: "Computer Networks Laboratory", credits: 1 },
                { name: "Quantitative Aptitude & Soft Skills", credits: 1 }
            ]
        },
        6: {
            subjects: [
                { name: "Mobile Computing", credits: 3 },
                { name: "Compiler Design", credits: 3 },
                { name: "Artificial Intelligence", credits: 4 },
                { name: "Resource Management Techniques", credits: 3 },
                { name: "Professional Elective-II", credits: 3 },
                { name: "Open Elective-II", credits: 3 }
            ],
            labs: [
                { name: "Mobile Application Development Laboratory", credits: 1 },
                { name: "Compiler Design Laboratory", credits: 1 },
                { name: "Internship", credits: 1 },
                { name: "Mini Project", credits: 1 }
            ]
        },
        7: {
            subjects: [
                { name: "Cryptography and Network Security", credits: 3 },
                { name: "Data Science using Python", credits: 3 },
                { name: "Cloud Computing and Virtualization", credits: 3 },
                { name: "Professional Elective-III", credits: 3 },
                { name: "Professional Elective-IV", credits: 3 },
                { name: "Professional Elective-IV", credits: 3 }
            ],
            labs: [
                { name: "Cloud and SecurityLaboratory", credits: 2 },
                { name: "Data Science using Python Laboratory", credits: 2 }
            ]
        },
        8: {
            subjects: [
                { name: "Professional Elective-V", credits: 3 },
                { name: "Professional Elective-VI", credits: 3 }
            ],
            labs: [
                { name: "Project Work", credits: 6 }
            ]
        }
    };

    function handleSemesters(numSemesters) {
        const semestersContainer = document.getElementById('semestersContainer');
        semestersContainer.innerHTML = '';

        for (let i = 1; i <= numSemesters; i++) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');
            semesterDiv.innerHTML = `<h2>Semester ${i}</h2>`;

            const subjectsDiv = document.createElement('div');
            subjectsDiv.classList.add('subjects');
            subjectsDiv.innerHTML = `<h3>Theory:</h3>`;
            semesterSubjects[i].subjects.forEach(subject => {
                const subjectDiv = document.createElement('div');
                subjectDiv.classList.add('courseContainer');
                subjectDiv.innerHTML = `
                    <label>${subject.name} (${subject.credits} Credits):</label>
                    <select required data-credit="${subject.credits}">
                        <option value="">Select Grade</option>
                        <option value="O">O (10)</option>
                        <option value="A+">A+ (9)</option>
                        <option value="A">A (8)</option>
                        <option value="B+">B+ (7)</option>
                        <option value="B">B (6)</option>
                        <option value="C+">C+ (5)</option>
                        <option value="C">C (4)</option>
                        <option value="U">U (Arrear)</option>
                    </select>
                `;
                subjectsDiv.appendChild(subjectDiv);
            });
            semesterDiv.appendChild(subjectsDiv);

            const labsDiv = document.createElement('div');
            labsDiv.classList.add('labs');
            labsDiv.innerHTML = `<h3>Labs:</h3>`;
            semesterSubjects[i].labs.forEach(lab => {
                const labDiv = document.createElement('div');
                labDiv.classList.add('courseContainer');
                labDiv.innerHTML = `
                    <label>${lab.name} (${lab.credits} Credits):</label>
                    <select required data-credit="${lab.credits}">
                        <option value="">Select Grade</option>
                        <option value="O">O (10)</option>
                        <option value="A+">A+ (9)</option>
                        <option value="A">A (8)</option>
                        <option value="B+">B+ (7)</option>
                        <option value="B">B (6)</option>
                        <option value="C+">C+ (5)</option>
                        <option value="C">C (4)</option>
                        <option value="U">U (Arrear)</option>
                    </select>
                `;
                labsDiv.appendChild(labDiv);
            });
            semesterDiv.appendChild(labsDiv);

            semestersContainer.appendChild(semesterDiv);
        }
    }

    function calculateCGPA(numSemesters) {
        // Clear previous results
        document.getElementById('result').innerHTML = '';
    
        let totalPointsOverall = 0;
        let totalCreditsOverall = 0;
        let arrears = [];
    
        for (let i = 1; i <= numSemesters; i++) {
            const inputs = document.querySelectorAll(`#semestersContainer .semester:nth-child(${i}) select`);
            inputs.forEach(input => {
                const grade = input.value.trim();
                const credits = parseFloat(input.getAttribute('data-credit'));
    
                if (grade === 'U') {
                    arrears.push(input.parentElement.querySelector('label').textContent);
                } else if (gradePoints[grade] !== undefined) {
                    // Only consider subjects with grades other than 'U'
                    totalPointsOverall += gradePoints[grade] * credits;
                    totalCreditsOverall += credits;
                }
            });
        }
    
        // Display arrears if any
        if (arrears.length > 0) {
            document.getElementById('result').innerHTML = `
                <h3>Arrears:</h3>
                <ul>${arrears.map(arrear => `<li>${arrear}</li>`).join('')}</ul>
            `;
        }
    
        // Calculate and display CGPA only if there are credits to calculate
        if (totalCreditsOverall > 0) {
            const overallCGPA = totalPointsOverall / totalCreditsOverall;
            document.getElementById('result').innerHTML += `
                <strong>Overall CGPA (excluding arrears): ${overallCGPA.toFixed(2)}</strong>
            `;
        }
    }
    

    const numSemesters = parseInt(localStorage.getItem('numSemesters'));
    if (numSemesters) {
        handleSemesters(numSemesters);
    }

    document.getElementById('calculateCGPA').addEventListener('click', function() {
        calculateCGPA(numSemesters);
    });
});
