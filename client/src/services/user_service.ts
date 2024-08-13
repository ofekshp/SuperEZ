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
      const response = await fetch(`${serverUrl}:${port}/users/logout`, {
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

  resetPassword = async (data: { email: string; phone: string; newPassword: string }) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const port = process.env.REACT_APP_SERVER_PORT;
    const apiUrl = `${serverUrl}:${port}/users/reset-password`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('Response:', response);
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData); 
        return { success: false, message: 'Failed to reset password' };
      }
    } catch (error) {
      console.error('Reset password error:', error); 
      return { success: false, message: 'Failed to reset password' };
    }
  };

  getUserProfile = async () => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const port = process.env.REACT_APP_SERVER_PORT;
    const apiUrl = `${serverUrl}:${port}/users/profile`;
    const userEmail = localStorage.getItem('userEmail');
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'email': userEmail || '', // Pass the user's email in the headers
        },
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        return data.user;
      } else {
        console.error('Error fetching user profile:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

 
  updateUserProfile = async (updatedUserData: {name: string; phone: string; password: string }) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const port = process.env.REACT_APP_SERVER_PORT;
    const apiUrl = `${serverUrl}:${port}/users/profile`;
    const userEmail = localStorage.getItem('userEmail');
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'email': userEmail || '',
        },
        credentials: 'include',
        body: JSON.stringify(updatedUserData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.user;
      } else {
        const errorData = await response.json();
        console.error('Error updating user profile:', errorData); // Log detailed error response
        return null;
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      return null;
    }
  };
  

 
}

export default UserService;
