import { create } from 'zustand';

interface AuthState {
    username: string | null;
    login: (data: { username: string }) => void;
    logout: () => void;
    restore: () => void; 
}

export const useAuthStore = create<AuthState>((set) => ({
    username: null,

    login: ({ username }) => {
        localStorage.setItem('username', username);
        set({ username });
    },

    logout: () => {
        localStorage.removeItem('username');
        set({ username: null });
    },

    restore: () => {
        const username = localStorage.getItem('username');
        if (username) {
            set({ username });
        }
    }
}));
