export interface User {
    username: string;
}

export interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}
