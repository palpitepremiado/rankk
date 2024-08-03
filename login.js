// login.js

const usersData = [
    { username: 'dmartins', password: 'dm1002' }
   
    // Adicione mais usuários conforme necessário
  ];
  
  function validateLogin(event) {
    event.preventDefault();
  
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
  
    const isValidUser = usersData.some(user => user.username === enteredUsername && user.password === enteredPassword);
  
    if (isValidUser) {
      Swal.fire({
        title: "Olá!",
        text: "Login realizado com sucesso!",
        icon: "success"
      });
      setTimeout(() => {
        window.location.href = 'rank.html';
        
      }, 1000);
    } else {
      
      Swal.fire({
        title: "Erro",
        text: "Verifique os dados inseridos!",
        icon: "error"
      });
    }
    
  }
  