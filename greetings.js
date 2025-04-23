const greetByTime = ()=> {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12){
        return "Bonjour";
    } else {
        return "Bonsoir";
    }
}


const sayHello = (name) => `${greetByTime()}, ${name}, Bienvenue !`;
const sayBye = (name) => `Au revoir, ${name}. À bientôt !`;

module.exports = { sayHello, sayBye, greetByTime};
