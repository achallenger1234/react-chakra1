
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useCallback } from "react";
import axios from "axios";

import { User } from "../types/api/user"
import { useMessage  } from "./useMessage"

export const useAllUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<User>>([]);
    const { showMessage } = useMessage();
    
    const getUsers = useCallback(() => {
        setLoading(true);
        axios
            .get<Array<User>>("//jsonplaceholder.typicode.com/users")
            .then((res) => {setUsers(res.data)})
            .catch(() => {
                showMessage({
                    title: "ユーザ取得に失敗しました",
                    status: "error"
                })
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return { getUsers, loading, users }
}