import AdminLoginContext from "./AdminLoginContext";

function AdminLoginState(props) {
    const x = 10;
    return (
        <AdminLoginContext.Provider value={{ x }}>
            {props.children}
        </AdminLoginContext.Provider>
    );
}

export default AdminLoginState;
