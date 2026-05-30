import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

export const routes = [
  { element: <MainLayout />, children: [{ path: "/", element: <HomePage /> }] },
];
