interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    readonly fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string
    [key:string]: any
}
