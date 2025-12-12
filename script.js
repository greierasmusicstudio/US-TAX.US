// State tax data
const stateTaxRates = {
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const stateSelect = document.getElementById('state');
    
    if (stateSelect) {
        // Sort states alphabetically
        const sortedStates = Object.keys(stateNames).sort();
        
        // Add all states to dropdown
        sortedStates.forEach(stateCode => {
            const option = document.createElement('option');
            option.value = stateCode;
            const taxRate = stateTaxRates[stateCode];
            const taxText = taxRate === 0 ? 'No Sales Tax' : `${taxRate}% Tax`;
            option.textContent = `${stateNames[stateCode]} - ${taxText}`;
            stateSelect.appendChild(option);
        });
        
        // Set default to California (most populous)
        stateSelect.value = 'CA';
    }
    
    // Setup calculate button
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateTax);
    }
    
    // Allow Enter key in amount field
    const amountInput = document.getElementById('amount');
    if (amountInput) {
        amountInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateTax();
            }
        });
    }
    
    // Load saved preferences
    loadPreferences();
});

// Calculate tax function
function calculateTax() {
    const amountInput = document.getElementById('amount');
    const stateSelect = document.getElementById('state');
    const resultsDiv = document.getElementById('results');
    
    if (!amountInput || !stateSelect || !resultsDiv) return;
    
    const amount = parseFloat(amountInput.value);
    const stateCode = stateSelect.value;
    
    // Validation
    if (!amount || amount <= 0 || isNaN(amount)) {
        alert('Please enter a valid purchase amount.');
        amountInput.focus();
        return;
    }
    
    if (!stateCode) {
        alert('Please select a state.');
        return;
    }
    
    // Get tax rate
    const taxRate = stateTaxRates[stateCode];
    const taxAmount = (amount * taxRate) / 100;
    const totalAmount = amount + taxAmount;
    
    // Display results
    document.getElementById('originalPrice').textContent = '$' + amount.toFixed(2);
    document.getElementById('stateTaxRate').textContent = taxRate.toFixed(2) + '%';
    document.getElementById('taxAmount').textContent = '$' + taxAmount.toFixed(2);
    document.getElementById('totalWithTax').textContent = '$' + totalAmount.toFixed(2);
    
    // Show results
    resultsDiv.style.display = 'block';
    
    // Save preferences
    savePreferences(stateCode);
    
    // Track conversion (for analytics)
    trackCalculation(stateCode, amount);
}

// Save user preferences to localStorage
function savePreferences(stateCode) {
    try {
        localStorage.setItem('lastState', stateCode);
    } catch (e) {
        // localStorage not available
    }
}

// Load saved preferences
function loadPreferences() {
    try {
        const lastState = localStorage.getItem('lastState');
        const stateSelect = document.getElementById('state');
        if (lastState && stateSelect) {
            stateSelect.value = lastState;
        }
    } catch (e) {
        // localStorage not available
    }
}

// Track calculation for analytics
function trackCalculation(stateCode, amount) {
    // This would integrate with Google Analytics
    console.log(`Tax calculation: ${stateCode}, $${amount}`);
    
    // Example GA event (uncomment when you have GA ID):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'calculate', {
    //         'event_category': 'calculator',
    //         'event_label': stateCode,
    //         'value': amount
    //     });
    // }
}

// Simple page view tracking
window.addEventListener('load', function() {
    console.log('US-TAX.US loaded successfully');
    
    // Example GA pageview (uncomment when you have GA ID):
    // if (typeof gtag !== 'undefined') {
    //     gtag('config', 'UA-XXXXXXXXX-X');
    // }
});
