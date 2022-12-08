export interface User {
    firstname: string,
    lastname: string,
    email: string,
    username: string
}

export interface SignupUser extends User {
    password: string
}