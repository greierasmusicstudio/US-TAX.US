// ========================
// STATE DATA FOR ALL CALCULATORS
// ========================

// Sales Tax Rates 2025
const salesTaxRates = {
    'AL': 4.00, 'AK': 0.00, 'AZ': 5.60, 'AR': 6.50, 'CA': 7.25,
    'CO': 2.90, 'CT': 6.35, 'DE': 0.00, 'FL': 6.00, 'GA': 4.00,
    'HI': 4.00, 'ID': 6.00, 'IL': 6.25, 'IN': 7.00, 'IA': 6.00,
    'KS': 6.50, 'KY': 6.00, 'LA': 4.45, 'ME': 5.50, 'MD': 6.00,
    'MA': 6.25, 'MI': 6.00, 'MN': 6.88, 'MS': 7.00, 'MO': 4.23,
    'MT': 0.00, 'NE': 5.50, 'NV': 6.85, 'NH': 0.00, 'NJ': 6.63,
    'NM': 5.13, 'NY': 4.00, 'NC': 4.75, 'ND': 5.00, 'OH': 5.75,
    'OK': 4.50, 'OR': 0.00, 'PA': 6.00, 'RI': 7.00, 'SC': 6.00,
    'SD': 4.50, 'TN': 7.00, 'TX': 6.25, 'UT': 6.10, 'VT': 6.00,
    'VA': 5.30, 'WA': 6.50, 'WV': 6.00, 'WI': 5.00, 'WY': 4.00
};

// Income Tax Brackets 2025 (simplified averages)
const incomeTaxRates = {
    'CA': 9.3, 'NY': 8.82, 'HI': 8.25, 'OR': 8.75, 'MN': 7.85,
    'NJ': 8.97, 'VT': 7.60, 'IA': 7.44, 'DC': 7.00, 'WI': 6.27,
    'SC': 6.40, 'DE': 6.60, 'NE': 6.64, 'ME': 6.75, 'CT': 6.99,
    'MD': 6.00, 'GA': 5.75, 'AZ': 4.50, 'VA': 5.75, 'LA': 4.25,
    'NC': 4.75, 'RI': 5.99, 'UT': 4.85, 'MI': 4.25, 'PA': 3.07,
    'KS': 5.70, 'NM': 4.90, 'MA': 5.00, 'WV': 6.50, 'OH': 4.80,
    'IN': 3.23, 'KY': 5.00, 'CO': 4.55, 'OK': 4.75, 'MO': 4.95,
    'AL': 5.00, 'AR': 4.40, 'MS': 5.00, 'TN': 0.00, 'NH': 0.00,
    'AK': 0.00, 'FL': 0.00, 'NV': 0.00, 'SD': 0.00, 'TX': 0.00,
    'WA': 0.00, 'WY': 0.00, 'IL': 4.95, 'ID': 5.80, 'MT': 6.75,
    'ND': 2.04
};

// Property Tax Rates 2025 (average %)
const propertyTaxRates = {
    'NJ': 2.49, 'IL': 2.27, 'NH': 2.18, 'VT': 1.90, 'CT': 1.89,
    'NY': 1.72, 'OH': 1.62, 'NE': 1.61, 'WI': 1.61, 'TX': 1.60,
    'IA': 1.57, 'PA': 1.58, 'MI': 1.54, 'RI': 1.53, 'KS': 1.41,
    'ME': 1.36, 'SD': 1.31, 'MN': 1.12, 'MA': 1.23, 'MD': 1.09,
    'FL': 0.97, 'GA': 0.92, 'VA': 0.82, 'NC': 0.84, 'IN': 0.85,
    'MO': 0.97, 'OK': 0.90, 'CO': 0.55, 'UT': 0.63, 'MT': 0.83,
    'NV': 0.60, 'AZ': 0.72, 'WA': 0.94, 'OR': 0.97, 'CA': 0.76,
    'ID': 0.69, 'NM': 0.80, 'WY': 0.61, 'KY': 0.86, 'TN': 0.71,
    'AL': 0.42, 'AR': 0.64, 'LA': 0.55, 'MS': 0.81, 'SC': 0.57,
    'ND': 0.99, 'DE': 0.58, 'HI': 0.28, 'AK': 1.19
};

