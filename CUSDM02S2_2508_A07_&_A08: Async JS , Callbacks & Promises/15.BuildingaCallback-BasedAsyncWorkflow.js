function registerUser(username, callback) {
    setTimeout(() => {
        if (!username) {
            callback("Registration failed: Username is required");
        } else {
            console.log(`User ${username} registered successfully`);
            callback(null, username);
        }
    }, 1000);
}

function sendVerification(username, callback) {
    setTimeout(() => {
        if (username === "errorUser") {
            callback("Verification failed: Invalid user");
        } else {
            console.log(`Verification email sent to ${username}`);
            callback(null, username);
        }
    }, 1000);
}

function loginUser(username, callback) {
    setTimeout(() => {
        if (username === "bannedUser") {
            callback("Login failed: User is banned");
        } else {
            console.log(`User ${username} logged in successfully`);
            callback(null, username);
        }
    }, 1000);
}

function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
        console.log(`Welcome, ${username}!`);
        callback(null);
    }, 1000);
}


function startWorkflow(username) {
    registerUser(username, (error, registeredUser) => {
        if (error) {
            console.log(error);
            return;
        }

        sendVerification(registeredUser, (error, verifiedUser) => {
            if (error) {
                console.log(error);
                return;
            }

            loginUser(verifiedUser, (error, loggedInUser) => {
                if (error) {
                    console.log(error);
                    return;
                }

                displayWelcomeMessage(loggedInUser, (error) => {
                    if (error) {
                        console.log(error);
                        return;
                    }

                    console.log("User registration workflow completed successfully!");
                });
            });
        });
    });
}


startWorkflow("JohnDoe");  
// startWorkflow("");       
// startWorkflow("errorUser"); 
// startWorkflow("bannedUser"); 
