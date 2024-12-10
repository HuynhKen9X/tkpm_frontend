// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../utils/axiosInstance';
// import { jwtDecode } from 'jwt-decode';



// export const loginUser = createAsyncThunk(
//   'user/login',
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/api/user/login', { username, password });
//       const token = response.data.data;

//       // Store token in local storage
//       localStorage.setItem('accessToken', token);

//       // Decode the token to extract the user info
//       const decodedToken = jwtDecode(token);
//       const userRole = decodedToken.role || 'USER';
//       const userName = decodedToken.sub; 
//       // Store the role in local storage
//       localStorage.setItem('role', userRole);
//       // Return userInfo with both username and role
//       return { username: userName, role: userRole };
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );


// // Async thunk for user registration
// export const registerUser = createAsyncThunk(
//   'user/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/api/user/register', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk for fetching all users
// export const fetchAllUsers = createAsyncThunk(
//   'user/fetchAllUsers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/api/user/list');
//       return response.data.data;  // Assuming API sends data inside a 'data' key
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice
// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userInfo: null,
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('role');
//       state.userInfo = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handle login
//     builder
//     .addCase(loginUser.pending, (state) => {
//       state.loading = true;
//     })
//     .addCase(loginUser.fulfilled, (state, action) => {
//       state.loading = false;
//       state.userInfo = action.payload; // This now contains both username and role
//     })
//     .addCase(loginUser.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//       // Handle register
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // Handle fetching users
//       .addCase(fetchAllUsers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchAllUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchAllUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';
import { jwtDecode } from 'jwt-decode';

// Login User (using mock API)
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('https://6756e102c0a427baf94acc34.mockapi.io/user/login', { username, password });
      const token = response.data.token; // Assuming the token is returned as 'token'

      // Store token in local storage
      localStorage.setItem('accessToken', token);

      // Decode the token to extract the user info
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role || 'USER';
      const userName = decodedToken.sub; 
      
      // Store the role in local storage
      localStorage.setItem('role', userRole);

      // Return userInfo with both username and role
      return { username: userName, role: userRole };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for user registration (using mock API)
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('https://6756e102c0a427baf94acc34.mockapi.io/user/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching all users (using mock API)
export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('https://6756e102c0a427baf94acc34.mockapi.io/user/list');
      return response.data;  // Assuming API sends data in the response directly
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    users: [],
    loading: false,
    error: null,
    isLoggedIn: false,  // Trạng thái đăng nhập
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('role');
      state.userInfo = null;
      state.isLoggedIn = false;  // Đánh dấu người dùng đã đăng xuất
    },
    login: (state, action) => {
      state.userInfo = action.payload;  // Thông tin người dùng sau khi đăng nhập
      state.isLoggedIn = true;  // Đánh dấu người dùng đã đăng nhập
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload; 
        state.isLoggedIn = true;  // Đánh dấu người dùng đã đăng nhập
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;

