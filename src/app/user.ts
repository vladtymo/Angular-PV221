export interface IUser {
    id: number;
    email: string;
    name: string;
    admin: boolean;
}

export const USERS: IUser[] = [
    { id: 101, name: "Vlad Tymoshchuk", email: 'vtymo@gmail.com', admin: true },
    { id: 200, name: "Oleg Fedor", email: 'ol@gmail.com', admin: false },
    { id: 201, name: "Viktoria Maluk", email: 'vi@gmail.com', admin: false },
    { id: 899, name: "Taras Artist", email: 'tar@gmail.com', admin: true },
    { id: 777, name: "Eugen Crabs", email: 'crabs@gmail.com', admin: true }
]