import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Chefs from "../components/main/Chefs/Chefs";
import Recipes from "../components/main/Recipes/Recipes";
import RecipesLayout from "../RecipesLayout/RecipesLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Chefs></Chefs>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: ({ params }) => fetch('https://dish-delish-gamma.vercel.app/chefs')
            }

        ]
    },
    {
        path: 'recipes',
        element: <RecipesLayout></RecipesLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {

                path: ':id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: ({ params }) => fetch(`https://dish-delish-gamma.vercel.app/chefs/${params.id}`)

            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    }


])

export default router;



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <LoginLayout></LoginLayout>,
//         children: [
//             {
//                 path: '/',
//                 element: <Navigate to='home'></Navigate>
//             },
//             {
//                 path: '/login',
//                 element: <Login></Login>
//             },
//             {
//                 path: '/register',
//                 element: <Register></Register>
//             }
//         ]
//     },
//     {
//         path: 'home',
//         element: <Home></Home>,
//         children: [
//             {
//                 path: '/',
//                 element: <Chefs></Chefs>,
//                 loader: ({ params }) => fetch('http://localhost:5000/chefs')
//             }

//         ]
//     },
//     {
//         path: 'recipes',
//         element: <RecipesLayout></RecipesLayout>,
//         children: [
//             {

//                 path: ':id',
//                 element: <Recipes></Recipes>,
//                 loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)

//             }
//         ]
//     }


// ])


















// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home></Home>,
//         children: [
//             {
//                 path: '/',
//                 element: <Chefs></Chefs>,
//                 loader: ({ params }) => fetch('http://localhost:5000/chefs')
//             }

//         ]
//     },
//     {
//         path: 'recipes',
//         element: <RecipesLayout></RecipesLayout>,
//         children: [
//             {

//                 path: ':id',
//                 element: <Recipes></Recipes>,
//                 loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)

//             }
//         ]
//     }

// ])