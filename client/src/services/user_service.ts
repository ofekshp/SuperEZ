interface IUser {
    email: string;
    password: string;
    name: string;
    phone: string;
}
  
class UserService {

    registerUser = async (user: IUser) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const port = process.env.REACT_APP_SERVER_PORT;
    const apiUrl = `${serverUrl}:${port}/users/signup`;
    try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        console.log("Response:", response);
        if (response.ok) {
          return true;
        } else {
          const errorData = await response.json();
          console.log("Error:", errorData);
          return false;
        }
      } catch (error) {
        console.error(error);    
      }
    };

    loginUser = async (user: IUser) => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const port = process.env.REACT_APP_SERVER_PORT;
        const apiUrl = `${serverUrl}:${port}/users/login`;
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            });
            console.log('Response:', response);                 
            if (response.ok) {
              const data = await response.json();
              if (data.message === 'Login successful') {
                console.log('Data:', data);
                localStorage.removeItem('basketProducts');
                localStorage.setItem('userEmail', data.user.email);
                localStorage.setItem('userId', data.user._id);
                document.cookie = `isLoggedIn=true;path=/`;
                return true;
              } else {
                console.log('Invalid data format:', data);
                return false;
              }
            } else {
              const errorData = await response.json();
              console.error('Error:', errorData); // Log error details
              return false;           
            }
          } catch (error) {
            console.error('Login error:', error); // Log fetch error          
          }
        };

    logoutUser = async () => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const port = process.env.REACT_APP_SERVER_PORT;
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/users/logout`, {
              method: 'POST',
              credentials: 'include',
            });
            if (response.ok) {
              localStorage.removeItem('userEmail');
              localStorage.removeItem('userId');
              localStorage.removeItem('basketProducts');
              return true;
            } else {
              return false;
            }
          } catch (error) {
            console.error('Logout error:', error);
          }
        };
};
export default UserService;