// Car Registration Fees 2025 (base fees)
const carRegistrationFees = {
    'CA': 62, 'TX': 50, 'FL': 46, 'NY': 60, 'PA': 38,
    'IL': 101, 'OH': 34, 'GA': 20, 'NC': 36, 'MI': 38,
    'NJ': 46, 'VA': 40, 'WA': 30, 'AZ': 8, 'MA': 60,
    'TN': 26, 'IN': 21, 'MO': 18, 'MD': 135, 'MN': 35,
    'WI': 75, 'CO': 26, 'AL': 23, 'SC': 40, 'LA': 20,
    'KY': 21, 'OR': 43, 'OK': 17, 'CT': 80, 'IA': 40,
    'UT': 30, 'NV': 33, 'AR': 17, 'MS': 14, 'KS': 30,
    'NM': 27, 'NE': 15, 'WV': 30, 'ID': 25, 'HI': 45,
    'ME': 35, 'NH': 31, 'RI': 30, 'MT': 20, 'DE': 40,
    'SD': 25, 'ND': 49, 'AK': 100, 'VT': 48, 'WY': 30
};

// State Names
const stateNames = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
};

// ========================
// INITIALIZATION
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all dropdowns
    initializeDropdowns();
    
    // Setup tab switching
    setupTabs();
    
    // Setup navigation
    setupNavigation();
});

function initializeDropdowns() {
    const dropdowns = ['salesState', 'incomeState', 'propertyState', 'carState'];
    
    dropdowns.forEach(dropdownId => {
        const select = document.getElementById(dropdownId);
        if (select) {
            // Add all states
            Object.keys(stateNames).sort().forEach(stateCode => {
                const option = document.createElement('option');
                option.value = stateCode;
                option.textContent = stateNames[stateCode];
                select.appendChild(option);
            });
            
            // Set default to California
            select.value = 'CA';
        }
    });
}

// ========================
// TAB MANAGEMENT
// ========================

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.calculator-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === tab) {
                    section.classList.add('active');
                }
            });
            
            // Update URL hash
            window.location.hash = tab;
            
            // Update navigation
            updateNavActive(tab);
        });
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            // Find and click corresponding tab
            const tabBtn = document.querySelector(`.tab-btn[data-tab="${target}"]`);
            if (tabBtn) {
                tabBtn.click();
            }
        });
    });
    
    // Check URL hash on load
    if (window.location.hash) {
        const tab = window.location.hash.substring(1);
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
        if (tabBtn) {
            setTimeout(() => tabBtn.click(), 100);
        }
    }
}

