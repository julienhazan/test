function assignerClasseSelonPresence()  {
    console.log('SETTINGS', SETTINGS);
    let eltClass;
    if (SETTINGS['api'] === 'SelfAsserted') {
        eltClass = document.getElementById('signInBtn')
    } else {
        eltClass = document.getElementById('signUpBtn');
    }
    if (eltClass) {
        eltClass.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', assignerClasseSelonPresence);