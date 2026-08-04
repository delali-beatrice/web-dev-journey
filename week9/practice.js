function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong!");
        }, 2000);
    });
}

async function showMessage() {
    try {
        const message = await getMessage();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

showMessage();

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Beatrice");
        }, 2000);
    });
}

async function showUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

showUser();