const URL = "https://people-api-zs31.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch (URL + "/people");
    const people = await response.json()
    return people;
}