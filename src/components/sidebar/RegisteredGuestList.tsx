"use client";
import { useEffect, useState } from "react";
import { Client, Databases, Models } from "appwrite";
import Image from "next/image";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("66bf025d002756389b03"); // Replace with your project ID

const databases = new Databases(client);
const databaseId = "66bf0296002ad4d9af1e"; // Replace with your database ID
const collectionId = "66bf02ab0034437add05"; // Replace with your collection ID

// Interface for Guest data including Appwrite document fields
interface Guest extends Models.Document {
  name: string;
  email: string;
  number: string;
  transportation: string;
  message: string;
  gender: string; // New field for gender
}

export function RegisteredGuestsList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        // Fetching documents with proper typing
        const response = await databases.listDocuments<Guest>(databaseId, collectionId);
        setGuests(response.documents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching guests:", error);
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[#FBFBFE] rounded-md p-2">
      <h1 className="font-bold py-1 ">Recently Registered Guests</h1>
      <ul className="">
        {guests.map((guest, index) => (
          <li
            key={guest.$id}
            className="p-1 text-sm flex items-center hover:bg-gray-100 cursor-pointer hover:rounded-lg"
          >
            {/* Conditionally render the avatar based on gender */}
            <Image
              src={guest.gender === "female" ? "/img/woman.png" : "/img/man.png"}
              alt={`${guest.gender} avatar`}
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
            <p>{guest.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
