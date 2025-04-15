let database = [];

class user{
    constructor(name, old_year, phone){
        this.name = name;
        this.old_year = old_year;
        this.phone = phone;
    }

    scheduling(){
        while(true){
            const answer_city = prompt("É morador de Formosa ou região e consegue buscar seus benefícios na Concretta? Responda com sim/não: ").toLowerCase();

            if(answer_city === "sim" || answer_city === "s"){
                alert("Nosso horário de funcionamento é de 9:00h às 18:00h de segunda a quarta, 9:00h às 22:00 quinta e sexta, 9:00h às 13:00 no sábado.");
                const day = parseInt(prompt("Escolha um dia. Digite 1 para segunda, 2 para terça, 3 para quarta...: "));
                switch(true){
                    case day == 1:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível na segunda: `));
                            if(hours >= 9 && hours <= 18){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    case day == 2:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível na terça: `));
                            if(hours >= 9 && hours <= 18){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    case day == 3:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível na quarta: `));
                            if(hours >= 9 && hours <= 18){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    case day == 4:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível na quinta: `));
                            if(hours >= 9 && hours <= 22){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    case day == 5:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível na sexta: `));
                            if(hours >= 9 && hours <= 22){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    case day == 6:
                        while(true){
                            const hours = parseFloat(prompt(`Agora escolha um horário compatível no sábado: `));
                            if(hours >= 9 && hours <= 13){
                                alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                break;
                            }
                            else{
                                alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                            };
                        }
                        break;
                    default:
                        alert("Desculpe, nesse dia não estamos abertos!");
                }
                break;
            }
            else if(answer_city === "não" || answer_city === "nao" || answer_city === "n"){
                alert(`Sem problemas ${this.name}, vamos marcar um horário para um de nossos atendentes te ligar e conversar sobre tudo.`);
                const hours_return = parseFloat(prompt("Que horas fica melhor para ligarmos novamente?: "));
                console.log("O melhor horário para ligar é "+hours_return+" horas");
                break;
            }
            else{
                alert("Resposta inválida! Digite novamente.");
            }
        }
    }

    sendMessage(){
        if(this.old_year >= 6 && this.old_year < 18){
            alert(`Bem vindo ${this.name}! Caso queira resgatar seus benefícios, por você ser menor de idade, será necessário vir a nossa instituiição junto do responsável.`);
            const phone_master = prompt("Nos passe o telefone do seu responsável para entrarmos em contato e agendarmos seu horário: ");
            alert("Obrigado pela sua atenção, tenha um bom dia!");

            console.log("Esse é o número do pai do "+this.name+": "+phone_master);
        }
        else if(this.old_year >= 18 && this.old_year <= 102){
            alert(`Bem vindo ${this.name}! Para você resgatar seus benefícios basta agendar um horário em nossa instituição. Vamos lá?`);
            this.scheduling();
        }
    }
}

for(let i = 0; i < 3; i++){
    const name = prompt("Digite seu nome completo: ");
    const old_year = parseInt(prompt("Digite sua idade: "));
    const phone = prompt("Digite seu número de telefone: ");

    class user{
        constructor(name, old_year, phone){
            this.name = name;
            this.old_year = old_year;
            this.phone = phone;
        }
    
        scheduling(){
            while(true){
                const answer_city = prompt("É morador de Formosa ou região e consegue buscar seus benefícios na Concretta? Responda com sim/não: ").toLowerCase();
    
                if(answer_city === "sim" || answer_city === "s"){
                    alert("Nosso horário de funcionamento é de 9:00h às 18:00h de segunda a quarta, 9:00h às 22:00 quinta e sexta, 9:00h às 13:00 no sábado.");
                    const day = parseInt(prompt("Escolha um dia. Digite 1 para segunda, 2 para terça, 3 para quarta...: "));
                    switch(true){
                        case day == 1:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível na segunda: `));
                                if(hours >= 9 && hours <= 18){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        case day == 2:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível na terça: `));
                                if(hours >= 9 && hours <= 18){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        case day == 3:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível na quarta: `));
                                if(hours >= 9 && hours <= 18){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        case day == 4:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível na quinta: `));
                                if(hours >= 9 && hours <= 22){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        case day == 5:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível na sexta: `));
                                if(hours >= 9 && hours <= 22){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        case day == 6:
                            while(true){
                                const hours = parseFloat(prompt(`Agora escolha um horário compatível no sábado: `));
                                if(hours >= 9 && hours <= 13){
                                    alert("Deu tudo certo, nosso sistema já agendou sua visita às " + hours + " horas. Tenha um bom dia!");
                                    break;
                                }
                                else{
                                    alert("Esse horário não é compatível com o dia selecionado, escolha outro!");
                                };
                            }
                            break;
                        default:
                            alert("Desculpe, nesse dia não estamos abertos!");
                    }
                    break;
                }
                else if(answer_city === "não" || answer_city === "nao" || answer_city === "n"){
                    alert(`Sem problemas ${this.name}, vamos marcar um horário para um de nossos atendentes te ligar e conversar sobre tudo.`);
                    const hours_return = parseFloat(prompt("Que horas fica melhor para ligarmos novamente?: "));
                    console.log("O melhor horário para ligar é "+hours_return+" horas");
                    break;
                }
                else{
                    alert("Resposta inválida! Digite novamente.");
                }
            }
        }
    
        sendMessage(){
            if(this.old_year >= 6 && this.old_year < 18){
                alert(`Bem vindo ${this.name}! Caso queira resgatar seus benefícios, por você ser menor de idade, será necessário vir a nossa instituiição junto do responsável.`);
                const phone_master = prompt("Nos passe o telefone do seu responsável para entrarmos em contato e agendarmos seu horário: ");
                alert("Obrigado pela sua atenção, tenha um bom dia!");
    
                console.log("Esse é o número do pai do "+this.name+": "+phone_master);
            }
            else if(this.old_year >= 18 && this.old_year <= 102){
                alert(`Bem vindo ${this.name}! Para você resgatar seus benefícios basta agendar um horário em nossa instituição. Vamos lá?`);
                this.scheduling();
            }
        }
    }

    const test = new user(name, old_year, phone);
    database.push(test);
    test.sendMessage();
};

console.log(database);
