function retriveMessage(messArr) {
    return function(){
        let result = ' ';
        messArr.forEach((item) => {
            let messIndex = Math.floor(Math.random() * item.length);
            result += item[messIndex];
        });

        return result.trim();
    };
}

let question = ['hey ho how are you?', 'first message of the year', 'this is a motivational talk'];
let anotherQuestion = ['another day at work', 'at the beach', 'we are together'];
let thirdQuestion = ['paradise', 'shopping mall', 'secrets'];

const generateMess = retriveMessage([question, anotherQuestion, thirdQuestion]);
console.log('This is for you: ' + generateMess())