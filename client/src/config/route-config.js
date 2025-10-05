import { lazy } from "react";

const Signup = lazy(() => {
  return import("../pages/Signup.jsx");
});
const Login = lazy(() => {
  return import("../pages/Login.jsx");
});
const Dashboard = lazy(() => {
  return import("../pages/Dashboard.jsx");
});
const Budget = lazy(() => {
  return import("../pages/Budget.jsx");
});
const Expenses = lazy(() => {
  return import("../pages/Expenses.jsx");
});
const Income = lazy(() => {
  return import("../pages/Income.jsx");
});
const ViewIncome = lazy(() => {
  return import("../pages/ViewIncome.jsx");
});
const ViewExpenses = lazy(() => {
  return import("../pages/viewExpenses.jsx");
});
const ViewBudget = lazy(() => {
  return import("../pages/viewBudget.jsx");
});
const ViewReport = lazy(() => {
  return import("../pages/ViewReport.jsx");
});

export const PUBLIC_ROUTES = [
  { path: "/signup", component: Signup, isProtected: false },
  { path: "/login", component: Login, isProtected: false },
];

export const PROTECTED_ROUTES = [
  { path: "/dashboard", component: Dashboard, isProtected: true },
  { path: "/budget", component: Budget, isProtected: true },
  { path: "/expenses", component: Expenses, isProtected: true },
  { path: "/income", component: Income, isProtected: true },
  { path: "/viewIncome", component: ViewIncome, isProtected: true },
  { path: "/viewExpenses", component: ViewExpenses, isProtected: true },
  { path: "/viewBudget", component: ViewBudget, isProtected: true },
  { path: "/viewReport", component: ViewReport, isProtected: true },
];

export const ALL_ROUTES = [...PUBLIC_ROUTES, ...PROTECTED_ROUTES];
