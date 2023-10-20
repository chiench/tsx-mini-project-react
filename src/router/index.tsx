import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ListGiaoVien from '../page/Admin/Giaovien/list.tsx'
import ListGiaoVien from '@/page/Admin/Giaovien/list.tsx'
import CreatGiaoVien from '@/page/Admin/Giaovien/create.tsx'
const instanceRouter = createBrowserRouter([
    { path: "/giao-vien", element: <ListGiaoVien /> },
    { path: "/giao-vien/create", element: <CreatGiaoVien /> }
])

export default instanceRouter