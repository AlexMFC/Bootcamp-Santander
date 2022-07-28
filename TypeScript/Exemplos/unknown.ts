let any: any;
any = 3;
any = "ola";

let stringTest: string = 'verificar'
stringTest = any;

let unknownValor: unknown;
unknownValor = 3;
unknownValor ='ola'
unknownValor = true;

let stringTest2: string='agora vai';
stringTest2 = unknownValor

if (typeof unknownValor =='string'){
    stringTest2 = unknownValor
} /*~~~FILTRO~~~ (para fazer o tratamento de valores, no caso, string)*/