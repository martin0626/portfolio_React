export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailRegex.test(email)){
        return '';
    }else{
        return "Please write valid Email Address!"
    }
};




export function handleFormErrs(formObj){
    
    let currErr = isValidEmail(formObj.email)

    Object.keys(formObj).forEach(k=>{
        if(formObj[k].trim() === ''){
            currErr = 'Please fill the form!'
        }
    });

    return currErr
}