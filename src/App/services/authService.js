export const login = (data) => {
    const password = localStorage.getItem(data.username);
    const success = (password && password === data.password);
    return { success };
}

export const register = (data) => {
    localStorage.setItem(data.username, data.password)
    return { success: true };
}

export const logout = async (data) => {
    return { success: true };
}