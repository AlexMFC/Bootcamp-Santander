"use strict";
let any;
any = 3;
any = "ola";
let stringTest = 'verificar';
stringTest = any;
let unknownValor;
unknownValor = 3;
unknownValor = 'ola';
unknownValor = true;
let stringTest2 = 'agora vai';
stringTest2 = unknownValor;
if (typeof unknownValor == 'string') {
    stringTest2 = unknownValor;
} /*~~~FILTRO~~~ (para fazer o tratamento de valores, no caso, string)*/
