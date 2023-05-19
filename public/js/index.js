const userForm = document.getElementById('userForm');
const workoutForm = document.getElementById('workoutForm');

const userFormSubmission = async (e) => {
    e.preventDefault();
  
    const userValue = document.getElementById('userNameInput').value;
    const emailValue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;
  
    try {
      const response = await fetch('/users/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userValue,
          password: passwordValue,
          email: emailValue
        })
      });
  
      if (response.ok) {
        alert('You signed up!');
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };
  

  const workoutFormSubmission = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/users/WorkoutLog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const workoutLogs = await response.json();
        console.log(workoutLogs);
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', userFormSubmission);
  });
  
  