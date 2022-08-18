import { useCallback, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { useLoginUser } from "../hooks/useLoginUser";

import { useMessage } from "./useMessage";

import { User  } from "../types/api/user";

export const useAuth = () => {
    const [loading, setLoding] = useState(false);
    
    const history = useHistory();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();
    
    const login = useCallback((id: string) => {
        setLoding(true);
        axios.get<User>(`//jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if (res.data) {
                const isAdmin = res.data.id === 10 ? true : false;
                setLoginUser({ ...res.data, isAdmin });
                showMessage({title: "ログインしました", status: "success"})
                history.push("/home");
            } else {
                showMessage({title: "ユーザが見つかりません", status: "error"})
            }
        }).catch( () => showMessage({title: "ログインできません", status: "error"}) )
        .finally( () => setLoding(false));
    }, [history, showMessage, setLoginUser]);
    
    return { login, loading };
}