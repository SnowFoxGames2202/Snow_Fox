 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAnaSFX8JI4qQLF8XoXnfQ1uYA3NOTqwzQ",
   authDomain: "snow-fox-studio.firebaseapp.com",
   databaseURL: "https://snow-fox-studio-default-rtdb.firebaseio.com",
   projectId: "snow-fox-studio",
   storageBucket: "snow-fox-studio.appspot.com",
   messagingSenderId: "321022908236",
   appId: "1:321022908236:web:6649867e1401eabdb8a1e9",
   measurementId: "G-008B3H53B0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 // Inicializa o Realtime Database e obtém uma referência ao serviço
const database = getDatabase(app);

// Inicializar A Autenticação
const auth = getAuth(app);



//Reistro e Logins


        // Função para registrar um novo usuário
        function registrarUsuario() {
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Cria um novo usuário com email e senha
            auth.createUserWithEmailAndPassword(email, senha)
                .then((userCredential) => {
                    // Registro bem-sucedido
                    const user = userCredential.user;
                    const uid = user.uid; // ID do usuário

                    // Recupera os outros dados do formulário
                    const nome = document.getElementById('nome').value;
                    const usuario = document.getElementById('usuario').value;

                    // Armazena as informações do usuário no Realtime Database
                    const userRef = database.ref('usuarios/' + uid);
                    userRef.set({
                        nome: nome,
                        usuario: usuario,
                        email: email
                        // Você pode adicionar mais campos, se necessário
                    }).then(() => {
                        console.log("Usuário registrado com sucesso");
                        // Após o registro, você pode redirecionar o usuário para outra página ou fazer qualquer outra coisa
                    }).catch((error) => {
                        console.error("Erro ao armazenar informações do usuário:", error);
                    });
                })
                .catch((error) => {
                    // Ocorreu um erro ao registrar o usuário
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Erro ao registrar usuário:", errorMessage);
                });
        }

        // Função para exibir o formulário de cadastro
        function cadastro() {
            // Esconde o formulário de login e exibe o formulário de cadastro
            document.getElementById('loginDiv').style.display = 'none';
            document.getElementById('cadastroDiv').style.display = 'block';
        }

        // Função para realizar o login
        function login() {
            // Aqui você pode implementar a função para realizar o login, se necessário
            console.log("Função de login a ser implementada");
        }
