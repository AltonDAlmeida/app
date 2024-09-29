document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('reservationForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const roomType = document.getElementById('roomType').value;
        const guests = document.getElementById('guests').value;
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;

        // Simple form validation
        if (!roomType || !guests || !checkIn || !checkOut) {
            formResponse.textContent = 'Please fill in all fields.';
            formResponse.style.color = 'red';
            return;
        }

        // Display success message
        formResponse.textContent = `Your reservation for a ${roomType} room for ${guests} guests from ${checkIn} to ${checkOut} has been received.`;
        formResponse.style.color = 'green';
    });
});
