import {
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "../layout/root/root";
import { Home } from "../page/home/home";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Root />,
  errorElement: <div>404</div>,
  children: [
   {
    index: true,
    element: <Home/>,
   },
   {
    
   }
  ]
}
])