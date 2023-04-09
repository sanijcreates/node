//here, we have everything in a same file, but when the application gets bigger, we will want to seperate the components. 
//or, there might be information that we would want to keep secret from a file. 

const secret = 'SUPER SECRET';

const sanij = 'sanij';

const sayHi = (name) => {
    console.log(name);
}

sayHi(sanij);