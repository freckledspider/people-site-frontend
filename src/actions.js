const URL = "https://people-api-zs31.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData
     const newPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
     }
}