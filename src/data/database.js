const questions = [
    {
    questionsText: "Levando em consideração o código abaixo, selecione a opção que faz parte do seu processamento de dados. ",
    imagem: "https://imgur.com/P9RWhQq.png",
    answerOptions: [
        {answerText: "1. int a = 5; int b = 10; int c = a - b;", isCorrect: false},
        {answerText: "2. System.out.println(c);", isCorrect: false},
        {answerText: "3. int c = a - b;", isCorrect: true},
        {answerText: "4.  int a = 5; int b = 10;", isCorrect: false},
    ],
    },
    {
    questionsText: "O que é uma variável?",
    answerOptions: [
        {answerText: "É um conjunto de instruções dentro de um código que pode variar dependendo se uma determinada condição é cumprida ou não.", isCorrect: false},
        {answerText: "É um espaço de memória reservado para armazenar um dado que pode ser alterado durante a execução do código.", isCorrect: true},
        {answerText: "É um espaço de memória reservado para armazenar um dado que não pode ser alterado durante a execução do código.", isCorrect: false},
        {answerText: "Nenhuma das opções acima.", isCorrect: false},
    ],
    },
    {
        questionsText: "Qual das variáveis abaixo pode ser utilizada com valores fracionários?",
        answerOptions: [
            {answerText: "String", isCorrect: false},
            {answerText: "Int", isCorrect: false},
            {answerText: "Double", isCorrect: true},
            {answerText: "Char", isCorrect: false},
    ],
    },
    {
        questionsText: "Para criar um identificador, nome de vaariável, é necessário seguir algumas regras. Selecione a regra incorreta.",
        answerOptions: [
            {answerText: "Deve conter apenas letras, _ (underline), $ ou os  números de 0 a 9", isCorrect: false},
            {answerText: "Deve iniciar com uma letra minúscula", isCorrect: false},
            {answerText: "Deve ser único dentro de um escopo", isCorrect: false},
            {answerText: "Deve conter palavras-chave da linguagem.", isCorrect: true},
    ],
    },
    {
        questionsText: "Ana estava criando seu primeiro código em Java e se deparou com este erro: 'Main.java:1: error: package Java.util does not exist. import Java.util.Scanner;'. Por que este erro ocorreu?",
        answerOptions: [
            {answerText: "Ana não usou a classe Scanner.", isCorrect: false},
            {answerText: "Ana não colocou os valores certos.", isCorrect: false},
            {answerText: "Ana importou de forma errada.", isCorrect: true},
            {answerText: "Ana esqueceu de importar a classe Main.", isCorrect: false},
    ],
    },
    {
        questionsText: "Ana estava criando seu primeiro código em Java e se deparou com este erro: 'Main.java:1: error: package Java.util does not exist. import Java.util.Scanner;'. Por que este erro ocorreu?",
        answerOptions: [
            {answerText: "Ana não usou a classe Scanner.", isCorrect: false},
            {answerText: "Ana não colocou os valores certos.", isCorrect: false},
            {answerText: "Ana importou de forma errada.", isCorrect: true},
            {answerText: "Ana esqueceu de importar a classe Main.", isCorrect: false},
    ],
    },
];

export default questions;