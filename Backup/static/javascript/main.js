document.querySelector('#enrollOptionButton').addEventListener('click', function () {

  console.log("The enroll button works!");
  window.location.href = '/detail';
  
});

document.querySelector('#authOptionButton').addEventListener('click', function () {
  
  console.log("The auth button works!");
  window.location.href = '/auth';
});