//Generate Prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return `The Great`
    } else {
        return `Master`
    }
}
//Generate first name
function genFirstName(firstName) {
    const firstLetter = firstName.charAT(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Pablo'
    } else {
        return 'Julian'
    }
}

//Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}ridge` //example: Blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor}son`
    } else {
        return `${favoriteColor}stone`
    }
}

//Generate Last name
function genLastname(lastName) {
    const lastLetter = lastName.charAT(lastName.length - 1)
    if (lastLetter === 'a') {
        return 'Shadow'
    } else if (lastLetter === 'e')
        return 'Storm'
    if (lastLetter === 'i') {
        return 'Firestrom'
    } else if (lastLetter === 'o') {
        return 'Raider'
    } else {
        return 'Moon'
    }

}

//generate suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan`
}
//Master name building Function
function genFullName() {
    //Get the user's Input from html
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value.trim()
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
    //Run Name Generating functions and Store them in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const suffix = genSuffix(favoriteAnimal)

    //Capitalize Name Variables when needed
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)
    const capitalizeMiddleName = capitalize(middleName)
    const capitalizeLastName = capitalize(newLastName)



    //Combine all of the Name variables into a full New name

    //display the new name
}

//Capitalization Function
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}