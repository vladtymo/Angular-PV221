export interface IUser {
    id: number;
    email: string;
    name: string;
    admin: boolean;
    birthdate?: Date;
}

export const USERS: IUser[] = [
    { id: 101, name: "Vlad Tymoshchuk", email: 'VTymo@gmail.com', admin: true, birthdate: new Date(1994, 4, 7) },
    { id: 200, name: "Oleg Fedor", email: 'ol@gmail.com', admin: false },
    { id: 201, name: "Viktoria Maluk", email: 'Vi@gmail.com', admin: false, birthdate: new Date(2003, 5, 10) },
    { id: 899, name: "Taras Artist", email: 'tar@gmail.com', admin: true, birthdate: new Date(2000, 0, 1) },
    { id: 777, name: "Eugen Crabs", email: 'crabs@gmail.com', admin: true }
]