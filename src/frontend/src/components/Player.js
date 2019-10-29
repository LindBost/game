 export const getPlayer = async() => {

    console.log('fetch');
    const response = await fetch("/player/2");
    const result = await response.json();   
    return result;
}   