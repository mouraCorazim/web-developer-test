
export function Auth(token: string | null){
    
    const _isValid = () => token !== null

    return{
        filter : (pred: Function) => _isValid() && pred(token)? Auth(token): Auth(null),
        store  : (fn: Function)   => _isValid()? fn(token)  : false
    }
}