import { useCallback, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";
import { useMessage } from "./useMessage";

import { User  } from "../types/api/user"
export const useAuth = () => {
    const [loading, setLoding] = useState(false);
    const history = useHistory();
    const { showMessage } = useMessage();
    const login = useCallback((id: string) => {
        setLoding(true);
        axios.get<User>(`//jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if (res.data) {
                showMessage({title: "ログインしました", status: "success"})
                history.push("/home");
            } else {
                showMessage({title: "ユーザが見つかりません", status: "error"})
            }
        }).catch( () => showMessage({title: "ログインできません", status: "error"}) )
        .finally( () => setLoding(false));
    }, [history, showMessage]);
    
    return { login, loading };
}