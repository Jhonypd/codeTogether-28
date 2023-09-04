



let newsletter = {}


export const getNewsletter = () => {
    return newsletter
}

export const addNewsletter = (name, email) => {
    const entry = {user: email, id: Date.now()}
    newsletter[name] = entry
    console.log(newsletter)
}

