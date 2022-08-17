import { useCallback, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";


import { User  } from "../types/api/user"
export const useAuth = () => {
    const [loading, setLoding] = useState(false);
    const history = useHistory();
    const login = useCallback((id: string) => {
        setLoding(true);
        axios.get<User>(`//jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if (res.data) {
                history.push("/home");
            } else {
                alert('ユーザーが見つかりません');
            }
        }).catch( () => alert('ログインできません') )
        .finally( () => setLoding(false));
    }, [history]);
    
    return { login, loading };
}