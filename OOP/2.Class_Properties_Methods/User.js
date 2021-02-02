class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    validatePassword () {
        if (this.password.length >= 6) {
            return true
        } else {
            return false
        }
    }
}