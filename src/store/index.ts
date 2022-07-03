import { QueryClient } from "react-query";

const queryClient = new QueryClient()

// Set initial state: sidebarOpen, darkMode
const initialState = {
  sidebarOpen: false,
  darkMode: false,
}

// Add initial state to the store
Object.entries(initialState).forEach(([key, value]) => {
  queryClient.setQueryData(key, value)
})

export default queryClient
