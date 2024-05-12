'use client';
import React, { useCallback, useEffect, ReactNode, use } from "react";
import { AuthContext } from "./auth-context";



interface Props {
    children: ReactNode;
}

interface State {
    isAuthenticated: boolean;
    user: any;
    token: string | null;
    isLoading: boolean;
}

interface Action {
    type: string;
    payload: {
        user: any;
        token: string | null;
    };
}

const initialState: State = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                isLoading: false,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                isLoading: false,
            };
        default:
            return state;
    }
};

const getTokenFromUrl = (search: string) => {
    console.log(search);
    const params = new URLSearchParams(search)
    return params.get('access_token');
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);


    const initialize = useCallback(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            console.log('LOGIN', "estoy haciendo el login");
            dispatch({
                type: "LOGIN",
                payload: {
                    user: JSON.parse(user),
                    token: JSON.parse(token)
                }
            });
        } else {
            dispatch({ type: "LOGOUT", payload: { user: null, token: null } });
        }
    }, []);

    const fetchUserData = async (accessToken:string) => {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (response.ok) {
                const userData = await response.json();
                console.log('Datos del usuario:', userData);
                return userData;
            } else {
                console.error('Error al obtener datos del usuario:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Error al obtener datos del usuario:', error);
            return null;
        }
    };
    useEffect(() => {
         console.log(window.location)
         const tokenFromUrl= getTokenFromUrl(window.location.hash.substr(1));
         console.log(tokenFromUrl);
         console.log('tokenFromUrl', tokenFromUrl);
        // GET user info

        if (tokenFromUrl) {
            fetchUserData(tokenFromUrl).then((userData) => {
                console.log('userData', userData);
                dispatch({
                    type: "LOGIN",
                    payload: { user: userData, token: tokenFromUrl },
                });
            });

            window.location.href="http://localhost:3000/example";
        } else {
            initialize();
        }
    }, [initialize]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
