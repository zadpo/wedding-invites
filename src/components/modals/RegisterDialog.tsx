"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Client, Databases } from "appwrite";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";

// Appwrite configuration
const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("66bf025d002756389b03");

const databases = new Databases(client);
const databaseId = "66bf0296002ad4d9af1e";
const collectionId = "66bf02ab0034437add05";

export function RegisterDialog() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [transportation, setTransportation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("status") === "success") {
      setIsSuccess(true);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await databases.createDocument(databaseId, collectionId, "unique()", {
        name,
        email,
        number,
        gender,
        transportation,
        message,
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-none">
          Register for the Wedding
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Image src="/img/cover.jpg" className="py-4" width={500} height={100} alt="cover" />
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Wedding Registration</DialogTitle>
        </DialogHeader>
        {isSuccess ? (
          <div className="flex flex-col items-center">
            <Image src="/img/success.png" alt="Success" width={40} height={40} />
            <p className="mt-4 text-center">Thank you for registering!</p>
          </div>
        ) : (
          <>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="number">Contact Number</Label>
            <PhoneInput
              id="number"
              name="number"
              placeholder="Enter phone number"
              value={number}
              onChange={(value) => setNumber(value || "")}
              defaultCountry="PH"
              className="input border rounded-sm p-2"
              required
            />
            <Label htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger id="gender" name="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label htmlFor="transportation">Transportation</Label>
            <Select onValueChange={(value) => setTransportation(value)}>
              <SelectTrigger id="transportation" name="transportation">
                <SelectValue placeholder="Select transportation" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="private">Private Car</SelectItem>
                  <SelectItem value="public">Public Transportation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <DialogFooter>
              <Button type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
