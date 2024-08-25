// import React, { ChangeEvent, useState } from "react";

// import Button from "../Button";
// import GroupChat from "./GroupChat";
// import Input from "../Input";

// import Groupcontact from "./Groupcontact";

// interface Member {
//   name: string;
//   email: string;
//   profileImageUrl?: string;
// }

// interface FormData {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   groupName: string;
//   profileImage?: File | null;
//   groupProfileImage?: File | null;
//   profileImageUrl?: string;
//   groupProfileImageUrl?: string;
//   members: Member[];
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     groupName: "",
//     profileImage: null,
//     groupProfileImage: null,
//     profileImageUrl: "",
//     groupProfileImageUrl: "",
//     members: [],
//   });

//   const [addedData, setAddedData] = useState<FormData[]>([]);
//   const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
//   const [createdGroups, setCreatedGroups] = useState<FormData[]>([]);
//   const [activeGroup, setActiveGroup] = useState<FormData | null>(null);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value, files } = e.target;
//     if (files) {
//       const file = files[0];
//       const url = URL.createObjectURL(file);
//       setFormData((prevData) => ({
//         ...prevData,
//         [id]: file,
//         [`${id}Url`]: url,
//       }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [id]: value }));
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phoneNumber: "",
//       groupName: "",
//       profileImage: null,
//       groupProfileImage: null,
//       profileImageUrl: "",
//       groupProfileImageUrl: "",
//       members: [],
//     });
//   };

//   const handleAdd = () => {
//     const { name, email, phoneNumber, profileImage } = formData;
//     if (!name || !email || !phoneNumber || !profileImage) {
//       alert("Please fill in all the fields before adding.");
//       return;
//     }
//     setAddedData((prevData) => [...prevData, { ...formData, members: [] }]);
//     handleReset();
//   };

//   const handleSelectMember = (index: number) => {
//     setSelectedMembers((prevSelected) =>
//       prevSelected.includes(index)
//         ? prevSelected.filter((i) => i !== index)
//         : [...prevSelected, index]
//     );
//   };

//   const handleCreateGroup = () => {
//     if (selectedMembers.length === 0 || formData.groupName === "") {
//       alert("Please select members and enter a group name.");
//       return;
//     }

//     const groupMembers = selectedMembers.map((index) => {
//       const { name, email, profileImageUrl } = addedData[index];
//       return { name, email, profileImageUrl };
//     });

//     const newGroup: FormData = {
//       ...formData,
//       members: groupMembers,
//     };

//     setCreatedGroups((prevGroups) => [...prevGroups, newGroup]);

//     // Reset group creation fields
//     setFormData((prevData) => ({
//       ...prevData,
//       groupName: "",
//       groupProfileImage: null,
//       groupProfileImageUrl: "",
//       members: [],
//     }));
//     setSelectedMembers([]);
//   };

//   const handleGroupClick = (group: FormData) => {
//     setActiveGroup(group);
//   };

//   return (
//     <div
//       className="p-6  rounded-lg  w-full h-screen flex justify-center align-middle "
//       style={{
//         backgroundImage: `url("https://img.freepik.com/free-vector/blue-curve-frame-template-vector_53876-165851.jpg")`,
//         backgroundSize: "cover",
//         backgroundPosition: "centre",
//       }}
//     >
//       <div className=" space-x-6 mt-14  ">
//         {/* Contact */}
//         <div className="w-[700px] border border-cyan-400 p-8 rounded-lg bg-gray-50 justify-center align-middle">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">
//             Contact
//           </h2>
//           <div className="mb-5">
//             <Input
//               type="text"
//               label="Full Name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-5">
//             <Input
//               type="email"
//               label="  Email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-3"
//             />
//           </div>
//           <div className="mb-5">
//             <Input
//               type="text"
//               label="Phone Number"
//               id="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-5">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Profile Image
//             </label>
//             <input
//               type="file"
//               id="profileImage"
//               onChange={handleChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             />
//           </div>
//           <div className="flex space-x-4 mt-6">
//             <Button
//               className="bg-blue-500 text-white hover:bg-gray-600 font-bold"
//               onClick={handleReset}
//             >
//               Reset
//             </Button>
//             <Button
//               className="bg-cyan-500 text-white hover:bg-blue-600 font-bold"
//               onClick={handleAdd}
//             >
//               Add
//             </Button>
//           </div>
//           <div>
//             <h2 className="text-1xl font-semibold text-gray-900 mb-2 mt-5">
//               Contact Info
//             </h2>
//             {addedData.length > 0 ? (
//               <ul className="list-none space-y-4">
//                 {addedData.map((data, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center p-2 bg-white rounded shadow-sm"
//                   >
//                     {data.profileImageUrl && (
//                       <img
//                         src={data.profileImageUrl}
//                         alt={data.name}
//                         className="w-12 h-12 rounded-full mr-4"
//                       />
//                     )}
//                     <div>
//                       <span className="block font-semibold text-gray-800">
//                         {data.name}
//                       </span>
//                       <span className="block text-sm text-gray-600">
//                         {data.email}
//                       </span>
//                       <span className="block text-sm text-gray-600">
//                         {data.phoneNumber}
//                       </span>
//                       <span className="block text-sm text-gray-600">
//                         {data.groupName}
//                       </span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No data added yet</p>
//             )}
//           </div>
//         </div>
//       </div>
{
  /* Group Contact */
}
{
  /* <div className="w-1/2 border border-cyan-400 p-6 rounded-lg bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">
            Group Contact
          </h2>
          <Input
            type="text"
            label="Group Name"
            id="groupName"
            value={formData.groupName}
            onChange={handleChange}
          />
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Group Profile Image
            </label>
            <input
              type="file"
              id="groupProfileImage"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Select Group Members
            </h3>
            <ul className="list-none space-y-4">
              {addedData.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 bg-white rounded shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(index)}
                    onChange={() => handleSelectMember(index)}
                    className="mr-4"
                  />
                  {member.profileImageUrl && (
                    <img
                      src={member.profileImageUrl}
                      alt={member.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  )}
                  <div>
                    <span className="block font-semibold text-gray-800">
                      {member.name}
                    </span>
                    <span className="block text-sm text-gray-600">
                      {member.email}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <Button
              className="bg-cyan-500 text-white hover:bg-blue-600 font-bold"
              onClick={handleCreateGroup}
            >
              Create Group
            </Button>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Groups
            </h2>
            {createdGroups.length > 0 ? (
              <ul className="list-none space-y-4">
                {createdGroups.map((group, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 bg-white rounded shadow-sm cursor-pointer"
                    onClick={() => handleGroupClick(group)}
                  >
                    {group.groupProfileImageUrl && (
                      <img
                        src={group.groupProfileImageUrl}
                        alt={group.groupName}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <span className="block font-semibold text-gray-800">
                        {group.groupName}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {group.members.length} members
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No groups created yet</p>
            )}
          </div>
        </div>{" "} */
}

