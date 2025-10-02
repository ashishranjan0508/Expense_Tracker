import { lazy } from "react"

const Signup = lazy(() => { return (import('../pages/Signup.jsx')) });
const Login = lazy(() => { return (import('../pages/login.jsx')) });
const Dashboard = lazy( () => { return (import('../pages/Dashboard.jsx')) });
const Budget = lazy( () => { return (import('../pages/Budget.jsx')) });
const Expenses = lazy( () => { return (import('../pages/Expenses.jsx')) });
const Income = lazy( () => { return (import('../pages/Income.jsx')) });
const ViewIncome = lazy( () => { return (import('../pages/ViewIncome.jsx')) });
const ViewExpenses = lazy( () => { return (import('../pages/ViewExpenses.jsx')) });
const ViewReport = lazy( () => { return (import('../pages/ViewReport.jsx')) });


export const PUBLIC_ROUTES = [
    {path : '/signup', component: Signup},
    {path : '/login', component: Login},
]

export const PROTECTED_ROUTES = [
    {path : '/dashboard', component : Dashboard},
    {path : '/budget', component : Budget},
    {path : '/expenses', component : Expenses},
    {path : '/income', component : Income},
    {path : '/viewIncome', component : ViewIncome},
    {path : '/viewExpenses', component : ViewExpenses},
    {path : '/viewReport', component : ViewReport},
    

]

