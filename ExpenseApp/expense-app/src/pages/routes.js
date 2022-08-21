import { lazy } from "react";

const HomePage = lazy(() => import("./Home"));

export default [
  {
    path: "/",
    exact: true,
    public: true,
    component: HomePage,
  },
];
