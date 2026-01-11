import { useEffect, useState } from "react";

function APIFetchPage() {
   
    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        const response = await  fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json();
        console.log(data)
        setUserData(data)
    }
    

    useEffect(() => {
        fetchUserData();
    }, [])
   

    return (
        <div className="container mx-auto h-screen flex justify-center items-center w-2/3 my-[200px]">
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Users</li>

                {
                    userData.map((user) => {
                        return (
                            <li className="list-row ">
                                <div className="space-y-2">
                                    <div> {user.name}</div>
                                    <div className="text-xs  font-semibold opacity-60">{user.email}</div>
                                    <p className="list-col-wrap text-xs">
                                        {user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode}
                                    </p>
                                    <p className="list-col-wrap text-xs">
                                        {user.phone + ', ' + user.website}

                                    </p>
                                </div>
                                <button className="btn btn-square btn-ghost">
                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                </button>
                            </li>
                        )
                    })
                }





            </ul>

        </div>
    )
}
export default APIFetchPage;