const adminPaths2 = [
    {
        name: "Dashbard",
        path: "dashboard",
        element: "AdminDashboard",
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "CreateAdmin",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: " CreateFaculty",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "CreateAdmin",
            },
        ],
    },
];
const newArray = adminPaths2.reduce((acc, iteam) => {
    if (iteam.path && iteam.name) {
        acc.push({
            key: iteam.path,
            label: "This sholud be the label",
        })

    }
    if (iteam.children) {
        acc.push({
            key: iteam.name,
            label: iteam.name,
            children: [
                iteam.children.map(child => ({
                    key: child.name,
                    label: "navlink",


                }))
            ]
        })
    }
    return acc
}, [])

// const newArray = adminPaths2.reduce((acc, iteam) => {
//     if (iteam.path && iteam.element) {
//         acc.push({
//             path: iteam.path,
//             element: iteam.element,
//         })

//     }
//     if (iteam.children) {
//         iteam.children.forEach(child => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
// }, [])
console.log(JSON.stringify(newArray))