function updateNavActive(tab) {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${tab}`) {
            link.classList.add('active');
        }
    });
}

// ========================
// CALCULATION FUNCTIONS
// ========================

// 1. SALES TAX CALCULATOR
function calculateSalesTax() {
    const amount = parseFloat(document.getElementById('salesAmount').value);
    const state = document.getElementById('salesState').value;
    const results = document.getElementById('salesResults');
    
    if (!amount || !state) {
        alert('Please enter amount and select a state');
        return;
    }
    
    const rate = salesTaxRates[state];
    const tax = (amount * rate) / 100;
    const total = amount + tax;
    
    document.getElementById('salesOriginal').textContent = '$' + amount.toFixed(2);
    document.getElementById('salesStateRate').textContent = rate.toFixed(2) + '%';
    document.getElementById('salesTaxAmount').textContent = '$' + tax.toFixed(2);
    document.getElementById('salesTotal').textContent = '$' + total.toFixed(2);
    
    results.style.display = 'block';
}

// 2. INCOME TAX CALCULATOR
function calculateIncomeTax() {
    const income = parseFloat(document.getElementById('incomeAmount').value);
    const state = document.getElementById('incomeState').value;
    const filingStatus = document.getElementById('filingStatus').value;
    const results = document.getElementById('incomeResults');
    
    if (!income || !state) {
        alert('Please enter income and select a state');
        return;
    }
    
    // Federal tax estimate (simplified)
    let federalTax = 0;
    if (income <= 11000) federalTax = income * 0.10;
    else if (income <= 44725) federalTax = 1100 + (income - 11000) * 0.12;
    else if (income <= 95375) federalTax = 5147 + (income - 44725) * 0.22;
    else if (income <= 182100) federalTax = 16290 + (income - 95375) * 0.24;
    else if (income <= 231250) federalTax = 37104 + (income - 182100) * 0.32;
    else if (income <= 578125) federalTax = 52832 + (income - 231250) * 0.35;
    else federalTax = 174238.25 + (income - 578125) * 0.37;
    
    // State tax estimate
    const stateRate = incomeTaxRates[state];
    const stateTax = (income * stateRate) / 100;
    
    const totalTax = federalTax + stateTax;
    const netIncome = income - totalTax;
    
    document.getElementById('incomeOriginal').textContent = '$' + income.toFixed(2);
    document.getElementById('federalTax').textContent = '$' + federalTax.toFixed(2);
    document.getElementById('stateIncomeTax').textContent = '$' + stateTax.toFixed(2);
    document.getElementById('totalIncomeTax').textContent = '$' + totalTax.toFixed(2);
    document.getElementById('netIncome').textContent = '$' + netIncome.toFixed(2);
    
    results.style.display = 'block';
}

// 3. PROPERTY TAX CALCULATOR
function calculatePropertyTax() {
    const value = parseFloat(document.getElementById('propertyValue').value);
    const state = document.getElementById('propertyState').value;
    const results = document.getElementById('propertyResults');
    
    if (!value || !state) {
        alert('Please enter property value and select a state');
        return;
    }
    
    const rate = propertyTaxRates[state];
    const annualTax = (value * rate) / 100;
    const monthly = annualTax / 12;
    
    document.getElementById('propertyOriginal').textContent = '$' + value.toFixed(2);
    document.getElementById('propertyTaxRate').textContent = rate.toFixed(2) + '%';
    document.getElementById('propertyTaxAmount').textContent = '$' + annualTax.toFixed(2);
    document.getElementById('propertyMonthly').textContent = '$' + monthly.toFixed(2);
    
    results.style.display = 'block';
}

// 4. CAR TAX CALCULATOR
function calculateCarTax() {
    const price = parseFloat(document.getElementById('carPrice').value);
    const state = document.getElementById('carState').value;
    const results = document.getElementById('carResults');
    
    if (!price || !state) {
        alert('Please enter car price and select a state');
        return;
    }
    
    const salesTax = (price * salesTaxRates[state]) / 100;
    const regFee = carRegistrationFees[state] || 50;
    const titleFee = 20; // Average title fee
    
    const total = price + salesTax + regFee + titleFee;
    
    document.getElementById('carOriginal').textContent = '$' + price.toFixed(2);
    document.getElementById('carSalesTax').textContent = '$' + salesTax.toFixed(2);
    document.getElementById('registrationFee').textContent = '$' + regFee.toFixed(2);
    document.getElementById('titleFee').textContent = '$' + titleFee.toFixed(2);
    document.getElementById('carTotal').textContent = '$' + total.toFixed(2);
    
    results.style.display = 'block';
}

// ========================
// UTILITY FUNCTIONS
// ========================

// Track calculations for analytics
function trackCalculation(type, state, amount) {
    console.log(`${type} calculation: ${state}, $${amount}`);
    // Add Google Analytics tracking here
}

// Save preferences
function savePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // localStorage not available
    }
}

// Load preferences
function loadPreference(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}