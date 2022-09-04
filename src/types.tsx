export interface Contr{
    isWaiting: Boolean,
    coin?: string,
    wallet?: Number ,
    category?: string,
    description?: string,
    price?: string,
    loader?: Boolean,
    error?: Boolean
}

export interface Data{

    category?: string,
    description?: string,
    price?: string,
    loader: Boolean,
    error?: Boolean
}

export interface TestInter{

    qq:{
        isWaiting: Boolean,
        coin?: string,
        wallet?: Number ,
        category?: string,
        description?: string,
        price?: string,
        loader?: Boolean
    }
}