//       {activeGroup && (
//         <div className="mt-6">
//           <GroupChat group={activeGroup} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;
import React, { ChangeEvent, useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";

interface Member {
  name: string;
  email: string;
  profileImageUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  groupName: string;
  profileImage?: File | null;
  groupProfileImage?: File | null;
  profileImageUrl?: string;
  groupProfileImageUrl?: string;
  members: Member[];
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    groupName: "",
    profileImage: null,
    groupProfileImage: null,
    profileImageUrl: "",
    groupProfileImageUrl: "",
    members: [],
  });

  const [addedData, setAddedData] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setAddedData(JSON.parse(savedContacts));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    if (files) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        [id]: file,
        [`${id}Url`]: url,
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      groupName: "",
      profileImage: null,
      groupProfileImage: null,
      profileImageUrl: "",
      groupProfileImageUrl: "",
      members: [],
    });
    setEditIndex(null);
  };

  const handleAddOrEdit = () => {
    if (editIndex !== null) {
      const updatedData = [...addedData];
      updatedData[editIndex] = { ...formData, members: [] };
      setAddedData(updatedData);
      localStorage.setItem("contacts", JSON.stringify(updatedData));
    } else {
      setAddedData((prevData) => {
        const newData = [...prevData, { ...formData, members: [] }];
        localStorage.setItem("contacts", JSON.stringify(newData));
        return newData;
      });
    }
    handleReset();
  };

  const handleEdit = (index: number) => {
    const dataToEdit = addedData[index];
    setFormData(dataToEdit);
    setEditIndex(index);
  };

  return (
    <div className="p-6 rounded-lg w-full h-screen flex justify-center align-middle">
      <div className="space-x-6 mt-14">
        <div className="w-[700px] border border-cyan-400 p-8 rounded-lg bg-gray-50 justify-center align-middle">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
          <div className="mb-5">
            <Input
              type="text"
              label="Full Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              type="email"
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-3"
            />
          </div>
          <div className="mb-5">
            <Input
              type="text"
              label="Phone Number"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="flex space-x-4 mt-6">
            <Button
              className="bg-blue-500 text-white hover:bg-gray-600 font-bold"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              className="bg-cyan-500 text-white hover:bg-blue-600 font-bold"
              onClick={handleAddOrEdit}
            >
              {editIndex !== null ? "Update" : "Add"}
            </Button>
          </div>
          <div>
            <h2 className="text-1xl font-semibold text-gray-900 mb-2 mt-5">
              Contact Info
            </h2>
            {addedData.length > 0 ? (
              <ul className="list-none space-y-4">
                {addedData.map((data, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 bg-white rounded shadow-sm"
                  >
                    {data.profileImageUrl && (
                      <img
                        src={data.profileImageUrl}
                        alt={data.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <span className="block font-semibold text-gray-800">
                        {data.name}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {data.email}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {data.phoneNumber}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {data.groupName}
                      </span>
                    </div>
                    <div className="ml-auto space-x-2">
                      <Button
                        className="bg-yellow-500 text-white"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No data added yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
